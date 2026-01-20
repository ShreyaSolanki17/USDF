'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category?: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export function PhotoGallery({ images, className }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", className)}>
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
            onClick={() => openLightbox(image, index)}
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-medium text-sm truncate">{image.title}</p>
                {image.category && (
                  <p className="text-white/70 text-xs">{image.category}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white font-semibold text-lg">{selectedImage.title}</p>
                {selectedImage.category && (
                  <p className="text-white/70 text-sm">{selectedImage.category}</p>
                )}
                <p className="text-white/50 text-xs mt-2">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-white/10 rounded-xl backdrop-blur-sm max-w-[90vw] overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                    setSelectedImage(image);
                  }}
                  className={cn(
                    "relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all",
                    index === currentIndex
                      ? "ring-2 ring-white scale-105"
                      : "opacity-50 hover:opacity-80"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Carousel variant of the gallery
interface PhotoCarouselProps {
  images: GalleryImage[];
  className?: string;
}

export function PhotoCarousel({ images, className }: PhotoCarouselProps) {
  const [index, setIndex] = useState(0);

  const goToPrevious = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const goToNext = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className={cn("relative overflow-hidden rounded-2xl", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-[16/9]"
        >
          <Image
            src={images[index].src}
            alt={images[index].title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-white font-semibold text-xl">{images[index].title}</p>
            {images[index].category && (
              <p className="text-white/70 text-sm">{images[index].category}</p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Progress Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/30 rounded-full backdrop-blur-sm">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 rounded-full transition-all",
              i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
            )}
          />
        ))}
      </div>
    </div>
  );
}

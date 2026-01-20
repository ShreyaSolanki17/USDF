"use client"

import Link from "next/link"
import { ArrowRight, Handshake, Building2, Globe, Award, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const partners = [
    {
        name: "General Mills",
        description: "One of the world's largest food companies, known for iconic brands and innovative products.",
        type: "Food & Beverage Giant",
        highlights: ["Process Optimization", "Quality Systems", "R&D Support"]
    },
    {
        name: "Paras/VRS Foods",
        description: "Leading Indian dairy products manufacturer with a strong focus on quality and innovation.",
        type: "Dairy Products",
        highlights: ["Manufacturing Excellence", "Product Development", "Technical Support"]
    },
    {
        name: "Vadilal Ice Cream",
        description: "One of India's largest ice cream and frozen desserts manufacturers with global presence.",
        type: "Frozen Desserts",
        highlights: ["Formulation Support", "Process Enhancement", "Quality Assurance"]
    },
    {
        name: "Amul",
        description: "India's largest dairy cooperative, known as the 'Taste of India' with products in millions of homes.",
        type: "Dairy Cooperative",
        highlights: ["Strategic Planning", "Technology Assessment", "Supply Chain"]
    },
    {
        name: "Flavi Dairy Solutions",
        description: "Innovative dairy solutions provider focused on flavoring and dairy ingredients.",
        type: "Dairy Ingredients",
        highlights: ["Ingredient Solutions", "Flavor Development", "Application Support"]
    }
]

const partnershipBenefits = [
    {
        icon: Globe,
        title: "Global Network",
        description: "Connect with industry leaders and expand your business reach"
    },
    {
        icon: Award,
        title: "Quality Standards",
        description: "Access to best practices and international quality benchmarks"
    },
    {
        icon: Building2,
        title: "Industry Expertise",
        description: "Benefit from decades of combined industry experience"
    },
    {
        icon: Handshake,
        title: "Strategic Support",
        description: "Long-term partnership focused on mutual growth"
    }
]

export default function CollaboratorsPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0 gradient-blue-light opacity-50" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            className="text-center max-w-3xl mx-auto"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                            }}
                        >
                            <motion.div variants={fadeInUp}>
                                <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                                    Our Partners
                                </Badge>
                            </motion.div>
                            <motion.h1 
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                                variants={fadeInUp}
                            >
                                Trusted by{" "}
                                <span className="text-gradient-blue">Industry Leaders</span>
                            </motion.h1>
                            <motion.p 
                                className="text-lg md:text-xl text-muted-foreground"
                                variants={fadeInUp}
                            >
                                We are proud to collaborate with some of the most respected 
                                names in the dairy and food industry, building partnerships 
                                that drive innovation and excellence.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Partners Logos Marquee */}
                <section className="py-12 bg-white border-y">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                            {partners.map((partner, i) => (
                                <motion.div
                                    key={partner.name}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 0.7 }}
                                    whileHover={{ opacity: 1, scale: 1.05 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center"
                                >
                                    <span className="text-2xl md:text-3xl font-bold text-muted-foreground/60 hover:text-primary transition-colors">
                                        {partner.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Partner Details */}
                <section className="py-20 bg-secondary/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="mb-4 bg-secondary text-primary border-0">Collaborations</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Our Valued <span className="text-gradient-blue">Collaborators</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Each partnership represents our commitment to excellence and innovation.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {partners.map((partner, i) => (
                                <motion.div
                                    key={partner.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card className="p-6 h-full bg-white hover:shadow-xl transition-all border-border/50 hover:border-primary/20 group">
                                        <div className="mb-4">
                                            <Badge variant="outline" className="text-xs">
                                                {partner.type}
                                            </Badge>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {partner.name}
                                        </h3>
                                        
                                        <p className="text-muted-foreground text-sm mb-4">
                                            {partner.description}
                                        </p>
                                        
                                        <div className="pt-4 border-t border-border/50">
                                            <p className="text-xs text-muted-foreground mb-2">Collaboration Areas:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {partner.highlights.map((highlight, j) => (
                                                    <span 
                                                        key={j}
                                                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                                                    >
                                                        {highlight}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Partnership Benefits */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Why Partner With Us</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Benefits of <span className="text-gradient-blue">Collaboration</span>
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {partnershipBenefits.map((benefit, i) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card className="p-6 text-center h-full hover:shadow-lg transition-all border-border/50 group">
                                        <div className="w-14 h-14 rounded-2xl gradient-blue flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                            <benefit.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Become a Partner CTA */}
                <section className="py-20 gradient-blue text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
                                <Handshake className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Become a Partner
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Join our network of industry leaders and let&apos;s collaborate 
                                to drive innovation and excellence in the dairy and food industry.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/contact">
                                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8">
                                        Partner With Us
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link href="/services">
                                    <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 h-14 px-8">
                                        View Our Capabilities
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

"use client"

import Link from "next/link"
import { ArrowRight, Award, Users, Target, Lightbulb, Eye, Rocket, Heart, CheckCircle2, Calendar, MapPin, GraduationCap, Images } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhotoGallery, type GalleryImage } from "@/components/ui/photo-gallery"
import { motion } from "framer-motion"

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const milestones = [
    {
        year: "2019",
        title: "Company Founded",
        description: "Dr. Hasmukh Patel establishes US Dairy & Foods Consulting LLC in Plymouth, MN."
    },
    {
        year: "2020",
        title: "Expanding Services",
        description: "Added comprehensive R&D and product development services to our portfolio."
    },
    {
        year: "2022",
        title: "Industry Recognition",
        description: "Partnered with major industry leaders including General Mills and Amul."
    },
    {
        year: "2024",
        title: "100+ Projects",
        description: "Reached milestone of over 100 successful projects delivered across 5 industry sectors."
    }
]

const teamValues = [
    {
        icon: Heart,
        title: "Passion",
        description: "Deep commitment to the dairy and food industry drives our work."
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Seamless teamwork ensuring comprehensive solutions for clients."
    },
    {
        icon: Target,
        title: "Precision",
        description: "Attention to detail in every project we undertake."
    },
    {
        icon: Rocket,
        title: "Innovation",
        description: "Constantly exploring new technologies and methodologies."
    }
]

// Gallery images from public/Images folder
const galleryImages: GalleryImage[] = [
    { id: 1, src: "/Images/190989b2-ddca-4056-b6c1-b5340a6582b8.jpg", title: "Dairy Processing Facility", category: "Facilities" },
    { id: 2, src: "/Images/1ab1ebb9-81cb-414a-bb11-461e481ccc1f.jpg", title: "Quality Control Lab", category: "Quality Assurance" },
    { id: 3, src: "/Images/2858f32f-408f-4bd6-96ab-922ff10418cf.jpg", title: "Production Line", category: "Manufacturing" },
    { id: 4, src: "/Images/298714ba-1d32-4f55-8650-9c00ddee05bd.jpg", title: "Product Development", category: "R&D" },
    { id: 5, src: "/Images/33096980-87cb-4b6b-b646-cd3f8ea7f0af.jpg", title: "Food Safety Inspection", category: "Compliance" },
    { id: 6, src: "/Images/35d3d88d-dcf3-4f27-9b46-3cd5f1dd0f76.jpg", title: "Client Consultation", category: "Services" },
    { id: 7, src: "/Images/45643cbb-391e-4aeb-a56d-359fb8390c61.jpg", title: "Equipment Installation", category: "Turn-Key Projects" },
    { id: 8, src: "/Images/461b8eab-342e-4419-9b0f-46b0f1ce29b3.jpg", title: "Team Training Session", category: "Technical Support" },
    { id: 9, src: "/Images/5323bb94-2eb8-4ead-85fa-0541843eeda3.jpg", title: "Dairy Plant Operations", category: "Operations" },
    { id: 10, src: "/Images/53690cc4-4537-4d66-a9d0-c9faaf0f8ab0.jpg", title: "Innovation Workshop", category: "R&D" },
    { id: 11, src: "/Images/6182b197-e091-47f3-99a2-437987fa889f.jpg", title: "Industry Conference", category: "Events" },
    { id: 12, src: "/Images/86e1346b-8ff6-480b-983b-18e289f31e11.jpg", title: "Modern Processing Technology", category: "Technology" },
]

export default function AboutPage() {
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
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp}>
                                <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                                    About USDF
                                </Badge>
                            </motion.div>
                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                                variants={fadeInUp}
                            >
                                Empowering the{" "}
                                <span className="text-gradient-blue">Dairy & Food</span> Industry
                            </motion.h1>
                            <motion.p
                                className="text-lg md:text-xl text-muted-foreground"
                                variants={fadeInUp}
                            >
                                US Dairy & Foods Consulting LLC operates at the intersection of science, technology, and
                                business. We are an independent, execution-focused firm providing strategic advisory, technical
                                due diligence, and hands-on leadership for complex innovation and transformation initiatives.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Founder Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative">
                                    {/* Placeholder for founder image */}
                                    <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                                        <div className="text-center p-8">
                                            <div className="w-32 h-32 mx-auto rounded-full gradient-blue flex items-center justify-center mb-6">
                                                <GraduationCap className="w-16 h-16 text-white" />
                                            </div>
                                            <p className="text-lg font-semibold text-primary">Dr. Hasmukh Patel</p>
                                            <p className="text-muted-foreground">Founder & President | Global Dairy & Food Industry Leader</p>
                                        </div>
                                    </div>

                                    {/* Floating badge */}
                                    <motion.div
                                        className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border"
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                                <Award className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-bold">20+ Years</p>
                                                <p className="text-xs text-muted-foreground">International Experience</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <Badge className="mb-4 bg-secondary text-primary border-0">Meet Our Founder</Badge>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Dr. Hasmukh Patel, Ph.D.
                                </h2>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Dr. Hasmukh Patel is a globally recognized dairy and food science leader with over 20 years of
                                    international experience across the USA, New Zealand, Europe, China, and India. He holds a
                                    Ph.D. in Food Technology from Massey University (New Zealand) and advanced degrees in
                                    Dairy Science and Technology.
                                </p>
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    Dr. Patel currently serves as Chief Science & Innovation Officer at Nutracom LLC and is the
                                    Founder and President of US Dairy & Foods Consulting LLC. His prior leadership roles include
                                    Senior Director of Global R&D at Mengniu Dairy Group (China), Vice President of R&D at
                                    Whitehall Specialties (now Ornua), and Technical Director & R&D Fellow at Land O’Lakes,
                                    Inc. Earlier in his career, he served as faculty at South Dakota State University and spent more
                                    than a decade at Fonterra Research & Development Centre in New Zealand.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <h3 className="font-semibold text-primary">Credentials & Global Recognition</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            Inventor / co-inventor of 10+ patents and proprietary technologies
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            Author of 100+ peer-reviewed publications, book chapters, and invited presentations
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            Recipient of multiple international awards in dairy and food science
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            Expert advisor to FAO/WHO on protein quality and global nutrition initiatives
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        Plymouth, MN, USA
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="w-4 h-4 text-primary" />
                                        Founded 2019
                                    </div>
                                </div>

                                <Link href="/contact">
                                    <Button className="gradient-blue text-white">
                                        Connect with Dr. Patel
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-20 bg-secondary/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-8 h-full bg-white border-border/50 hover:shadow-xl transition-shadow">
                                    <div className="w-14 h-14 rounded-2xl gradient-blue flex items-center justify-center mb-6">
                                        <Eye className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        To be the leading consulting firm that empowers dairy and food
                                        businesses with cutting-edge solutions, fostering innovation,
                                        sustainability, and excellence in the industry.
                                    </p>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <Card className="p-8 h-full bg-white border-border/50 hover:shadow-xl transition-shadow">
                                    <div className="w-14 h-14 rounded-2xl gradient-blue flex items-center justify-center mb-6">
                                        <Rocket className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We strive to deliver strategic insights and customized solutions
                                        that enhance food safety, quality, and efficiency, ensuring long-term
                                        success for our clients in the ever-evolving food and dairy sector.
                                    </p>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Team Philosophy */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Philosophy</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Our Strength, <span className="text-gradient-blue">Our Teamwork</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Seamless collaboration and shared values drive excellence in every project we undertake.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {teamValues.map((value, i) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card className="p-6 text-center h-full hover:shadow-lg transition-all border-border/50 hover:border-primary/20 group">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                                            <value.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="font-bold mb-2">{value.title}</h3>
                                        <p className="text-sm text-muted-foreground">{value.description}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Photo Gallery Section */}
                <section className="py-20 bg-secondary/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                                <Images className="w-3.5 h-3.5 mr-2" />
                                Our Work
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Project <span className="text-gradient-blue">Gallery</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                A glimpse into our facilities, projects, and the excellence we bring to the dairy and food industry.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <PhotoGallery images={galleryImages} />
                        </motion.div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="mb-4 bg-secondary text-primary border-0">Our Journey</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Milestones & <span className="text-gradient-blue">Growth</span>
                            </h2>
                        </motion.div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

                            <div className="space-y-8">
                                {milestones.map((milestone, i) => (
                                    <motion.div
                                        key={milestone.year}
                                        className="relative flex gap-6"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="hidden md:flex w-16 h-16 rounded-full gradient-blue items-center justify-center text-white font-bold flex-shrink-0 z-10">
                                            {milestone.year}
                                        </div>
                                        <Card className="flex-1 p-6 bg-white">
                                            <span className="md:hidden text-sm font-bold text-primary mb-2 block">
                                                {milestone.year}
                                            </span>
                                            <h3 className="font-bold text-lg mb-2">{milestone.title}</h3>
                                            <p className="text-muted-foreground">{milestone.description}</p>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 gradient-blue text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Work with Industry Experts?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Partner with USDF and transform your dairy or food business
                                with our proven expertise and dedication to excellence.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/contact">
                                    <Button size="lg" className="bg-white text-primary hover:bg-blue-50 h-14 px-8 transition-colors">
                                        Get in Touch
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link href="/services">
                                    <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white h-14 px-8 transition-colors">
                                        View Our Services
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

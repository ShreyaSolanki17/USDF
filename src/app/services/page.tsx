"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, TrendingUp, Shield, Factory, Beaker, Lightbulb, Wrench, Building, CheckCircle2, Phone } from "lucide-react"
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

const services = [
    {
        id: "innovation-strategy",
        icon: Lightbulb,
        title: "Innovation & R&D Strategy",
        shortDesc: "Strategic roadmaps and organizational design",
        description: "Comprehensive innovation strategy to align R&D with business growth and market opportunities.",
        features: [
            "Enterprise innovation roadmaps and portfolio prioritization",
            "R&D organization design and capability development",
            "Stage-gate, governance, and commercialization frameworks",
            "Board-level science and technology advisory"
        ]
    },
    {
        id: "product-development",
        icon: Beaker,
        title: "Ingredient, Product & Process Development",
        shortDesc: "From formulation to scale-up",
        description: "End-to-end development services for dairy and food ingredients, from concept to commercialization.",
        features: [
            "Dairy and food ingredient development and applications",
            "Nutrition, sports, medical, and functional food systems",
            "Product renovation, reformulation, and clean-label strategies",
            "Process optimization, scale-up, and technology transfer"
        ]
    },
    {
        id: "technology-assessment",
        icon: Factory,
        title: "Technology Assessment & Implementation",
        shortDesc: "Emerging tech and capital projects",
        description: "Evaluation and implementation of advanced processing technologies to drive operational excellence.",
        features: [
            "Evaluation of emerging and disruptive technologies",
            "Advanced processing: membrane filtration, HPP, extrusion, fermentation",
            "Capital project and equipment selection support",
            "Supplier, partner, and technology due diligence"
        ]
    },
    {
        id: "business-advisory",
        icon: TrendingUp,
        title: "Business, Board & Investor Advisory",
        shortDesc: "Due diligence and strategic partnerships",
        description: "Expert advisory services for investors, boards, and executive teams navigating the food sector.",
        features: [
            "Technical due diligence for M&A, joint ventures, and investments",
            "Independent board and executive advisory",
            "Strategic partnerships and supplier negotiations"
        ]
    }
]

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 overflow-hidden bg-black">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/Images/services-hero-bg.png"
                            alt="Dairy facility background"
                            fill
                            className="object-cover opacity-40"
                            priority
                        />
                    </div>
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
                                <Badge className="mb-6 bg-white/10 text-white border-white/20">
                                    Our Services
                                </Badge>
                            </motion.div>
                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
                                variants={fadeInUp}
                            >
                                Comprehensive{" "}
                                <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">Consulting Services</span>
                            </motion.h1>
                            <motion.p
                                className="text-lg md:text-xl text-blue-100"
                                variants={fadeInUp}
                            >
                                Tailored solutions designed to meet the unique needs of the
                                dairy and food industry, driving growth and operational excellence.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-16">
                            {services.map((service, i) => (
                                <motion.div
                                    key={service.id}
                                    id={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="scroll-mt-24"
                                >
                                    <Card className={`p-8 lg:p-12 border-border/50 hover:shadow-xl transition-all ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-8 lg:gap-12 items-center`}>
                                        <div className="lg:w-1/3 flex justify-center">
                                            <div className="w-32 h-32 rounded-3xl gradient-blue flex items-center justify-center shadow-lg">
                                                <service.icon className="w-16 h-16 text-white" />
                                            </div>
                                        </div>

                                        <div className="lg:w-2/3">
                                            <Badge className="mb-4 bg-secondary text-primary border-0">
                                                Service {String(i + 1).padStart(2, '0')}
                                            </Badge>
                                            <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                                            <p className="text-muted-foreground mb-6 text-lg">
                                                {service.description}
                                            </p>

                                            <div className="grid sm:grid-cols-2 gap-3 mb-6">
                                                {service.features.map((feature, j) => (
                                                    <div key={j} className="flex items-start gap-2">
                                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <span className="text-sm text-muted-foreground">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <Link href="/contact">
                                                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                                                    Inquire About This Service
                                                    <ArrowRight className="ml-2 w-4 h-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-secondary/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">How We Work</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Our <span className="text-gradient-blue">Consulting Process</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                A structured approach to delivering exceptional results for your business.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { step: "01", title: "Discovery", desc: "Understanding your unique challenges and goals" },
                                { step: "02", title: "Analysis", desc: "Comprehensive assessment of current operations" },
                                { step: "03", title: "Strategy", desc: "Developing customized solutions and roadmap" },
                                { step: "04", title: "Implementation", desc: "Executing plans with ongoing support" }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card className="p-6 h-full bg-white text-center hover:shadow-lg transition-all border-border/50 relative overflow-hidden group">
                                        <div className="absolute -top-4 -right-4 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                                            {item.step}
                                        </div>
                                        <div className="relative z-10">
                                            <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center mx-auto mb-4 text-white font-bold">
                                                {item.step}
                                            </div>
                                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
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
                                Need a Custom Solution?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Every business is unique. Let&apos;s discuss how we can tailor our
                                services to meet your specific needs and challenges.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                                <Link href="/contact">
                                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8">
                                        Schedule a Consultation
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <div className="flex items-center gap-2 text-blue-100">
                                    <Phone className="w-5 h-5" />
                                    <span className="font-medium">+1-605-690-6080</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

"use client"

import Link from "next/link"
import { ArrowRight, UtensilsCrossed, ShoppingCart, Milk, Leaf, Cog, CheckCircle2, Factory, Beaker } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const industries = [
    {
        id: "food-beverage",
        icon: UtensilsCrossed,
        title: "Food & Beverage Industry",
        shortTitle: "Food & Beverage",
        description: "Comprehensive solutions for food and beverage manufacturers focusing on process optimization, safety standards, and market competitiveness.",
        image: "/api/placeholder/600/400",
        features: [
            "Process optimization and efficiency improvement",
            "Food safety and HACCP compliance",
            "Quality management systems",
            "Supply chain optimization",
            "Regulatory compliance assistance"
        ],
        stats: [
            { value: "30+", label: "F&B Projects" },
            { value: "98%", label: "Client Satisfaction" }
        ]
    },
    {
        id: "fmcg",
        icon: ShoppingCart,
        title: "FMCG (Fast-Moving Consumer Goods)",
        shortTitle: "FMCG",
        description: "Helping FMCG companies optimize their supply chain, improve speed-to-market, and enhance operational efficiency.",
        image: "/api/placeholder/600/400",
        features: [
            "Supply chain optimization",
            "Speed-to-market strategies",
            "Operational efficiency enhancement",
            "Cost reduction programs",
            "Distribution network optimization"
        ],
        stats: [
            { value: "25+", label: "FMCG Clients" },
            { value: "40%", label: "Avg. Efficiency Gain" }
        ]
    },
    {
        id: "dairy",
        icon: Milk,
        title: "Dairy Products & Ingredients",
        shortTitle: "Dairy",
        description: "Specialized expertise in dairy processing, from milk and cheese manufacturing to advanced dairy ingredients.",
        image: "/api/placeholder/600/400",
        features: [
            "Cheese and milk product manufacturing",
            "Dairy ingredient processing",
            "Quality assurance systems",
            "Sustainability practices",
            "Equipment optimization"
        ],
        stats: [
            { value: "50+", label: "Dairy Projects" },
            { value: "20+", label: "Years Experience" }
        ]
    },
    {
        id: "food-ingredients",
        icon: Leaf,
        title: "Food Products & Ingredients",
        shortTitle: "Food Ingredients",
        description: "Supporting food ingredient manufacturers with clean-label solutions, plant-based innovations, and functional ingredients.",
        image: "/api/placeholder/600/400",
        features: [
            "Clean-label product development",
            "Plant-based ingredient solutions",
            "Functional ingredient applications",
            "Formulation optimization",
            "Nutritional enhancement"
        ],
        stats: [
            { value: "35+", label: "Ingredient Projects" },
            { value: "15+", label: "New Formulations" }
        ]
    },
    {
        id: "processing-tech",
        icon: Cog,
        title: "New Processing Technologies",
        shortTitle: "Processing Tech",
        description: "Implementing cutting-edge processing technologies including HPP, automation, and sustainable packaging solutions.",
        image: "/api/placeholder/600/400",
        features: [
            "High-pressure processing (HPP)",
            "Automation and Industry 4.0",
            "Sustainable packaging solutions",
            "Energy efficiency improvements",
            "Waste reduction strategies"
        ],
        stats: [
            { value: "20+", label: "Tech Implementations" },
            { value: "35%", label: "Energy Savings" }
        ]
    }
]

export default function IndustryPage() {
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
                                    Industry Sectors
                                </Badge>
                            </motion.div>
                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                                variants={fadeInUp}
                            >
                                Expertise Across{" "}
                                <span className="text-gradient-blue">Industry Sectors</span>
                            </motion.h1>
                            <motion.p
                                className="text-lg md:text-xl text-muted-foreground"
                                variants={fadeInUp}
                            >
                                Deep industry knowledge and specialized solutions for every
                                segment of the food and dairy value chain.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Industry Overview Cards */}
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {industries.map((industry, i) => (
                                <motion.a
                                    key={industry.id}
                                    href={`#${industry.id}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card className="p-4 text-center h-full hover:shadow-lg transition-all border-border/50 hover:border-primary/30 cursor-pointer group">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors">
                                            <industry.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="font-semibold text-sm">{industry.shortTitle}</h3>
                                    </Card>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Detailed Industry Sections */}
                <section className="py-20 bg-secondary/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-20">
                            {industries.map((industry, i) => (
                                <motion.div
                                    key={industry.id}
                                    id={industry.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="scroll-mt-24"
                                >
                                    <Card className="overflow-hidden bg-white border-border/50">
                                        <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                            {/* Content Side */}
                                            <div className={`p-8 lg:p-12 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                                <Badge className="mb-4 bg-secondary text-primary border-0">
                                                    Sector {String(i + 1).padStart(2, '0')}
                                                </Badge>
                                                <h2 className="text-2xl md:text-3xl font-bold mb-4">{industry.title}</h2>
                                                <p className="text-muted-foreground mb-6">{industry.description}</p>

                                                {/* Features */}
                                                <div className="space-y-3 mb-8">
                                                    {industry.features.map((feature, j) => (
                                                        <div key={j} className="flex items-start gap-3">
                                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                            <span className="text-sm text-muted-foreground">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Stats */}
                                                <div className="flex gap-8 mb-6">
                                                    {industry.stats.map((stat, j) => (
                                                        <div key={j}>
                                                            <div className="text-2xl font-bold text-primary">{stat.value}</div>
                                                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <Link href="/contact">
                                                    <Button className="gradient-blue text-white">
                                                        Discuss Your Project
                                                        <ArrowRight className="ml-2 w-4 h-4" />
                                                    </Button>
                                                </Link>
                                            </div>

                                            {/* Visual Side */}
                                            <div className={`bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12 flex items-center justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                                                <div className="relative">
                                                    <div className="w-48 h-48 rounded-3xl gradient-blue flex items-center justify-center shadow-2xl">
                                                        <industry.icon className="w-24 h-24 text-white" />
                                                    </div>
                                                    {/* Floating elements */}
                                                    <motion.div
                                                        className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center"
                                                        animate={{ y: [0, -10, 0] }}
                                                        transition={{ duration: 3, repeat: Infinity }}
                                                    >
                                                        <Factory className="w-8 h-8 text-primary" />
                                                    </motion.div>
                                                    <motion.div
                                                        className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center"
                                                        animate={{ y: [0, 10, 0] }}
                                                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                                    >
                                                        <Beaker className="w-8 h-8 text-accent" />
                                                    </motion.div>
                                                </div>
                                            </div>
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
                                Which Industry Are You In?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                No matter your sector, we have the expertise to help you
                                achieve operational excellence and sustainable growth.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/contact">
                                    <Button size="lg" className="bg-white text-primary hover:bg-blue-50 h-14 px-8 transition-colors">
                                        Let&apos;s Discuss Your Needs
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link href="/services">
                                    <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white h-14 px-8">
                                        Explore Our Services
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

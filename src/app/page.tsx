"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, Users, Target, Lightbulb, Shield, Beaker, Factory, Wrench, TrendingUp, CheckCircle2, Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { TestimonialsSection } from "@/components/devComponents/testimonials-with-marquee"
import { FocusRail, FocusRailItem } from "@/components/focus-rail"

// Collaborator logos
const collaborators = [
    { name: "General Mills", logo: "/logos/general-mills.jpg" },
    { name: "Amul", logo: "/logos/amul.jpg" },
    { name: "Vadilal Ice Cream", logo: "/logos/vadilal.jpg" },
    { name: "Paras/VRS Foods", logo: "/logos/paras.jpg" },
    { name: "Flavi Dairy Solutions", logo: "/logos/flavi-dairy.jpg" },
    { name: "Everest", logo: "/logos/everest-v2.jpg" },
    { name: "Continental Milkose (India) Ltd.", logo: "/logos/milkose-v2.png" },
    { name: "Whitehall Specialties", logo: "/logos/whitehall-v2.jpg" },
    { name: "PetAg", logo: "/logos/petag-v2.jpg" },
    { name: "Abali", logo: "/logos/abali-v2.png" }
]

// Core values
const coreValues = [
    {
        icon: Award,
        title: "Experience",
        description: "Bringing extensive industry experience to enhance performance and drive sustainable growth in the dairy and food sector."
    },
    {
        icon: Target,
        title: "Expertise",
        description: "Leveraging diverse expertise across multiple domains to meet your unique business needs and challenges."
    },
    {
        icon: Lightbulb,
        title: "Excellence",
        description: "Implementing advanced solutions and best practices for superior manufacturing processes and outcomes."
    }
]

// Services preview
const services = [
    {
        icon: Lightbulb,
        title: "Innovation & R&D Strategy",
        description: "Enterprise innovation roadmaps, portfolio prioritization, and R&D organization design.",
        href: "/services#innovation-strategy"
    },
    {
        icon: Beaker,
        title: "Ingredient & Product Development",
        description: "From concept to commercialization: formulation, scale-up, and clean-label strategies.",
        href: "/services#product-development"
    },
    {
        icon: Factory,
        title: "Technology Assessment",
        description: "Evaluation of emerging technologies, advanced processing, and capital project support.",
        href: "/services#technology-assessment"
    },
    {
        icon: TrendingUp,
        title: "Business & Board Advisory",
        description: "Technical due diligence, M&A support, and strategic partnership negotiations.",
        href: "/services#business-advisory"
    }
]

// Stats
const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "4+", label: "Categories" },
    { value: "50+", label: "Happy Clients" },
    { value: "5", label: "Industry Sectors" }
]

// Focus Rail Items - Showcase
const focusRailItems: FocusRailItem[] = [
    {
        id: 1,
        title: "Dairy Processing Excellence",
        description: "State-of-the-art dairy processing facilities and equipment optimization.",
        imageSrc: "/Images/dairy-processing-excellence.png",
        href: "/services#technology-assessment",
        meta: "Manufacturing"
    },
    {
        id: 2,
        title: "Quality Assurance",
        description: "Rigorous quality control processes ensuring the highest standards.",
        imageSrc: "/Images/usdf-qa-v2.png",
        href: "/services#product-development",
        meta: "Quality Control"
    },
    {
        id: 3,
        title: "Research & Development",
        description: "Innovative R&D solutions driving product excellence and market growth.",
        imageSrc: "/Images/usdf-rd-v3.png",
        href: "/services#innovation-strategy",
        meta: "Innovation"
    },
    {
        id: 4,
        title: "Food Safety Compliance",
        description: "Comprehensive food safety programs meeting global regulatory standards.",
        imageSrc: "/Images/usdf-food-safety.png",
        href: "/services#product-development",
        meta: "Compliance"
    },
    {
        id: 5,
        title: "Product Development",
        description: "From concept to commercialization - bringing your ideas to market.",
        imageSrc: "/Images/product-development.png",
        href: "/services#product-development",
        meta: "Development"
    }
]

// Testimonials
const testimonials = [
    {
        author: {
            name: "Rajesh Kumar",
            handle: "General Mills",
            avatar: "https://i.pravatar.cc/150?img=11"
        },
        text: "USDF's expertise in dairy processing helped us optimize our production line, resulting in 30% efficiency improvement. Their team is professional and knowledgeable."
    },
    {
        author: {
            name: "Priya Sharma",
            handle: "Vadilal Ice Cream",
            avatar: "https://i.pravatar.cc/150?img=5"
        },
        text: "Working with Dr. Patel and his team was transformative for our R&D department. Their insights into new product development are invaluable."
    },
    {
        author: {
            name: "Michael Anderson",
            handle: "Food Processing Industry",
            avatar: "https://i.pravatar.cc/150?img=12"
        },
        text: "The strategic planning services provided by USDF helped us navigate complex regulatory requirements seamlessly. Highly recommended!"
    },
    {
        author: {
            name: "Amit Patel",
            handle: "Dairy Manufacturer",
            avatar: "https://i.pravatar.cc/150?img=8"
        },
        text: "USDF delivered a turn-key project that exceeded our expectations. From facility design to equipment selection, everything was handled professionally."
    },
    {
        author: {
            name: "Sarah Johnson",
            handle: "FMCG Company",
            avatar: "https://i.pravatar.cc/150?img=9"
        },
        text: "Their technology assessment services identified critical areas for automation that we had overlooked. This has been a game-changer for our operations."
    }
]

// Animation variants
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

export default function Home() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow">
                {/* --- HERO SECTION --- */}
                <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 gradient-blue-light opacity-50" />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b5998' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}
                    />

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            {/* Content */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={staggerContainer}
                            >
                                <motion.div variants={fadeInUp}>
                                    <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-4 py-1.5">
                                        <Award className="w-3.5 h-3.5 mr-2" />
                                        Trusted Advisor | Proven Innovator | Global Execution Partner
                                    </Badge>
                                </motion.div>

                                <motion.h1
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                                    variants={fadeInUp}
                                >
                                    Science-Led{" "}
                                    <span className="text-gradient-blue">Innovation.</span><br />
                                    Commercially Executed.
                                </motion.h1>

                                <motion.p
                                    className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
                                    variants={fadeInUp}
                                >
                                    Helping dairy, food, beverage, and nutrition companies achieve sustainable growth
                                    through innovation, technology, and strategy. We help translate science into scalable, profitable solutions.
                                </motion.p>

                                <motion.div
                                    className="flex flex-col sm:flex-row gap-4"
                                    variants={fadeInUp}
                                >
                                    <a
                                        href="mailto:hpatel@usdf.com"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = 'mailto:hpatel@usdf.com';
                                        }}
                                    >
                                        <Button size="lg" className="gradient-blue text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all h-14 px-8 text-base">
                                            Contact Now
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </a>
                                    <Link href="/services">
                                        <Button size="lg" variant="outline" className="border-2 h-14 px-8 text-base hover:bg-secondary">
                                            Explore Services
                                        </Button>
                                    </Link>
                                </motion.div>
                            </motion.div>


                            {/* Hero Visual */}
                            <motion.div
                                className="relative hidden lg:block"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <motion.div
                                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                                    animate={{
                                        y: [0, -15, 0],
                                        scale: [1, 1.02, 1]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    {/* Animated gradient overlays */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-cyan-500/30"
                                        animate={{
                                            opacity: [0.3, 0.6, 0.3]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                    <Image
                                        src="/Images/hero-three-services.png"
                                        alt="Dairy Processing Excellence, Food Safety Compliance, and Product Innovation services"
                                        width={600}
                                        height={600}
                                        className="object-cover w-full h-auto relative z-10"
                                        priority
                                    />
                                    {/* Shimmer effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        animate={{
                                            x: ['-100%', '200%']
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear",
                                            repeatDelay: 2
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 pointer-events-none" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* --- TRUSTED BY --- */}
                <section className="py-12 border-y bg-white overflow-hidden">
                    <div className="w-full">
                        <p className="text-center text-sm font-semibold text-muted-foreground tracking-wide uppercase mb-10">
                            Trusted by Industry Leaders
                        </p>
                        <div className="relative w-full">
                            <div className="flex w-max animate-scroll hover:pause items-center">
                                {/* Duplicate list for smooth infinite scroll */}
                                {[...collaborators, ...collaborators].map((company, i) => (
                                    <Card
                                        key={`${company.name}-${i}`}
                                        className="flex flex-col items-center justify-center p-4 mx-4 w-[200px] h-[130px] flex-shrink-0 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group cursor-pointer rounded-xl"
                                    >
                                        <div className="relative h-14 w-32 mb-3 transition-all opacity-90 group-hover:opacity-100 group-hover:scale-105 duration-300">
                                            <Image
                                                src={company.logo}
                                                alt={`${company.name} logo`}
                                                fill
                                                className="object-contain mix-blend-multiply"
                                            />
                                        </div>
                                        <p className="text-xs font-extrabold text-[#1e3a5f] uppercase tracking-wide text-center leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                            {company.name}
                                        </p>
                                    </Card>
                                ))}
                            </div>
                            {/* Gradient Fade Edges */}
                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                        </div>
                    </div>
                </section>

                {/* --- FOCUS RAIL SHOWCASE --- */}
                <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Expertise</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Explore Our <span className="text-gradient-blue">Capabilities</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Discover how we transform dairy and food operations with cutting-edge solutions.
                            </p>
                        </motion.div>
                    </div>
                    <FocusRail
                        items={focusRailItems}
                        autoPlay={true}
                        interval={5000}
                        loop={true}
                        theme="light"
                    />
                </section>

                {/* --- CORE VALUES --- */}
                <section className="py-24 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="mb-4 bg-secondary text-primary border-0">Our Foundation</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Built on Strong <span className="text-gradient-blue">Values</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Our core values drive everything we do, ensuring exceptional results for every client.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {coreValues.map((value, i) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 group">
                                        <div className="w-14 h-14 rounded-2xl gradient-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <value.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SERVICES PREVIEW --- */}
                <section className="py-24 bg-secondary/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">What We Offer</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Comprehensive <span className="text-gradient-blue">Consulting Services</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Tailored solutions to meet the unique needs of the dairy and food industry.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, i) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link href={service.href}>
                                        <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 group cursor-pointer bg-white">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                                    <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                                                        {service.title}
                                                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">{service.description}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="text-center mt-12"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/services">
                                <Button size="lg" variant="outline" className="border-2">
                                    View All Services
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* --- STATS --- */}
                <section className="gradient-blue text-white py-20 relative overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}
                    />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group"
                                >
                                    <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                                        {stat.value}
                                    </div>
                                    <div className="text-blue-200 font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- TESTIMONIALS --- */}
                <TestimonialsSection
                    title="What Our Clients Say"
                    description="Hear from industry leaders who have transformed their businesses with USDF consulting."
                    testimonials={testimonials}
                />

                {/* --- CTA --- */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 gradient-blue-light" />
                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
                                <Award className="w-3.5 h-3.5 mr-2" />
                                Unlock Your Business Potential
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Ready to Transform Your <span className="text-gradient-blue">Business?</span>
                            </h2>
                            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                                Join the successful businesses that trust USDF for their dairy and food consulting needs.
                                Let&apos;s discuss how we can help you achieve excellence.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/contact">
                                    <Button size="lg" className="gradient-blue text-white hover:opacity-90 shadow-xl hover:shadow-2xl transition-all h-14 px-10 text-lg">
                                        Schedule a Consultation
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link href="/about">
                                    <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-2">
                                        Learn About Us
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div >
    )
}

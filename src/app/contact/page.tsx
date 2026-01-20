"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        value: "+1-605-690-6080",
        href: "tel:+16056906080",
        description: "Call us during business hours"
    },
    {
        icon: Mail,
        title: "Email",
        value: "usdfconsulting@gmail.com",
        href: "mailto:usdfconsulting@gmail.com",
        description: "We'll respond within 24 hours"
    },
    {
        icon: MapPin,
        title: "Address",
        value: "5605 Weston Ln N, Plymouth, MN 55446, USA",
        href: "https://maps.google.com/?q=5605+Weston+Ln+N+Plymouth+MN+55446",
        description: "Visit our office"
    },
    {
        icon: Clock,
        title: "Business Hours",
        value: "Mon - Fri: 9:00 AM - 6:00 PM CST",
        href: null,
        description: "Central Standard Time"
    }
]

const subjects = [
    "General Inquiry",
    "Strategic Planning",
    "Technology Assessment",
    "Manufacturing Consulting",
    "R&D Support",
    "Product Development",
    "Turn-Key Projects",
    "Technical Support",
    "Partnership Opportunity",
    "Other"
]

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-28 overflow-hidden">
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
                                    Get In Touch
                                </Badge>
                            </motion.div>
                            <motion.h1 
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                                variants={fadeInUp}
                            >
                                Let&apos;s Start a{" "}
                                <span className="text-gradient-blue">Conversation</span>
                            </motion.h1>
                            <motion.p 
                                className="text-lg md:text-xl text-muted-foreground"
                                variants={fadeInUp}
                            >
                                Ready to transform your dairy or food business? 
                                Reach out to us and let&apos;s discuss how we can help you achieve excellence.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {contactInfo.map((info, i) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {info.href ? (
                                        <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                                            <Card className="p-6 h-full hover:shadow-lg transition-all border-border/50 hover:border-primary/30 cursor-pointer group">
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                                                    <info.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                                </div>
                                                <h3 className="font-bold mb-1">{info.title}</h3>
                                                <p className="text-primary font-medium text-sm mb-1">{info.value}</p>
                                                <p className="text-xs text-muted-foreground">{info.description}</p>
                                            </Card>
                                        </a>
                                    ) : (
                                        <Card className="p-6 h-full border-border/50">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                                <info.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <h3 className="font-bold mb-1">{info.title}</h3>
                                            <p className="text-primary font-medium text-sm mb-1">{info.value}</p>
                                            <p className="text-xs text-muted-foreground">{info.description}</p>
                                        </Card>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form & Map */}
                <section className="py-20 bg-secondary/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-8 bg-white border-border/50">
                                    <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                                    <p className="text-muted-foreground mb-8">
                                        Fill out the form below and we&apos;ll get back to you as soon as possible.
                                    </p>

                                    {isSubmitted ? (
                                        <motion.div
                                            className="text-center py-12"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                        >
                                            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle2 className="w-10 h-10 text-green-600" />
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                                            <p className="text-muted-foreground mb-6">
                                                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                                            </p>
                                            <Button 
                                                variant="outline"
                                                onClick={() => {
                                                    setIsSubmitted(false)
                                                    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
                                                }}
                                            >
                                                Send Another Message
                                            </Button>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Your Name *</Label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="John Doe"
                                                        required
                                                        className="h-12"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Your Email *</Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="john@company.com"
                                                        required
                                                        className="h-12"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Phone Number</Label>
                                                    <Input
                                                        id="phone"
                                                        name="phone"
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="+1 (555) 000-0000"
                                                        className="h-12"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="subject">Subject *</Label>
                                                    <select
                                                        id="subject"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                                    >
                                                        <option value="">Select a subject</option>
                                                        {subjects.map((subject) => (
                                                            <option key={subject} value={subject}>
                                                                {subject}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message">Your Message *</Label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Tell us about your project or inquiry..."
                                                    required
                                                    rows={5}
                                                    className="resize-none"
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                className="w-full gradient-blue text-white h-14 text-base"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send className="ml-2 w-5 h-5" />
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    )}
                                </Card>
                            </motion.div>

                            {/* Map & Additional Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                {/* Map Placeholder */}
                                <Card className="overflow-hidden border-border/50">
                                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="w-20 h-20 rounded-full gradient-blue flex items-center justify-center mx-auto mb-4">
                                                <MapPin className="w-10 h-10 text-white" />
                                            </div>
                                            <h3 className="font-bold text-lg mb-2">Visit Our Office</h3>
                                            <p className="text-muted-foreground text-sm mb-4">
                                                5605 Weston Ln N<br />
                                                Plymouth, MN 55446, USA
                                            </p>
                                            <a 
                                                href="https://maps.google.com/?q=5605+Weston+Ln+N+Plymouth+MN+55446" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="outline" size="sm">
                                                    Get Directions
                                                    <ArrowRight className="ml-2 w-4 h-4" />
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </Card>

                                {/* Quick Contact */}
                                <Card className="p-6 bg-white border-border/50">
                                    <h3 className="font-bold mb-4">Quick Contact</h3>
                                    <div className="space-y-4">
                                        <a 
                                            href="tel:+16056906080" 
                                            className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <Phone className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-medium">Call Us</p>
                                                <p className="text-sm text-muted-foreground">+1-605-690-6080</p>
                                            </div>
                                        </a>
                                        <a 
                                            href="mailto:usdfconsulting@gmail.com" 
                                            className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <Mail className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-medium">Email Us</p>
                                                <p className="text-sm text-muted-foreground">usdfconsulting@gmail.com</p>
                                            </div>
                                        </a>
                                    </div>
                                </Card>

                                {/* Why Contact Us */}
                                <Card className="p-6 bg-white border-border/50">
                                    <h3 className="font-bold mb-4">Why Reach Out?</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Free initial consultation",
                                            "Expert guidance from industry veterans",
                                            "Customized solutions for your needs",
                                            "Quick response within 24 hours"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

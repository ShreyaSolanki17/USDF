"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Globe, Download, MessageCircle, Lightbulb, Settings, BookOpen, DollarSign, Shield, TrendingUp, Factory, Beaker } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ContactCard() {
    const contactInfo = {
        company: "US Dairy & Foods Consulting LLC",
        person: "Dr. Hasmukh Patel",
        role: "Founder & Principal Consultant",
        title: "USA's Top Food & Dairy Solutions Partner",
        phone: "+1-605-690-6080",
        whatsapp: "16056906080",
        email: "usdfconsulting@gmail.com",
        email2: "hpatel@usdf.com",
        address: "5605 Weston Ln N, Plymouth, MN 55446, USA",
        website: "usdf.com",
        fullUrl: "https://usdf.com",
        experience: "20+ Years Experience"
    }

    const servicesList = [
        { icon: Lightbulb, label: "Product Development" },
        { icon: Settings, label: "Process Optimization" },
        { icon: BookOpen, label: "Technical Training" },
        { icon: DollarSign, label: "Cost Reduction" },
        { icon: Shield, label: "Quality Assurance" },
        { icon: TrendingUp, label: "Strategic Planning" }
    ]

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4 font-sans relative overflow-hidden">
            {/* Background Pattern - Matching Home Page */}
            <div className="absolute inset-0 gradient-blue-light opacity-50" />
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b5998' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="w-full max-w-md relative z-10"
            >
                <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl bg-white/90 backdrop-blur-xl">
                    {/* Header Section */}
                    <motion.div variants={fadeInUp} className="relative h-32 gradient-blue">
                        <div className="absolute inset-0 opacity-10"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")` }}
                        />
                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
                                className="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg shadow-black/5 rotate-3 overflow-hidden"
                            >
                                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden relative">
                                    <Image
                                        src="/Images/usdf-logo.png"
                                        alt="USDF Logo"
                                        fill
                                        className="object-contain p-1"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="pt-16 pb-8 px-6 text-center">
                        <motion.div variants={fadeInUp}>
                            <h1 className="text-2xl font-bold mb-1 text-gradient-blue">{contactInfo.company}</h1>
                            <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">Dairy & Foods Consulting</p>
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-6" />
                        </motion.div>

                        <motion.div variants={fadeInUp} className="space-y-2 mb-6">
                            <h2 className="text-xl font-bold text-foreground">{contactInfo.person}</h2>
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-sm font-semibold text-primary">{contactInfo.role}</span>
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                                        {contactInfo.experience}
                                    </Badge>
                                </div>
                            </div>
                        </motion.div>

                        {/* Action Grid */}
                        <motion.div variants={fadeInUp} className="grid grid-cols-5 gap-2 mb-8 relative z-30 px-2">
                            <a href={`tel:${contactInfo.phone}`} className="flex flex-col items-center gap-2 group cursor-pointer relative z-50">
                                <div className="w-10 h-10 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span className="text-[9px] font-medium text-muted-foreground">Call</span>
                            </a>
                            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group cursor-pointer relative z-50">
                                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                                    <MessageCircle className="w-4 h-4" />
                                </div>
                                <span className="text-[9px] font-medium text-muted-foreground">WhatsApp</span>
                            </a>
                            <a href={`mailto:${contactInfo.email}`} className="flex flex-col items-center gap-2 group cursor-pointer relative z-50">
                                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="text-[9px] font-medium text-muted-foreground">Email</span>
                            </a>
                            <Link href="/" className="flex flex-col items-center gap-2 group cursor-pointer relative z-50">
                                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                                    <Globe className="w-4 h-4" />
                                </div>
                                <span className="text-[9px] font-medium text-muted-foreground">Website</span>
                            </Link>
                            <a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group cursor-pointer relative z-50">
                                <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span className="text-[9px] font-medium text-muted-foreground">Map</span>
                            </a>
                        </motion.div>

                        {/* About Section */}
                        <motion.div variants={fadeInUp} className="text-left mb-8">
                            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">About Us</h3>
                            <p className="text-sm text-muted-foreground/80 leading-relaxed">
                                A premier food and dairy consulting firm providing end-to-end solutions for product development, process optimization, and technical training. We help businesses innovate and scale with expert guidance.
                            </p>
                        </motion.div>

                        {/* Services Section */}
                        <motion.div variants={fadeInUp} className="text-left mb-8">
                            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Our Services</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {servicesList.map((service, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-xl border border-border/50 hover:bg-secondary/50 transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm text-primary">
                                            <service.icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-medium text-foreground">{service.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Detailed Info List */}
                        <motion.div variants={fadeInUp} className="space-y-4 text-left bg-slate-50/50 rounded-2xl p-5 mb-8 border border-slate-100">
                            <div className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-primary mt-1 shrink-0" />
                                <div>
                                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">Mobile</p>
                                    <p className="text-sm text-foreground font-medium">{contactInfo.phone}</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-border/50" />
                            <div className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-primary mt-1 shrink-0" />
                                <div>
                                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">Email</p>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm text-foreground font-medium">{contactInfo.email}</p>
                                        <p className="text-sm text-foreground font-medium">{contactInfo.email2}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-px bg-border/50" />
                            <div className="flex items-start gap-3">
                                <Globe className="w-4 h-4 text-primary mt-1 shrink-0" />
                                <div>
                                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">Website</p>
                                    <a href={contactInfo.fullUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-medium hover:underline">
                                        {contactInfo.website}
                                    </a>
                                </div>
                            </div>
                            <div className="w-full h-px bg-border/50" />
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                                <div>
                                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">Address</p>
                                    <p className="text-sm text-foreground font-medium leading-relaxed">
                                        {contactInfo.address}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Save Contact Button */}
                        <motion.div variants={fadeInUp}>
                            <Link href="/usdf-card/vcard" target="_blank">
                                <Button className="w-full h-12 rounded-xl gradient-blue hover:opacity-90 transition-all text-white font-semibold text-base shadow-lg hover:shadow-xl">
                                    <Download className="w-5 h-5 mr-2" />
                                    Save Contact
                                </Button>
                            </Link>
                        </motion.div>

                        <div className="mt-6">
                            <p className="text-xs text-center text-muted-foreground/60">
                                &copy; {new Date().getFullYear()} US Dairy & Foods Consulting LLC
                            </p>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </div>
    )
}

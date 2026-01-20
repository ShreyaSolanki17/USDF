"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Milk } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industry", href: "/industry" },
    { name: "Collaborators", href: "/collaborators" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="border-b border-border/50 bg-background/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
                            <div className="w-12 h-12 rounded-xl gradient-blue flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl transition-shadow">
                                <Milk className="w-7 h-7" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl tracking-tight text-primary">USDF</span>
                                <span className="text-[10px] text-muted-foreground font-medium tracking-wide">Dairy & Foods Consulting</span>
                            </div>
                        </Link>
                        <div className="hidden lg:ml-12 lg:flex lg:space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-muted-foreground hover:text-primary",
                                        "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                        "hover:bg-secondary/50"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link href="/contact">
                            <Button 
                                variant="default" 
                                className="gradient-blue hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all"
                            >
                                Get Consultation
                            </Button>
                        </Link>
                    </div>
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={cn(
                "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            )}>
                <div className="px-4 pt-2 pb-4 space-y-1 bg-background border-t border-border/50">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 rounded-lg text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 px-4">
                        <Link href="/contact" className="w-full" onClick={() => setIsOpen(false)}>
                            <Button className="w-full gradient-blue hover:opacity-90 text-white">
                                Get Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

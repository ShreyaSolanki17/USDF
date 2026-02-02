import Link from "next/link"
import { Milk, Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industry", href: "/industry" },
    { name: "Collaborators", href: "/collaborators" },
    { name: "Contact Us", href: "/contact" },
]

const services = [
    { name: "Strategic Planning", href: "/services#strategic-planning" },
    { name: "Technology Assessment", href: "/services#technology" },
    { name: "R&D Solutions", href: "/services#rd" },
    { name: "Product Development", href: "/services#product-dev" },
    { name: "Turn-Key Projects", href: "/services#turnkey" },
]

export function Footer() {
    return (
        <footer className="bg-[#0f172a] text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <img
                                src="/Images/usdf-logo.png"
                                alt="US Dairy & Foods Consulting LLC"
                                className="w-20 h-20 object-contain"
                            />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            USA&apos;s Top Food & Dairy Solutions Partner for Business Expansion.
                            Bringing experience, expertise, and excellence to the dairy and food industry.
                        </p>
                        <p className="text-xs text-slate-500">
                            Founded by Dr. Hasmukh Patel | Plymouth, MN
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-slate-400 text-sm">+1-605-690-6080</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                    <a
                                        href="mailto:usdfconsulting@gmail.com"
                                        className="text-slate-400 hover:text-white text-sm transition-colors"
                                    >
                                        usdfconsulting@gmail.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-slate-400 text-sm">
                                        5605 Weston Ln N,<br />
                                        Plymouth, MN 55446, USA
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm text-center md:text-left">
                            Copyright &copy; {new Date().getFullYear()} US Dairy & Foods Consulting LLC. All Rights Reserved.
                        </p>
                        <p className="text-slate-600 text-xs">
                            Developed by <span className="text-slate-400">FlaviDairy Solutions PVT LTD</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

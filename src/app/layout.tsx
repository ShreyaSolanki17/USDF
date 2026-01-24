import type { Metadata } from "next"
import { Poppins, JetBrains_Mono, Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

import "./globals.css"

// Primary font - Inter (more reliable)
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: 'swap',
})

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: true,
  adjustFontFallback: true,
})

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "USDF | US Dairy & Foods Consulting",
  description: "USA's Top Food & Dairy Solutions Partner for Business Expansion. Expert guidance on dairy processing, food safety, product development, and operational excellence.",
  keywords: ["dairy consulting", "food consulting", "dairy processing", "food safety", "product development", "USDF", "Dr. Hasmukh Patel"],
  authors: [{ name: "US Dairy & Foods Consulting LLC" }],
  openGraph: {
    title: "USDF | US Dairy & Foods Consulting",
    description: "USA's Top Food & Dairy Solutions Partner for Business Expansion",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${mono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // Default to light mode for the corporate feel, allow toggle
          enableSystem={false} // Force light mode default initially as per design vibes usually being light for SaaS landing, but support dark
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

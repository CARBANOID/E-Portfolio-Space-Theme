import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AlwaysActiveCursor from "../components/AlwaysActiveCursor"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Sushant Negi - Portfolio",
  description: "Professional portfolio showcasing my web development projects and system programming skills",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased glass-particles relative overflow-x-hidden no-scrollbar`}
      >
        {/* Background Video */}
        <div className="fixed inset-0 w-full h-full z-[-1]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            poster="/next.svg" // Fallback image while video loads
          >
            <source src="/The Universe and Space.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
          </video>
          {/* Dark overlay - reduced opacity for better star visibility */}
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Glassmorphic overlay - more transparent for star visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-purple-900/20 to-slate-900/20"></div>
        </div>
        
        <AlwaysActiveCursor />
        <Navbar />
        <main className="pt-16 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

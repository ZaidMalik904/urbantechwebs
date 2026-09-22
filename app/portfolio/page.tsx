import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import WorkProcess from "@/components/WorkProcess";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/WhatsAppButton";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio & Projects - Web Design Showcase",
  description:
    "Explore website design and development projects by UrbanTech Webs. Business websites, e-commerce stores, car rental portals, and custom web applications.",
  alternates: {
    canonical: "https://urbantechwebs.in/portfolio",
  },
  openGraph: {
    title: "Portfolio & Case Studies - Website Design Projects",
    description:
      "Explore website design and web development projects by UrbanTech Webs. Featuring business websites, e-commerce stores, car rentals, and custom web apps.",
    url: "https://urbantechwebs.in/portfolio",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/portfolio_hero_workspace.jpg",
        width: 1200,
        height: 630,
        alt: "UrbanTech Webs Web Development & Website Design Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Projects - Web Design Showcase",
    description:
      "Explore real client websites and web applications built by UrbanTech Webs.",
    images: ["/images/portfolio_hero_workspace.jpg"],
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main>
        {/* Hero Banner Section with Background Image */}
        <section className="relative overflow-hidden bg-slate-950 text-white min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center justify-center pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20">

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/portfolio_hero_workspace.jpg"
              alt="UrbanTech Webs Portfolio Web Design Workspace"
              fill
              priority
              className="object-cover object-center opacity-85 sm:opacity-90"
            />
            {/* Soft Dark Overlay for Text Readability & Image Vibrancy */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/55 to-slate-950/85" />
          </div>

          {/* Hero Content */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-5 w-full">

            {/* Breadcrumb Navigation */}
            <nav className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 border border-slate-800 px-4 py-1.5 rounded-full backdrop-blur-md">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-cyan-400 font-bold">Portfolio Showcase</span>
            </nav>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
              Our Web Development & Design Projects
            </h1>

            {/* Subtext */}
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
              Explore real-world client websites, high-converting{" "}
              <Link href="/ecommerce-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                e-commerce stores
              </Link>
              ,{" "}
              <Link href="/web-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                custom web development
              </Link>{" "}
              projects, and{" "}
              <Link href="/web-application-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                web applications
              </Link>{" "}
              designed and developed by UrbanTech Webs. Ready for your project?{" "}
              <Link href="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                Get a free consultation
              </Link>
              .
            </p>

          </div>
        </section>

        {/* Portfolio Showcase */}
        <Portfolio />

        {/* Our Work Process Section */}
        <WorkProcess />

        {/* Contact Form CTA ("Let's Build Your Website") */}
        <ContactForm />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

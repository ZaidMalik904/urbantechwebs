import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import WorkProcess from "@/components/WorkProcess";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/WhatsAppButton";
import { FolderCheck, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | UrbanTech Webs - Website Design Projects",
  description:
    "Explore website design and development projects by UrbanTech Webs. Featuring business websites, e-commerce stores, car rentals, and custom web apps.",
  alternates: {
    canonical: "https://urbantechwebs.in/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main>
        {/* Hero Banner Section with Background Image */}
        <section className="relative overflow-hidden bg-slate-950 text-white min-h-[580px] sm:min-h-[600px] lg:min-h-[650px] flex items-center justify-center pt-16 sm:pt-20 md:pt-24 pb-28 sm:pb-36 lg:pb-40">

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
              Explore real-world client websites, high-converting e-commerce stores, car rental portals, and custom web applications designed and developed by UrbanTech Webs.
            </p>

            {/* Single-Line Trust Bar */}
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 sm:gap-5 lg:gap-7 pt-3 border-t border-slate-800/80 max-w-3xl mx-auto text-xs sm:text-sm">
              {[
                "100+ Delivered Projects",
                "100% Mobile Responsive",
                "Local SEO & Speed Optimized",
                "24/7 Dedicated Support",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 flex-shrink-0 font-medium text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{feature}</span>
                  {i < 3 && <span className="hidden md:inline-block text-slate-700 ml-2 sm:ml-4">•</span>}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Highlights Stats Section */}
        <section className="bg-white text-slate-900 border-b border-slate-200 relative">
          <Stats />
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

import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/WhatsAppButton";
import { Building2, Target, Lightbulb, Users2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | UrbanTech Webs - Web Development Company in Noida",
  description:
    "Learn about UrbanTech Webs, a leading web development and website design company in Noida, Delhi NCR. Discover our team values, expertise, and client focus.",
  alternates: {
    canonical: "https://urbantechwebs.in/about",
  },
  openGraph: {
    title: "About Us | UrbanTech Webs - Web Development Company in Noida",
    description:
      "Learn about UrbanTech Webs, a web development and website design company in Noida, Delhi NCR. Discover our team values, expertise, and client focus.",
    url: "https://urbantechwebs.in/about",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/about_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "About UrbanTech Webs Web Development Company in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | UrbanTech Webs - Web Development Company in Noida",
    description:
      "Specialized web development & design agency serving Noida, Delhi NCR & India.",
    images: ["/images/about_hero_bg.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main>
        {/* Expanded Hero Banner Section with Background Image */}
        <section className="relative overflow-hidden bg-slate-950 text-white -mt-[108px] pt-36 sm:pt-44 pb-16 sm:pb-20 text-center flex flex-col justify-center min-h-[480px] sm:min-h-[560px] border-b border-slate-800">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about_hero_bg.jpg"
              alt="UrbanTech Webs Team & Office Background"
              fill
              priority
              className="object-cover object-center opacity-45 scale-105"
            />
            {/* Multi-layer Dark Gradient Overlay for optimal readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-slate-950" />
          </div>

          {/* Ambient Glow Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none z-0" />

          {/* Hero Content Container */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-6 sm:space-y-7">
            
            {/* Badge: OUR COMPANY & MISSION */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-cyan-400 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>OUR COMPANY & MISSION</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto">
              About UrbanTech Webs — Our Company & Mission
            </h1>

            {/* Subtext Description */}
            <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
              We are a specialized{" "}
              <Link href="/web-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                web development
              </Link>{" "}
              and{" "}
              <Link href="/website-design" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                website design
              </Link>{" "}
              company in Noida, Delhi NCR. Our mission is to empower growing businesses with fast, secure, mobile-first, and SEO-optimized digital web solutions. Explore our{" "}
              <Link href="/portfolio" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                client portfolio
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                contact our team
              </Link>{" "}
              to start your project.
            </p>

            {/* Mission & Company Pillars Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-md text-slate-300">
                <Target className="w-4.5 h-4.5 text-cyan-400 flex-shrink-0" />
                <span><strong className="text-white">Mission:</strong> High-Converting Websites</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-md text-slate-300">
                <Lightbulb className="w-4.5 h-4.5 text-blue-400 flex-shrink-0" />
                <span><strong className="text-white">Vision:</strong> Strong Digital Presence</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-md text-slate-300">
                <Users2 className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white">Values:</strong> Quality & Integrity</span>
              </div>
            </div>

          </div>
        </section>

        {/* Highlights Stats Section (Attached directly below Hero) */}
        <section className="bg-slate-950 pt-2 pb-10 sm:pb-12 border-b border-slate-800/80 relative z-20">
          <Stats />
        </section>

        {/* Why Choose Us */}
        <WhyUs />

        {/* Workflow & Process */}
        <Process />

        {/* Contact Form CTA */}
        <ContactForm />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

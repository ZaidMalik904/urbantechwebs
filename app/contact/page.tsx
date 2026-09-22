import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/WhatsAppButton";
import { MessageSquare, Phone, Mail, MapPin, ArrowRight, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Web Consultation",
  description:
    "Contact UrbanTech Webs for custom website development and website design. Phone: +91 78277 75353, Email: urbantechwebs904@gmail.com.",
  alternates: {
    canonical: "https://urbantechwebs.in/contact",
  },
  openGraph: {
    title: "Contact Us - Get a Free Web Consultation",
    description:
      "Contact UrbanTech Webs for website development, website design, and web applications.",
    url: "https://urbantechwebs.in/contact",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/contact_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Contact UrbanTech Webs Web Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get a Free Web Consultation",
    description:
      "Get a free consultation and project quote for custom web development.",
    images: ["/images/contact_hero_bg.jpg"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main>
        {/* Expanded Hero Section with Integrated Direct Contact Action Buttons */}
        <section className="relative overflow-hidden bg-slate-950 text-white -mt-[108px] pt-36 sm:pt-44 pb-20 sm:pb-24 text-center flex flex-col justify-center min-h-[520px] sm:min-h-[600px] border-b border-slate-800">

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact_hero_bg.jpg"
              alt="UrbanTech Webs Contact & Consultation Background"
              fill
              priority
              className="object-cover object-center opacity-40 scale-105"
            />
            {/* Multi-layer Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-slate-950" />
          </div>

          {/* Ambient Glow Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none z-0" />

          {/* Hero Content Container */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-6 sm:space-y-8">

            {/* Badge: GET IN TOUCH */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-cyan-400 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>GET IN TOUCH & CONSULTATION</span>
              </span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto">
              Contact UrbanTech Webs
            </h1>

            {/* Subtext Description */}
            <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
              Have a question or looking for custom{" "}
              <Link href="/web-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                web development
              </Link>
              ,{" "}
              <Link href="/website-design" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                website design
              </Link>
              , or{" "}
              <Link href="/ecommerce-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                e-commerce solutions
              </Link>
              ? Reach out to our team for instant technical guidance and free consultation. View our{" "}
              <Link href="/portfolio" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                completed projects
              </Link>
              .
            </p>

            {/* Direct Contact Action Buttons (Integrated into Hero) */}
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 sm:gap-6 max-w-4xl mx-auto pt-2 w-full">

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917827775353?text=Hi%20UrbanTechWebs%2C%20I%20want%20to%20get%20a%20free%20consultation%20and%20quote%20for%20my%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                data-gtm="whatsapp-link"
                className="flex-1 w-full px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-xl shadow-emerald-950/50 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 group cursor-pointer"
              >
                <Image src="/images/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Chat on WhatsApp Now</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Direct Phone CTA */}
              <a
                href="tel:+917827775353"
                data-gtm="phone-link"
                className="flex-1 w-full px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-xl shadow-blue-950/50 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Call +91 78277 75353</span>
              </a>

              {/* Email CTA */}
              <a
                href="mailto:urbantechwebs904@gmail.com"
                data-gtm="email-link"
                className="flex-1 w-full px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="whitespace-nowrap">Email Us</span>
              </a>

            </div>

            {/* Quick Details & Location Bar */}
            <div className="pt-6 border-t border-slate-800/80 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Noida Sector 62, Uttar Pradesh, India</span>
              </div>
              <span className="hidden sm:inline text-slate-700">•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Working Hours: Mon – Sat (9 AM – 8 PM)</span>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <Faq />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

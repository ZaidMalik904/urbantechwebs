"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useQuoteModal } from "./QuoteModalContext";

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const { openQuoteModal } = useQuoteModal();
  const handleQuote = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      openQuoteModal();
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white -mt-[108px] min-h-screen flex flex-col justify-center pt-36 pb-16 sm:pb-20">
      
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpeg"
          alt="UrbanTechWebs Web Development and Website Design Studio Setup"
          fill
          priority
          className="object-cover object-center opacity-85"
        />
        {/* Soft Dark Overlay for Contrast & Clear Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/55 to-slate-950/85" />
      </div>

      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-6 sm:space-y-8">
        
        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide shadow-xs backdrop-blur-md">
          <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
          <span>Web Development & Website Design Services</span>
        </div>

        {/* Main Heading (Single H1 for SEO) */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto">
          Professional Website Development Services
        </h1>

        {/* Supporting Copy */}
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
          We design and develop fast, responsive and conversion-focused{" "}
          <Link href="/web-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            web development
          </Link>{" "}
          projects,{" "}
          <Link href="/ecommerce-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            e-commerce stores
          </Link>
          ,{" "}
          <Link href="/landing-page-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            landing pages
          </Link>{" "}
          and{" "}
          <Link href="/web-application-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            custom web applications
          </Link>{" "}
          tailored to your business goals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={handleQuote}
            data-gtm="hero-quote-cta"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://wa.me/917827775353?text=Hi%20UrbanTech%20Webs%2C%20I%20am%20interested%20in%20getting%20a%20free%20consultation%20for%20a%20website."
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="hero-whatsapp-cta"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer text-center"
          >
            <Image src="/images/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="w-5 h-5 flex-shrink-0" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Single-Line Trust / Value Bar below CTA */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 sm:gap-5 lg:gap-7 pt-6 border-t border-slate-800/80 max-w-5xl mx-auto text-xs sm:text-sm">
          {[
            "Mobile Friendly",
            "Fast Loading",
            "SEO Ready",
            "Post-Launch Support",
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
  );
}





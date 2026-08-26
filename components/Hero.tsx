"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white -mt-[108px] min-h-screen flex flex-col justify-center pt-36 pb-16 sm:pb-20">
      
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpeg"
          alt="UrbanTechWebs Web Agency Team Setup"
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
          <span>Web Development Agency • Noida Sector 62</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto">
          Fast Websites That Drive Real Business Growth
        </h1>

        {/* Supporting Text */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Get a modern, mobile-friendly website designed to build instant customer trust, show your services clearly, and get people calling or messaging you on WhatsApp.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 font-semibold text-sm sm:text-base shadow-xs backdrop-blur-xs transition-all text-center"
          >
            View Our Work
          </a>
        </div>

        {/* Single-Line Trust / Value Bar below CTA */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 sm:gap-5 lg:gap-7 pt-6 border-t border-slate-800/80 max-w-5xl mx-auto text-xs sm:text-sm">
          {[
            "Sub-2s Page Speed",
            "100% Mobile Ready",
            "Direct WhatsApp Leads",
            "Post-Launch Developer Support",
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





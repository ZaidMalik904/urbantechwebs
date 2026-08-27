"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
}

export default function CtaBanner({ onOpenQuoteModal }: CtaBannerProps) {
  return (
    <section className="py-12 sm:py-16 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Compact Dark Slate Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl shadow-slate-950/20 flex flex-col lg:flex-row items-center justify-between gap-8 text-white text-center lg:text-left">
          
          {/* Ambient Glow */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Left Content */}
          <div className="space-y-3.5 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 fill-cyan-400" />
              <span>LET&apos;S TALK ABOUT YOUR PROJECT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Need a Website for Your Business?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Tell us about your business and what you want your website to do. We&apos;ll help you choose a suitable solution.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get a Free Website Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/917827775353?text=Hi%20UrbanTechWebs%2C%20I%20want%20to%20discuss%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Image src="/images/whatsapp.svg" alt="WhatsApp" width={18} height={18} className="w-4.5 h-4.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Small supporting note */}
        <p className="text-center text-slate-500 text-xs font-medium mt-4">
          No obligation. Let&apos;s discuss your project.
        </p>

      </div>
    </section>
  );
}



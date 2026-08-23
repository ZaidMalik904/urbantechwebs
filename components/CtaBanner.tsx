"use client";

import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
}

export default function CtaBanner({ onOpenQuoteModal }: CtaBannerProps) {
  return (
    <section className="py-8 sm:py-10 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Compact Dark Slate Container matching UrbanTech Palette */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl shadow-slate-950/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-white">
          
          {/* Ambient Blue Background Glow */}
          <div className="absolute -right-16 -bottom-16 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Left Content */}
          <div className="space-y-2.5 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 fill-cyan-400" />
              <span>START YOUR PROJECT TODAY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight uppercase">
              READY TO BUILD A WEBSITE THAT DRIVES REAL RESULTS?
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
              Transform your business presence online with UrbanTechWebs. Tailored packages with 1 year support included.
            </p>
          </div>

          {/* Right Vibrant Blue CTA Button */}
          <div className="relative z-10 flex-shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>GET A FREE CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

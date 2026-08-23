"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Zap, ShieldCheck, MessageSquare, Code2, Sparkles } from "lucide-react";

interface WhyUsProps {
  onOpenQuoteModal: () => void;
}

export default function WhyUs({ onOpenQuoteModal }: WhyUsProps) {
  const leftPoints = [
    "100% Handcoded Custom Web Applications",
    "Sub-2s Page Load Speed Guarantee",
    "Fully Responsive Across All Devices",
    "Clean Modern UI & Visual Branding",
    "1 Year Free Support & Maintenance",
  ];

  // 4 Cards for Zig-Zag layout on the right side with Emerald Green & Crimson Red backgrounds
  const col1Cards = [
    {
      num: "01",
      icon: Code2,
      title: "Handcoded Clean Architecture",
      description: "Zero slow page builders or heavy plugins. Built with pure custom code for maximum speed, security, and scalability.",
      bgClass: "bg-blue-950/80 border-blue-500/50 shadow-blue-500/10",
      iconBg: "bg-blue-500/20 text-cyan-300 border-blue-400/40",
      accentText: "text-blue-400 font-black",
      hoverText: "group-hover:text-cyan-300",
    },
    {
      num: "03",
      icon: MessageSquare,
      title: "High Conversion Copy",
      description: "Strategic messaging and direct call-to-action buttons designed to turn site visitors into active paying clients.",
      bgClass: "bg-slate-950/90 border-slate-800",
      iconBg: "bg-blue-500/10 text-cyan-400 border-blue-500/20",
      accentText: "text-slate-400",
      hoverText: "group-hover:text-cyan-300",
    },
  ];

  const col2Cards = [
    {
      num: "02",
      icon: Zap,
      title: "Lightning Speed",
      description: "Optimized Core Web Vitals ensuring your website loads in under 2 seconds, boosting your Google ranking.",
      bgClass: "bg-slate-950/90 border-slate-800",
      iconBg: "bg-blue-500/10 text-cyan-400 border-blue-500/20",
      accentText: "text-slate-400",
      hoverText: "group-hover:text-cyan-300",
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "Direct Support & Care",
      description: "On-time project delivery with continuous developer maintenance, SSL security setup, and performance optimization.",
      bgClass: "bg-rose-950/90 border-rose-500/50 shadow-xl shadow-rose-950/40",
      iconBg: "bg-rose-500/20 text-rose-300 border-rose-400/40",
      accentText: "text-rose-400",
      hoverText: "group-hover:text-rose-300",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 text-white relative border-b border-slate-800 overflow-hidden bg-slate-950">
      
      {/* Realistic Software Agency Workspace Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/why_us_bg.jpg"
          alt="UrbanTechWebs Tech Agency Workspace"
          fill
          className="object-cover object-center opacity-75 scale-105"
          priority
        />
        {/* Balanced Slate Overlay Gradient for Clear Text Visibility & Image Polish */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE: Text Content (Clear, easy to understand) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WHY CHOOSE URBANTECHWEBS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              We Don't Just Build Websites. We Build Digital Growth.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Most business websites fail because they are slow, confusing, or built on laggy templates. As a dedicated web development agency & website designer, we handcode high-converting websites designed to generate more leads and sales.
            </p>

            {/* Easy Bullet Points */}
            <div className="space-y-3 pt-2">
              {leftPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Cards in Zig-Zag Offset Layout */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-start">
            
            {/* Zig-Zag Column 1 (Normal Alignment) */}
            <div className="space-y-5 sm:space-y-6">
              {col1Cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.num}
                    className={`${card.bgClass} backdrop-blur-md p-6 sm:p-7 rounded-2xl border transition-all duration-300 group hover:-translate-y-1`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-xl ${card.iconBg} border flex items-center justify-center transition-all duration-300`}>
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className={`text-xs font-mono font-bold ${card.accentText}`}>
                        {card.num}
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold text-white mb-2 ${card.hoverText} transition-colors`}>
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Zig-Zag Column 2 (Offset Shifted Downwards) */}
            <div className="space-y-5 sm:space-y-6 sm:translate-y-8">
              {col2Cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.num}
                    className={`${card.bgClass} backdrop-blur-md p-6 sm:p-7 rounded-2xl border transition-all duration-300 group hover:-translate-y-1`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-xl ${card.iconBg} border flex items-center justify-center transition-all duration-300`}>
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className={`text-xs font-mono font-bold ${card.accentText}`}>
                        {card.num}
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold text-white mb-2 ${card.hoverText} transition-colors`}>
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

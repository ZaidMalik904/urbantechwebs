"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Target, Palette, Smartphone, Search, MessageSquare, ShieldCheck } from "lucide-react";

interface WhyUsProps {
  onOpenQuoteModal: () => void;
}

export default function WhyUs({ onOpenQuoteModal }: WhyUsProps) {
  const points = [
    {
      num: "01",
      icon: Target,
      title: "Business-Focused Planning",
      description: "We start by understanding your business, customers and website requirements before deciding what needs to be built.",
      badge: "STRATEGY FIRST",
      bgClass: "bg-gradient-to-b from-cyan-950/90 via-slate-900/90 to-slate-950/95 border-cyan-500/40 shadow-lg shadow-cyan-950/30 hover:border-cyan-400",
      topLine: "from-cyan-500 via-blue-500 to-transparent",
      iconBg: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40 group-hover:bg-cyan-500 group-hover:text-slate-950",
      badgeClass: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      accentText: "text-cyan-400 font-black",
      hoverText: "group-hover:text-cyan-300",
    },
    {
      num: "02",
      icon: Palette,
      title: "Custom Website Design",
      description: "Your website is designed around your brand and goals rather than simply copying a generic template.",
      badge: "100% TAILORED",
      bgClass: "bg-gradient-to-b from-purple-950/90 via-slate-900/90 to-slate-950/95 border-purple-500/40 shadow-lg shadow-purple-950/30 hover:border-purple-400",
      topLine: "from-purple-500 via-pink-500 to-transparent",
      iconBg: "bg-purple-500/20 text-purple-300 border-purple-400/40 group-hover:bg-purple-500 group-hover:text-slate-950",
      badgeClass: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      accentText: "text-purple-400 font-black",
      hoverText: "group-hover:text-purple-300",
    },
    {
      num: "03",
      icon: Smartphone,
      title: "Responsive on Every Screen",
      description: "The website is built to work properly across mobile phones, tablets and desktop computers.",
      badge: "MOBILE READY",
      bgClass: "bg-gradient-to-b from-amber-950/90 via-slate-900/90 to-slate-950/95 border-amber-500/40 shadow-lg shadow-amber-950/30 hover:border-amber-400",
      topLine: "from-amber-500 via-orange-500 to-transparent",
      iconBg: "bg-amber-500/20 text-amber-300 border-amber-400/40 group-hover:bg-amber-500 group-hover:text-slate-950",
      badgeClass: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      accentText: "text-amber-400 font-black",
      hoverText: "group-hover:text-amber-300",
    },
    {
      num: "04",
      icon: Search,
      title: "Performance-Focused Development",
      description: "We pay attention to image sizes, code, loading behaviour and overall website performance.",
      badge: "LIGHTNING FAST",
      bgClass: "bg-gradient-to-b from-indigo-950/90 via-slate-900/90 to-slate-950/95 border-indigo-500/40 shadow-lg shadow-indigo-950/30 hover:border-indigo-400",
      topLine: "from-indigo-500 via-blue-500 to-transparent",
      iconBg: "bg-indigo-500/20 text-indigo-300 border-indigo-400/40 group-hover:bg-indigo-500 group-hover:text-slate-950",
      badgeClass: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
      accentText: "text-indigo-400 font-black",
      hoverText: "group-hover:text-indigo-300",
    },
    {
      num: "05",
      icon: MessageSquare,
      title: "SEO-Friendly Website Structure",
      description: "We use clear page structures, semantic HTML, metadata and other technical practices that help search engines understand the website.",
      badge: "SEARCH READY",
      bgClass: "bg-gradient-to-b from-emerald-950/90 via-slate-900/90 to-slate-950/95 border-emerald-500/40 shadow-lg shadow-emerald-950/30 hover:border-emerald-400",
      topLine: "from-emerald-500 via-teal-500 to-transparent",
      iconBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40 group-hover:bg-emerald-500 group-hover:text-slate-950",
      badgeClass: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      accentText: "text-emerald-400 font-black",
      hoverText: "group-hover:text-emerald-300",
    },
    {
      num: "06",
      icon: ShieldCheck,
      title: "Support After Launch",
      description: "We remain available for agreed updates, fixes and support after the website goes live.",
      badge: "ONGOING HELP",
      bgClass: "bg-gradient-to-b from-rose-950/90 via-slate-900/90 to-slate-950/95 border-rose-500/40 shadow-lg shadow-rose-950/30 hover:border-rose-400",
      topLine: "from-rose-500 via-red-500 to-transparent",
      iconBg: "bg-rose-500/20 text-rose-300 border-rose-400/40 group-hover:bg-rose-500 group-hover:text-slate-950",
      badgeClass: "bg-rose-500/10 text-rose-300 border-rose-500/30",
      accentText: "text-rose-400 font-black",
      hoverText: "group-hover:text-rose-300",
    },
  ];

  return (
    <section className="py-20 sm:py-24 text-white relative border-b border-slate-800 overflow-hidden bg-slate-950">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/why_us_bg.jpg"
          alt="UrbanTechWebs Workspace Setup"
          fill
          className="object-cover object-center opacity-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHY CHOOSE US</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Why Choose UrbanTechWebs for Website Development?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            We focus on clear communication, custom design, mobile responsiveness, practical performance, and post-launch developer assistance.
          </p>
        </div>

        {/* 6 Distinct Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className={`${item.bgClass} backdrop-blur-md p-7 rounded-md border transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Top Accent Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.topLine}`} />

                <div>
                  <div className="flex items-center justify-between mb-5 pt-1">
                    <div className={`w-11 h-11 rounded-md ${item.iconBg} border flex items-center justify-center transition-all duration-300 shadow-md`}>
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${item.badgeClass}`}>
                        {item.badge}
                      </span>
                      <span className={`text-xs font-mono font-bold ${item.accentText}`}>
                        {item.num}
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-lg font-bold text-white mb-2.5 ${item.hoverText} transition-colors leading-snug`}>
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all inline-flex items-center gap-2 cursor-pointer group"
          >
            <span>DISCUSS YOUR WEBSITE WITH US</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}

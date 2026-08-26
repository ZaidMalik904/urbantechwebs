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
      title: "Direct Developer Communication",
      description: "You speak directly to the developers building your site, avoiding middleman salespeople or miscommunications.",
      bgClass: "bg-blue-950/80 border-blue-500/50 shadow-blue-500/10",
      iconBg: "bg-blue-500/20 text-cyan-300 border-blue-400/40",
      accentText: "text-blue-400 font-black",
      hoverText: "group-hover:text-cyan-300",
    },
    {
      num: "02",
      icon: Palette,
      title: "Custom UI Design",
      description: "We craft custom layouts suited to your exact business branding instead of copying generic pre-made templates.",
      bgClass: "bg-slate-950/90 border-slate-800",
      iconBg: "bg-blue-500/10 text-cyan-400 border-blue-500/20",
      accentText: "text-slate-400",
      hoverText: "group-hover:text-cyan-300",
    },
    {
      num: "03",
      icon: Smartphone,
      title: "Fast 7–14 Day Delivery",
      description: "We set a clear delivery target and stick to it so your business can start receiving online inquiries quickly.",
      bgClass: "bg-slate-950/90 border-slate-800",
      iconBg: "bg-blue-500/10 text-cyan-400 border-blue-500/20",
      accentText: "text-slate-400",
      hoverText: "group-hover:text-cyan-300",
    },
    {
      num: "04",
      icon: Search,
      title: "Handcoded Sub-2s Speed",
      description: "Custom engineered code to ensure your web pages load in under 2 seconds on mobile devices.",
      bgClass: "bg-indigo-950/90 border-indigo-500/50 shadow-indigo-500/10",
      iconBg: "bg-indigo-500/20 text-indigo-300 border-indigo-400/40",
      accentText: "text-indigo-400 font-black",
      hoverText: "group-hover:text-indigo-300",
    },
    {
      num: "05",
      icon: MessageSquare,
      title: "Direct WhatsApp Leads",
      description: "Customer inquiries are formatted neatly and sent directly to your WhatsApp and email inbox.",
      bgClass: "bg-emerald-950/90 border-emerald-500/50 shadow-emerald-500/10",
      iconBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
      accentText: "text-emerald-400 font-black",
      hoverText: "group-hover:text-emerald-300",
    },
    {
      num: "06",
      icon: ShieldCheck,
      title: "Post-Launch Developer Help",
      description: "We assist you with domain connection, SSL certificates, cloud hosting setup, and post-launch updates.",
      bgClass: "bg-rose-950/90 border-rose-500/50 shadow-xl shadow-rose-950/40",
      iconBg: "bg-rose-500/20 text-rose-300 border-rose-400/40",
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
            <span>OUR WORKING PROMISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Why Choose UrbanTechWebs
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            No sales jargon or hidden costs. We provide direct developer contact, transparent pricing, and fast 7–14 day project delivery.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className={`${item.bgClass} backdrop-blur-md p-7 rounded-md border transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-md ${item.iconBg} border flex items-center justify-center transition-all duration-300`}>
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className={`text-xs font-mono font-bold ${item.accentText}`}>
                      {item.num}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold text-white mb-2.5 ${item.hoverText} transition-colors`}>
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
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Discuss Your Website Goals</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}


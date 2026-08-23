"use client";

import React from "react";
import Image from "next/image";
import {
  Bot,
  HeartPulse,
  CreditCard,
  GraduationCap,
  ShoppingBag,
  Building2,
  Truck,
  Utensils,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function Industries() {
  const sectors = [
    {
      num: "01",
      title: "AI & STARTUPS",
      desc: "SaaS Apps & AI Workflows",
      icon: Bot,
      cardBg: "bg-blue-950/85 hover:bg-blue-900/90 border-blue-500/50 shadow-blue-500/10",
      iconBg: "bg-blue-500/20 text-cyan-300 border-blue-400/40",
      titleHover: "group-hover:text-cyan-300",
      numColor: "text-cyan-400 font-black",
      footerBorder: "border-blue-800/80",
    },
    {
      num: "02",
      title: "HEALTHCARE",
      desc: "Clinics & Patient Portals",
      icon: HeartPulse,
      cardBg: "bg-emerald-950/85 hover:bg-emerald-900/90 border-emerald-500/50 shadow-emerald-500/10",
      iconBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
      titleHover: "group-hover:text-emerald-300",
      numColor: "text-emerald-400 font-black",
      footerBorder: "border-emerald-800/80",
    },
    {
      num: "03",
      title: "FINTECH",
      desc: "Payments & Banking Security",
      icon: CreditCard,
      cardBg: "bg-purple-950/85 hover:bg-purple-900/90 border-purple-500/50 shadow-purple-500/10",
      iconBg: "bg-purple-500/20 text-purple-300 border-purple-400/40",
      titleHover: "group-hover:text-purple-300",
      numColor: "text-purple-400 font-black",
      footerBorder: "border-purple-800/80",
    },
    {
      num: "04",
      title: "EDTECH",
      desc: "LMS & Online Academies",
      icon: GraduationCap,
      cardBg: "bg-amber-950/85 hover:bg-amber-900/90 border-amber-500/50 shadow-amber-500/10",
      iconBg: "bg-amber-500/20 text-amber-300 border-amber-400/40",
      titleHover: "group-hover:text-amber-300",
      numColor: "text-amber-400 font-black",
      footerBorder: "border-amber-800/80",
    },
    {
      num: "05",
      title: "E-COMMERCE",
      desc: "D2C Stores & Checkout",
      icon: ShoppingBag,
      cardBg: "bg-rose-950/85 hover:bg-rose-900/90 border-rose-500/50 shadow-rose-500/10",
      iconBg: "bg-rose-500/20 text-rose-300 border-rose-400/40",
      titleHover: "group-hover:text-rose-300",
      numColor: "text-rose-400 font-black",
      footerBorder: "border-rose-800/80",
    },
    {
      num: "06",
      title: "REAL ESTATE",
      desc: "Property Portals & MLS",
      icon: Building2,
      cardBg: "bg-indigo-950/85 hover:bg-indigo-900/90 border-indigo-500/50 shadow-indigo-500/10",
      iconBg: "bg-indigo-500/20 text-indigo-300 border-indigo-400/40",
      titleHover: "group-hover:text-indigo-300",
      numColor: "text-indigo-400 font-black",
      footerBorder: "border-indigo-800/80",
    },
    {
      num: "07",
      title: "LOGISTICS",
      desc: "Fleet & Tracking Systems",
      icon: Truck,
      cardBg: "bg-teal-950/85 hover:bg-teal-900/90 border-teal-500/50 shadow-teal-500/10",
      iconBg: "bg-teal-500/20 text-teal-300 border-teal-400/40",
      titleHover: "group-hover:text-teal-300",
      numColor: "text-teal-400 font-black",
      footerBorder: "border-teal-800/80",
    },
    {
      num: "08",
      title: "HOSPITALITY",
      desc: "Hotels & Online Booking",
      icon: Utensils,
      cardBg: "bg-sky-950/85 hover:bg-sky-900/90 border-sky-500/50 shadow-sky-500/10",
      iconBg: "bg-sky-500/20 text-sky-300 border-sky-400/40",
      titleHover: "group-hover:text-sky-300",
      numColor: "text-sky-400 font-black",
      footerBorder: "border-sky-800/80",
    },
  ];

  return (
    <section id="sectors" className="py-20 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Engineering Workstation Photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/comparison_bg.jpg"
          alt="Engineering Workstation Background"
          fill
          className="object-cover object-center opacity-75"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/75" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
            <Globe className="w-3.5 h-3.5" />
            <span>SECTOR EXPERTISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            INDUSTRIES WE SERVE & TRANSFORM
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
            Tailored digital solutions, custom user flows, and high-converting platforms built for specific industries.
          </p>
        </div>

        {/* 8 Industry Cards with Distinct Background Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className={`${item.cardBg} backdrop-blur-md border p-6 rounded-2xl flex flex-col justify-between h-48 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer`}
              >
                <div>
                  {/* Top Row: Icon & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${item.iconBg} border flex items-center justify-center transition-colors`}>
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className={`text-xs font-mono font-bold ${item.numColor}`}>
                      {item.num}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className={`text-base font-extrabold mb-1 text-white ${item.titleHover} transition-colors leading-snug uppercase`}>
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Link */}
                <div className={`pt-3 border-t ${item.footerBorder} flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-white transition-colors`}>
                  <span>Explore Industry</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

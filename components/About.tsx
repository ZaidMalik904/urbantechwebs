"use client";

import React from "react";
import Image from "next/image";
import { Target, Users, Layout, Zap, Search, ShieldCheck } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Target,
      title: "Understanding Business Goals",
      desc: "We start by learning about your business, target audience, and specific objectives before writing code.",
    },
    {
      icon: Layout,
      title: "Modern User Experience",
      desc: "We design clean, intuitive web layouts that build visitor trust and guide them toward action.",
    },
    {
      icon: Users,
      title: "100% Mobile Responsive",
      desc: "Websites are tested across mobile phones, tablets, and desktops for flawless display.",
    },
    {
      icon: Zap,
      title: "Performance & Speed Focus",
      desc: "Code and visual assets are optimized to ensure fast loading times and smooth user interaction.",
    },
    {
      icon: Search,
      title: "SEO-Friendly Architecture",
      desc: "Clean technical markup built according to search engine standards for organic indexing.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Post-Launch Support",
      desc: "We remain available after deployment to assist with technical maintenance according to agreement.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Engineering Workspace Photo & Radial Glow Accents */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/images/why_us_bg.jpg"
          alt="UrbanTechWebs About Engineering Workspace"
          fill
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/85 to-slate-950/95" />
      </div>

      {/* Decorative Radial Glowing Spheres & Tech Grid Overlay */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              ABOUT URBANTECHWEBS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              About UrbanTechWebs
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 text-slate-300 text-base leading-relaxed">
            <p>
              UrbanTechWebs is a dedicated web development practice based in Noida Sector 62, Uttar Pradesh. We started UrbanTechWebs to help business owners get clean, handcoded, and lightning-fast websites without paying exorbitant agency fees or ending up with slow, broken templates.
            </p>
            <p>
              We focus on 3 core principles: direct communication with developers, sub-2s mobile load speeds, and seamless lead setup (WhatsApp, forms, phone calls) so your website actually drives business.
            </p>
          </div>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-md p-6 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-md bg-blue-500/10 text-cyan-400 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon className="w-5.5 h-5.5 stroke-[2]" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


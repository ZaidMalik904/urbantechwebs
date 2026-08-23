"use client";

import React from "react";
import Image from "next/image";
import { Search, Layout, Code2, Rocket, Clock, Check, ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Planning",
      duration: "Day 1",
      icon: Search,
      desc: "We analyze your business goals, target audience, sitemap structure, and project scope to build a clear blueprint.",
      checklist: ["Requirements Blueprint", "Site Architecture", "Project Timeline"],
      offset: "lg:translate-y-0",
      connectorType: "down",
      stepLabel: "Phase 01",
      cardBg: "bg-blue-950/90 border-blue-500/50 shadow-blue-500/10 hover:border-blue-400",
      numColor: "text-cyan-400",
      iconBg: "bg-blue-500/20 text-cyan-300 border-blue-400/40",
      checkColor: "text-cyan-400",
      borderLine: "border-blue-800/80",
    },
    {
      num: "02",
      title: "UI Design & Feedback",
      duration: "Days 2 - 4",
      icon: Layout,
      desc: "We craft modern visual mockups aligned with your brand identity and gather direct client feedback for revisions.",
      checklist: ["Mobile & Desktop UI", "Brand Color Scheme", "Interactive Preview"],
      offset: "lg:translate-y-16",
      connectorType: "up",
      stepLabel: "Phase 02",
      cardBg: "bg-emerald-950/90 border-emerald-500/50 shadow-emerald-500/10 hover:border-emerald-400",
      numColor: "text-emerald-400",
      iconBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
      checkColor: "text-emerald-400",
      borderLine: "border-emerald-800/80",
    },
    {
      num: "03",
      title: "Handcoded Engineering",
      duration: "Days 5 - 8",
      icon: Code2,
      desc: "We handcode your website using modern web engineering to ensure sub-2 second load speeds, mobile responsiveness, and SEO readiness.",
      checklist: ["Clean Handcoded Code", "API Integrations", "Speed Optimization"],
      offset: "lg:translate-y-0",
      connectorType: "down",
      stepLabel: "Phase 03",
      cardBg: "bg-purple-950/90 border-purple-500/50 shadow-purple-500/10 hover:border-purple-400",
      numColor: "text-purple-400",
      iconBg: "bg-purple-500/20 text-purple-300 border-purple-400/40",
      checkColor: "text-purple-400",
      borderLine: "border-purple-800/80",
    },
    {
      num: "04",
      title: "Testing, Launch & Support",
      duration: "Days 9 - 10",
      icon: Rocket,
      desc: "We conduct cross-device testing, configure your domain and SSL security, and launch your website with full admin access.",
      checklist: ["Cross-Device Testing", "Live Domain Setup", "Full Source Code"],
      offset: "lg:translate-y-16",
      connectorType: "none",
      stepLabel: "Phase 04",
      cardBg: "bg-amber-950/90 border-amber-500/50 shadow-amber-500/10 hover:border-amber-400",
      numColor: "text-amber-400",
      iconBg: "bg-amber-500/20 text-amber-300 border-amber-400/40",
      checkColor: "text-amber-400",
      borderLine: "border-amber-800/80",
    },
  ];

  return (
    <section id="process" className="pt-20 pb-32 sm:pb-36 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Engineering Team Photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/process_bg.jpg"
          alt="Software Engineering Team Workspace Background"
          fill
          className="object-cover object-center opacity-85"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-950/25 to-slate-950/45" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-md">
            <span>DEVELOPMENT METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            From Concept To <span className="text-blue-500">Live Production</span> Website
          </h2>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
            A transparent 4-phase engineering workflow designed for sub-2s speeds, zero delays, and seamless project execution.
          </p>
        </div>

        {/* 4 Cards Connected Zig-Zag Grid with Distinct Background Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`relative flex flex-col justify-between ${step.cardBg} backdrop-blur-md border p-6 sm:p-7 rounded-2xl shadow-2xl transition-all duration-300 ${step.offset}`}
              >
                {/* Connector Badge linking to next card (Desktop) */}
                {step.connectorType !== "none" && (
                  <div className="hidden lg:flex items-center gap-1.5 absolute -right-6 top-6 z-20 bg-slate-950 border border-slate-800 text-slate-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    <span>NEXT</span>
                    {step.connectorType === "down" ? (
                      <ArrowDownRight className="w-3.5 h-3.5 text-blue-400 animate-bounce" />
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 animate-bounce" />
                    )}
                  </div>
                )}

                <div>
                  {/* Top Row: Number & Estimated Time */}
                  <div className={`flex items-center justify-between pb-4 mb-5 border-b ${step.borderLine}`}>
                    <div className="flex items-center gap-2">
                      <span className={`text-3xl font-black font-mono ${step.numColor}`}>
                        {step.num}
                      </span>
                      <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider font-mono">
                        {step.stepLabel}
                      </span>
                    </div>
                    
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-200 bg-slate-950/80 border border-slate-800/80 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-blue-400" />
                      <span>{step.duration}</span>
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 ${step.iconBg} border rounded-xl flex-shrink-0`}>
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Key Deliverables Output */}
                <div className={`pt-4 border-t ${step.borderLine} space-y-2`}>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Phase Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {step.checklist.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                        <Check className={`w-3.5 h-3.5 ${step.checkColor} flex-shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

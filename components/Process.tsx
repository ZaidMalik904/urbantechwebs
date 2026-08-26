"use client";

import React from "react";
import Image from "next/image";
import {
  Search,
  Map,
  Paintbrush,
  Code2,
  CheckCircle2,
  Rocket,
  Clock,
  Utensils,
  Scissors,
  ShoppingBag,
  Briefcase,
  Building2,
  Tag,
  UserCheck,
  Home,
  Compass,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "1-on-1 Discovery Call",
      icon: Search,
      desc: "We discuss your business offerings, target clients, reference styles, and specific project goals.",
      image: "/images/process_step_1.jpg",
      badge: "Developer Consultation",
      cardBg: "bg-blue-950/90 border-blue-500/50 shadow-blue-500/10 hover:border-blue-400",
      numColor: "text-cyan-400",
      iconBg: "bg-blue-500/20 text-cyan-300 border-blue-400/40",
      borderLine: "border-blue-800/80",
    },
    {
      num: "02",
      title: "Scope & Clear Quote",
      icon: Map,
      desc: "We send you a simple, transparent proposal listing exact pages, features, and delivery timeline.",
      image: "/images/process_step_2.jpg",
      badge: "Project Scope & Proposal",
      cardBg: "bg-emerald-950/90 border-emerald-500/50 shadow-emerald-500/10 hover:border-emerald-400",
      numColor: "text-emerald-400",
      iconBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
      borderLine: "border-emerald-800/80",
    },
    {
      num: "03",
      title: "Custom UI Layout",
      icon: Paintbrush,
      desc: "We design your website layout and visual branding, adjusting based on your feedback.",
      image: "/images/process_step_3.jpg",
      badge: "Custom UI Design",
      cardBg: "bg-purple-950/90 border-purple-500/50 shadow-purple-500/10 hover:border-purple-400",
      numColor: "text-purple-400",
      iconBg: "bg-purple-500/20 text-purple-300 border-purple-400/40",
      borderLine: "border-purple-800/80",
    },
    {
      num: "04",
      title: "Custom Website Coding",
      icon: Code2,
      desc: "We build your website with sub-2s loading speed, mobile responsiveness, and clean technical markup.",
      image: "/images/process_step_4.jpg",
      badge: "Custom Web Coding",
      cardBg: "bg-indigo-950/90 border-indigo-500/50 shadow-indigo-500/10 hover:border-indigo-400",
      numColor: "text-indigo-400",
      iconBg: "bg-indigo-500/20 text-indigo-300 border-indigo-400/40",
      borderLine: "border-indigo-800/80",
    },
    {
      num: "05",
      title: "Mobile & Lead Testing",
      icon: CheckCircle2,
      desc: "We test WhatsApp lead buttons, contact forms, and layout responsiveness across smartphones and laptops.",
      image: "/images/process_step_5.jpg",
      badge: "Mobile & Speed QA",
      cardBg: "bg-amber-950/90 border-amber-500/50 shadow-amber-500/10 hover:border-amber-400",
      numColor: "text-amber-400",
      iconBg: "bg-amber-500/20 text-amber-300 border-amber-400/40",
      borderLine: "border-amber-800/80",
    },
    {
      num: "06",
      title: "Live Launch & Support",
      icon: Rocket,
      desc: "We connect your custom domain, SSL certificate, cloud hosting, and provide post-launch support.",
      image: "/images/process_step_6.jpg",
      badge: "Live Launch & Deployment",
      cardBg: "bg-rose-950/90 border-rose-500/50 shadow-rose-500/10 hover:border-rose-400",
      numColor: "text-rose-400",
      iconBg: "bg-rose-500/20 text-rose-300 border-rose-400/40",
      borderLine: "border-rose-800/80",
    },
  ];

  const categories = [
    { name: "Restaurants & Food", icon: Utensils, desc: "Menus, online ordering, and location pages." },
    { name: "Salons & Spas", icon: Scissors, desc: "Services showcase and appointment booking." },
    { name: "Retail Businesses", icon: ShoppingBag, desc: "Store catalogs and product displays." },
    { name: "Service Businesses", icon: Briefcase, desc: "Lead acquisition and service packages." },
    { name: "Startups & Tech", icon: Rocket, desc: "MVP web apps, landing pages, and SaaS portals." },
    { name: "Agencies & Firms", icon: Building2, desc: "Corporate branding and portfolio showcases." },
    { name: "E-Commerce Brands", icon: Tag, desc: "Online stores, shopping carts, and checkout." },
    { name: "Professionals", icon: UserCheck, desc: "Consultants, lawyers, doctors, and creators." },
    { name: "Real Estate", icon: Home, desc: "Property listings, lead forms, and galleries." },
    { name: "Travel & Hospitality", icon: Compass, desc: "Tours, hotels, and vacation package booking." },
  ];

  return (
    <section id="process" className="py-20 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Engineering Workspace Photo */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/images/process_bg.jpg"
          alt="UrbanTechWebs Process Workspace"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/85 to-slate-950/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider rounded-full backdrop-blur-md">
            TRANSPARENT WORKFLOW
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Our 6-Step Development Process
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            A clear 6-step process ensuring your website is completed efficiently, tested thoroughly, and deployed on time.
          </p>

          {/* Styled Premium Delivery Timeline Badge */}
          <div className="inline-flex sm:flex items-center gap-4 sm:gap-5 p-4 sm:p-5 px-5 sm:px-7 bg-slate-900/95 border border-slate-800 rounded-2xl text-left w-full max-w-xl mx-auto mt-3 shadow-xl shadow-cyan-950/30 backdrop-blur-md">
            {/* Left Large Icon Container */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 text-cyan-400 shadow-inner">
              <Clock className="w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 stroke-[2.2]" />
            </div>

            {/* Right Text Block */}
            <div className="space-y-1 flex-1">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                Typical Delivery Timeline
              </span>
              <p className="text-xs sm:text-base font-bold text-white leading-tight">
                7–14 working days <span className="text-slate-400 font-normal text-xs sm:text-sm block sm:inline">depending on project requirements</span>
              </p>
            </div>
          </div>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`relative flex flex-col justify-between ${step.cardBg} backdrop-blur-md border p-6 sm:p-7 rounded-md shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group`}
              >
                <div>
                  {/* Step Real Image Container */}
                  <div className="relative w-full aspect-16/9 rounded-md overflow-hidden mb-6 border border-slate-700/80 shadow-md">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-700/80 text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider backdrop-blur-sm">
                      {step.badge}
                    </span>
                  </div>

                  <div className={`flex items-center justify-between pb-4 mb-4 border-b ${step.borderLine}`}>
                    <span className={`text-2xl font-black font-mono ${step.numColor}`}>
                      {step.num}
                    </span>

                    <div className={`p-2.5 ${step.iconBg} border rounded-md flex-shrink-0`}>
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Integrated Subsection: WHO WE SERVE / Businesses We Work With */}
        <div id="sectors" className="mt-20 pt-16 border-t border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              <Globe className="w-3.5 h-3.5" />
              <span>WHO WE SERVE</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Businesses We Work With
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Tailored digital solutions built around the specific workflow and requirements of your industry.
            </p>
          </div>

          {/* Mobile Viewports: 3-Row Auto-Animate Marquee (100% Full-Bleed Edge-to-Edge) */}
          <div className="block sm:hidden overflow-hidden -mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full space-y-3.5 my-6">
            <style jsx>{`
              @keyframes serveMarqueeLeft {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-33.333%);
                }
              }
              @keyframes serveMarqueeRight {
                0% {
                  transform: translateX(-33.333%);
                }
                100% {
                  transform: translateX(0%);
                }
              }
              .animate-serve-left {
                display: flex;
                width: max-content;
                animation: serveMarqueeLeft 16s linear infinite;
              }
              .animate-serve-right {
                display: flex;
                width: max-content;
                animation: serveMarqueeRight 16s linear infinite;
              }
            `}</style>

            {/* Row 1: Leftward Motion */}
            <div className="animate-serve-left gap-3">
              {[
                ...categories.slice(0, 3),
                ...categories.slice(0, 3),
                ...categories.slice(0, 3),
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-md flex items-center gap-3 flex-shrink-0 w-72"
                  >
                    <div className="w-9 h-9 rounded-md bg-blue-500/10 text-cyan-400 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4.5 h-4.5 stroke-[2]" />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-xs font-bold text-white leading-tight truncate">{item.name}</h4>
                      <p className="text-[10px] text-slate-400 leading-tight mt-0.5 truncate">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Row 2: Rightward Motion */}
            <div className="animate-serve-right gap-3">
              {[
                ...categories.slice(3, 7),
                ...categories.slice(3, 7),
                ...categories.slice(3, 7),
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-md flex items-center gap-3 flex-shrink-0 w-72"
                  >
                    <div className="w-9 h-9 rounded-md bg-blue-500/10 text-cyan-400 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4.5 h-4.5 stroke-[2]" />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-xs font-bold text-white leading-tight truncate">{item.name}</h4>
                      <p className="text-[10px] text-slate-400 leading-tight mt-0.5 truncate">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Row 3: Leftward Motion */}
            <div className="animate-serve-left gap-3">
              {[
                ...categories.slice(7, 10),
                ...categories.slice(7, 10),
                ...categories.slice(7, 10),
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-md flex items-center gap-3 flex-shrink-0 w-72"
                  >
                    <div className="w-9 h-9 rounded-md bg-blue-500/10 text-cyan-400 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4.5 h-4.5 stroke-[2]" />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-xs font-bold text-white leading-tight truncate">{item.name}</h4>
                      <p className="text-[10px] text-slate-400 leading-tight mt-0.5 truncate">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 10 Industry Cards Grid (Tablet & Desktop) */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/90 border border-slate-800 p-5 rounded-md flex flex-col justify-between hover:border-blue-500/50 hover:bg-slate-900 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-md bg-blue-500/10 text-cyan-400 border border-blue-500/20 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>

                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Prompt */}
          <div className="mt-10 text-center bg-slate-900/90 border border-slate-800 p-6 rounded-md max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-300 text-xs sm:text-sm font-medium text-left">
              <strong className="text-white font-bold">Need something different?</strong> We can build a solution around your specific business requirements.
            </p>

            <a
              href="https://wa.me/917827775353?text=Hi%20UrbanTechWebs%2C%20I%20have%20a%20custom%20website%20requirement%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Talk To Us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}


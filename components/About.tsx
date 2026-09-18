"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Smartphone, ShieldCheck, Sparkles } from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";

export default function About() {
  const { openQuoteModal } = useQuoteModal();
  const highlights = [
    {
      icon: MessageSquare,
      title: "Direct Developer Contact",
      desc: "Speak directly with the team building your website, with no middle managers or sales channels.",
    },
    {
      icon: Smartphone,
      title: "Built for Real Phones",
      desc: "Tested on real smartphones and laptops so your customers get a clean, fast experience.",
    },
    {
      icon: ShieldCheck,
      title: "Clear Scope & Help",
      desc: "Clear project scope agreements with full transparency, plus support after your website is deployed.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Engineering Workspace Photo & Overlay */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Image
          src="/images/why_us_bg.jpg"
          alt="UrbanTechWebs About Workspace"
          fill
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950/95" />
      </div>

      {/* Radial Glow Accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-10 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Interior Designed Glassmorphism Card */}
        <div className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-8 sm:p-12 lg:p-14 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/40 transition-all duration-500">
          
          {/* Card Ambient Internal Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          {/* Card Header & Text Narrative */}
          <div className="max-w-3xl mx-auto text-center space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 fill-cyan-400" />
              <span>ABOUT US</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              About UrbanTech Webs
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal pt-2">
              <p>
                UrbanTech Webs is a professional web development and website design company. We build fast, responsive, and user-friendly websites for small businesses, local service providers,{" "}
                <Link href="/ecommerce-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                  e-commerce store development
                </Link>{" "}
                clients, corporate agencies, and growing startups.
              </p>
              <p>
                Our core focus is delivering practical web solutions that look great on mobile devices, load quickly, and make it easy for potential clients to reach you. From{" "}
                <Link href="/web-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                  custom web development
                </Link>{" "}
                and modern{" "}
                <Link href="/website-design" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                  UI/UX website design
                </Link>{" "}
                to domain setup and post-launch technical assistance, we handle every stage of your digital project. Read more on our{" "}
                <Link href="/about" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                  company about page
                </Link>{" "}
                or{" "}
                <Link href="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                  contact us for a consultation
                </Link>.
              </p>
            </div>
          </div>

          {/* Interior Designed 3 Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12 pt-10 border-t border-slate-800/80 relative z-10">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-950/70 border border-slate-800 rounded-md p-5 sm:p-6 text-center space-y-2.5 hover:border-blue-500/50 hover:bg-slate-950/90 transition-all duration-300 group/item"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-cyan-400 border border-blue-500/20 flex items-center justify-center mx-auto group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover/item:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center relative z-10">
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all hover:scale-105 cursor-pointer"
            >
              <span>Get in Touch With Our Team</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

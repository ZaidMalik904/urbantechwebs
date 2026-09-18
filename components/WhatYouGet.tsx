"use client";

import React from "react";
import { Smartphone, Zap, MessageSquare, Search, Globe, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";

interface WhatYouGetProps {
  onOpenQuoteModal?: () => void;
}

export default function WhatYouGet({ onOpenQuoteModal }: WhatYouGetProps) {
  const { openQuoteModal } = useQuoteModal();
  const handleQuote = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      openQuoteModal();
    }
  };
  const packageDeliverables = [
    {
      id: "responsive",
      icon: Smartphone,
      title: "Responsive & Mobile-Friendly Layout",
      desc: "Clean layout optimized for smooth navigation across smartphones, tablets, and desktops.",
    },
    {
      id: "form",
      icon: MessageSquare,
      title: "Contact Form Integration",
      desc: "Simple contact forms allowing visitors to submit project enquiries directly to your email.",
    },
    {
      id: "whatsapp",
      icon: MessageSquare,
      title: "WhatsApp Integration",
      desc: "1-Click direct WhatsApp button for instant customer messaging and quick response.",
    },
    {
      id: "domain",
      icon: Globe,
      title: "Domain & Hosting Connection",
      desc: "Full assistance linking your custom domain name and cloud hosting server.",
    },
    {
      id: "ssl",
      icon: ShieldCheck,
      title: "SSL HTTPS Setup",
      desc: "Secure SSL padlock installation for visitor data privacy and search engine trust.",
    },
    {
      id: "seo",
      icon: Search,
      title: "Basic SEO Setup",
      desc: "Clean technical HTML structure, descriptive meta titles, and page description setup.",
    },
    {
      id: "maps",
      icon: Globe,
      title: "Maps & Location Integration",
      desc: "Add maps and location-based features when required for your business.",
    },
    {
      id: "social",
      icon: Sparkles,
      title: "Social Media Links",
      desc: "Direct icons connecting website visitors to your official social channels.",
    },
    {
      id: "speed",
      icon: Zap,
      title: "Performance Optimization",
      desc: "Image compression and lightweight code structure for fast page loading.",
    },
    {
      id: "deployment",
      icon: Globe,
      title: "Website Deployment",
      desc: "Complete end-to-end production deployment making your website live on the web.",
    },
    {
      id: "support",
      icon: ShieldCheck,
      title: "Post-Launch Support & Access",
      desc: "Agreed post-launch technical assistance and admin management access where applicable.",
    },
  ];

  return (
    <section id="deliverables" className="py-20 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header (Centered Container) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WEBSITE INCLUSIONS</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            What You Get With Your Website
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Essential features and setup included to give your business a solid, functional online presence.
          </p>
        </div>

        {/* Single Responsive Grid for Deliverables (No Duplicate DOM Mapping) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-14">
          {packageDeliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-md p-5 sm:p-6 hover:border-blue-500/60 hover:bg-slate-900 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded-md bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note Bar Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
            <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <span>
              <strong className="text-white font-bold">Project Note:</strong> Specific features, page count and integrations depend on your custom project requirements.
            </span>
          </div>

          <button
            onClick={handleQuote}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <span>GET A FREE WEBSITE QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

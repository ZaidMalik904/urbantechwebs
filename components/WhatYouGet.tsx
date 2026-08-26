"use client";

import React from "react";
import Image from "next/image";
import { Smartphone, Zap, MessageSquare, Search, Globe, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

interface WhatYouGetProps {
  onOpenQuoteModal?: () => void;
}

export default function WhatYouGet({ onOpenQuoteModal }: WhatYouGetProps) {
  const packageDeliverables = [
    {
      id: "responsive",
      icon: Smartphone,
      title: "100% Touch Responsive UI",
      desc: "Pixel-perfect layout optimized across iPhone, Android smartphones, tablets, and wide desktop screens.",
      image: "/images/package_responsive_ui_v2.jpg",
      badge: "Cross-Device QA Passed",
      highlights: ["Mobile Touch Navigation", "Sub-1s Touch Response", "Retina Display Sharpness"],
    },
    {
      id: "speed",
      icon: Zap,
      title: "Sub-2 Second Page Load",
      desc: "Optimized asset pipeline, lightweight markup, and browser caching ensuring near-instant page rendering.",
      image: "/images/package_speed_perf_v2.jpg",
      badge: "Core Web Vitals Optimized",
      highlights: ["90+ Google PageSpeed", "Image Compression Pipeline", "Sub-2s First Contentful Paint"],
    },
    {
      id: "whatsapp",
      icon: MessageSquare,
      title: "Direct WhatsApp Lead Routing",
      desc: "1-Click direct WhatsApp inquiry integration connecting interested website visitors straight to your phone.",
      image: "/images/package_whatsapp_leads_v2.jpg",
      badge: "Instant Customer Intake",
      highlights: ["Pre-filled Service Messages", "Floating Sticky Action Bar", "High-Converting Placement"],
    },
    {
      id: "ssl",
      icon: ShieldCheck,
      title: "Free SSL & Domain Security",
      desc: "HTTPS green padlock certificate installation protecting visitor data and building immediate buyer trust.",
      image: "/images/package_ssl_security_v2.jpg",
      badge: "Bank-Grade Encryption",
      highlights: ["SSL Certificate Setup", "HTTP to HTTPS Redirection", "DDoS Protected Infrastructure"],
    },
    {
      id: "seo",
      icon: Search,
      title: "SEO & Google Maps Setup",
      desc: "Search-engine-ready meta structure, schema tags, and Google Business profile linking for local organic reach.",
      image: "/images/package_seo_maps_v2.jpg",
      badge: "Search Engine Ready",
      highlights: ["Meta Description & Titles", "Google Business Listing Link", "Clean Semantic HTML5"],
    },
    {
      id: "cloud",
      icon: Globe,
      title: "Cloud Hosting Deployment",
      desc: "Complete end-to-end setup of custom domain DNS records, cloud server hosting, and production launch.",
      image: "/images/package_cloud_domain_v2.jpg",
      badge: "99.9% Uptime SLA",
      highlights: ["Custom Domain DNS Link", "High-Availability Server", "Post-Launch Tech Support"],
    },
  ];

  return (
    <section id="deliverables" className="py-14 sm:py-18 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMPLETE LAUNCH PACKAGE</span>
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            What You Get In Every Package
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            Every project includes essential features engineered for speed, mobile usability, lead generation, and security.
          </p>
        </div>

        {/* 6 Core Deliverables Grid Cards with Dedicated Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {packageDeliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-md p-5 hover:border-blue-500/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Card Image Matching Deliverable Title */}
                  <div className="relative w-full aspect-16/9 rounded-md overflow-hidden mb-4 border border-slate-800 shadow-md">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-2.5 left-2.5 p-1.5 rounded-md bg-slate-950/90 border border-slate-800 text-cyan-400 backdrop-blur-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Package Note & CTA Bar */}
        <div className="bg-slate-900 border border-slate-800 rounded-md p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
            <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <span>
              <strong className="text-white font-bold">100% Launch Guarantee:</strong> Full setup including domain connection, mobile testing, and post-launch support.
            </span>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <span>GET FREE CONSULTATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}


"use client";

import React from "react";
import { Zap, Smartphone, Search, ShieldCheck } from "lucide-react";

export default function Stats() {
  const highlights = [
    {
      icon: Zap,
      title: "Sub-2s Page Loading",
      desc: "Optimized Core Web Vitals for fast loading speeds.",
    },
    {
      icon: Smartphone,
      title: "100% Mobile Responsive",
      desc: "Tested across smartphones, tablets, and desktop viewports.",
    },
    {
      icon: Search,
      title: "SEO-Friendly Setup",
      desc: "Clean semantic HTML structure for search engine crawlers.",
    },
    {
      icon: ShieldCheck,
      title: "Post-Launch Support",
      desc: "Continued technical assistance according to project package.",
    },
  ];

  return (
    <section className="relative z-30 -mt-10 sm:-mt-12 md:-mt-14 py-0 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Floating Bold Red Banner Box */}
        <div className="bg-gradient-to-r from-red-600 via-red-600 to-rose-700 border border-red-500/90 shadow-2xl shadow-red-600/35 p-6 sm:p-8 rounded-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3.5 sm:pr-4 sm:border-r border-red-500/60 last:border-0">
                  <div className="w-10 h-10 rounded-md bg-white/20 text-white border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Icon className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-xs text-red-100 mt-0.5 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}




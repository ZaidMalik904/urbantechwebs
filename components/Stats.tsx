"use client";

import React from "react";
import { Zap, Smartphone, Search, ShieldCheck } from "lucide-react";

export default function Stats() {
  const highlights = [
    {
      icon: Zap,
      title: "Fast Page Loading",
      desc: "Optimized image sizes and code structure for quick page load times.",
    },
    {
      icon: Smartphone,
      title: "100% Mobile Responsive",
      desc: "Designed and tested to work smoothly across smartphones and tablets.",
    },
    {
      icon: Search,
      title: "SEO-Friendly Setup",
      desc: "Clean semantic HTML structure that helps search engines index your pages.",
    },
    {
      icon: ShieldCheck,
      title: "Post-Launch Support",
      desc: "Ongoing assistance for updates and maintenance after deployment.",
    },
  ];

  return (
    <section className="relative z-30 -mt-10 sm:-mt-12 md:-mt-14 py-0 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Floating Bold Red Banner Box (100% Full Width on Mobile) */}
        <div className="bg-gradient-to-r from-red-600 via-red-600 to-rose-700 border-y sm:border border-red-500/90 shadow-2xl shadow-red-600/35 py-4 px-0 sm:p-8 -mx-4 sm:mx-0 rounded-none sm:rounded-md overflow-hidden">
          
          {/* Mobile Viewports: Auto-Animate Marquee (100% Flush Edge-to-Edge) */}
          <div className="block sm:hidden overflow-hidden w-full">
            <style jsx>{`
              @keyframes statsMarqueeLeft {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-33.333%);
                }
              }
              .animate-stats-marquee {
                display: flex;
                width: max-content;
                animation: statsMarqueeLeft 15s linear infinite;
              }
              .animate-stats-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="animate-stats-marquee gap-3">
              {[
                ...highlights,
                ...highlights,
                ...highlights,
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/15 border border-white/25 rounded-md p-3.5 px-4 text-white flex items-center gap-3 flex-shrink-0 w-64"
                  >
                    <div className="w-9 h-9 rounded-md bg-white/20 text-white border border-white/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4.5 h-4.5 stroke-[2.5]" />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-xs font-black uppercase tracking-wider truncate">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-red-100 font-medium truncate mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tablet & Desktop Grid */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
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




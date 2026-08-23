"use client";

import React from "react";
import { Star, ShieldCheck } from "lucide-react";

export default function Stats() {
  return (
    <section className="relative z-30 -mt-10 sm:-mt-12 md:-mt-14 py-0 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Floating Dark Navy Banner Box with Increased Height & Spacious Padding */}
        <div className="bg-[#0B192C] border border-slate-700/80 shadow-2xl shadow-slate-900/40 p-6 sm:p-8 md:p-9 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 items-center">
            
            {/* Col 1: EXCELLENT + 5 Stars */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start justify-center md:pr-8 md:border-r border-slate-700/80 space-y-2 text-center md:text-left">
              <span className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-white">
                EXCELLENT
              </span>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Col 2: 4.9 / 5 BASED ON REVIEWS */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start justify-center md:px-8 md:border-r border-slate-700/80 space-y-1 text-center md:text-left">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">4.9</span>
                <span className="text-sm sm:text-base font-bold text-slate-400">/ 5</span>
              </div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                BASED ON 150+ CLIENT REVIEWS
              </span>
            </div>

            {/* Col 3: 100% SATISFACTION GUARANTEED + Description */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start justify-center md:pl-8 text-center md:text-left space-y-2.5 md:space-y-0 md:flex-row md:gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
                  100% SATISFACTION GUARANTEED
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Join dozens of satisfied businesses and clients who trust UrbanTechWebs to build their high-converting digital presence.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}



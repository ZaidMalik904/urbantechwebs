"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

const words = ["Grow.", "Succeed.", "Scale.", "Thrive.", "Lead."];

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [reverse, setReverse] = React.useState(false);

  // Typewriter auto-animation logic with stable line-height
  React.useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 60 : 110);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white -mt-[108px] min-h-screen flex flex-col justify-center pt-36 pb-16 sm:pb-20">
      
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpeg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center opacity-85"
        />
        {/* Soft Dark Overlay for Contrast & Clear Image Visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/75" />
      </div>

      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-6 sm:space-y-8">
        
        {/* Top Tag Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide shadow-xs backdrop-blur-xs">
          <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
          <span>Top Web Development Agency & Website Designer</span>
        </div>

        {/* Main Headline with Zero-Movement Typewriter Word */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
          We Build Custom Websites That Help Businesses{" "}
          <span className="text-cyan-400 inline-flex items-center font-black min-w-[4.5ch] text-left">
            <span>{words[index].substring(0, subIndex) || "\u00A0"}</span>
            <span className="inline-block w-[3px] h-6 sm:h-10 lg:h-12 bg-cyan-400 ml-0.5 animate-pulse rounded flex-shrink-0" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Professional custom web development engineered for sub-2s speed, mobile responsiveness, and high Google search rankings.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-1">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 font-semibold text-sm sm:text-base shadow-xs backdrop-blur-xs transition-all text-center"
          >
            Explore Live Work
          </a>
        </div>

        {/* Feature Checklist Tags */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-slate-800/80 max-w-3xl mx-auto">
          {[
            "Sub-2s Speed Tuning",
            "SEO Search Indexing",
            "100% Mobile Responsive",
            "1 Year Support Included",
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}




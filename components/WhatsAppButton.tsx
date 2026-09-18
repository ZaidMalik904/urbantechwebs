"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, FileText } from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";

export default function FloatingActions() {
  const { openQuoteModal } = useQuoteModal();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [showScrollActions, setShowScrollActions] = useState(false);

  // Show floating actions ONLY when user scrolls down the page (> 150px)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowScrollActions(true);
      } else {
        setShowScrollActions(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. Desktop Floating Bottom-Right Action Buttons (Hidden initially, Shown ONLY on scroll) */}
      <div
        className={`hidden sm:flex fixed bottom-6 right-6 z-50 flex-col items-center gap-4 floating-desktop-actions transition-all duration-300 ${
          showScrollActions
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-12 pointer-events-none"
        }`}
      >
        {/* Phone Call Button */}
        <div className="relative flex items-center group">
          {/* Tooltip */}
          <div
            className={`absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl border border-slate-800 whitespace-nowrap transition-all duration-200 pointer-events-none ${
              activeTooltip === "call" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
            }`}
          >
            Call Us Now (+91 78277 75353)
          </div>

          <a
            href="tel:+917827775353"
            data-gtm="floating-phone"
            aria-label="Call Us Now"
            onMouseEnter={() => setActiveTooltip("call")}
            onMouseLeave={() => setActiveTooltip(null)}
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
          >
            <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping pointer-events-none opacity-40" />
            <Phone className="w-6 h-6 fill-white/20 relative z-10" />
          </a>
        </div>

        {/* WhatsApp Button */}
        <div className="relative flex items-center group">
          {/* Tooltip */}
          <div
            className={`absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl border border-slate-800 whitespace-nowrap transition-all duration-200 pointer-events-none ${
              activeTooltip === "whatsapp" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
            }`}
          >
            Chat on WhatsApp (+91 78277 75353)
          </div>

          <a
            href="https://wa.me/917827775353?text=Hi%20UrbanTechWebs%2C%20I%20am%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="floating-whatsapp"
            aria-label="Chat on WhatsApp"
            onMouseEnter={() => setActiveTooltip("whatsapp")}
            onMouseLeave={() => setActiveTooltip(null)}
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
          >
            <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-40" />
            <Image src="/images/whatsapp.svg" alt="WhatsApp" width={32} height={32} className="w-8 h-8 relative z-10" />
          </a>
        </div>
      </div>

      {/* 2. Mobile Sticky Bottom Action Bar (WhatsApp, Call, Get Quote — Shown ONLY on scroll) */}
      <div
        className={`flex sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950 border-t border-slate-800 p-0 gap-0 shadow-2xl mobile-bottom-actions transition-all duration-300 ${
          showScrollActions
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-full pointer-events-none"
        }`}
      >
        <a
          href="https://wa.me/917827775353?text=Hi%20UrbanTechWebs%2C%20I%20am%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="mobile-bar-whatsapp"
          className="flex-1 h-14 px-2 rounded-none bg-[#25D366] active:bg-[#20ba59] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer border-r border-emerald-600/50"
        >
          <Image src="/images/whatsapp.svg" alt="WhatsApp" width={18} height={18} className="w-4.5 h-4.5 flex-shrink-0" />
          <span>WhatsApp</span>
        </a>

        <a
          href="tel:+917827775353"
          data-gtm="mobile-bar-phone"
          className="flex-1 h-14 px-2 rounded-none bg-blue-600 active:bg-blue-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer border-r border-blue-500/50"
        >
          <Phone className="w-4.5 h-4.5 fill-white/20 flex-shrink-0" />
          <span>Call</span>
        </a>

        <button
          onClick={() => openQuoteModal()}
          data-gtm="mobile-bar-quote"
          className="flex-1 h-14 px-2 rounded-none bg-slate-900 active:bg-slate-800 text-cyan-400 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer border-l border-slate-800"
        >
          <FileText className="w-4.5 h-4.5 flex-shrink-0" />
          <span>Get Quote</span>
        </button>
      </div>
    </>
  );
}

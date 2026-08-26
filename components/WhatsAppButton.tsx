"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function FloatingActions() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      
      {/* 1. Phone Call Button (Top) */}
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
          aria-label="Call Us Now"
          onMouseEnter={() => setActiveTooltip("call")}
          onMouseLeave={() => setActiveTooltip(null)}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        >
          <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping pointer-events-none opacity-40" />
          <Phone className="w-6 h-6 fill-white/20 relative z-10" />
        </a>
      </div>

      {/* 2. WhatsApp Button (Bottom) */}
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
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setActiveTooltip("whatsapp")}
          onMouseLeave={() => setActiveTooltip(null)}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-40" />
          <Image src="/images/whatsapp.svg" alt="WhatsApp" width={32} height={32} className="w-8 h-8 relative z-10" />
        </a>
      </div>

    </div>
  );
}


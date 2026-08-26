"use client";

import React, { useState } from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  darkText?: boolean;
}

export default function Logo({
  className = "",
  size = "md",
  darkText = true,
}: LogoProps) {
  const [imgError, setImgError] = useState(false);

  const logoIconSizes = {
    sm: "h-10 w-auto",
    md: "h-13 sm:h-14 w-auto",
    lg: "h-18 sm:h-20 w-auto",
  };

  const titleSizes = {
    sm: "text-lg",
    md: "text-xl sm:text-[22px]",
    lg: "text-2xl sm:text-3xl",
  };

  const subtextSizes = {
    sm: "text-[7px]",
    md: "text-[8.5px] sm:text-[9.5px]",
    lg: "text-[11px]",
  };

  return (
    <div className={`flex items-center gap-1.5 group cursor-pointer ${className}`}>
      
      {/* Left: User Logo Image (logo (2).png) */}
      {!imgError ? (
        <div className="relative flex items-center flex-shrink-0">
          <Image
            src="/images/logo (2).png"
            alt="UrbanTechwebs Logo Mark"
            width={90}
            height={90}
            className={`${logoIconSizes[size]} object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300`}
            onError={() => setImgError(true)}
            priority
          />
        </div>
      ) : (
        /* Fallback UT Icon Badge if image is unavailable */
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md flex-shrink-0">
          UT
        </div>
      )}

      {/* Right: Side-by-Side Brand Name Text & Tagline */}
      <div className="flex flex-col">
        {/* Brand Title: UrbanTechwebs */}
        <span
          className={`font-logo ${titleSizes[size]} font-black tracking-tight leading-none ${
            darkText ? "text-slate-900" : "text-white"
          }`}
        >
          Urban<span className="text-blue-500">Tech</span>
          <span className={darkText ? "text-slate-900" : "text-white"}>Webs</span>
        </span>

        {/* Tagline: DESIGN • DEVELOP • GROW */}
        <div className="flex items-center gap-1 mt-1">
          <span
            className={`font-logo font-bold tracking-[0.22em] uppercase ${subtextSizes[size]} ${
              darkText ? "text-slate-500" : "text-slate-400"
            }`}
          >
            DESIGN <span className="text-blue-500 font-extrabold">•</span> DEVELOP <span className="text-blue-500 font-extrabold">•</span> GROW
          </span>
        </div>
      </div>

    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface TopBarProps {
  onOpenQuoteModal?: () => void;
}

export default function TopBar({ onOpenQuoteModal }: TopBarProps) {
  // Announcements list (Free domain & hosting removed as requested)
  const announcements = [
    {
      text: "Custom Website Design & Development for Growing Businesses",
      action: "GET A QUOTE",
    },
    {
      text: "Fast, Responsive & SEO-Friendly Websites Delivered in 7–14 Working Days",
      action: "VIEW PROCESS",
    },
    {
      text: "Free Website Consultation — Discuss Your Project Requirements",
      action: "CONTACT US",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto rotate ticker every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  return (
    <div className="relative z-40 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white text-[11px] py-1 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous announcement"
          className="p-0.5 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Centered Message Content (Clickable) */}
        <div
          onClick={onOpenQuoteModal}
          className="flex-1 text-center font-medium tracking-wide truncate cursor-pointer hover:underline flex items-center justify-center gap-1.5 group"
        >
          <Sparkles className="w-3 h-3 text-amber-300 flex-shrink-0 animate-pulse" />
          <span className="truncate">
            {announcements[currentIndex].text}
          </span>
          <span className="font-extrabold text-amber-300 group-hover:translate-x-0.5 transition-transform hidden sm:inline">
            › {announcements[currentIndex].action}
          </span>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next announcement"
          className="p-0.5 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
}

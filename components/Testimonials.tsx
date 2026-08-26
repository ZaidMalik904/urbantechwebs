"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageSquareQuote, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "FARHAN MANSOORI",
      project: "Full-Stack Food Marketplace",
      hasImage: true,
      image: "/images/client_avatar_1.png",
      initial: "F",
      avatarBg: "bg-purple-600",
      review: "UrbanTechWebs delivered our food marketplace platform on time. The mobile response speed and WhatsApp order integration exceeded our expectations. Highly recommended!",
    },
    {
      id: 2,
      name: "DAVID MILLER",
      project: "Business Consultancy Portal",
      hasImage: true,
      image: "/images/client_avatar_2.png",
      initial: "D",
      avatarBg: "bg-emerald-600",
      review: "Extremely transparent 6-step process. They gave us a clear quote with exact page specifications, designed a stunning UI, and launched our corporate site without any hassle.",
    },
    {
      id: 3,
      name: "GURPREET SINGH",
      project: "Car Reservation Platform",
      hasImage: true,
      image: "/images/client_avatar_3.png",
      initial: "G",
      avatarBg: "bg-blue-600",
      review: "Our car rental website load speed went from 6 seconds down to sub-1.8 seconds after the redesign. Our online booking inquiries increased dramatically within 2 weeks.",
    },
    {
      id: 4,
      name: "PRIYA NAIR",
      project: "Tour & Travel Site",
      hasImage: false,
      image: "",
      initial: "P",
      avatarBg: "bg-purple-600",
      review: "UrbanTechWebs created our tour & vacation booking site with direct WhatsApp integration. Customer booking inquiries have been smooth since launch.",
    },
    {
      id: 5,
      name: "SURESH KUMAR",
      project: "Retail Store Platform",
      hasImage: false,
      image: "",
      initial: "S",
      avatarBg: "bg-emerald-600",
      review: "Great web development experience. They delivered our retail store platform with clean product category filters and solid mobile optimization.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const maxIndex = isMobile ? reviews.length : reviews.length - 2;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % maxIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200/80 rounded-full text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>CLIENT FEEDBACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            What Clients Say About Working With Us
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Real feedback from business owners and professionals who have partnered with UrbanTechWebs for their web projects.
          </p>
        </div>

        {/* Carousel Track */}
        <div
          className="overflow-hidden relative py-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (isMobile ? 100 + 6.5 : 100 / 3 + 1.2)}%)`,
            }}
          >
            {reviews.map((item) => (
              <div
                key={item.id}
                className="w-full md:w-[calc(33.333%-16px)] flex-shrink-0 bg-white border border-slate-200 p-7 rounded-md shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Avatar & Name */}
                  <div className="flex items-center gap-3 mb-4">
                    {item.hasImage ? (
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 flex-shrink-0 shadow-xs">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-11 h-11 rounded-full ${item.avatarBg} text-white font-black text-base flex items-center justify-center flex-shrink-0 shadow-xs`}
                      >
                        {item.initial}
                      </div>
                    )}

                    <div>
                      <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">
                        {item.name}
                      </h3>
                      <p className="text-slate-500 text-xs flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        <span>{item.project}</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    &quot;{item.review}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {[...Array(reviews.length - 2)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 transition-all rounded-full ${
                currentIndex === idx ? "w-8 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


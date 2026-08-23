"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "RAHUL SHARMA",
      time: "1 week ago",
      rating: 5,
      hasImage: true,
      image: "/client_avatar_1.png",
      initial: "R",
      avatarBg: "bg-purple-600",
      review: "Very fast delivery and affordable pricing compared to other agencies. The team built our food marketplace website with great care and complete responsiveness.",
    },
    {
      id: 2,
      name: "ANANYA VERMA",
      time: "2 weeks ago",
      rating: 5,
      hasImage: true,
      image: "/client_avatar_2.png",
      initial: "A",
      avatarBg: "bg-emerald-600",
      review: "Excellent service! We needed a high-performance website for our consultancy business, and UrbanTechWebs deployed it within 4 days. Highly recommended.",
    },
    {
      id: 3,
      name: "VIKRAM PATEL",
      time: "3 weeks ago",
      rating: 5,
      hasImage: true,
      image: "/client_avatar_3.png",
      initial: "V",
      avatarBg: "bg-blue-600",
      review: "The website speed optimization feature is really helpful. Our site loads in under 1.8 seconds and we are getting consistent client inquiries.",
    },
    {
      id: 4,
      name: "PRIYA NAIR",
      time: "1 month ago",
      rating: 5,
      hasImage: false,
      image: "",
      initial: "P",
      avatarBg: "bg-purple-600",
      review: "UrbanTechWebs created our tour & travel booking site with direct WhatsApp integration. Booking inquiries have grown over 40% since launch.",
    },
    {
      id: 5,
      name: "SURESH KUMAR",
      time: "1 month ago",
      rating: 5,
      hasImage: false,
      image: "",
      initial: "S",
      avatarBg: "bg-emerald-600",
      review: "Best web developer experience. They delivered our retail clothing store platform with clean product filters and mobile optimization.",
    },
    {
      id: 6,
      name: "AMITABH GUPTA",
      time: "2 months ago",
      rating: 5,
      hasImage: false,
      image: "",
      initial: "A",
      avatarBg: "bg-blue-600",
      review: "Flawless execution on our car rental reservation portal. Fast communication, no hidden costs, and delivered ahead of deadline.",
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

  // Auto slide Right-to-Left every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % maxIndex);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  return (
    <section id="testimonials" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
      
      {/* Huge Faint Quote Mark Background Watermarks */}
      <div className="absolute left-6 top-8 text-slate-200/50 font-serif text-[220px] font-black select-none pointer-events-none leading-none">
        “
      </div>
      <div className="absolute right-6 bottom-4 text-slate-200/50 font-serif text-[220px] font-black select-none pointer-events-none leading-none">
        ”
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header aligned with Website Theme */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-10 sm:w-14 h-[3px] bg-blue-600 inline-block" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-wide">
              WHAT OUR CUSTOMERS SAY
            </h2>
            <span className="w-10 sm:w-14 h-[3px] bg-blue-600 inline-block" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Don't just take our word for it. Read what satisfied business clients have to say about our web development services.
          </p>
        </div>

        {/* Auto-Animating Right-to-Left Track */}
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
                className="w-full md:w-[calc(33.333%-16px)] flex-shrink-0 bg-white border border-slate-100 p-7 sm:p-8 flex flex-col justify-between rounded-2xl shadow-md hover:shadow-lg transition-all min-h-[250px]"
              >
                <div>
                  {/* Top Row: Avatar + Name + Google G Logo */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      
                      {/* Avatar Image or Initial Circle */}
                      {item.hasImage ? (
                        <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 flex-shrink-0 shadow-xs">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
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
                        <h3 className="font-extrabold text-slate-900 text-sm uppercase tracking-wide">
                          {item.name}
                        </h3>
                        <p className="text-slate-400 text-xs">
                          {item.time}
                        </p>
                      </div>
                    </div>

                    {/* Google G Logo Badge on Top Right */}
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-100 shadow-xs flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                      </svg>
                    </div>
                  </div>

                  {/* 5 Star Rating */}
                  <div className="flex text-amber-400 gap-0.5 mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    "{item.review}"
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {[...Array(reviews.length - 2)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 transition-all rounded-none ${
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

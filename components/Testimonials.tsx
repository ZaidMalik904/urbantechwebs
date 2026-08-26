"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const GoogleGLogo = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Farhan Mansoori",
      project: "Full-Stack Food Marketplace",
      hasImage: true,
      image: "/images/client_avatar_1.png",
      initial: "F",
      avatarBg: "bg-purple-600",
      rating: 5,
      date: "2 weeks ago",
      review:
        "UrbanTechWebs delivered our food marketplace platform on time. The mobile response speed and WhatsApp order integration exceeded our expectations. Highly recommended!",
    },
    {
      id: 2,
      name: "David Miller",
      project: "Business Consultancy Portal",
      hasImage: true,
      image: "/images/client_avatar_2.png",
      initial: "D",
      avatarBg: "bg-emerald-600",
      rating: 5,
      date: "1 month ago",
      review:
        "Extremely transparent 6-step process. They gave us a clear quote with exact page specifications, designed a stunning UI, and launched our corporate site without any hassle.",
    },
    {
      id: 3,
      name: "Gurpreet Singh",
      project: "Car Reservation Platform",
      hasImage: true,
      image: "/images/client_avatar_3.png",
      initial: "G",
      avatarBg: "bg-blue-600",
      rating: 5,
      date: "3 weeks ago",
      review:
        "Our car rental website load speed went from 6 seconds down to sub-1.8 seconds after the redesign. Our online booking inquiries increased dramatically within 2 weeks.",
    },
    {
      id: 4,
      name: "Priya Nair",
      project: "Tour & Travel Site",
      hasImage: false,
      image: "",
      initial: "P",
      avatarBg: "bg-purple-600",
      rating: 5,
      date: "1 month ago",
      review:
        "UrbanTechWebs created our tour & vacation booking site with direct WhatsApp integration. Customer booking inquiries have been smooth since launch.",
    },
    {
      id: 5,
      name: "Suresh Kumar",
      project: "Retail Store Platform",
      hasImage: false,
      image: "",
      initial: "S",
      avatarBg: "bg-emerald-600",
      rating: 5,
      date: "2 months ago",
      review:
        "Great web development experience. They delivered our retail store platform with clean product category filters and solid mobile optimization.",
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
          {/* Authentic Google Review Rating Badge Header */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white border border-slate-200 rounded-full shadow-xs">
            <GoogleGLogo />
            <div className="flex items-center gap-1">
              <span className="text-xs font-black text-slate-900">5.0</span>
              <div className="flex text-amber-400 text-xs tracking-tight">
                ★★★★★
              </div>
            </div>
            <span className="text-[11px] font-semibold text-slate-600 border-l border-slate-200 pl-2.5">
              Verified Google Business Reviews
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            What Clients Say On Google
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Real, verified reviews from business owners and partners who have built their websites with UrbanTechWebs.
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
                className="w-full md:w-[calc(33.333%-16px)] flex-shrink-0 bg-white border border-slate-200 p-6 sm:p-7 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Avatar + Name + Google Badge */}
                  <div className="flex items-start justify-between mb-3.5">
                    <div className="flex items-center gap-3">
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
                        <h3 className="font-extrabold text-slate-900 text-sm tracking-tight flex items-center gap-1.5">
                          <span>{item.name}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                        </h3>
                        <p className="text-slate-500 text-[11px] font-medium">
                          {item.project}
                        </p>
                      </div>
                    </div>

                    <div className="p-1.5 rounded-full bg-slate-50 border border-slate-100 flex-shrink-0" title="Posted on Google Reviews">
                      <GoogleGLogo />
                    </div>
                  </div>

                  {/* Rating Stars & Timestamp */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-amber-400 text-sm tracking-tighter">
                      ★★★★★
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">
                      • {item.date}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                    &quot;{item.review}&quot;
                  </p>
                </div>

                {/* Footer Google Verification Tag */}
                <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <GoogleGLogo />
                    <span>Posted on Google Reviews</span>
                  </span>
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


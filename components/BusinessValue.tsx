"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, MessageSquare, LayoutGrid, Clock, CheckCircle2 } from "lucide-react";

export default function BusinessValue() {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Build Customer Trust",
      description: "A well-designed website gives customers a clear place to learn about your business, services and contact information.",
      image: "/images/value_trust_credibility.jpg",
      badge: "Customer Trust",
      highlights: [
        "Verified business information & contact details",
        "Clear presentation of past work & experience",
        "Secure SSL certificate for visitor safety",
      ],
      iconBg: "bg-blue-600 text-white",
      badgeBg: "bg-blue-100 text-blue-800 border-blue-300",
      cardBg: "bg-gradient-to-br from-blue-50/90 via-indigo-50/40 to-white border-blue-200 shadow-blue-950/5",
    },
    {
      icon: MessageSquare,
      title: "Get More Enquiries",
      description: "Make it easy for visitors to call, message on WhatsApp or submit an enquiry directly through your website.",
      image: "/images/value_whatsapp_enquiry.jpg",
      badge: "Direct Contact",
      highlights: [
        "Direct WhatsApp chat buttons on every page",
        "Simple inquiry forms for quick customer messages",
        "Click-to-call phone numbers for mobile visitors",
      ],
      iconBg: "bg-emerald-600 text-white",
      badgeBg: "bg-emerald-100 text-emerald-800 border-emerald-300",
      cardBg: "bg-gradient-to-br from-emerald-50/90 via-teal-50/40 to-white border-emerald-200 shadow-emerald-950/5",
    },
    {
      icon: LayoutGrid,
      title: "Showcase Your Services",
      description: "Present services, products, work samples, photos and important business information in one clear place.",
      image: "/images/value_services_pricing.jpg",
      badge: "Clear Offerings",
      highlights: [
        "Structured overview of all services offered",
        "Photo galleries and portfolio showcases",
        "Answers common customer questions upfront",
      ],
      iconBg: "bg-purple-600 text-white",
      badgeBg: "bg-purple-100 text-purple-800 border-purple-300",
      cardBg: "bg-gradient-to-br from-purple-50/90 via-violet-50/40 to-white border-purple-200 shadow-purple-950/5",
    },
    {
      icon: Clock,
      title: "Be Available Online",
      description: "Customers can learn about your business whenever they need information, even outside regular business hours.",
      image: "/images/value_open_247.jpg",
      badge: "Available 24/7",
      highlights: [
        "24/7 access to business details and services",
        "Contact form available around the clock",
        "Consistent online presence for customer research",
      ],
      iconBg: "bg-amber-600 text-white",
      badgeBg: "bg-amber-100 text-amber-800 border-amber-300",
      cardBg: "bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-white border-amber-200 shadow-amber-950/5",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-blue-100 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider">
            BUSINESS VALUE
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Why a Professional Website Matters for Your Business
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            A dedicated website gives your business a professional home online. It helps build credibility with potential clients, explains your services clearly, accepts enquiries 24/7, connects customers directly via WhatsApp, and supports your overall marketing efforts.
          </p>
        </div>

        {/* Alternating Zig-Zag Card Rows */}
        <div className="space-y-12 sm:space-y-16">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`border rounded-md p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col ${card.cardBg} ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-12 group`}
              >
                {/* Image Column */}
                <div className="w-full lg:w-1/2 relative aspect-16/10 rounded-md overflow-hidden border border-slate-200 shadow-md flex-shrink-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-md ${card.iconBg} flex items-center justify-center shadow-md flex-shrink-0`}>
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md border ${card.badgeBg}`}>
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {card.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="pt-3 space-y-2 border-t border-slate-100">
                    {card.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


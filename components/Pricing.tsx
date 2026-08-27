"use client";

import React from "react";
import { Check, Tag, ArrowRight, Sparkles } from "lucide-react";

interface PricingProps {
  onOpenQuoteModal?: () => void;
}

export default function Pricing({ onOpenQuoteModal }: PricingProps) {
  const packages = [
    {
      name: "Starter Website",
      price: "Starting From ₹2,999",
      tagline: "For businesses that need a simple, clean and professional online presence.",
      isPopular: false,
      features: [
        "1–3 Page Website Design",
        "Mobile-Friendly Responsive Layout",
        "Contact Form Integration",
        "WhatsApp Direct Chat Button",
        "Basic SEO Structure Setup",
        "Domain & SSL Connection",
        "Post-Launch Technical Support"
      ],
      ctaText: "Choose Starter",
      ctaBg: "bg-slate-900 hover:bg-slate-800 text-white"
    },
    {
      name: "Business Website",
      price: "Starting From ₹5,999",
      tagline: "For growing businesses that need a comprehensive website with additional features.",
      isPopular: true,
      features: [
        "Multi-Page Custom Structure",
        "Mobile & Tablet Responsive UI",
        "Service Showcases & Galleries",
        "Contact & Lead Enquiry System",
        "WhatsApp Chat & Click-to-Call",
        "Google Maps Business Setup",
        "Basic SEO & Metadata Optimization",
        "Agreed Post-Launch Support"
      ],
      ctaText: "Choose Business",
      ctaBg: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30"
    },
    {
      name: "Custom Website",
      price: "Custom Quote",
      tagline: "For complex web portals, online stores, booking platforms and web applications.",
      isPopular: false,
      features: [
        "E-Commerce & Shopping Cart",
        "Payment Gateway Integration",
        "Online Booking & Reservations",
        "Admin Control Dashboards",
        "Customer Portals & User Roles",
        "Database & API Integrations",
        "Tailored Feature Requirements",
        "Dedicated Development & Support"
      ],
      ctaText: "Get Custom Quote",
      ctaBg: "bg-slate-900 hover:bg-slate-800 text-white"
    }
  ];

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200/80 rounded-full text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Website Development Packages
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Straightforward pricing based on your project requirements and scope.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`bg-white border rounded-2xl p-8 shadow-sm flex flex-col justify-between relative transition-all duration-300 ${
                pkg.isPopular
                  ? "border-blue-600 ring-2 ring-blue-600/20 shadow-xl"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {pkg.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Popular Choice
                </span>
              )}

              <div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-1">
                  {pkg.name}
                </h3>
                <p className="text-xs text-slate-500 min-h-[36px] mb-4">
                  {pkg.tagline}
                </p>

                <div className="py-4 border-y border-slate-100 mb-6">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900">
                    {pkg.price}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Included Features:
                  </span>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${pkg.ctaBg}`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-xs mt-10">
          Final delivery timeline and costs depend on project scope, custom content and feature requirements.
        </p>

      </div>
    </section>
  );
}

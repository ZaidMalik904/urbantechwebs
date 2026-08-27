"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Layers, CheckCircle2 } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "YumGo Food & Grocery Marketplace",
      category: "E-Commerce & Digital Platform",
      image: "/images/yumgo_marketplace_v2.png",
      liveUrl: "https://yum-go-fr.onrender.com/",
      overview: "An online marketplace platform designed for web ordering and local delivery management.",
      requirement: "The business needed a responsive marketplace with catalog browsing, shopping cart workflow, and instant order handling.",
      approach: "UrbanTechWebs designed and built a full web platform with real-time cart functionality, responsive mobile navigation, and an integrated admin panel.",
      keyFeatures: [
        "Dynamic food & grocery catalog",
        "Shopping cart & checkout workflow",
        "Dedicated admin panel dashboard",
        "Mobile-optimized customer interface"
      ],
      outcome: "Delivered a fully operational food ordering platform with an easy-to-use ordering flow for customers and administrative controls for store owners."
    },
    {
      title: "Karma Business Consulting Portal",
      category: "Business Consultancy Website",
      image: "/images/karma_business.png",
      liveUrl: "https://karmabs.com.au/",
      overview: "A professional corporate website for an Australian business advisory and consulting firm.",
      requirement: "The firm needed a clean, authoritative website to showcase their advisory services, client solutions, and enquiry options.",
      approach: "We created a structured business web layout highlighting key consultancy areas, case information, and direct contact options for potential clients.",
      keyFeatures: [
        "Structured service presentation",
        "Contact form & inquiry routing",
        "Mobile-responsive corporate design",
        "Fast page loading architecture"
      ],
      outcome: "Delivered a modern, professional digital presence that allows potential clients to browse advisory services and submit direct project enquiries."
    },
    {
      title: "Jinda Car Rentals Platform",
      category: "Vehicle Rental & Reservation",
      image: "/images/jinda_rentals.png",
      liveUrl: "https://jindacarrentals.com/",
      overview: "A car rental web portal presenting vehicle options and reservation details for travelers.",
      requirement: "The client needed a vehicle fleet showcase with specifications, booking guidelines, and simple customer enquiry routes.",
      approach: "UrbanTechWebs built a clear fleet showcase with vehicle specs, transparent rental information, and integrated WhatsApp & call buttons.",
      keyFeatures: [
        "Fleet gallery with vehicle specs",
        "Direct WhatsApp inquiry routing",
        "Responsive design across mobile devices",
        "Clear pricing & policy structure"
      ],
      outcome: "Delivered a streamlined rental portal that makes it fast and straightforward for customers to choose a vehicle and connect with the owner."
    }
  ];

  return (
    <section id="case-studies" className="py-20 sm:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200/80 rounded-full text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>CASE STUDIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Website Projects & Case Studies
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            A closer look at how we planned, designed and delivered real websites for our clients.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12 sm:space-y-16">
          {caseStudies.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row gap-8 lg:gap-12"
            >
              {/* Left Column: Screenshot & Link */}
              <div className="w-full lg:w-5/12 flex flex-col justify-between">
                <div>
                  <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden border border-slate-200 shadow-md mb-4 bg-slate-950">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <span className="inline-block text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-md mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
                  >
                    <span>Visit Live Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Case Details */}
              <div className="w-full lg:w-7/12 space-y-5 text-slate-700 text-sm">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-1">
                    Project Overview
                  </h4>
                  <p className="leading-relaxed text-slate-800 font-medium">
                    {item.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-1">
                    The Requirement
                  </h4>
                  <p className="leading-relaxed text-slate-600">
                    {item.requirement}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-1">
                    Our Approach
                  </h4>
                  <p className="leading-relaxed text-slate-600">
                    {item.approach}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-1">
                    Outcome
                  </h4>
                  <p className="leading-relaxed text-slate-800 font-medium bg-white p-3.5 rounded-xl border border-slate-200">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import {
  Code,
  Paintbrush,
  ShoppingCart,
  Smartphone,
  Gauge,
  Search,
  Layers,
  Headphones,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      num: "01",
      icon: Code,
      title: "Custom Web Development",
      description: "Fast, responsive, handcoded websites built using modern engineering standards and clean code.",
      cardBg: "bg-blue-50/80 hover:bg-blue-100/90 border-blue-200/90 shadow-blue-500/5",
      iconBg: "bg-blue-600 text-white shadow-md shadow-blue-600/30",
      titleColor: "text-blue-950 group-hover:text-blue-700",
      numColor: "text-blue-600 font-black",
      footerBorder: "border-blue-200/80",
    },
    {
      num: "02",
      icon: Paintbrush,
      title: "Professional & Engaging UI/UX",
      description: "Build a modern website with clean visual layouts that reflect your brand identity and earn customer trust instantly.",
      cardBg: "bg-emerald-50/80 hover:bg-emerald-100/90 border-emerald-200/90 shadow-emerald-500/5",
      iconBg: "bg-emerald-600 text-white shadow-md shadow-emerald-600/30",
      titleColor: "text-emerald-950 group-hover:text-emerald-700",
      numColor: "text-emerald-600 font-black",
      footerBorder: "border-emerald-200/80",
    },
    {
      num: "03",
      icon: ShoppingCart,
      title: "E-Commerce Online Stores",
      description: "Complete online shopping stores with product management, shopping cart, and secure online payment checkout.",
      cardBg: "bg-purple-50/80 hover:bg-purple-100/90 border-purple-200/90 shadow-purple-500/5",
      iconBg: "bg-purple-600 text-white shadow-md shadow-purple-600/30",
      titleColor: "text-purple-950 group-hover:text-purple-700",
      numColor: "text-purple-600 font-black",
      footerBorder: "border-purple-200/80",
    },
    {
      num: "04",
      icon: Smartphone,
      title: "Responsive Across All Devices",
      description: "Deliver a seamless mobile experience across desktops, laptops, tablets, and smartphones.",
      cardBg: "bg-amber-50/80 hover:bg-amber-100/90 border-amber-200/90 shadow-amber-500/5",
      iconBg: "bg-amber-600 text-white shadow-md shadow-amber-600/30",
      titleColor: "text-amber-950 group-hover:text-amber-700",
      numColor: "text-amber-600 font-black",
      footerBorder: "border-amber-200/80",
    },
    {
      num: "05",
      icon: Gauge,
      title: "Speed & Performance Optimization",
      description: "Core Web Vitals tuning, asset compression, and code optimization for sub-2 second load speeds.",
      cardBg: "bg-rose-50/80 hover:bg-rose-100/90 border-rose-200/90 shadow-rose-500/5",
      iconBg: "bg-rose-600 text-white shadow-md shadow-rose-600/30",
      titleColor: "text-rose-950 group-hover:text-rose-700",
      numColor: "text-rose-600 font-black",
      footerBorder: "border-rose-200/80",
    },
    {
      num: "06",
      icon: Search,
      title: "SEO-Ready Development",
      description: "Create well-structured websites optimized for Google search engines, indexing, and higher organic rankings.",
      cardBg: "bg-indigo-50/80 hover:bg-indigo-100/90 border-indigo-200/90 shadow-indigo-500/5",
      iconBg: "bg-indigo-600 text-white shadow-md shadow-indigo-600/30",
      titleColor: "text-indigo-950 group-hover:text-indigo-700",
      numColor: "text-indigo-600 font-black",
      footerBorder: "border-indigo-200/80",
    },
    {
      num: "07",
      icon: Layers,
      title: "Scalable Technology Architecture",
      description: "Modular web architecture built to expand seamlessly as your business grows.",
      cardBg: "bg-teal-50/80 hover:bg-teal-100/90 border-teal-200/90 shadow-teal-500/5",
      iconBg: "bg-teal-600 text-white shadow-md shadow-teal-600/30",
      titleColor: "text-teal-950 group-hover:text-teal-700",
      numColor: "text-teal-600 font-black",
      footerBorder: "border-teal-200/80",
    },
    {
      num: "08",
      icon: Headphones,
      title: "1 Year Support & Maintenance",
      description: "Work directly with experienced developers and enjoy 12 months of continuous support and updates.",
      cardBg: "bg-sky-50/80 hover:bg-sky-100/90 border-sky-200/90 shadow-sky-500/5",
      iconBg: "bg-sky-600 text-white shadow-md shadow-sky-600/30",
      titleColor: "text-sky-950 group-hover:text-sky-700",
      numColor: "text-sky-600 font-black",
      footerBorder: "border-sky-200/80",
    },
  ];

  return (
    <section id="services" className="pt-24 sm:pt-28 pb-20 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header styled like SECTOR EXPERTISE & SELECTED WORK */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200/80 rounded-full text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT WE DO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">
            OUR SERVICES & WEB SOLUTIONS
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            We design and develop fast, modern, and reliable websites tailored specifically to your business goals.
          </p>
        </div>

        {/* Handcrafted Colorful Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${service.cardBg} rounded-2xl p-6 sm:p-7 border hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center transition-all duration-300`}>
                      <Icon className="w-5.5 h-5.5 stroke-[2]" />
                    </div>
                    <span className={`text-xs font-mono ${service.numColor}`}>
                      {service.num}
                    </span>
                  </div>

                  <h3 className={`text-lg font-extrabold mb-2.5 ${service.titleColor} transition-colors leading-snug`}>
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className={`pt-3 border-t ${service.footerBorder} flex items-center justify-between text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors`}>
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

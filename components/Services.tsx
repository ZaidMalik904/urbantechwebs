"use client";

import React from "react";
import Image from "next/image";
import {
  Code,
  ShoppingCart,
  Rocket,
  Globe,
  RefreshCw,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Search,
  Zap,
  MessageSquare,
  Mail,
  MapPin,
  CreditCard,
  Database,
  ShieldCheck,
} from "lucide-react";

export default function Services() {
  const primaryServices = [
    {
      num: "01",
      icon: Code,
      title: "Website Development",
      description: "Modern, fast, and responsive business websites designed to build trust and generate customer enquiries.",
      image: "/images/service_web_dev_real.jpg",
      badge: "Custom High-Speed Design",
      highlights: ["Sub-2s Mobile Load Speed", "100% Touch Responsive UI", "Clean SEO Technical Setup"],
      cardBg: "bg-blue-50/90 hover:bg-blue-100/90 border-blue-200 shadow-blue-500/5",
      iconBg: "bg-blue-600 text-white shadow-md shadow-blue-600/30",
      titleColor: "text-blue-950 group-hover:text-blue-700",
      numColor: "text-blue-600 font-black",
      footerBorder: "border-blue-200/80",
    },
    {
      num: "02",
      icon: ShoppingCart,
      title: "E-Commerce Development",
      description: "Online stores with product catalogs, shopping cart, secure checkout, and integrated payment solutions.",
      image: "/images/service_ecommerce_real.jpg",
      badge: "Razorpay & Stripe Ready",
      highlights: ["Product Catalog & Filters", "Cart Drawer & Quick Checkout", "Integrated Payment Gateway"],
      cardBg: "bg-purple-50/90 hover:bg-purple-100/90 border-purple-200 shadow-purple-500/5",
      iconBg: "bg-purple-600 text-white shadow-md shadow-purple-600/30",
      titleColor: "text-purple-950 group-hover:text-purple-700",
      numColor: "text-purple-600 font-black",
      footerBorder: "border-purple-200/80",
    },
    {
      num: "03",
      icon: Rocket,
      title: "Landing Page Development",
      description: "High-quality, conversion-focused landing pages built specifically for ad campaigns and lead acquisition.",
      image: "/images/service_landing_page_real.jpg",
      badge: "Ad Campaign Conversion UI",
      highlights: ["High-Converting CTA Layout", "1-Click WhatsApp Lead Intake", "Google & Meta Ads Ready"],
      cardBg: "bg-emerald-50/90 hover:bg-emerald-100/90 border-emerald-200 shadow-emerald-500/5",
      iconBg: "bg-emerald-600 text-white shadow-md shadow-emerald-600/30",
      titleColor: "text-emerald-950 group-hover:text-emerald-700",
      numColor: "text-emerald-600 font-black",
      footerBorder: "border-emerald-200/80",
    },
    {
      num: "04",
      icon: Globe,
      title: "WordPress Development",
      description: "Professional WordPress websites, theme customizations, content management, and plugin setups.",
      image: "/images/service_wordpress_real.jpg",
      badge: "Gutenberg CMS Admin",
      highlights: ["Custom Theme Customizer", "Easy Admin Content Editor", "Security Hardening & Plugins"],
      cardBg: "bg-indigo-50/90 hover:bg-indigo-100/90 border-indigo-200 shadow-indigo-500/5",
      iconBg: "bg-indigo-600 text-white shadow-md shadow-indigo-600/30",
      titleColor: "text-indigo-950 group-hover:text-indigo-700",
      numColor: "text-indigo-600 font-black",
      footerBorder: "border-indigo-200/80",
    },
    {
      num: "05",
      icon: RefreshCw,
      title: "Website Redesign",
      description: "Modernize outdated websites to improve visual appeal, mobile usability, page speed, and overall user experience.",
      image: "/images/service_redesign_real.jpg",
      badge: "UI & Speed Overhaul",
      highlights: ["Modern Brand Layout", "Core Web Vitals Speedup", "Mobile Viewport Usability"],
      cardBg: "bg-amber-50/90 hover:bg-amber-100/90 border-amber-200 shadow-amber-500/5",
      iconBg: "bg-amber-600 text-white shadow-md shadow-amber-600/30",
      titleColor: "text-amber-950 group-hover:text-amber-700",
      numColor: "text-amber-600 font-black",
      footerBorder: "border-amber-200/80",
    },
    {
      num: "06",
      icon: Cpu,
      title: "Custom Web Applications",
      description: "Custom web dashboards, client portals, appointment booking systems, and internal business tools.",
      image: "/images/service_custom_app_real.jpg",
      badge: "Custom Dashboard API",
      highlights: ["Role-Based User Controls", "REST API & DB Integration", "Real-Time Data Analytics"],
      cardBg: "bg-teal-50/90 hover:bg-teal-100/90 border-teal-200 shadow-teal-500/5",
      iconBg: "bg-teal-600 text-white shadow-md shadow-teal-600/30",
      titleColor: "text-teal-950 group-hover:text-teal-700",
      numColor: "text-teal-600 font-black",
      footerBorder: "border-teal-200/80",
    },
  ];

  const secondaryCapabilities = [
    { title: "SEO-Ready Development", icon: Search },
    { title: "Speed Optimization", icon: Zap },
    { title: "WhatsApp Integration", icon: MessageSquare },
    { title: "Contact & Lead Forms", icon: Mail },
    { title: "Google Maps Integration", icon: MapPin },
    { title: "Payment Gateway Setup", icon: CreditCard },
    { title: "API & Database Integration", icon: Database },
    { title: "Post-Launch Maintenance", icon: ShieldCheck },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200/80 rounded-full text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR CORE SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">
            Our Core Web Services
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            We deliver straightforward, high-quality web development services focused on clear communication and business outcome.
          </p>
        </div>

        {/* 6 Primary Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {primaryServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${service.cardBg} rounded-md p-6 sm:p-7 border hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 overflow-hidden`}
              >
                <div>
                  {/* Service Visual Illustration Image */}
                  <div className="relative w-full aspect-16/9 rounded-md overflow-hidden mb-6 border border-slate-200/60 shadow-xs">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                    
                    <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-slate-950/85 border border-slate-800 text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider backdrop-blur-xs">
                      {service.badge}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-md ${service.iconBg} flex items-center justify-center transition-all duration-300`}>
                      <Icon className="w-5.5 h-5.5 stroke-[2]" />
                    </div>
                    <span className={`text-xs font-mono ${service.numColor}`}>
                      {service.num}
                    </span>
                  </div>

                  <h3 className={`text-xl font-extrabold mb-2.5 ${service.titleColor} transition-colors leading-snug`}>
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="pt-3 pb-2 space-y-1.5 border-t border-slate-200/60">
                    {service.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/917827775353?text=Hi%20UrbanTechWebs%2C%20I%20want%20to%20discuss%20the%20${encodeURIComponent(service.title)}%20solution%20for%20my%20business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`pt-4 border-t ${service.footerBorder} flex items-center justify-between text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors`}
                >
                  <span>Discuss This Solution</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Secondary Capabilities Red Container with Styled Feature Cards */}
        <div className="bg-gradient-to-r from-red-600 via-red-600 to-rose-700 border border-red-500/90 rounded-md py-10 px-0 sm:p-8 shadow-xl shadow-red-600/25 overflow-hidden">
          <style jsx>{`
            @keyframes mobileMarqueeLeft {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-33.333%);
              }
            }
            @keyframes mobileMarqueeRight {
              0% {
                transform: translateX(-33.333%);
              }
              100% {
                transform: translateX(0%);
              }
            }
            .animate-mobile-marquee-left {
              display: flex;
              width: max-content;
              animation: mobileMarqueeLeft 18s linear infinite;
            }
            .animate-mobile-marquee-right {
              display: flex;
              width: max-content;
              animation: mobileMarqueeRight 18s linear infinite;
            }
            .animate-mobile-marquee-left:hover,
            .animate-mobile-marquee-right:hover {
              animation-play-state: paused;
            }
          `}</style>

          <h3 className="text-center text-xs sm:text-xs font-mono font-black uppercase tracking-wider text-red-100 mb-7 px-6 sm:px-0">
            ADDITIONAL INTEGRATION & OPTIMIZATION CAPABILITIES
          </h3>

          {/* Mobile Auto-Animate 2-Row Dual Direction Marquee (100% Flush to Red Container Edges) */}
          <div className="block sm:hidden overflow-hidden w-full space-y-4">
            {/* Row 1: Leftward Motion */}
            <div className="animate-mobile-marquee-left gap-3">
              {[
                ...secondaryCapabilities.slice(0, 4),
                ...secondaryCapabilities.slice(0, 4),
                ...secondaryCapabilities.slice(0, 4),
              ].map((item, i) => {
                const CapIcon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/15 border border-white/25 rounded-md p-4 text-white text-xs font-bold shadow-none flex items-center gap-3 flex-shrink-0 w-64"
                  >
                    <div className="w-8 h-8 rounded-md bg-white/20 flex items-center justify-center flex-shrink-0">
                      <CapIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="truncate">{item.title}</span>
                  </div>
                );
              })}
            </div>

            {/* Row 2: Rightward Reverse Motion */}
            <div className="animate-mobile-marquee-right gap-3">
              {[
                ...secondaryCapabilities.slice(4, 8),
                ...secondaryCapabilities.slice(4, 8),
                ...secondaryCapabilities.slice(4, 8),
              ].map((item, i) => {
                const CapIcon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/15 border border-white/25 rounded-md p-4 text-white text-xs font-bold shadow-none flex items-center gap-3 flex-shrink-0 w-64"
                  >
                    <div className="w-8 h-8 rounded-md bg-white/20 flex items-center justify-center flex-shrink-0">
                      <CapIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="truncate">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tablet & Desktop Grid */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4">
            {secondaryCapabilities.map((item, i) => {
              const CapIcon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white/15 border border-white/25 rounded-md p-4 text-white text-xs font-bold shadow-none hover:bg-white hover:text-red-700 transition-all flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-md bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <CapIcon className="w-4 h-4 text-white" />
                  </div>
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}



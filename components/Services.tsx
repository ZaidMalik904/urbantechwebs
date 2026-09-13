"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  ShoppingCart,
  Rocket,
  Globe,
  Layout,
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
      description: "Fast, responsive and SEO-friendly websites engineered for business growth and credible online presence.",
      link: "/web-development",
      image: "/images/service_web_dev_real.jpg",
      badge: "Custom Web Dev",
      highlights: ["Clean Semantic Code", "Mobile Responsive", "SEO-Friendly Architecture"],
      cardBg: "bg-blue-50/90 hover:bg-blue-100/90 border-blue-200 shadow-blue-500/5",
      iconBg: "bg-blue-600 text-white shadow-md shadow-blue-600/30",
      titleColor: "text-blue-950 group-hover:text-blue-700",
      numColor: "text-blue-600 font-black",
      footerBorder: "border-blue-200/80",
    },
    {
      num: "02",
      icon: Layout,
      title: "Website Design",
      description: "Modern, visually engaging UI/UX design tailored around your brand identity and conversion goals.",
      link: "/website-design",
      image: "/images/service_redesign_real.jpg",
      badge: "UI / UX Design",
      highlights: ["Modern Visual Hierarchy", "User Experience Focus", "Brand Identity Alignment"],
      cardBg: "bg-amber-50/90 hover:bg-amber-100/90 border-amber-200 shadow-amber-500/5",
      iconBg: "bg-amber-600 text-white shadow-md shadow-amber-600/30",
      titleColor: "text-amber-950 group-hover:text-amber-700",
      numColor: "text-amber-600 font-black",
      footerBorder: "border-amber-200/80",
    },
    {
      num: "03",
      icon: ShoppingCart,
      title: "E-commerce Development",
      description: "Complete online stores with product catalogs, shopping cart workflow, and secure payment integrations.",
      link: "/ecommerce-development",
      image: "/images/service_ecommerce_real.jpg",
      badge: "E-Commerce Stores",
      highlights: ["Product Catalogues", "Cart & Checkout Workflow", "Payment Gateway Setup"],
      cardBg: "bg-purple-50/90 hover:bg-purple-100/90 border-purple-200 shadow-purple-500/5",
      iconBg: "bg-purple-600 text-white shadow-md shadow-purple-600/30",
      titleColor: "text-purple-950 group-hover:text-purple-700",
      numColor: "text-purple-600 font-black",
      footerBorder: "border-purple-200/80",
    },
    {
      num: "04",
      icon: Globe,
      title: "WordPress Development",
      description: "Custom WordPress websites for businesses seeking easy content administration and theme flexibility.",
      link: "/wordpress-development",
      image: "/images/service_wordpress_real.jpg",
      badge: "Easy Content Management",
      highlights: ["Custom Theme Setup", "Easy Admin Dashboard", "Plugin & Security Configuration"],
      cardBg: "bg-indigo-50/90 hover:bg-indigo-100/90 border-indigo-200 shadow-indigo-500/5",
      iconBg: "bg-indigo-600 text-white shadow-md shadow-indigo-600/30",
      titleColor: "text-indigo-950 group-hover:text-indigo-700",
      numColor: "text-indigo-600 font-black",
      footerBorder: "border-indigo-200/80",
    },
    {
      num: "05",
      icon: Rocket,
      title: "Landing Page Development",
      description: "High-converting landing pages tailored for ad campaigns, product promotions, and lead generation.",
      link: "/landing-page-development",
      image: "/images/service_landing_page_real.jpg",
      badge: "Lead Acquisition",
      highlights: ["Clear Call-to-Action", "WhatsApp & Form Capture", "Ad Campaign Optimized"],
      cardBg: "bg-emerald-50/90 hover:bg-emerald-100/90 border-emerald-200 shadow-emerald-500/5",
      iconBg: "bg-emerald-600 text-white shadow-md shadow-emerald-600/30",
      titleColor: "text-emerald-950 group-hover:text-emerald-700",
      numColor: "text-emerald-600 font-black",
      footerBorder: "border-emerald-200/80",
    },
    {
      num: "06",
      icon: Cpu,
      title: "Web Application Development",
      description: "Custom web portals, client dashboards, booking engines, and scalable web applications.",
      link: "/web-application-development",
      image: "/images/service_custom_app_real.jpg",
      badge: "Custom Web Apps",
      highlights: ["Custom Admin Dashboards", "Booking & Reservation Systems", "Database & API Integration"],
      cardBg: "bg-teal-50/90 hover:bg-teal-100/90 border-teal-200 shadow-teal-500/5",
      iconBg: "bg-teal-600 text-white shadow-md shadow-teal-600/30",
      titleColor: "text-teal-950 group-hover:text-teal-700",
      numColor: "text-teal-600 font-black",
      footerBorder: "border-teal-200/80",
    },
    {
      num: "07",
      icon: Search,
      title: "SEO Services",
      description: "Technical search engine optimization, page speed tuning, structured data, and search visibility.",
      link: "/seo-services",
      image: "/images/seo_services_hero_bg.jpg",
      badge: "Search Optimization",
      highlights: ["Technical SEO Setup", "Core Web Vitals Speed", "Structured Data Schema"],
      cardBg: "bg-cyan-50/90 hover:bg-cyan-100/90 border-cyan-200 shadow-cyan-500/5",
      iconBg: "bg-cyan-600 text-white shadow-md shadow-cyan-600/30",
      titleColor: "text-cyan-950 group-hover:text-cyan-700",
      numColor: "text-cyan-600 font-black",
      footerBorder: "border-cyan-200/80",
    },
    {
      num: "08",
      icon: Sparkles,
      title: "Logo & Brand Design",
      description: "Custom vector logos, color brand guides, and visual identity design for business identity.",
      link: "/logo-design",
      image: "/images/logo_design_hero_bg.jpg",
      badge: "Brand Identity",
      highlights: ["Vector Logo Assets", "Color Palette Guide", "Visual Identity Kits"],
      cardBg: "bg-rose-50/90 hover:bg-rose-100/90 border-rose-200 shadow-rose-500/5",
      iconBg: "bg-rose-600 text-white shadow-md shadow-rose-600/30",
      titleColor: "text-rose-950 group-hover:text-rose-700",
      numColor: "text-rose-600 font-black",
      footerBorder: "border-rose-200/80",
    },
  ];

  const secondaryCapabilities = [
    { title: "WhatsApp integration", icon: MessageSquare },
    { title: "Contact forms", icon: Mail },
    { title: "Google Maps", icon: MapPin },
    { title: "Online booking", icon: Rocket },
    { title: "Payment gateway integration", icon: CreditCard },
    { title: "Product catalogues", icon: ShoppingCart },
    { title: "Image galleries", icon: Globe },
    { title: "Social media integration", icon: Sparkles },
    { title: "Customer enquiry systems", icon: Mail },
    { title: "Admin panels", icon: Database },
    { title: "API integrations", icon: Code },
    { title: "Basic SEO setup", icon: Search },
    { title: "Performance optimization", icon: Zap },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200/80 rounded-full text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SERVICES OFFERED</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Website Design & Development Services
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            We build simple, effective and reliable websites tailored to your specific business goals and customer needs.
          </p>
        </div>

        {/* 6 Primary Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {primaryServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${service.cardBg} rounded-md p-6 sm:p-7 border hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 overflow-hidden`}
              >
                <div>
                  {/* Service Visual Illustration Image */}
                  <Link href={service.link} className="block relative w-full aspect-16/9 rounded-md overflow-hidden mb-6 border border-slate-200/60 shadow-xs group/img">
                    <Image
                      src={service.image}
                      alt={`${service.title} showcase by UrbanTechWebs`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                    
                    <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-slate-950/85 border border-slate-800 text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider backdrop-blur-xs">
                      {service.badge}
                    </span>
                  </Link>

                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-md ${service.iconBg} flex items-center justify-center transition-all duration-300`}>
                      <Icon className="w-5.5 h-5.5 stroke-[2]" />
                    </div>
                    <span className={`text-xs font-mono ${service.numColor}`}>
                      {service.num}
                    </span>
                  </div>

                  <h3 className={`text-xl font-extrabold mb-2.5 ${service.titleColor} transition-colors leading-snug`}>
                    <Link href={service.link}>
                      {service.title}
                    </Link>
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

                <Link
                  href={service.link}
                  className={`pt-4 border-t ${service.footerBorder} flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 5: Features We Can Add to Your Website (Full-Width Dark Section with 2-Row Auto-Animating Infinite Marquee) */}
      <div id="features" className="w-full bg-slate-950 text-white pt-16 sm:pt-20 pb-16 sm:pb-20 border-t border-slate-800 relative overflow-hidden">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/process_bg.jpg"
            alt="UrbanTechWebs website feature capabilities background"
            fill
            className="object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950/95" />
        </div>

        {/* Interior Dot Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-15 pointer-events-none z-0" />

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none z-0" />

        {/* Style Keyframes for 100% Seamless Infinite Marquee */}
        <style jsx>{`
          @keyframes featureMarqueeLeft {
            0% { transform: translateX(0%); }
            100% { transform: translateX(calc(-100% - 1.5rem)); }
          }
          @keyframes featureMarqueeRight {
            0% { transform: translateX(calc(-100% - 1.5rem)); }
            100% { transform: translateX(0%); }
          }
          .animate-feature-left {
            animation: featureMarqueeLeft 25s linear infinite;
          }
          .animate-feature-right {
            animation: featureMarqueeRight 25s linear infinite;
          }
          .feature-marquee-wrapper:hover .animate-feature-left,
          .feature-marquee-wrapper:hover .animate-feature-right {
            animation-play-state: paused;
          }
        `}</style>

        {/* Header (Centered Container) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider rounded-full backdrop-blur-md">
              FEATURE OPTIONS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Features We Can Add to Your Website
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Available based on your project requirements.
            </p>
          </div>
        </div>

        {/* Full-Bleed Edge-to-Edge Marquee Wrapper (Zero Padding/Margins) */}
        <div className="w-full relative z-10 space-y-6 sm:space-y-8 feature-marquee-wrapper overflow-hidden px-0 mx-0">
          
          {/* Row 1 Infinite Marquee (Leftward) */}
          <div className="flex overflow-hidden w-full select-none gap-4 sm:gap-6 py-2">
            <div className="flex shrink-0 gap-4 sm:gap-6 min-w-full animate-feature-left items-center">
              {secondaryCapabilities.slice(0, 7).map((item, i) => {
                const CapIcon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-slate-900/90 border border-slate-800 rounded-md px-6 py-5 sm:px-7 sm:py-6 flex items-center gap-4 text-sm sm:text-base font-semibold text-slate-200 hover:border-blue-500/60 hover:bg-slate-900 transition-all flex-shrink-0 min-w-[240px] sm:min-w-[280px] min-h-[72px] sm:min-h-[80px] shadow-lg group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-cyan-400 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <CapIcon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="leading-snug whitespace-nowrap">{item.title}</span>
                  </div>
                );
              })}
            </div>

            <div aria-hidden="true" className="flex shrink-0 gap-4 sm:gap-6 min-w-full animate-feature-left items-center">
              {secondaryCapabilities.slice(0, 7).map((item, i) => {
                const CapIcon = item.icon;
                return (
                  <div
                    key={`dup1-${i}`}
                    className="bg-slate-900/90 border border-slate-800 rounded-md px-6 py-5 sm:px-7 sm:py-6 flex items-center gap-4 text-sm sm:text-base font-semibold text-slate-200 hover:border-blue-500/60 hover:bg-slate-900 transition-all flex-shrink-0 min-w-[240px] sm:min-w-[280px] min-h-[72px] sm:min-h-[80px] shadow-lg group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-cyan-400 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <CapIcon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="leading-snug whitespace-nowrap">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 2 Infinite Marquee (Rightward) */}
          <div className="flex overflow-hidden w-full select-none gap-4 sm:gap-6 py-2">
            <div className="flex shrink-0 gap-4 sm:gap-6 min-w-full animate-feature-right items-center">
              {secondaryCapabilities.slice(7).map((item, i) => {
                const CapIcon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-slate-900/90 border border-slate-800 rounded-md px-6 py-5 sm:px-7 sm:py-6 flex items-center gap-4 text-sm sm:text-base font-semibold text-slate-200 hover:border-blue-500/60 hover:bg-slate-900 transition-all flex-shrink-0 min-w-[240px] sm:min-w-[280px] min-h-[72px] sm:min-h-[80px] shadow-lg group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-cyan-400 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <CapIcon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="leading-snug whitespace-nowrap">{item.title}</span>
                  </div>
                );
              })}
            </div>

            <div aria-hidden="true" className="flex shrink-0 gap-4 sm:gap-6 min-w-full animate-feature-right items-center">
              {secondaryCapabilities.slice(7).map((item, i) => {
                const CapIcon = item.icon;
                return (
                  <div
                    key={`dup2-${i}`}
                    className="bg-slate-900/90 border border-slate-800 rounded-md px-6 py-5 sm:px-7 sm:py-6 flex items-center gap-4 text-sm sm:text-base font-semibold text-slate-200 hover:border-blue-500/60 hover:bg-slate-900 transition-all flex-shrink-0 min-w-[240px] sm:min-w-[280px] min-h-[72px] sm:min-h-[80px] shadow-lg group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-cyan-400 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <CapIcon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="leading-snug whitespace-nowrap">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



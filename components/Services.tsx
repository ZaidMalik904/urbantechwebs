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
} from "lucide-react";

export default function Services() {
  const primaryServices = [
    {
      num: "01",
      icon: Code,
      title: "Custom Web Development Services",
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
      title: "Website Design & Development",
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
      title: "E-commerce Website Development",
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
      title: "WordPress Development Services",
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
      title: "Landing Page Design & Development",
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
      title: "Custom Web Application Development",
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
      title: "SEO & Website Performance Services",
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
      title: "Logo & Brand Design Services",
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
    </section>
  );
}



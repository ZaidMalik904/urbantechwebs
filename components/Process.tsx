"use client";

import React from "react";
import Image from "next/image";
import {
  Search,
  Map,
  Paintbrush,
  Code2,
  CheckCircle2,
  Rocket,
  Clock,
  Utensils,
  Scissors,
  ShoppingBag,
  Briefcase,
  Building2,
  Tag,
  UserCheck,
  Home,
  Compass,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Requirements",
      icon: Search,
      desc: "We discuss your business goals, target audience, brand identity, and technical requirements.",
      image: "/images/process_step_1.jpg",
      badge: "Discovery",
      cardBg: "bg-blue-950/90 border-blue-500/50 shadow-blue-500/10 hover:border-blue-400",
      numColor: "text-cyan-400",
      iconBg: "bg-blue-500/20 text-cyan-300 border-blue-400/40",
      borderLine: "border-blue-800/80",
    },
    {
      num: "02",
      title: "Planning & Strategy",
      icon: Map,
      desc: "We structure the page architecture, sitemap, content flow, and technical stack selection.",
      image: "/images/process_step_2.jpg",
      badge: "Strategy",
      cardBg: "bg-emerald-950/90 border-emerald-500/50 shadow-emerald-500/10 hover:border-emerald-400",
      numColor: "text-emerald-400",
      iconBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
      borderLine: "border-emerald-800/80",
    },
    {
      num: "03",
      title: "UI/UX Design",
      icon: Paintbrush,
      desc: "We design high-fidelity layouts, visual wireframes, and responsive user experience interfaces.",
      image: "/images/process_step_3.jpg",
      badge: "Design",
      cardBg: "bg-purple-950/90 border-purple-500/50 shadow-purple-500/10 hover:border-purple-400",
      numColor: "text-purple-400",
      iconBg: "bg-purple-500/20 text-purple-300 border-purple-400/40",
      borderLine: "border-purple-800/80",
    },
    {
      num: "04",
      title: "Development",
      icon: Code2,
      desc: "We write clean, semantic HTML/CSS and frontend logic with responsive mobile optimization.",
      image: "/images/process_step_4.jpg",
      badge: "Development",
      cardBg: "bg-indigo-950/90 border-indigo-500/50 shadow-indigo-500/10 hover:border-indigo-400",
      numColor: "text-indigo-400",
      iconBg: "bg-indigo-500/20 text-indigo-300 border-indigo-400/40",
      borderLine: "border-indigo-800/80",
    },
    {
      num: "05",
      title: "Testing",
      icon: CheckCircle2,
      desc: "We test cross-browser rendering, form submissions, mobile responsiveness, and speed performance.",
      image: "/images/process_step_5.jpg",
      badge: "QA & Testing",
      cardBg: "bg-amber-950/90 border-amber-500/50 shadow-amber-500/10 hover:border-amber-400",
      numColor: "text-amber-400",
      iconBg: "bg-amber-500/20 text-amber-300 border-amber-400/40",
      borderLine: "border-amber-800/80",
    },
    {
      num: "06",
      title: "Launch",
      icon: Rocket,
      desc: "We configure domain DNS, SSL certificates, cloud hosting, and deploy the live website.",
      image: "/images/process_step_6.jpg",
      badge: "Deployment",
      cardBg: "bg-rose-950/90 border-rose-500/50 shadow-rose-500/10 hover:border-rose-400",
      numColor: "text-rose-400",
      iconBg: "bg-rose-500/20 text-rose-300 border-rose-400/40",
      borderLine: "border-rose-800/80",
    },
    {
      num: "07",
      title: "Support & Maintenance",
      icon: Clock,
      desc: "We provide post-launch assistance, bug fixes, updates, and maintenance according to project terms.",
      image: "/images/process_step_1.jpg",
      badge: "Support",
      cardBg: "bg-teal-950/90 border-teal-500/50 shadow-teal-500/10 hover:border-teal-400",
      numColor: "text-teal-400",
      iconBg: "bg-teal-500/20 text-teal-300 border-teal-400/40",
      borderLine: "border-teal-800/80",
    },
  ];

  const categories = [
    { name: "Restaurants", icon: Utensils, desc: "Food menus, location maps, and online enquiries." },
    { name: "Salons", icon: Scissors, desc: "Service lists, package details, and booking buttons." },
    { name: "Retail Businesses", icon: ShoppingBag, desc: "Product displays and business information." },
    { name: "Service Businesses", icon: Briefcase, desc: "Lead generation, forms, and service pages." },
    { name: "Startups", icon: Rocket, desc: "Landing pages, product features, and lead forms." },
    { name: "Agencies", icon: Building2, desc: "Corporate profiles and portfolio showcases." },
    { name: "E-commerce Brands", icon: Tag, desc: "Online shopping catalogs and checkout setup." },
    { name: "Professionals", icon: UserCheck, desc: "Consultants, advocates, and independent practices." },
    { name: "Real Estate Businesses", icon: Home, desc: "Property showcases and buyer lead forms." },
    { name: "Travel & Hospitality", icon: Compass, desc: "Holiday packages, tour listings, and enquiries." },
  ];

  return (
    <section id="process" className="py-20 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Engineering Workspace Photo */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/images/process_bg.jpg"
          alt="UrbanTechWebs Process Workspace"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/85 to-slate-950/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider rounded-full backdrop-blur-md">
            WORKFLOW
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Our Website Design & Development Process
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            A step-by-step process ensuring your website is planned, built, tested and launched smoothly.
          </p>

          {/* Timeline Badge */}
          <div className="inline-flex sm:flex items-center gap-4 sm:gap-5 p-4 sm:p-5 px-5 sm:px-7 bg-slate-900/95 border border-slate-800 rounded-2xl text-left w-full max-w-xl mx-auto mt-3 shadow-xl shadow-cyan-950/30 backdrop-blur-md">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 text-cyan-400 shadow-inner">
              <Clock className="w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 stroke-[2.2]" />
            </div>

            <div className="space-y-1 flex-1">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                Typical Delivery: 7–14 working days
              </span>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-normal">
                Final delivery time depends on project scope, content availability and revision requirements.
              </p>
            </div>
          </div>
        </div>

        {/* 7 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`relative flex flex-col justify-between ${step.cardBg} backdrop-blur-md border p-6 sm:p-7 rounded-md shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group`}
              >
                <div>
                  <div className="relative w-full aspect-16/9 rounded-md overflow-hidden mb-6 border border-slate-700/80 shadow-md">
                    <Image
                      src={step.image}
                      alt={`${step.title} - Website development process step`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-700/80 text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider backdrop-blur-sm">
                      {step.badge}
                    </span>
                  </div>

                  <div className={`flex items-center justify-between pb-4 mb-4 border-b ${step.borderLine}`}>
                    <span className={`text-2xl font-black font-mono ${step.numColor}`}>
                      {step.num}
                    </span>

                    <div className={`p-2.5 ${step.iconBg} border rounded-md flex-shrink-0`}>
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 13: BUSINESSES WE WORK WITH (Full-Bleed Width on Desktop) */}
      <div id="sectors" className="w-full relative z-10 mt-20 pt-16 border-t border-slate-800/80 overflow-hidden">
        
        {/* Style Keyframes for 100% Seamless Infinite Marquee */}
        <style jsx>{`
          @keyframes industryMarqueeLeft {
            0% { transform: translateX(0%); }
            100% { transform: translateX(calc(-100% - 1rem)); }
          }
          @keyframes industryMarqueeRight {
            0% { transform: translateX(calc(-100% - 1rem)); }
            100% { transform: translateX(0%); }
          }
          .animate-industry-left {
            animation: industryMarqueeLeft 32s linear infinite;
          }
          .animate-industry-right {
            animation: industryMarqueeRight 32s linear infinite;
          }
          .industry-marquee-wrapper:hover .animate-industry-left,
          .industry-marquee-wrapper:hover .animate-industry-right {
            animation-play-state: paused;
          }
        `}</style>

        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3 px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
            <Globe className="w-3.5 h-3.5" />
            <span>INDUSTRIES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            Websites for Different Types of Businesses
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We design websites suited to the specific requirements of diverse business sectors.
          </p>
        </div>

        {/* Industries Clean Grid */}
        <div className="w-full max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {categories.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-md flex flex-col justify-between hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 group shadow-md cursor-pointer"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-cyan-400 border border-blue-500/20 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>

                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Prompt */}
        <div className="text-center bg-slate-900/90 border border-slate-800 p-6 rounded-xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 mb-16">
          <p className="text-slate-300 text-xs sm:text-sm font-medium text-left">
            Have a different requirement? Tell us what you need and we&apos;ll discuss the right approach for your project.
          </p>

          <a
            href="https://wa.me/917827775353?text=Hi%20UrbanTechWebs%2C%20I%20want%20to%20discuss%20a%20website%20for%20my%20business%20industry."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 flex-shrink-0 shadow-md"
          >
            <Image src="/images/whatsapp.svg" alt="WhatsApp" width={16} height={16} className="w-4 h-4" />
            <span>Discuss on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}


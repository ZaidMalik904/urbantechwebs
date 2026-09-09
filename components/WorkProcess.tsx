"use client";

import React from "react";
import Image from "next/image";
import {
  Search,
  Paintbrush,
  Code2,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Clock,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Requirement Analysis",
      icon: Search,
      desc: "We analyze your business objectives, target market in Noida/Delhi NCR, brand identity, and key functional requirements to build a clear project roadmap.",
      badge: "Step 1: Planning",
      highlights: ["Business Goal Alignment", "Competitor Research", "Sitemap & Wireframing"],
      color: "from-blue-500/20 to-cyan-500/10 border-blue-500/40 text-cyan-400",
      iconBg: "bg-blue-500/20 text-cyan-300 border-blue-400/40",
    },
    {
      num: "02",
      title: "UI/UX & Visual Design",
      icon: Paintbrush,
      desc: "Our design team crafts modern, attractive wireframes and responsive UI mockups tailored to your brand colors, ensuring a seamless user experience.",
      badge: "Step 2: Design",
      highlights: ["Custom Figma UI", "Mobile-First Design", "Brand Aesthetics"],
      color: "from-purple-500/20 to-pink-500/10 border-purple-500/40 text-purple-400",
      iconBg: "bg-purple-500/20 text-purple-300 border-purple-400/40",
    },
    {
      num: "03",
      title: "Custom Development & Coding",
      icon: Code2,
      desc: "We build clean, fast, and scalable code using React, Next.js, Node.js, or WordPress with optimized structure and fast loading speeds.",
      badge: "Step 3: Build",
      highlights: ["Fast Clean Code", "Responsive Layouts", "Local SEO Structured Data"],
      color: "from-indigo-500/20 to-blue-500/10 border-indigo-500/40 text-indigo-400",
      iconBg: "bg-indigo-500/20 text-indigo-300 border-indigo-400/40",
    },
    {
      num: "04",
      title: "Quality Assurance & Testing",
      icon: CheckCircle2,
      desc: "Comprehensive testing across desktop, tablet, and mobile browsers for responsiveness, form submissions, security, and Core Web Vitals speed.",
      badge: "Step 4: Testing",
      highlights: ["Cross-Browser Test", "Speed Optimization", "Form & Security Audit"],
      color: "from-amber-500/20 to-yellow-500/10 border-amber-500/40 text-amber-400",
      iconBg: "bg-amber-500/20 text-amber-300 border-amber-400/40",
    },
    {
      num: "05",
      title: "Deployment & Live Launch",
      icon: Rocket,
      desc: "We configure your domain DNS, free SSL encryption, and high-speed server deployment so your website launches smoothly without downtime.",
      badge: "Step 5: Launch",
      highlights: ["Domain & DNS Setup", "Free SSL Certificate", "Google Search Indexing"],
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-400",
      iconBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
    },
    {
      num: "06",
      title: "Post-Launch Support & Growth",
      icon: ShieldCheck,
      desc: "We provide ongoing technical support, software updates, security monitoring, and website maintenance so your digital presence continues to grow.",
      badge: "Step 6: Maintenance",
      highlights: ["24/7 Monitoring", "Content Updates", "Technical Assistance"],
      color: "from-teal-500/20 to-cyan-500/10 border-teal-500/40 text-teal-400",
      iconBg: "bg-teal-500/20 text-teal-300 border-teal-400/40",
    },
  ];

  return (
    <section id="our-work-process" className="py-20 sm:py-28 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider rounded-full backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR WORK PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            How We Turn Ideas into Successful Websites
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Our structured step-by-step workflow ensures your website is delivered on time, perfectly designed, mobile-responsive, and optimized for real business results.
          </p>

          {/* Delivery Timeline Pill */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-900/90 border border-slate-800 rounded-full text-xs font-medium text-slate-300 shadow-lg mt-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Average Delivery Time: <strong className="text-white">7 to 14 Business Days</strong></span>
          </div>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 p-6 sm:p-8 rounded-2xl flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-950/40 group relative overflow-hidden"
              >
                {/* Top Subtle Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />

                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono text-cyan-400/90 group-hover:text-cyan-300 transition-colors">
                      {step.num}
                    </span>

                    <div className={`p-3 rounded-xl ${step.iconBg} border shadow-inner flex-shrink-0`}>
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider mb-3">
                    {step.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {step.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Ready to start your project with UrbanTech Webs?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Get a free consultation and customized quote for your business website today.
            </p>
          </div>

          <a
            href="https://wa.me/917827775353?text=Hi%20UrbanTechWebs%2C%20I%20want%20to%20discuss%20my%20website%20project%20process."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 flex-shrink-0 shadow-lg shadow-blue-600/30 hover:scale-105"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

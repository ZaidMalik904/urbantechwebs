"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  Clock,
  ShieldCheck,
  Home,
  Briefcase,
  FileCheck,
  UserCheck,
  Rocket,
} from "lucide-react";

export default function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const service = searchParams.get("service") || "";
  const phone = searchParams.get("phone") || "";
  const email = searchParams.get("email") || "";

  const whatsappMessage = `Hi UrbanTechWebs, I submitted a quote request on your website.${
    name ? `%0A%0A*Name:* ${encodeURIComponent(name)}` : ""
  }${service ? `%0A*Service Required:* ${encodeURIComponent(service)}` : ""}${
    phone ? `%0A*Phone:* ${encodeURIComponent(phone)}` : ""
  }${email ? `%0A*Email:* ${encodeURIComponent(email)}` : ""}`;

  const whatsappUrl = `https://wa.me/917827775353?text=${whatsappMessage}`;

  const trustPoints = [
    "7–14 Days Fast Delivery",
    "100% Mobile Responsive",
    "Local SEO Ready",
    "Free SSL Certificate",
  ];

  const steps = [
    {
      step: "01",
      title: "Inquiry Received",
      desc: "Our senior web development team receives and logs your project requirements.",
      icon: FileCheck,
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    },
    {
      step: "02",
      title: "30-Min Call / WhatsApp",
      desc: "We review your requirements and reach out via phone or WhatsApp with custom options.",
      icon: UserCheck,
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
    {
      step: "03",
      title: "Proposal & Kickoff",
      desc: "You receive a transparent quote. Upon approval, we start building your website immediately!",
      icon: Rocket,
      color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-8 sm:pt-12 pb-16 sm:pb-20 border-b border-slate-800">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none z-0" />

      {/* Ambient Radial Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-6 sm:space-y-8">
        
        {/* Animated Checkmark Icon Ring */}
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping blur-sm opacity-60" />
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-slate-900 border-2 border-emerald-500/50 text-emerald-400 flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.35)] relative z-10 transition-transform hover:scale-105">
            <CheckCircle2 className="w-11 h-11 sm:w-13 sm:h-13 text-emerald-400 stroke-[2.2]" />
          </div>
        </div>

        {/* Top Status Badge */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>SUBMISSION SUCCESSFUL & CONFIRMED</span>
          </span>
        </div>

        {/* Title & Subtext */}
        <div className="space-y-3.5 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Thank You{name ? `, ${name}` : ""}!
          </h1>
          <p className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            Your project request has been successfully submitted. Our team will review your requirement and contact you within <span className="font-bold text-cyan-400">30 minutes</span>!
          </p>
        </div>

        {/* Submitted Information Card (If details exist) */}
        {(name || service || phone || email) && (
          <div className="bg-slate-900/90 border border-slate-800/90 rounded-2xl p-5 sm:p-7 text-left max-w-xl mx-auto shadow-2xl space-y-3.5 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500" />
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Request Details</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                <Clock className="w-3.5 h-3.5" />
                <span>30-Min Priority Callback</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {name && (
                <div>
                  <span className="text-slate-400 block text-[11px] uppercase font-mono">Name</span>
                  <span className="font-bold text-white text-base">{name}</span>
                </div>
              )}
              {service && (
                <div>
                  <span className="text-slate-400 block text-[11px] uppercase font-mono">Service Required</span>
                  <span className="font-bold text-cyan-400 text-base">{service}</span>
                </div>
              )}
              {phone && (
                <div>
                  <span className="text-slate-400 block text-[11px] uppercase font-mono">Phone Number</span>
                  <span className="font-bold text-slate-200">{phone}</span>
                </div>
              )}
              {email && (
                <div>
                  <span className="text-slate-400 block text-[11px] uppercase font-mono">Email Address</span>
                  <span className="font-bold text-slate-200 truncate block">{email}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons: Instant WhatsApp & Phone Call */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto pt-2 w-full">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-xl shadow-emerald-950/40 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 group cursor-pointer"
          >
            <Image src="/images/whatsapp.svg" alt="WhatsApp" width={22} height={22} className="w-5 h-5 flex-shrink-0" />
            <span className="whitespace-nowrap">Connect Instantly on WhatsApp</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="tel:+917827775353"
            className="w-full sm:w-auto flex-1 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-xl shadow-blue-950/40 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span className="whitespace-nowrap">Call +91 78277 75353</span>
          </a>
        </div>

        {/* Process Roadmap Card - What Happens Next */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto text-left space-y-6">
          <div className="text-center sm:text-left space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>What Happens Next?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-normal">
              Here is how our project initiation workflow works after you submit your quote:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((item, i) => {
              const IconComp = item.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 rounded-2xl space-y-3 transition-colors relative"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${item.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">{item.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Secondary Navigation Buttons (Back to Home / Portfolio) */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors"
          >
            <Home className="w-4 h-4 text-cyan-400" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors"
          >
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span>Explore Our Portfolio</span>
          </Link>
        </div>

        {/* Trust Highlights Line */}
        <div className="pt-6 border-t border-slate-800/80 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400 font-medium">
          {trustPoints.map((point, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/WhatsAppButton";
import {
  Building2,
  Target,
  Lightbulb,
  Users2,
  ShieldCheck,
  Zap,
  Code2,
  Layout,
  Search,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | UrbanTech Webs - Professional Web Development Agency",
  description:
    "Learn about UrbanTech Webs, a leading web development and website design agency. Discover our team values, expertise, and client focus.",
  alternates: {
    canonical: "https://urbantechwebs.in/about",
  },
  openGraph: {
    title: "About Us | UrbanTech Webs - Professional Web Development Agency",
    description:
      "Learn about UrbanTech Webs, a leading web development and website design agency. Discover our team values, expertise, and client focus.",
    url: "https://urbantechwebs.in/about",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/about_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "About UrbanTech Webs Web Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | UrbanTech Webs - Professional Web Development Agency",
    description:
      "Specialized web development & design agency dedicated to building high-converting websites.",
    images: ["/images/about_hero_bg.jpg"],
  },
};

export default function AboutPage() {
  const companyValues = [
    {
      title: "Quality-Driven Engineering",
      icon: Code2,
      desc: "We build tailored websites using modern technologies like Next.js, React, and WordPress—avoiding slow, bloated page builders.",
      badge: "Engineering Standard",
    },
    {
      title: "Transparent Client Partnership",
      icon: Users2,
      desc: "Direct communication, clear project timelines, and regular milestone updates from day one to launch.",
      badge: "Client Focus",
    },
    {
      title: "Speed & Mobile-First Design",
      icon: Zap,
      desc: "Every website is engineered for fast load speeds, Core Web Vitals optimization, and seamless rendering on all screen sizes.",
      badge: "Performance",
    },
    {
      title: "End-to-End Reliability",
      icon: ShieldCheck,
      desc: "From domain DNS setup and SSL configuration to post-launch technical assistance and maintenance support.",
      badge: "Support",
    },
  ];

  const engineeringPillars = [
    {
      title: "Clean Semantic Code",
      desc: "Search engines and browsers love clean structure. We write standardized, accessible HTML5 and modular CSS for long-term scalability.",
    },
    {
      title: "High-Converting UI/UX",
      desc: "We focus on visitor flow, clear call-to-action buttons, intuitive navigation, and quick lead capture to turn visitors into inquiries.",
    },
    {
      title: "Technical SEO Ready",
      desc: "Proper meta tags, open-graph cards, schema markup, and canonical URLs built directly into the site architecture.",
    },
    {
      title: "Rigorous QA Testing",
      desc: "Thorough testing across Chrome, Safari, Firefox, iOS, and Android to guarantee consistent display and error-free forms.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main>
        {/* Expanded Hero Banner Section with Background Image */}
        <section className="relative overflow-hidden bg-slate-950 text-white -mt-[108px] pt-36 sm:pt-44 pb-16 sm:pb-20 text-center flex flex-col justify-center min-h-[480px] sm:min-h-[540px] border-b border-slate-800">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about_hero_bg.jpg"
              alt="UrbanTech Webs Team & Office Background"
              fill
              priority
              className="object-cover object-center opacity-45 scale-105"
            />
            {/* Multi-layer Dark Gradient Overlay for optimal readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-slate-950" />
          </div>

          {/* Ambient Glow Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none z-0" />

          {/* Hero Content Container */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-6 sm:space-y-7">
            
            {/* Badge: OUR COMPANY & MISSION */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-cyan-400 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>OUR COMPANY & MISSION</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto">
              About UrbanTech Webs — Our Company & Mission
            </h1>

            {/* Subtext Description */}
            <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
              We are a specialized{" "}
              <Link href="/web-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                web development
              </Link>{" "}
              and{" "}
              <Link href="/website-design" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                website design
              </Link>{" "}
              agency. Our mission is to empower growing businesses with fast, secure, mobile-first, and SEO-optimized digital web solutions. Explore our{" "}
              <Link href="/portfolio" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                client portfolio
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                contact our team
              </Link>{" "}
              to start your project.
            </p>

            {/* Mission & Company Pillars Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-md text-slate-300">
                <Target className="w-4.5 h-4.5 text-cyan-400 flex-shrink-0" />
                <span><strong className="text-white">Mission:</strong> High-Converting Websites</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-md text-slate-300">
                <Lightbulb className="w-4.5 h-4.5 text-blue-400 flex-shrink-0" />
                <span><strong className="text-white">Vision:</strong> Strong Digital Presence</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-md text-slate-300">
                <Users2 className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white">Values:</strong> Quality & Integrity</span>
              </div>
            </div>

          </div>
        </section>

        {/* Dedicated Section 1: Agency Core Values & Philosophy */}
        <section className="py-20 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OUR CORE VALUES</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                How We Approach Web Development
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                At UrbanTech Webs, we focus on technical craftsmanship, aesthetic design, and measurable conversion results for every client project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 hover:border-blue-500/60 p-6 sm:p-7 rounded-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                          <Icon className="w-6 h-6 stroke-[2]" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                          {val.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {val.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Dedicated Section 2: Technical & Quality Standards */}
        <section className="py-20 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider rounded-full backdrop-blur-md">
                <Code2 className="w-3.5 h-3.5" />
                <span>QUALITY STANDARDS</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Our Engineering & Design Pillars
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                We combine technical depth with clean visual presentation to deliver websites that reflect your business standard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {engineeringPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-xl flex items-start gap-4 backdrop-blur-md hover:border-blue-500/50 transition-all duration-300 shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Contact Form CTA */}
        <ContactForm />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Mail,
  ExternalLink,
  Code,
  Building2,
  ShieldCheck,
  Smartphone,
  Zap,
  Globe,
  Lock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/WhatsAppButton";
import Stats from "@/components/Stats";
import { useQuoteModal } from "@/components/QuoteModalContext";

export interface ServicePageProps {
  title: string;
  badge: string;
  h1: string;
  metaDescription: string;
  introParagraphs: (string | React.ReactNode)[];
  benefits: { title: string; desc: string | React.ReactNode }[];
  features: { title: string; desc: string | React.ReactNode }[];
  processSteps: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string | React.ReactNode; rawText?: string }[];
  relatedServices: { title: string; href: string; desc?: string }[];
  portfolioExamples?: { title: string; desc: string; url: string; image: string }[];
  heroImage?: string;
  showStats?: boolean;
}

export default function ServicePageLayout({
  badge,
  h1,
  introParagraphs,
  benefits,
  features,
  processSteps,
  faqs,
  relatedServices,
  portfolioExamples,
  heroImage,
  showStats = true,
}: ServicePageProps) {
  const { openQuoteModal } = useQuoteModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const schemaBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://urbantechwebs.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://urbantechwebs.in/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: badge,
        item: `https://urbantechwebs.in/`,
      },
    ],
  };

  const firstIntroText =
    typeof introParagraphs[0] === "string"
      ? introParagraphs[0]
      : h1;

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: h1,
    serviceType: badge,
    provider: {
      "@type": "ProfessionalService",
      name: "UrbanTech Webs",
      url: "https://urbantechwebs.in/",
      telephone: "+91-7827775353",
      email: "urbantechwebs904@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Noida Sector 62",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201309",
        addressCountry: "IN",
      },
    },
    areaServed: ["Noida", "Delhi NCR", "India"],
    description: firstIntroText,
  };

  const schemaFaq =
    faqs && faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.rawText || (typeof faq.a === "string" ? faq.a : faq.q),
            },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      {schemaFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
        />
      )}
      <Navbar />

      <main>
        {/* Hero Banner with Breadcrumb */}
        <section className="relative overflow-hidden bg-slate-950 text-white min-h-[480px] sm:min-h-[520px] lg:min-h-[540px] flex items-center justify-center pt-10 sm:pt-14 md:pt-16 pb-24 sm:pb-28">
          {heroImage ? (
            <div className="absolute inset-0 z-0">
              <Image
                src={heroImage}
                alt={h1}
                fill
                priority
                className="object-cover object-center opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950/95" />
            </div>
          ) : (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-15 pointer-events-none" />
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            </>
          )}

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-5 w-full">
            
            {/* Breadcrumb Navigation */}
            <nav className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 border border-slate-800 px-4 py-1.5 rounded-full backdrop-blur-md">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <Link href="/#services" className="hover:text-cyan-400 transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-cyan-400 font-bold">{badge}</span>
            </nav>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
              {h1}
            </h1>

            <div className="space-y-3 max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
              {introParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openQuoteModal(badge)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/917827775353?text=Hi%20UrbanTech%20Webs%2C%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Image src="/images/whatsapp.svg" alt="WhatsApp" width={18} height={18} className="w-4.5 h-4.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section (KEY ADVANTAGES) - Clean White Background */}
        <section className="bg-white text-slate-900 border-b border-slate-200 relative">
          {/* Stats Highlights Banner placed inside White Section for seamless white bottom background */}
          {showStats && <Stats />}

          <div className="pt-12 sm:pt-16 pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>KEY ADVANTAGES</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Why Choose Us for {badge}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 p-6 rounded-xl space-y-3 hover:border-blue-500 hover:bg-white hover:shadow-xl transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white font-mono font-bold text-sm flex items-center justify-center shadow-xs group-hover:bg-blue-700 transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{b.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Inclusions Section */}
        <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                What Is Included in Our Service
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Everything required to deliver a complete, high-performing web project.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-2 flex items-start gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{f.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack - Clean White Background with Logo Images */}
        <section className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
                <Code className="w-3.5 h-3.5 text-blue-600" />
                <span>TECHNOLOGY STACK</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Modern Web Technologies We Work With
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                We engineer scalable web solutions using modern frontend, backend, and CMS tools.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {[
                { name: "React.js", image: "/images/uploaded_react.png", desc: "UI Framework" },
                { name: "Next.js", image: "/images/uploaded_nextjs.png", desc: "Fullstack SSG / SSR" },
                { name: "TypeScript", image: "/images/uploaded_typescript.png", desc: "Type-Safe Modern JS" },
                { name: "Node.js", image: "/images/uploaded_nodejs_v2.png", desc: "Fast Backend Services" },
                { name: "JavaScript", image: "/images/uploaded_js.png", desc: "Web Scripting" },
                { name: "WordPress", image: "/images/uploaded_wordpress.png", desc: "CMS & Custom Themes" },
                { name: "PHP", image: "/images/uploaded_php.png", desc: "Dynamic Backend" },
                { name: "MySQL", image: "/images/uploaded_mysql.png", desc: "Relational Database" },
                { name: "MongoDB", image: "/images/uploaded_mongodb.png", desc: "NoSQL Database" },
                { name: "Laravel", image: "/images/uploaded_laravel.png", desc: "PHP Framework" },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 flex flex-col items-center justify-center text-center space-y-3 hover:border-blue-500 hover:bg-white hover:shadow-xl transition-all duration-200 group"
                >
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      fill
                      sizes="56px"
                      className="object-contain group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Execution & Delivery Process - Tall Height & Alternating Zig-Zag Flow */}
        <section className="py-20 sm:py-28 md:py-32 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
          {/* Glow Background Effects */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>STEP-BY-STEP WORKFLOW</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Execution & Delivery Process
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                How we turn your website idea into a high-performing digital product.
              </p>
            </div>

            {/* Timeline Vertical Center Line (Desktop) */}
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-cyan-500 via-blue-600 to-indigo-600 rounded-full opacity-40" />

              <div className="space-y-12 md:space-y-16">
                {processSteps.map((p, idx) => {
                  const isEven = idx % 2 === 1;
                  return (
                    <div
                      key={idx}
                      className={`flex flex-col md:flex-row items-center gap-8 ${
                        isEven ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Process Card Half */}
                      <div className="w-full md:w-1/2">
                        <div className="bg-slate-900/90 border border-slate-800 p-7 sm:p-8 rounded-2xl space-y-4 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 relative group">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-extrabold text-cyan-400 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full">
                              {p.step}
                            </span>
                            <span className="text-xs text-slate-500 font-mono">Phase 0{idx + 1}</span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {p.title}
                          </h3>
                          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            {p.desc}
                          </p>
                        </div>
                      </div>

                      {/* Center Node Badge on Timeline (Desktop) */}
                      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border-2 border-cyan-400 text-cyan-400 font-bold font-mono text-sm z-20 shadow-[0_0_15px_rgba(34,211,238,0.4)] flex-shrink-0">
                        0{idx + 1}
                      </div>

                      {/* Empty Spacer Half for Grid Balance */}
                      <div className="hidden md:block w-1/2" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Combined Section: Industries We Serve & Related Work Examples - Clean White Background */}
        <section className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>INDUSTRIES & PORTFOLIO</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Industries We Serve & Live Work Examples
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Tailored web development solutions engineered for corporate, commercial, and e-commerce clients.
              </p>
            </div>

            {/* Sub-part 1: Industries Grid */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
                Business Sectors We Build For
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Corporate Agencies & Consultancies", desc: "High-trust brand websites built for client acquisition, lead capture, and service portfolios." },
                  { title: "E-commerce & Retail Brands", desc: "Online shopping platforms with secure payment gateways, cart management, and order tracking." },
                  { title: "Real Estate & Property Developers", desc: "Property listing portals with interactive project galleries, location maps, and inquiry forms." },
                  { title: "Manufacturing & B2B Suppliers", desc: "Product catalogue sites highlighting technical specifications, brochures, and RFQ forms." },
                  { title: "Healthcare, Clinics & Doctors", desc: "Doctor appointment booking portals, clinic service pages, and patient trust features." },
                  { title: "Education & Coaching Institutes", desc: "Student enrollment portals, course detail pages, and online fee payment integrations." },
                ].map((ind, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200/90 p-6 rounded-xl space-y-2 hover:border-blue-500 hover:bg-white hover:shadow-lg transition-all duration-200">
                    <h4 className="text-base font-bold text-slate-900">{ind.title}</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{ind.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-part 2: Related Portfolio Examples (if available) */}
            {portfolioExamples && portfolioExamples.length > 0 && (
              <div className="pt-8 border-t border-slate-200 space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
                  Featured Live Work Examples
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portfolioExamples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden flex flex-col sm:flex-row items-center p-5 gap-5 hover:shadow-xl hover:border-blue-500 transition-all duration-200 group"
                    >
                      <div className="relative w-full sm:w-52 aspect-16/10 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0 shadow-sm">
                        <Image src={ex.image} alt={ex.title} fill sizes="(max-width: 640px) 100vw, 208px" className="object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="space-y-2.5 flex-1">
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{ex.title}</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">{ex.desc}</p>
                        <a
                          href={ex.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <span>Visit Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>

        {/* Section: Core Guarantees & Quality Commitment (What You Get With Every Project) */}
        <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Part 1: What You Get With Every Project */}
            <div className="space-y-10">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>OUR PROMISE</span>
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  What You Get With Every Project
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Smartphone, title: "100% Mobile Responsive", desc: "Verified to render smoothly on iPhones, Android devices, tablets, and desktop displays." },
                  { icon: Zap, title: "Optimized Speed", desc: "Fast page load times with image compression, clean code, and Core Web Vitals optimization." },
                  { icon: Globe, title: "SEO-Ready Architecture", desc: "Structured headings, metadata, XML sitemaps, and search-engine indexable code." },
                  { icon: Lock, title: "SSL & Security Setup", desc: "Full HTTPS SSL certificate configuration and basic website security hardening." },
                ].map((g, idx) => {
                  const Icon = g.icon;
                  return (
                    <div key={idx} className="bg-slate-950 border border-slate-800 p-6 rounded-xl text-center space-y-3 hover:border-cyan-400/50 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-cyan-400 border border-blue-500/30 flex items-center justify-center mx-auto">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-bold text-white">{g.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">{g.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Part 2: Related Services */}
            {relatedServices && relatedServices.length > 0 && (
              <div className="pt-8 border-t border-slate-800/80">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Related Services</h3>
                    <p className="text-slate-400 text-xs">Explore complementary web solutions for your business</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {relatedServices.map((rel, idx) => (
                      <Link
                        key={idx}
                        href={rel.href}
                        className="px-3.5 py-2 bg-slate-950 hover:bg-blue-600 hover:text-white border border-slate-800 text-xs font-semibold text-slate-300 rounded-lg transition-all"
                      >
                        {rel.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* FAQs - Clean White Background */}
        <section className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200 text-blue-600 text-xs font-mono font-bold uppercase tracking-wider rounded-full">
                <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>FREQUENT QUESTIONS</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200/90 rounded-xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-4 text-left font-bold text-slate-900 text-base flex items-center justify-between gap-4 hover:text-blue-600 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4 text-slate-600 text-xs sm:text-sm border-t border-slate-200/60 pt-3 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA Section - Left Content & Right Action Buttons */}
        <section id="contact-cta" className="py-10 sm:py-12 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
              
              {/* Left Side: Heading & Copy */}
              <div className="space-y-2 text-center lg:text-left max-w-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Ready to Discuss Your Project?
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                  Based in Noida / Delhi NCR, UrbanTech Webs builds fast, responsive, and conversion-focused websites for businesses across India.
                </p>
              </div>

              {/* Right Side: Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
                <a
                  href="https://wa.me/917827775353?text=Hi%20UrbanTech%20Webs%2C%20I%20am%20interested%20in%20a%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all flex-shrink-0 cursor-pointer"
                >
                  <Image src="/images/whatsapp.svg" alt="WhatsApp" width={18} height={18} className="w-4.5 h-4.5" />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2 transition-all flex-shrink-0 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Enquiry Form</span>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

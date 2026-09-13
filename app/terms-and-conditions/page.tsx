import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "UrbanTechWebs Terms and Conditions. Terms governing the use of our website and website design and web development services.",
  alternates: {
    canonical: "https://urbantechwebs.in/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | UrbanTechWebs",
    description:
      "UrbanTechWebs Terms and Conditions. Terms governing website design and web development services.",
    url: "https://urbantechwebs.in/terms-and-conditions",
    siteName: "UrbanTechWebs",
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Logo size="md" darkText={false} />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex-1 w-full space-y-8 text-slate-300">
        <div className="space-y-3 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>LEGAL TERMS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-slate-400 text-sm sm:text-base font-mono">
            Last Updated: September 2026
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">1. Agreement to Terms</h2>
          <p className="leading-relaxed text-sm sm:text-base">
            By accessing or using the website at{" "}
            <a href="https://urbantechwebs.in/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              https://urbantechwebs.in/
            </a>{" "}
            or engaging UrbanTechWebs (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) for website design and development services, you agree to comply with and be bound by these Terms &amp; Conditions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">2. Scope of Services</h2>
          <p className="leading-relaxed text-sm sm:text-base">
            UrbanTechWebs provides custom website design, web development, e-commerce stores, landing pages, WordPress development, UI/UX optimization, and related technical setup services. Specific deliverables, delivery timelines (typically 7–14 working days), and inclusions are defined per individual project scope agreement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">3. Intellectual Property &amp; Ownership</h2>
          <p className="leading-relaxed text-sm sm:text-base">
            All original website design elements, code, custom logos, graphics, and text supplied by UrbanTechWebs become the property of the client upon full payment of the agreed project fees, subject to third-party open-source component licenses (such as React, Next.js, or WordPress).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">4. Client Responsibilities</h2>
          <p className="leading-relaxed text-sm sm:text-base">
            Clients are responsible for providing accurate text content, logos, media assets, and domain/hosting access credentials required for project completion. Clients warrant that all supplied content does not infringe upon third-party copyrights or intellectual property rights.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">5. Revisions &amp; Post-Launch Support</h2>
          <p className="leading-relaxed text-sm sm:text-base">
            Revisions are performed within the agreed project scope prior to deployment. Post-launch support, domain connection, and ongoing technical assistance are provided according to your agreed support terms or project scope.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">6. Limitation of Liability</h2>
          <p className="leading-relaxed text-sm sm:text-base">
            UrbanTechWebs shall not be liable for indirect, incidental, or consequential damages resulting from third-party hosting outages, domain registrar delays, or unauthorized client access after handover.
          </p>
        </section>

        <section className="space-y-4 border-t border-slate-800 pt-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">7. Governing Law &amp; Contact Information</h2>
          <p className="leading-relaxed text-sm sm:text-base">
            These terms are governed by the laws of India. For questions or service enquiries, contact:
          </p>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>UrbanTechWebs, Noida Sector 62, Uttar Pradesh, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <a href="tel:+917827775353" className="hover:text-cyan-400 transition-colors">+91 78277 75353</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <a href="mailto:urbantechwebs904@gmail.com" className="hover:text-cyan-400 transition-colors">urbantechwebs904@gmail.com</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

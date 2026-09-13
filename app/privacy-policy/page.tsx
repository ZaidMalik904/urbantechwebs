import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "UrbanTechWebs Privacy Policy. Learn how we collect, use, and protect your information when visiting our website or using our web development services.",
  alternates: {
    canonical: "https://urbantechwebs.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | UrbanTechWebs",
    description:
      "UrbanTechWebs Privacy Policy. Learn how we collect, use, and protect your information.",
    url: "https://urbantechwebs.in/privacy-policy",
    siteName: "UrbanTechWebs",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
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

      {/* Main Privacy Policy Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex-1 w-full space-y-8 text-slate-300">
        <div className="space-y-3 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>LEGAL DOCUMENTATION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm sm:text-base font-mono">
            Last Updated: September 2026
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">1. Introduction</h2>
          <p className="leading-relaxed text-sm sm:text-base">
            UrbanTechWebs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website{" "}
            <a href="https://urbantechwebs.in/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              https://urbantechwebs.in/
            </a>
            . We are committed to respecting your privacy and protecting any personal information you share with us when using our website or contacting us regarding our website design and web development services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">2. Information We Collect</h2>
          <p className="leading-relaxed text-sm sm:text-base">
            We collect minimal personal information strictly necessary to provide consultation, quotes, and web development services. Information collected includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base pl-2">
            <li><strong className="text-white">Contact Information:</strong> Name, email address, phone/WhatsApp number, business name, and project message submitted voluntarily through our enquiry forms or direct messaging links.</li>
            <li><strong className="text-white">Usage &amp; Device Data:</strong> Standard server log information such as browser type, IP address, device type, referring URLs, and timestamps collected automatically for diagnostic and security purposes.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">3. How We Use Your Information</h2>
          <p className="leading-relaxed text-sm sm:text-base">
            The information you provide is used solely to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base pl-2">
            <li>Respond to your requests, queries, and project quote submissions.</li>
            <li>Communicate regarding scope, progress, updates, and deliverables for your website project.</li>
            <li>Ensure security, diagnose server issues, and maintain technical performance of our website.</li>
          </ul>
          <p className="leading-relaxed text-sm sm:text-base">
            We do not sell, rent, trade, or transfer your personal information to third parties for marketing purposes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">4. Cookies and Analytical Tools</h2>
          <p className="leading-relaxed text-sm sm:text-base">
            Our website uses standard HTTP cookies and session management to ensure essential site navigation, font rendering, and technical performance. You can control cookie preferences in your internet browser settings.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">5. Data Security</h2>
          <p className="leading-relaxed text-sm sm:text-base">
            We employ industry-standard technical measures, including SSL (HTTPS) encryption and secure hosting infrastructure on Vercel, to protect data transmitted between your browser and our website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">6. Third-Party Links</h2>
          <p className="leading-relaxed text-sm sm:text-base">
            Our website may contain links to external sites (such as WhatsApp, live portfolio client websites, or social media platforms). We are not responsible for the privacy practices or content of third-party websites.
          </p>
        </section>

        <section className="space-y-4 border-t border-slate-800 pt-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">7. Contact Us</h2>
          <p className="leading-relaxed text-sm sm:text-base">
            If you have questions about this Privacy Policy or wish to update your details, please reach out to us:
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

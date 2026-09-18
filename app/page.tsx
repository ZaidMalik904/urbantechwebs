import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import WhatYouGet from "@/components/WhatYouGet";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Web Development & Website Design Company | UrbanTech Webs",
  description:
    "UrbanTech Webs provides professional website design, web development, e-commerce, WordPress and custom web application solutions for businesses.",
  alternates: {
    canonical: "https://urbantechwebs.in/",
  },
  openGraph: {
    title: "Web Development & Website Design Company | UrbanTech Webs",
    description:
      "UrbanTech Webs provides professional website design, web development, e-commerce, WordPress and custom web application solutions for businesses.",
    url: "https://urbantechwebs.in/",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UrbanTech Webs Website Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & Website Design Company | UrbanTech Webs",
    description:
      "Professional website design, web development, e-commerce, WordPress and custom web application solutions.",
    images: ["/images/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Navbar with Sticky Header & Announcement Ticker */}
      <Navbar />

      {/* Main Page Sections Flow */}
      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* Highlights Banner */}
        <Stats />

        {/* 3. Core Website Services */}
        <Services />

        {/* 4. Why Choose Us / Key Benefits */}
        <WhyUs />

        {/* 5. Technology Stack */}
        <TechStack />

        {/* 6. Portfolio Showcase */}
        <Portfolio />

        {/* 7. How We Work / Process & Industries We Serve */}
        <Process />

        {/* 8. Website Features & Inclusions */}
        <WhatYouGet />

        {/* 9. Frequently Asked Questions */}
        <Faq />

        {/* 10. Final CTA Banner */}
        <CtaBanner />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating Action Bar */}
      <FloatingActions />
    </div>
  );
}



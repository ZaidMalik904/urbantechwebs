"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import BusinessValue from "@/components/BusinessValue";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import WhatYouGet from "@/components/WhatYouGet";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/WhatsAppButton";

export default function Home() {
  const handleOpenQuoteModal = () => {
    window.open(
      "https://wa.me/917827775353?text=Hi%20UrbanTechWebs%2C%20I%20want%20to%20get%20a%20free%20consultation%20for%20my%20website%20project.",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navbar with Sticky Header & Announcement Ticker */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Page Sections Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 2. Red Floating Stats Banner */}
        <Stats />
        
        {/* 3. Business Value Section */}
        <BusinessValue />

        {/* 4. Why UrbanTechWebs (Our Working Promise) */}
        <WhyUs onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 5. Services Section (Our Core Services) */}
        <Services />

        {/* 6. About Section */}
        <About />

        {/* 7. Portfolio & Real Case Studies */}
        <Portfolio />

        {/* 8. What You Get (Deliverables Checklist) */}
        <WhatYouGet onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 9. Technology Stack (Technical Credibility) */}
        <TechStack />

        {/* 10. Our Process */}
        <Process />

        {/* 12. Testimonials & Authentic Client Feedback */}
        <Testimonials />

        {/* 14. Frequently Asked Questions */}
        <Faq />

        {/* 15. Final CTA Banner */}
        <CtaBanner onOpenQuoteModal={handleOpenQuoteModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom-Right Action Buttons */}
      <FloatingActions />
    </div>
  );
}


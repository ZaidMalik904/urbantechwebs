import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import BusinessValue from "@/components/BusinessValue";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import WhatYouGet from "@/components/WhatYouGet";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navbar with Sticky Header & Announcement Ticker */}
      <Navbar />

      {/* Main Page Sections Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Highlights Banner */}
        <Stats />
        
        {/* 3. Business Website Value Section */}
        <BusinessValue />

        {/* 4. About UrbanTechWebs */}
        <About />

        {/* 5. Core Website Services & Feature Options */}
        <Services />

        {/* Technologies We Use (Auto-Animating Infinite Marquee) */}
        <TechStack />

        {/* 6. Why Choose UrbanTechWebs */}
        <WhyUs />

        {/* 7. Website Design & Development Projects */}
        <Portfolio />

        {/* 8. Development Process & Businesses We Work With */}
        <Process />

        {/* 9. What You Can Expect From Us (Trust Section) */}
        <Testimonials />

        {/* 10. What You Get With Your Website (Website Inclusions) */}
        <WhatYouGet />

        {/* 11. Frequently Asked Questions */}
        <Faq />

        {/* 12. Final CTA Banner */}
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom-Right Action Buttons */}
      <FloatingActions />
    </div>
  );
}



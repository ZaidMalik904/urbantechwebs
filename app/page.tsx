"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
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
      {/* Top Announcement Bar & Sticky Navbar */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Sections */}
      <main>
        {/* Full-Height Hero Section */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />
        
        {/* Full-Width Dark Theme Stats Section right below Hero */}
        <Stats />

        <Services />
        <WhyUs onOpenQuoteModal={handleOpenQuoteModal} />
        <Portfolio />
        <Process />
        <TechStack />
        <Industries />
        <Testimonials />
        <CtaBanner onOpenQuoteModal={handleOpenQuoteModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom-Right Action Buttons */}
      <FloatingActions />
    </div>
  );
}

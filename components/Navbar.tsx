"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import TopBar from "./TopBar";
import LoadingLine from "./LoadingLine";
import Logo from "./Logo";

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleQuote = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      window.open(
        "https://wa.me/917827775353?text=Hi%20UrbanTechWebs%2C%20I%20want%20to%20get%20a%20free%20quote%20for%20my%20website%20project.",
        "_blank"
      );
    }
  };

  // Lock background body scroll & add body class when mobile drawer is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#work" },
    { name: "Process", href: "#process" },
  ];

  return (
    <>
      {/* Top Animated Loading Line on Refresh */}
      <LoadingLine />

      {/* Main Sticky Navbar Header */}
      <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-white/10 transition-all text-white">
        
        {/* Mobile-Only Top Contact Strip (Left: Mail, Right: Phone) */}
        <div className="block md:hidden bg-slate-900/90 border-b border-slate-800 text-[11px] py-2 px-4 text-slate-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            {/* Left: Mail ID */}
            <a
              href="mailto:urbantechwebs904@gmail.com"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors font-medium truncate"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span className="truncate">urbantechwebs904@gmail.com</span>
            </a>

            {/* Right: Phone Number */}
            <a
              href="tel:+917827775353"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors font-semibold flex-shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span>+91 78277 75353</span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Custom Brand Logo */}
          <a href="#home">
            <Logo size="md" darkText={false} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative py-1 text-sm font-bold tracking-wide text-slate-200 hover:text-cyan-400 transition-colors"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_#22d3ee]" />
              </a>
            ))}
          </nav>

          {/* Action Button: Get Free Quote CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleQuote}
              className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md shadow-blue-600/30 transition-all hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Get a Free Website Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="p-2.5 rounded-xl text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 shadow-md cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Announcement Ticker Bar below Navbar */}
        <TopBar onOpenQuoteModal={handleQuote} />
      </header>

      {/* Right-Side Mobile Drawer & Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Dark Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Right-Side Slide Drawer Panel */}
          <div className="fixed inset-y-0 right-0 w-[290px] sm:w-[320px] bg-slate-950 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl z-50 animate-in slide-in-from-right duration-300 text-white">
            
            <div>
              {/* Drawer Top Header: Logo & Close Button */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
                <Logo size="sm" darkText={false} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close Navigation Menu"
                  className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 mb-2 block font-mono">
                  Navigation Menu
                </span>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold text-slate-200 hover:text-cyan-400 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Drawer CTA & Direct Contact Info */}
            <div className="pt-6 border-t border-slate-800 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleQuote();
                }}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>GET A FREE WEBSITE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/917827775353?text=Hi%20UrbanTechWebs%2C%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-center text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Image src="/images/whatsapp.svg" alt="WhatsApp" width={18} height={18} className="w-4.5 h-4.5" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="pt-2 text-[11px] text-slate-400 space-y-1.5 font-mono">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>+91 78277 75353</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>urbantechwebs904@gmail.com</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}



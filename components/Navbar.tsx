"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Phone, Mail, ChevronDown, Sparkles, Code, Layout, ShoppingCart, Globe, Rocket, Cpu, Search, Paintbrush } from "lucide-react";
import TopBar from "./TopBar";
import LoadingLine from "./LoadingLine";
import Logo from "./Logo";
import { useQuoteModal } from "./QuoteModalContext";

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const { openQuoteModal } = useQuoteModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  const closeServices = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(false);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleQuote = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      openQuoteModal();
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

  const serviceLinks = [
    { name: "Website Development", href: "/web-development", desc: "Custom, scalable business sites", icon: Code },
    { name: "Website Design", href: "/website-design", desc: "Modern UI/UX & responsive layouts", icon: Layout },
    { name: "E-commerce Development", href: "/ecommerce-development", desc: "Online stores & payment gateways", icon: ShoppingCart },
    { name: "WordPress Development", href: "/wordpress-development", desc: "Easy CMS management & themes", icon: Globe },
    { name: "Landing Page Design", href: "/landing-page-development", desc: "Lead generation & campaign pages", icon: Rocket },
    { name: "Web Application Dev", href: "/web-application-development", desc: "Custom portals, dashboards & apps", icon: Cpu },
    { name: "SEO & Performance", href: "/seo-services", desc: "Search visibility & speed tuning", icon: Search },
    { name: "Logo & Brand Design", href: "/logo-design", desc: "Custom logo & brand visual identity", icon: Paintbrush },
  ];

  return (
    <>
      {/* Top Animated Loading Line on Refresh */}
      <LoadingLine />

      {/* Main Sticky Navbar Header */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-white/10 transition-all text-white">
        
        {/* Mobile-Only Top Contact Strip (Left: Mail, Right: Phone) */}
        <div className="block md:hidden bg-slate-900/90 border-b border-slate-800 text-[11px] py-2 px-4 text-slate-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            {/* Left: Mail ID */}
            <a
              href="mailto:urbantechwebs904@gmail.com"
              data-gtm="email-link"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors font-medium truncate"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span className="truncate">urbantechwebs904@gmail.com</span>
            </a>

            {/* Right: Phone Number */}
            <a
              href="tel:+917827775353"
              data-gtm="phone-link"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors font-semibold flex-shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span>+91 78277 75353</span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Custom Brand Logo */}
          <Link href="/">
            <Logo size="md" darkText={false} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            <Link
              href="/"
              className="group relative py-1 text-sm font-bold tracking-wide text-slate-200 hover:text-cyan-400 transition-colors"
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_#22d3ee]" />
            </Link>

            {/* Services Dropdown (2 Columns, Wide Popup, z-50 floating over TopBar) */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="group relative py-1 text-sm font-bold tracking-wide text-slate-200 hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((prev) => !prev)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-cyan-400" : ""}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_#22d3ee]" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-2xl relative overflow-hidden text-slate-900">
                    
                    {/* Top Accent Blue Line */}
                    <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

                    {/* Header Strip */}
                    <div className="px-2 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-slate-700 font-bold">Web Development Services</span>
                      </div>
                      <span className="text-[10px] text-blue-600 font-bold font-sans">Custom Digital Solutions</span>
                    </div>

                    {/* 2 Services Per Row Grid (6 Services total = 3 rows x 2 columns) */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {serviceLinks.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={closeServices}
                            className="p-3 rounded-md bg-slate-50/90 hover:bg-blue-50/80 border border-slate-200/80 hover:border-blue-300 transition-all duration-200 group/item flex items-start gap-3"
                          >
                            <div className="w-8 h-8 rounded-md bg-blue-600 text-white flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-700 transition-colors shadow-xs">
                              <IconComponent className="w-4 h-4 stroke-[2]" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors leading-tight mb-1 truncate">
                                {service.name}
                              </div>
                              <div className="text-[11px] text-slate-500 leading-snug line-clamp-1">
                                {service.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom Prompt Strip */}
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between px-2 text-[11px]">
                      <span className="text-slate-500 font-medium">Need a custom digital web app?</span>
                      <Link
                        href="/contact"
                        onClick={closeServices}
                        className="text-blue-600 font-bold hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                      >
                        <span>Get Free Consultation</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className="group relative py-1 text-sm font-bold tracking-wide text-slate-200 hover:text-cyan-400 transition-colors"
            >
              <span>Our Work</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_#22d3ee]" />
            </Link>

            <Link
              href="/about"
              className="group relative py-1 text-sm font-bold tracking-wide text-slate-200 hover:text-cyan-400 transition-colors"
            >
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_#22d3ee]" />
            </Link>

            <Link
              href="/contact"
              className="group relative py-1 text-sm font-bold tracking-wide text-slate-200 hover:text-cyan-400 transition-colors"
            >
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_#22d3ee]" />
            </Link>
          </nav>

          {/* Action Button: Get Free Consultation CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleQuote}
              data-gtm="header-quote-cta"
              className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md shadow-blue-600/30 transition-all hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Get a Free Consultation</span>
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
          <div className="fixed inset-y-0 right-0 w-[290px] sm:w-[320px] bg-slate-950 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl z-50 animate-in slide-in-from-right duration-300 text-white overflow-y-auto">
            
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
                
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-200 hover:text-cyan-400 hover:bg-slate-900 transition-all"
                >
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </Link>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-200 hover:text-cyan-400 hover:bg-slate-900 transition-all"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileServicesOpen ? "rotate-180 text-cyan-400" : ""}`} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="pl-4 pr-1 py-2 space-y-1 bg-slate-900/60 rounded-xl my-1 border border-slate-800/80">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-200 hover:text-cyan-400 hover:bg-slate-900 transition-all"
                >
                  <span>Our Work</span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </Link>

                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-200 hover:text-cyan-400 hover:bg-slate-900 transition-all"
                >
                  <span>About</span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-200 hover:text-cyan-400 hover:bg-slate-900 transition-all"
                >
                  <span>Contact</span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </Link>
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
                <span>GET A FREE CONSULTATION</span>
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




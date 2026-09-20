"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm pt-16 pb-24 sm:pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">

          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/">
              <Logo size="md" darkText={false} />
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              UrbanTech Webs is a professional web development and website design company. We build custom, responsive, and performance-driven digital solutions.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Important Pages
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "/", external: false, showArrow: false },
                { name: "About Us", href: "/about", external: false, showArrow: false },
                { name: "Portfolio", href: "/portfolio", external: false, showArrow: false },
                { name: "Contact Us", href: "/contact", external: false, showArrow: false },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition-colors inline-flex items-center gap-1 text-slate-300 hover:text-cyan-400 font-medium"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Website Development", href: "/web-development" },
                { name: "Website Design", href: "/website-design" },
                { name: "E-commerce Stores", href: "/ecommerce-development" },
                { name: "WordPress Development", href: "/wordpress-development" },
                { name: "Landing Pages", href: "/landing-page-development" },
                { name: "Web Applications", href: "/web-application-development" },
                { name: "SEO & Performance", href: "/seo-services" },
                { name: "Logo & Brand Design", href: "/logo-design" },
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="hover:text-cyan-400 transition-colors text-slate-300 text-xs leading-relaxed">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="mailto:urbantechwebs904@gmail.com" data-gtm="email-link" className="hover:text-cyan-400 transition-colors">
                  urbantechwebs904@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="tel:+917827775353" data-gtm="phone-link" className="hover:text-cyan-400 transition-colors">
                  +91 78277 75353
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Image src="/images/whatsapp.svg" alt="WhatsApp" width={16} height={16} className="w-4 h-4 flex-shrink-0" />
                <a
                  href="https://wa.me/917827775353?text=Hi%20UrbanTechWebs%2C%20I%20am%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-gtm="whatsapp-link"
                  className="hover:text-cyan-400 transition-colors font-bold text-emerald-400"
                >
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Noida Sector 62, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 UrbanTech Webs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}



"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">

          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home">
              <Logo size="md" darkText={false} />
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              We design and develop modern websites and digital solutions that help businesses build a stronger online presence.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "#home", external: false },
                { name: "Services", href: "#services", external: false },
                { name: "Our Work", href: "#work", external: false },
                { name: "Process", href: "#process", external: false },
                { name: "About", href: "#about", external: false },
                { name: "Contact", href: "https://wa.me/917827775353?text=Hi%20UrbanTechWebs%2C%20I%20want%20to%20get%20in%20touch%20for%20a%20website.", external: true },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1 text-slate-300"
                  >
                    <span>{item.name}</span>
                  </a>
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
                "Website Development",
                "E-Commerce Stores",
                "Landing Pages",
                "WordPress Sites",
                "Website Redesign",
                "Custom Web Apps",
                "SEO-Ready Setup",
                "Speed Optimization",
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-cyan-400 transition-colors text-slate-300 text-xs leading-relaxed">
                    {service}
                  </a>
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
                <a href="mailto:urbantechwebs904@gmail.com" className="hover:text-cyan-400 transition-colors">
                  urbantechwebs904@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="tel:+917827775353" className="hover:text-cyan-400 transition-colors">
                  +91 78277 75353
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Image src="/images/whatsapp.svg" alt="WhatsApp" width={16} height={16} className="w-4 h-4 flex-shrink-0" />
                <a
                  href="https://wa.me/917827775353?text=Hi%20UrbanTechWebs%2C%20I%20am%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
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
          <p>© 2026 UrbanTechWebs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}


import React from "react";
import Image from "next/image";
import { Phone, Mail, ArrowRight, Sparkles } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-14 sm:py-20 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">

      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-10">

        {/* Top Badge */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-blue-600 fill-blue-600/20" />
            <span>START YOUR WEBSITE PROJECT TODAY</span>
          </div>
        </div>

        {/* Heading & Subtext */}
        <div className="space-y-3.5 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Ready to Build Your Website?
          </h2>
          <p className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto font-normal leading-relaxed">
            Let&apos;s discuss your project and create a website tailored to your business needs. Connect directly with our team for a free consultation.
          </p>
        </div>

        {/* Expanded Primary Action Buttons Bar (Wide equal-width buttons) */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 sm:gap-6 max-w-5xl mx-auto pt-2 w-full">

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/917827775353?text=Hi%20UrbanTechWebs%2C%20I%20want%20to%20get%20a%20free%20consultation%20and%20quote%20for%20my%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="whatsapp-link"
            className="flex-1 w-full px-8 sm:px-10 py-4.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 group cursor-pointer"
          >
            <Image src="/images/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="w-5 h-5 flex-shrink-0" />
            <span className="whitespace-nowrap">Chat on WhatsApp Now</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Direct Phone CTA */}
          <a
            href="tel:+917827775353"
            data-gtm="phone-link"
            className="flex-1 w-full px-8 sm:px-10 py-4.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-md shadow-blue-600/20 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span className="whitespace-nowrap">Call +91 78277 75353</span>
          </a>

          {/* Email CTA */}
          <a
            href="mailto:urbantechwebs904@gmail.com"
            data-gtm="email-link"
            className="flex-1 w-full px-8 sm:px-10 py-4.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="whitespace-nowrap">Email Us</span>
          </a>

        </div>

      </div>
    </section>
  );
}

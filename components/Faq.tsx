"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      q: "How long does it take to build a website?",
      a: "Typical delivery is around 7–14 working days depending on the project requirements, page count, and content availability.",
    },
    {
      q: "Will my website work on mobile?",
      a: "Yes. All websites are engineered to be 100% responsive across smartphones, tablets, laptops, and desktop computers.",
    },
    {
      q: "Can you integrate WhatsApp?",
      a: "Yes. Direct WhatsApp chat buttons and custom pre-filled message links can be integrated based on your business requirements.",
    },
    {
      q: "Can you add online payments?",
      a: "Yes. Payment gateways (such as Razorpay, Stripe, or UPI integration) can be added for e-commerce stores, booking sites, or paid services.",
    },
    {
      q: "Can you connect my domain and hosting?",
      a: "Yes. Complete domain DNS configuration, cloud hosting setup, and SSL security installation are handled as part of the deployment.",
    },
    {
      q: "Will I get support after the website goes live?",
      a: "Yes. Post-launch technical support is provided according to your selected package or project agreement.",
    },
    {
      q: "Can I request changes later?",
      a: "Yes. Future updates, page additions, and feature maintenance can be provided according to your evolving scope.",
    },
    {
      q: "Do you provide SEO?",
      a: "Websites are developed with a clean, SEO-friendly technical structure (clean HTML5, fast speed, meta tags, sitemap). Ongoing content SEO services can be provided separately if required.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>GOT QUESTIONS?</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600 text-base leading-relaxed font-normal">
            Everything you need to know about working with UrbanTechWebs to build your business website.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-md overflow-hidden transition-all duration-200 hover:border-slate-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4.5 text-left font-bold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-blue-600 border-blue-600 text-white" : "text-slate-600"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 pt-3 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center bg-slate-50 border border-slate-200 p-6 rounded-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-md bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Have a different question?</h4>
              <p className="text-xs text-slate-500">Reach out directly and we will be happy to assist you.</p>
            </div>
          </div>

          <a
            href="https://wa.me/917827775353?text=Hi%20UrbanTechWebs%2C%20I%20have%20a%20question%20about%20my%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md flex-shrink-0"
          >
            <Image src="/images/whatsapp.svg" alt="WhatsApp" width={16} height={16} className="w-4 h-4" />
            <span>Ask On WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}


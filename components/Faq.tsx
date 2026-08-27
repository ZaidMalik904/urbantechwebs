"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      q: "How much does it cost to build a website?",
      a: "Website development cost depends on the number of pages, custom design work, features and integrations required. Our packages start from ₹2,999 for Starter websites and ₹5,999 for Business websites.",
    },
    {
      q: "How long does it take to build a website?",
      a: "Typical delivery is 7–14 working days where applicable, depending on project scope, feature complexity and content availability.",
    },
    {
      q: "Will my website work on mobile phones?",
      a: "Yes, all websites are designed to be fully responsive across mobile phones, tablets, laptops and desktop computers.",
    },
    {
      q: "Can you add WhatsApp to my website?",
      a: "Yes, WhatsApp contact functionality can be integrated based on your requirements so visitors can message you directly.",
    },
    {
      q: "Can you add online payments?",
      a: "Yes, payment gateways can be integrated for suitable e-commerce stores, booking sites and digital service portals.",
    },
    {
      q: "Can you connect my domain and hosting?",
      a: "Yes, complete domain DNS configuration and cloud hosting setup can be handled as part of the project.",
    },
    {
      q: "Will I get support after the website is launched?",
      a: "Yes, post-launch support is available according to your selected package or project agreement.",
    },
    {
      q: "Can I update my website later?",
      a: "Yes. Future updates, content additions and ongoing maintenance can be provided depending on your evolving requirements.",
    },
    {
      q: "Do you provide SEO services?",
      a: "Websites are developed with an SEO-friendly technical structure (clean HTML, metadata, fast speed). Ongoing SEO services can be provided separately if required.",
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
            <span>QUESTIONS & ANSWERS</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions About Website Development
          </h2>

          <p className="text-slate-600 text-base leading-relaxed font-normal">
            Common questions about building a business website with UrbanTechWebs.
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


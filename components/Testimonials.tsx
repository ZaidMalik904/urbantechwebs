import React from "react";
import { MessageSquare, FileText, Code2, Smartphone, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";

export default function Testimonials() {
  const commitments = [
    {
      icon: MessageSquare,
      title: "Clear Communication",
      desc: "Direct contact throughout your project without confusing jargon or multi-layered sales channels."
    },
    {
      icon: FileText,
      title: "Transparent Scope",
      desc: "Clear upfront project agreement detailing exact deliverables, features, and delivery expectations."
    },
    {
      icon: Code2,
      title: "Professional Development",
      desc: "Clean technical code built with modern best practices for stability, usability, and speed."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      desc: "Every website page is built and verified to render properly on mobile, tablet, and desktop screens."
    },
    {
      icon: CheckCircle2,
      title: "Testing Before Launch",
      desc: "Full verification of contact forms, WhatsApp links, navigation, and cross-browser display prior to deployment."
    },
    {
      icon: ShieldCheck,
      title: "Post-Launch Support",
      desc: "Reliable technical help after your website goes live to assist with domain setup, updates, and maintenance."
    }
  ];

  return (
    <section id="trust" className="py-20 sm:py-24 bg-[#F8FAFC] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200/80 rounded-full text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>WHAT YOU CAN EXPECT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Why Businesses Trust Our Work
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            We focus on honest principles, clear project scope, and practical execution for every website we build.
          </p>
        </div>

        {/* 6 Commitment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-7 rounded-md shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-md bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

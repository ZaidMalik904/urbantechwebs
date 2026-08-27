"use client";

import React from "react";
import Image from "next/image";
import { Cpu } from "lucide-react";

export default function TechStack() {
  const row1Tech = [
    {
      name: "React.js",
      logo: (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
          <Image src="/images/uploaded_react.png" alt="React.js" fill sizes="56px" className="object-contain" />
        </div>
      ),
    },
    {
      name: "Next.js",
      logo: (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
          <Image src="/images/uploaded_nextjs.png" alt="Next.js" fill sizes="56px" className="object-contain" />
        </div>
      ),
    },
    {
      name: "Node.js",
      logo: (
        <div className="relative w-20 h-10 sm:w-24 sm:h-12 flex-shrink-0">
          <Image src="/images/uploaded_nodejs_v2.png" alt="Node.js" fill sizes="96px" className="object-contain" />
        </div>
      ),
    },
    {
      name: "TypeScript",
      logo: (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
          <Image src="/images/uploaded_typescript.png" alt="TypeScript" fill sizes="56px" className="object-contain" />
        </div>
      ),
    },
    {
      name: "JavaScript",
      logo: (
        <div className="relative w-20 h-10 sm:w-24 sm:h-12 flex-shrink-0">
          <Image src="/images/uploaded_js.png" alt="JavaScript" fill sizes="96px" className="object-contain" />
        </div>
      ),
    },
  ];

  const row2Tech = [
    {
      name: "WordPress",
      logo: (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
          <Image src="/images/uploaded_wordpress.png" alt="WordPress" fill sizes="56px" className="object-contain" />
        </div>
      ),
    },
    {
      name: "PHP",
      logo: (
        <div className="relative w-20 h-10 sm:w-24 sm:h-12 flex-shrink-0">
          <Image src="/images/uploaded_php.png" alt="PHP" fill sizes="96px" className="object-contain" />
        </div>
      ),
    },
    {
      name: "Laravel",
      logo: (
        <div className="relative w-20 h-10 sm:w-24 sm:h-12 flex-shrink-0">
          <Image src="/images/uploaded_laravel.png" alt="Laravel" fill sizes="96px" className="object-contain" />
        </div>
      ),
    },
    {
      name: "MongoDB",
      logo: (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
          <Image src="/images/uploaded_mongodb.png" alt="MongoDB" fill sizes="56px" className="object-contain" />
        </div>
      ),
    },
    {
      name: "MySQL",
      logo: (
        <div className="relative w-20 h-10 sm:w-24 sm:h-12 flex-shrink-0">
          <Image src="/images/uploaded_mysql.png" alt="MySQL" fill sizes="96px" className="object-contain" />
        </div>
      ),
    },
  ];

  return (
    <section id="tech-stack" className="pt-6 sm:pt-8 pb-16 sm:pb-20 bg-slate-50 text-slate-900 relative border-b border-slate-200 overflow-hidden">

      {/* Style Keyframes for 100% Seamless Infinite Marquee */}
      <style jsx>{`
        @keyframes techMarqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(calc(-100% - 1.5rem)); }
        }
        @keyframes techMarqueeRight {
          0% { transform: translateX(calc(-100% - 1.5rem)); }
          100% { transform: translateX(0%); }
        }
        .animate-tech-left {
          animation: techMarqueeLeft 22s linear infinite;
        }
        .animate-tech-right {
          animation: techMarqueeRight 22s linear infinite;
        }
        .marquee-container:hover .animate-tech-left,
        .marquee-container:hover .animate-tech-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* Section Header (Centered Container) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 sm:mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200/80 rounded-full text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNOLOGY STACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Technologies We Use for Web Development
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            We build websites using reliable tools like Next.js, React, Node.js, and WordPress to ensure your website is fast, secure, and easy to maintain.
          </p>
        </div>
      </div>

      {/* Full-Bleed Edge-to-Edge Marquee Wrapper (Zero Padding/Margins) */}
      <div className="w-full relative z-10 space-y-6 sm:space-y-8 marquee-container overflow-hidden px-0 mx-0">
        
        {/* Row 1 Infinite Marquee (Leftward) */}
        <div className="flex overflow-hidden w-full select-none gap-4 sm:gap-6 py-2">
          <div className="flex shrink-0 gap-4 sm:gap-6 min-w-full animate-tech-left items-center">
            {row1Tech.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-blue-500/60 px-6 py-4 rounded-md flex flex-col items-center justify-center flex-shrink-0 group cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300 min-w-[150px] sm:min-w-[180px] shadow-xs"
              >
                <div className="flex items-center justify-center flex-shrink-0 mb-2">
                  {item.logo}
                </div>
                <span className="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="flex shrink-0 gap-4 sm:gap-6 min-w-full animate-tech-left items-center">
            {row1Tech.map((item, idx) => (
              <div
                key={`dup1-${idx}`}
                className="bg-white border border-slate-200 hover:border-blue-500/60 px-6 py-4 rounded-md flex flex-col items-center justify-center flex-shrink-0 group cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300 min-w-[150px] sm:min-w-[180px] shadow-xs"
              >
                <div className="flex items-center justify-center flex-shrink-0 mb-2">
                  {item.logo}
                </div>
                <span className="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 Infinite Marquee (Rightward) */}
        <div className="flex overflow-hidden w-full select-none gap-4 sm:gap-6 py-2">
          <div className="flex shrink-0 gap-4 sm:gap-6 min-w-full animate-tech-right items-center">
            {row2Tech.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-blue-500/60 px-6 py-4 rounded-md flex flex-col items-center justify-center flex-shrink-0 group cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300 min-w-[150px] sm:min-w-[180px] shadow-xs"
              >
                <div className="flex items-center justify-center flex-shrink-0 mb-2">
                  {item.logo}
                </div>
                <span className="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="flex shrink-0 gap-4 sm:gap-6 min-w-full animate-tech-right items-center">
            {row2Tech.map((item, idx) => (
              <div
                key={`dup2-${idx}`}
                className="bg-white border border-slate-200 hover:border-blue-500/60 px-6 py-4 rounded-md flex flex-col items-center justify-center flex-shrink-0 group cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300 min-w-[150px] sm:min-w-[180px] shadow-xs"
              >
                <div className="flex items-center justify-center flex-shrink-0 mb-2">
                  {item.logo}
                </div>
                <span className="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

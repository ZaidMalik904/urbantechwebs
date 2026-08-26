"use client";

import React from "react";
import Image from "next/image";
import { Cpu } from "lucide-react";

export default function TechStack() {
  const row1Tech = [
    {
      name: "Web UI Design",
      logo: (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
          <Image src="/images/uploaded_react.png" alt="Web UI Design" fill sizes="56px" className="object-contain" />
        </div>
      ),
    },
    {
      name: "High-Speed Web Engine",
      logo: (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
          <Image src="/images/uploaded_nextjs.png" alt="High-Speed Web Engine" fill sizes="56px" className="object-contain" />
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
      name: "MySQL / SQL",
      logo: (
        <div className="relative w-20 h-10 sm:w-24 sm:h-12 flex-shrink-0">
          <Image src="/images/uploaded_mysql.png" alt="MySQL" fill sizes="96px" className="object-contain" />
        </div>
      ),
    },
  ];

  return (
    <section id="tech-stack" className="py-20 sm:py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200 overflow-hidden">
      
      {/* Inline Style Keyframes for Dual-Direction Infinite Marquee Animations */}
      <style jsx>{`
        @keyframes marqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-right {
          animation: marqueeRight 24s linear infinite;
        }
        .animate-marquee-left {
          animation: marqueeLeft 24s linear infinite;
        }
        .marquee-container:hover .animate-marquee-right,
        .marquee-container:hover .animate-marquee-left {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200/80 rounded-full text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">
            Technologies We Use
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Modern web frameworks, robust database systems, and battle-tested tools selected for security, speed, and scalability.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 marquee-container">
          
          {/* Row 1 */}
          <div className="overflow-hidden relative w-full py-3">
            <div className="flex gap-16 sm:gap-24 w-max animate-marquee-right items-center">
              {[...row1Tech, ...row1Tech].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-transparent border-0 p-1 flex items-center justify-center flex-shrink-0 group cursor-pointer hover:scale-110 transition-transform duration-300 min-h-[56px]"
                  title={item.name}
                >
                  <div className="flex items-center justify-center flex-shrink-0">
                    {item.logo}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden relative w-full py-1">
            <div className="flex gap-16 sm:gap-24 w-max animate-marquee-left items-center">
              {[...row2Tech, ...row2Tech].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-transparent border-0 p-1 flex items-center justify-center flex-shrink-0 group cursor-pointer hover:scale-110 transition-transform duration-300 min-h-[56px]"
                  title={item.name}
                >
                  <div className="flex items-center justify-center flex-shrink-0">
                    {item.logo}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


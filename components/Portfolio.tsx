"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, ChevronDown, Briefcase, CheckCircle2 } from "lucide-react";

export default function Portfolio() {
  const [showAll, setShowAll] = useState<boolean>(false);

  const projects = [
    {
      id: 1,
      title: "Karma Business Consultancy Portal",
      category: "Business Consultancy Website",
      image: "/images/karma_business.png",
      domain: "karmabs.com.au",
      tags: ["Corporate", "Business Consulting", "Australia", "Live Site"],
      description: "Australian business consulting agency web portal engineered for brand authority, service showcase, and lead acquisition.",
      features: [
        "Structured consultancy service presentation",
        "Contact form & inquiry routing",
        "Mobile-responsive corporate design",
        "Fast page loading architecture"
      ],
      liveUrl: "https://karmabs.com.au/",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Jinda Car Rentals Platform",
      category: "Car Rental & Booking System",
      domain: "jindacarrentals.com",
      image: "/images/jinda_rentals.png",
      tags: ["Car Rental", "Booking System", "Fleet Showcase", "Live Site"],
      description: "Car rental platform featuring fleet showcase, vehicle specifications, online reservation workflow, and instant inquiries.",
      features: [
        "Fleet gallery with vehicle specifications",
        "Direct WhatsApp inquiry routing",
        "Responsive design across mobile devices",
        "Clear vehicle specifications & rental terms"
      ],
      liveUrl: "https://jindacarrentals.com/",
      isFeatured: false,
    },
    {
      id: 3,
      title: "Narayana Vacation Booking",
      category: "Travel & Vacation Booking",
      domain: "narayanavacation.com",
      image: "/images/narayana_vacation.png",
      tags: ["Travel", "Tour Packages", "Hospitality", "Live Site"],
      description: "Tour & vacation booking website featuring curated holiday package listings, tour gallery, and direct inquiry management.",
      features: [
        "Curated holiday package showcase",
        "High-resolution travel gallery",
        "Direct customer enquiry form",
        "Mobile-friendly vacation search"
      ],
      liveUrl: "https://narayanavacation.com/",
      isFeatured: false,
    },
    {
      id: 4,
      title: "Sheriff Foundation Portal",
      category: "NGO & Community Foundation",
      domain: "sif.ind.in",
      image: "/images/sif_foundation.png",
      tags: ["NGO", "Non-Profit", "Community Portal", "Live Site"],
      description: "Non-profit foundation web portal built for social initiatives, community empowerment projects, and public awareness campaigns.",
      features: [
        "Social initiative & campaign showcase",
        "Community awareness news updates",
        "Public enquiry & support options",
        "Mobile responsive non-profit layout"
      ],
      liveUrl: "https://sif.ind.in/",
      isFeatured: false,
    },
    {
      id: 5,
      title: "Mansoori Garments E-Commerce",
      category: "Fashion & Retail Store",
      domain: "mansoorigarments.com",
      image: "/images/mansoori_garments.png",
      tags: ["E-Commerce", "Fashion Store", "Responsive UI", "Live App"],
      description: "Modern clothing & garments retail platform with product catalogs, dynamic filter controls, and responsive shopping showcase.",
      features: [
        "Garments & fashion product catalog",
        "Dynamic category filtering",
        "Responsive shopping layout",
        "Direct enquiry & purchase workflow"
      ],
      liveUrl: "https://portfolio-8qup.onrender.com/",
      isFeatured: true,
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 5);

  return (
    <section id="work" className="py-20 sm:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200/80 rounded-full text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>OUR WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Website Design & Development Projects
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Here are some of the websites and digital projects we&apos;ve worked on.
          </p>
        </div>

        {/* Alternating Zig-Zag Project Rows */}
        <div className="space-y-12 sm:space-y-16">
          {visibleProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project.id}
                className={`bg-white border border-slate-200 rounded-md p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-12 group`}
              >
                {/* Screenshot Image Column */}
                <div className="w-full lg:w-1/2 relative aspect-16/10 rounded-md overflow-hidden border border-slate-200 shadow-md flex-shrink-0 bg-slate-950">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category} built by UrbanTechWebs`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                  {project.isFeatured && (
                    <span className="absolute top-3.5 right-3.5 text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white px-3 py-1 rounded-full shadow-md">
                      Featured Project
                    </span>
                  )}

                  <span className="absolute bottom-3 left-3 text-[11px] font-mono font-bold text-cyan-300 bg-slate-950/90 border border-slate-800 px-2.5 py-1 rounded-md backdrop-blur-xs">
                    {project.domain}
                  </span>
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <span className="inline-block text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-md">
                    {project.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bullet Features */}
                  <div className="pt-2 pb-1 space-y-2 border-t border-slate-100">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Main Features:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-slate-100 text-slate-700 text-[11px] font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Live Website Button */}
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all rounded-xl shadow-md group-hover:bg-blue-700"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Show More / Show Less Button */}
        {projects.length > 5 && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all rounded-full shadow-md cursor-pointer"
            >
              <span>{showAll ? "Show Less Projects" : `Show All Projects (${projects.length})`}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, ChevronDown, Briefcase } from "lucide-react";

export default function Portfolio() {
  const [showAll, setShowAll] = useState<boolean>(false);

  const projects = [
    {
      id: 1,
      title: "YumGo Marketplace",
      category: "E-Commerce & Food Platform",
      domain: "yum-go-fr.onrender.com",
      image: "/images/yumgo_marketplace_v2.png",
      tags: ["Full-Stack", "Food Marketplace", "Web Platform", "Render Deployed"],
      description: "Full-featured online food & grocery marketplace platform with real-time ordering, dynamic catalog, and secure checkout workflow.",
      liveUrl: "https://yum-go-fr.onrender.com/",
      isFeatured: true,
    },
    {
      id: 2,
      title: "YumGo Admin Panel",
      category: "Admin Dashboard & Control",
      domain: "yum-go-ad.onrender.com",
      image: "/images/yumgo_admin_screenshot_v2.png",
      tags: ["Admin Dashboard", "Order Tracking", "Analytics", "Live App"],
      description: "Comprehensive admin control panel for inventory management, real-time order processing, customer analytics, and reporting.",
      liveUrl: "https://yum-go-ad.onrender.com/",
      isFeatured: true,
    },
    {
      id: 3,
      title: "Karma Business",
      category: "Business Consultancy Portal",
      domain: "karmabs.com.au",
      image: "/images/karma_business.png",
      tags: ["Corporate", "Business Consulting", "Australia", "Live Site"],
      description: "Australian business consulting agency web portal engineered for brand authority, service showcase, and lead acquisition.",
      liveUrl: "https://karmabs.com.au/",
      isFeatured: false,
    },
    {
      id: 4,
      title: "Jinda Car Rentals",
      category: "Car Rental & Reservation System",
      domain: "jindacarrentals.com",
      image: "/images/jinda_rentals.png",
      tags: ["Car Rental", "Booking System", "Fleet Showcase", "Live Site"],
      description: "Car rental platform featuring fleet showcase, vehicle specifications, online reservation workflow, and instant inquiries.",
      liveUrl: "https://jindacarrentals.com/",
      isFeatured: false,
    },
    {
      id: 5,
      title: "Narayana Vacation",
      category: "Travel & Vacation Booking",
      domain: "narayanavacation.com",
      image: "/images/narayana_vacation.png",
      tags: ["Travel", "Tour Packages", "Hospitality", "Live Site"],
      description: "Tour & vacation booking website featuring curated holiday package listings, tour gallery, and direct inquiry management.",
      liveUrl: "https://narayanavacation.com/",
      isFeatured: false,
    },
    {
      id: 6,
      title: "Sheriff Foundation",
      category: "NGO & Community Foundation",
      domain: "sif.ind.in",
      image: "/images/sif_foundation.png",
      tags: ["NGO", "Non-Profit", "Community Portal", "Live Site"],
      description: "Non-profit foundation web portal built for social initiatives, community empowerment projects, and public awareness campaigns.",
      liveUrl: "https://sif.ind.in/",
      isFeatured: false,
    },
    {
      id: 7,
      title: "ADL UPVC System",
      category: "Industrial Manufacturing",
      domain: "upvc-project.onrender.com",
      image: "/images/upvc-project.png",
      tags: ["Industrial", "UPVC Manufacturing", "Responsive", "Live Site"],
      description: "Corporate manufacturing website showcasing UPVC window and door systems, technical specs, and project galleries.",
      liveUrl: "https://upvc-project.onrender.com",
      isFeatured: false,
    },
    {
      id: 8,
      title: "Mansoori Garments E-Commerce",
      category: "Fashion & Retail Store",
      domain: "mansoorigarments.com",
      image: "/images/mansoori_garments.png",
      tags: ["E-Commerce", "Fashion Store", "Responsive UI", "Live App"],
      description: "Modern clothing & garments retail platform with product catalogs, dynamic filter controls, and responsive shopping showcase.",
      liveUrl: "https://portfolio-8qup.onrender.com/",
      isFeatured: true,
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="work" className="py-20 sm:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200/80 rounded-full text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Work
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Explore websites and digital solutions we&apos;ve built for different business requirements.
          </p>
        </div>

        {/* 4 Cards Per Row Grid View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 transition-all duration-300 flex flex-col group rounded-md hover:border-blue-500/60 hover:shadow-xl overflow-hidden"
            >
              {/* Image Screenshot */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {project.isFeatured && (
                  <span className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider bg-blue-600 text-white px-2.5 py-1 rounded-full shadow-md">
                    Featured
                  </span>
                )}
                
                <span className="absolute bottom-2.5 left-2.5 text-[9px] font-mono font-bold text-cyan-300 bg-slate-950/85 border border-slate-800 px-2 py-0.5 rounded-md backdrop-blur-xs">
                  {project.domain}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs mt-1.5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Bar: Direct Live Website Link */}
                <div className="pt-2 border-t border-slate-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all rounded-md shadow-sm flex items-center justify-center gap-1.5 group-hover:bg-blue-700"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {projects.length > 4 && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all rounded-full shadow-md cursor-pointer"
            >
              <span>{showAll ? "Show Less Projects" : `Show All Real Projects (${projects.length})`}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}


"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Globe, ChevronDown, Code, CheckCircle, X, Briefcase } from "lucide-react";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  // Lock background body scrolling when modal popup is open
  useEffect(() => {
    if (activeProject !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeProject]);

  const projects = [
    {
      id: 1,
      title: "YumGo Marketplace",
      category: "E-Commerce & Food Platform",
      domain: "yum-go-fr.onrender.com",
      image: "/yumgo_marketplace_v2.png",
      tags: ["Full-Stack", "Food Marketplace", "React/Node", "Render Deployed"],
      techStack: ["React 19", "Next.js", "Node.js", "Express", "MongoDB", "TailwindCSS", "Render Cloud", "REST API"],
      description: "Full-featured online food & grocery marketplace platform with real-time ordering, dynamic multi-vendor catalog, and secure checkout workflow.",
      liveUrl: "https://yum-go-fr.onrender.com/",
      isFeatured: true,
      deliverables: [
        "Real-time Shopping Cart & Multi-vendor Checkout",
        "Dynamic Product Filtering & Search Index",
        "100% Mobile Responsive Interface"
      ]
    },
    {
      id: 2,
      title: "YumGo Admin Panel",
      category: "Admin Dashboard & Control",
      domain: "yum-go-ad.onrender.com",
      image: "/yumgo_admin_screenshot_v2.png",
      tags: ["Admin Dashboard", "Order Tracking", "Analytics", "Live App"],
      techStack: ["React.js", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Chart.js", "Render Cloud"],
      description: "Comprehensive admin control panel for inventory management, real-time order processing, customer analytics, and sales reporting.",
      liveUrl: "https://yum-go-ad.onrender.com/",
      isFeatured: true,
      deliverables: [
        "Real-time Inventory & Order Control",
        "User Access Management & Sales Analytics",
        "Clean Dark Mode UI Control System"
      ]
    },
    {
      id: 3,
      title: "Karma Business",
      category: "Business Consultancy Portal",
      domain: "karmabs.com.au",
      image: "/karma_business.png",
      tags: ["Corporate", "Business Consulting", "Australia", "Live Site"],
      techStack: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "SEO Core Vitals", "Custom CMS"],
      description: "Australian business consulting agency web portal engineered for brand authority, service showcase, and lead acquisition.",
      liveUrl: "https://karmabs.com.au/",
      isFeatured: false,
      deliverables: [
        "SEO & Fast Page Load Speed Optimization",
        "High-Converting Lead Generation Form",
        "Professional Corporate Brand Styling"
      ]
    },
    {
      id: 4,
      title: "Jinda Car Rentals",
      category: "Car Rental & Reservation System",
      domain: "jindacarrentals.com",
      image: "/jinda_rentals.png",
      tags: ["Car Rental", "Booking System", "Fleet Showcase", "Live Site"],
      techStack: ["React.js", "Next.js", "TailwindCSS", "WhatsApp API", "Responsive UI", "Cloudflare SSL"],
      description: "Car rental platform featuring fleet showcase, vehicle specifications, online reservation workflow, and instant customer booking inquiries.",
      liveUrl: "https://jindacarrentals.com/",
      isFeatured: false,
      deliverables: [
        "Vehicle Fleet Showcase & Specifications",
        "Direct Online Booking Inquiry System",
        "100% Mobile Friendly Layout"
      ]
    },
    {
      id: 5,
      title: "Narayana Vacation",
      category: "Travel & Vacation Booking",
      domain: "narayanavacation.com",
      image: "/narayana_vacation.png",
      tags: ["Travel", "Tour Packages", "Hospitality", "Live Site"],
      techStack: ["React.js", "Node.js", "TailwindCSS", "WhatsApp API", "Gallery System", "Render Cloud"],
      description: "Tour & vacation booking website featuring curated holiday package listings, tour gallery, and direct inquiry management.",
      liveUrl: "https://narayanavacation.com/",
      isFeatured: false,
      deliverables: [
        "Tour Package Showcase & Filters",
        "Direct WhatsApp & Email Inquiry Workflows",
        "Responsive Image Gallery System"
      ]
    },
    {
      id: 6,
      title: "Sheriff Foundation",
      category: "NGO & Community Foundation",
      domain: "sif.ind.in",
      image: "/sif_foundation.png",
      tags: ["NGO", "Non-Profit", "Community Portal", "Live Site"],
      techStack: ["React.js", "Next.js", "TailwindCSS", "Accessibility Standards", "Vercel Cloud"],
      description: "Non-profit foundation web portal built for social initiatives, community empowerment projects, and public awareness campaigns.",
      liveUrl: "https://sif.ind.in/",
      isFeatured: false,
      deliverables: [
        "Community Event & Initiative Showcase",
        "Donation & Volunteer Information Portal",
        "Clean Accessible Web Layout"
      ]
    },
    {
      id: 7,
      title: "ADL UPVC System",
      category: "Industrial Manufacturing",
      domain: "upvc-project.onrender.com",
      image: "/upvc-project.png",
      tags: ["Industrial", "UPVC Manufacturing", "Responsive", "Live Site"],
      techStack: ["React.js", "Node.js", "TailwindCSS", "Form Validation", "Render Cloud"],
      description: "Corporate manufacturing website showcasing UPVC window and door systems, technical specs, and project galleries.",
      liveUrl: "https://upvc-project.onrender.com",
      isFeatured: false,
      deliverables: [
        "Product Catalog & Technical Specifications",
        "Custom Quote Request Form",
        "Clean Industrial Product Design"
      ]
    },
    {
      id: 8,
      title: "Task Workflow Automation",
      category: "Workflow & Automation Tool",
      domain: "script.google.com",
      image: "/taskflow_screenshot_v2.png",
      tags: ["Automation", "Task Workflow", "Google Apps Script", "Live App"],
      techStack: ["Google Apps Script", "JavaScript ES6+", "Google Sheets API", "Cloud Automation"],
      description: "Custom automated workflow application streamlining internal task distribution, process validation, and project tracking.",
      liveUrl: "https://script.google.com/macros/s/AKfycbwzONoZwi-RKjRQtBUs1JQ2bIIlY4YrSiC4hGALN21SDK4CqU3gUruNvTrd4DbWxXYM/exec",
      isFeatured: false,
      deliverables: [
        "Automated Task Assignment & Tracking",
        "Custom Business Logic & Validation",
        "Cloud-Hosted Automated Script"
      ]
    },
    {
      id: 9,
      title: "Mansoori Garments E-Commerce",
      category: "Fashion & Retail Store",
      domain: "mansoorigarments.com",
      image: "/mansoori_garments.png",
      tags: ["E-Commerce", "Fashion Store", "Responsive UI", "Live App"],
      techStack: ["React.js", "Next.js", "Node.js", "MongoDB", "TailwindCSS", "Render Cloud"],
      description: "Modern clothing & garments retail platform with product catalogs, dynamic filter controls, and responsive shopping showcase.",
      liveUrl: "https://portfolio-8qup.onrender.com/",
      isFeatured: true,
      deliverables: [
        "Dynamic Garments Catalog & Filtering",
        "100% Mobile Responsive Layout",
        "Custom Retail Shopping UI Design"
      ]
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);
  const activeProjObj = projects.find((p) => p.id === activeProject);

  return (
    <section id="work" className="py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header styled like SECTOR EXPERTISE */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200/80 rounded-full text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>SELECTED WORK & CASE STUDIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">
            REAL DEPLOYED CLIENT PROJECTS
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Explore web applications, e-commerce stores, corporate portals, and booking systems engineered for real client success.
          </p>
        </div>

        {/* 4 Cards Grid View with Show More Toggle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 transition-all duration-200 flex flex-col group rounded-2xl hover:border-blue-500/60 hover:shadow-xl overflow-hidden"
            >
              {/* Image Screenshot (Full Width Edge-to-Edge) */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {project.isFeatured && (
                  <span className="absolute top-3 right-3 text-[8.5px] font-bold uppercase tracking-wider bg-blue-600 text-white px-2 py-1 rounded-sm shadow-md">
                    Featured
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[9.5px] font-bold uppercase tracking-wider text-blue-600">
                    {project.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-medium rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Bar with Visit Live Site Button */}
                <div className="pt-2 flex items-center justify-end border-t border-slate-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors rounded-xl shadow-sm"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {projects.length > 4 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all rounded-none shadow-md"
            >
              <span>{showAll ? "Show Less Projects" : `Show More Projects (${projects.length - 4}+)`}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}

      </div>

      {/* Redesigned High-Impact Quick View Popup Modal */}
      {activeProjObj && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 text-white rounded-none max-w-2xl w-full shadow-2xl relative overflow-hidden my-auto">
            
            {/* Modal Top Header Bar */}
            <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono text-slate-300 font-bold">
                  {activeProjObj.domain}
                </span>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="w-8 h-8 rounded-none bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              
              {/* Project Title & Category */}
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  {activeProjObj.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {activeProjObj.title}
                </h3>
              </div>

              {/* Large Image Preview */}
              <div className="relative h-56 sm:h-64 w-full border border-slate-800 overflow-hidden bg-slate-950 shadow-inner">
                <Image
                  src={activeProjObj.image}
                  alt={activeProjObj.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Project Description */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeProjObj.description}
              </p>

              {/* Technologies Used Section */}
              <div className="p-4 bg-slate-950 border border-slate-800 space-y-2.5">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                  <Code className="w-4 h-4" />
                  <span>Technologies & Tools Used:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeProjObj.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-blue-600/20 text-blue-300 border border-blue-500/30 text-xs font-bold font-mono rounded-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Deliverables & Features */}
              <div className="p-4 bg-slate-950 border border-slate-800 space-y-2.5">
                <p className="font-extrabold text-xs text-white uppercase tracking-wider">
                  Key Deliverables & Specifications:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {activeProjObj.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Bottom Action Footer */}
            <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={activeProjObj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 rounded-none shadow-lg"
              >
                <span>OPEN LIVE WEBSITE 🚀</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setActiveProject(null)}
                className="w-full sm:w-auto px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider transition-colors rounded-none"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

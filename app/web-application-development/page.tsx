import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Custom Web Application Development Services | UrbanTech Webs",
  description:
    "UrbanTech Webs provides custom web application development services. We build custom web apps, SaaS dashboards, booking portals, and admin systems.",
  alternates: {
    canonical: "https://urbantechwebs.in/web-application-development",
  },
  openGraph: {
    title: "Custom Web Application Development Services | UrbanTech Webs",
    description:
      "UrbanTech Webs provides custom web application development services. We build custom web apps, SaaS dashboards, booking portals, and admin systems.",
    url: "https://urbantechwebs.in/web-application-development",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/web_app_dev_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Web Application Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Application Development Services | UrbanTech Webs",
    description:
      "Custom web applications, client dashboards, and booking portals.",
    images: ["/images/web_app_dev_hero_bg.jpg"],
  },
};

export default function WebApplicationDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="Web Application Development"
      h1="Custom Web Application Development"
      title="Custom Web Application Development Services | UrbanTech Webs"
      metaDescription="UrbanTech Webs provides custom web application development services. We build custom web apps, SaaS dashboards, booking portals, and admin systems."
      heroImage="/images/web_app_dev_hero_bg.jpg"
      showStats={true}
      statsItems={[
        {
          iconName: "Server",
          title: "Scalable Cloud Architecture",
          desc: "Enterprise Next.js, Node.js & database cloud infrastructure.",
        },
        {
          iconName: "LayoutDashboard",
          title: "Custom Admin Dashboards",
          desc: "Intuitive management panels and analytics reporting tools.",
        },
        {
          iconName: "ShieldCheck",
          title: "Secure Session Auth",
          desc: "Encrypted user login sessions and role-based access control.",
        },
        {
          iconName: "Network",
          title: "REST & GraphQL APIs",
          desc: "Fast data endpoints and third-party SaaS integrations.",
        },
      ]}
      introParagraphs={[
        <React.Fragment key="intro-1">
          UrbanTech Webs is a web application development company engineering custom web applications, administrative control dashboards, booking engines, and interactive web portals. We combine backend software logic with clean{" "}
          <Link href="/web-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            custom web development
          </Link>{" "}
          practices to build enterprise-grade web tools.
        </React.Fragment>,
        <React.Fragment key="intro-2">
          Whether you need a full SaaS system, a custom booking portal, or specialized{" "}
          <Link href="/website-design" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            web portal UI/UX design
          </Link>
          , our full-stack engineers build responsive interfaces and high-concurrency API endpoints. You can{" "}
          <Link href="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            consult our web application developers
          </Link>{" "}
          to scope your project requirements.
        </React.Fragment>,
      ]}
      benefits={[
        {
          title: "Custom Operational Workflows",
          desc: "Software systems designed around your exact business processes, order routing, or booking rules.",
        },
        {
          title: "Interactive Dashboards & Analytics",
          desc: "Clean graphical reporting panels for real-time tracking of sales metrics, customer requests, or inventory status.",
        },
        {
          title: "Role-Based Access & Security",
          desc: "Multi-user authentication and permissions for system administrators, internal staff members, and public customers.",
        },
        {
          title: "Database Integration & Custom Endpoints",
          desc: "Robust database connections (PostgreSQL, MongoDB, MySQL) and REST API endpoints engineered for high concurrency.",
        },
        {
          title: "Marketplace & E-Commerce Integration",
          desc: (
            <>
              For multi-vendor selling or custom checkout logic, we integrate tailored shopping workflows with our{" "}
              <Link href="/ecommerce-development" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                custom e-commerce marketplace portals
              </Link>.
            </>
          ),
        },
        {
          title: "Scalable Cloud Architecture",
          desc: "Engineered to support growing user traffic, large data volume, and future feature additions over time.",
        },
      ]}
      features={[
        { title: "Custom Admin Control Panels", desc: "Manage business workflows, inventory data, and user accounts." },
        { title: "REST API & Microservices", desc: "Fast JSON data exchange endpoints for web and mobile apps." },
        { title: "User Authentication & RBAC", desc: "Secure password hashing, JWT tokens, and multi-level permissions." },
        { title: "Database Architecture", desc: "Optimized database design, indexing, and data security." },
        { title: "Automated Reporting Tools", desc: "Generate PDF reports, CSV exports, and analytics metrics." },
        { title: "Cloud Hosting & Deployment", desc: "AWS, Vercel, or Render deployment with SSL and domain setup." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Logic Mapping", desc: "Defining user roles, data schemas, and software architecture." },
        { step: "Step 02", title: "App UI Design", desc: "Wireframing intuitive dashboard interfaces and customer workflows." },
        { step: "Step 03", title: "Full-Stack Coding", desc: "Writing frontend React components, backend APIs, and database schemas." },
        { step: "Step 04", title: "Testing & Handover", desc: "Stress testing concurrency, security validation, and deployment." },
      ]}
      portfolioExamples={[
        {
          title: "YumGo Marketplace Portal",
          desc: "Full-stack food ordering platform with customer cart, vendor dashboard, and order management.",
          url: "https://yum-go-fr.onrender.com/",
          image: "/images/yumgo_marketplace_v2.png",
        },
        {
          title: "Sheriff Foundation Portal",
          desc: "Non-profit community foundation portal for public awareness campaigns and project reporting.",
          url: "https://sif.ind.in/",
          image: "/images/sif_foundation.png",
        },
      ]}
      faqs={[
        {
          q: "Why choose UrbanTech Webs for web application development?",
          rawText: "We engineer scalable full-stack web applications using Next.js, React, Node.js, and modern databases, delivering high-performance platforms tailored to complex business logic.",
          a: "We engineer scalable full-stack web applications using Next.js, React, Node.js, and modern databases, delivering high-performance platforms tailored to complex business logic.",
        },
        {
          q: "What types of web applications do you develop?",
          rawText: "We develop administrative control panels, booking engines, customer portals, custom e-commerce marketplaces, inventory systems, and custom SaaS web software.",
          a: "We develop administrative control panels, booking engines, customer portals, custom e-commerce marketplaces, inventory systems, and custom SaaS web software.",
        },
        {
          q: "What technologies do you use for web application development?",
          rawText: "We utilize modern technology stacks including React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, and Tailwind CSS.",
          a: "We utilize modern technology stacks including React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, and Tailwind CSS.",
        },
        {
          q: "How long does it take to develop a custom web application?",
          rawText: "Simple web applications or custom dashboards take 2 to 4 weeks, while complex multi-role platforms take 4 to 8 weeks depending on scope.",
          a: "Simple web applications or custom dashboards take 2 to 4 weeks, while complex multi-role platforms take 4 to 8 weeks depending on scope.",
        },
      ]}
      relatedServices={[
        { title: "Custom Web Development", href: "/web-development" },
        { title: "Website Design Services", href: "/website-design" },
        { title: "Contact Us", href: "/contact" },
      ]}
    />
  );
}

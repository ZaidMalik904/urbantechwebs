import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Web Application Development Services in Noida | UrbanTech Webs",
  description:
    "UrbanTech Webs builds custom web applications, SaaS dashboards, booking portals, and custom web systems in Noida and Delhi NCR.",
  alternates: {
    canonical: "https://urbantechwebs.in/web-application-development",
  },
};

export default function WebApplicationDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="Web Application Development"
      h1="Custom Web Application Development Services in Noida"
      heroImage="/images/web_app_dev_hero_bg.jpg"
      title="Web Application Development Services in Noida | UrbanTech Webs"
      metaDescription="UrbanTech Webs builds custom web applications, SaaS dashboards, booking portals, and custom web systems in Noida and Delhi NCR."
      introParagraphs={[
        "UrbanTech Webs designs and engineers custom web applications, administrative control panels, booking engines, and interactive web portals for growing businesses in Noida and Delhi NCR.",
        "We build web applications focused on solving operational workflows, managing data efficiently, providing role-based user access, and delivering seamless interactive experiences.",
      ]}
      benefits={[
        {
          title: "Custom Operational Workflows",
          desc: "Software systems designed around your exact business processes, order routing, or booking rules.",
        },
        {
          title: "Interactive Dashboards & Analytics",
          desc: "Clean graphical reporting panels for real-time tracking of sales, customer requests, or inventory status.",
        },
        {
          title: "Role-Based Access & Security",
          desc: "Multi-user permissions for administrators, staff members, and public customers.",
        },
        {
          title: "Database Integration & APIs",
          desc: "Robust database connections (PostgreSQL, MongoDB, MySQL) and REST API endpoints.",
        },
        {
          title: "Responsive Full-Stack Logic",
          desc: "Fluid user interfaces powered by modern JavaScript frameworks and scalable server infrastructure.",
        },
        {
          title: "Scalable Architecture",
          desc: "Engineered to support increasing user traffic, data volume, and feature additions over time.",
        },
      ]}
      features={[
        { title: "Custom Admin Control Panels", desc: "Manage operational workflows and user accounts." },
        { title: "Booking & Reservation Engines", desc: "Real-time date and slot scheduling systems." },
        { title: "Customer Account Portals", desc: "Secure login, profile settings, and order history." },
        { title: "Real-Time Data Processing", desc: "Live status updates and order tracking flows." },
        { title: "Third-Party API Connections", desc: "Integration with payment, SMS, email, or CRM APIs." },
        { title: "Cloud Deployment & Monitoring", desc: "Hosted on cloud infrastructure with SSL encryption." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Workflow Mapping", desc: "Documenting business logic, user roles, and database schemas." },
        { step: "Step 02", title: "UI & UX Prototyping", desc: "Designing interactive screens and dashboard wireframes." },
        { step: "Step 03", title: "Full-Stack Dev", desc: "Developing database models, API routes, and user interfaces." },
        { step: "Step 04", title: "Testing & Deployment", desc: "Security auditing, load verification, and live cloud deployment." },
      ]}
      portfolioExamples={[
        {
          title: "YumGo Admin Control Panel",
          desc: "Comprehensive admin control panel for real-time order processing, inventory, and analytics.",
          url: "https://yum-go-ad.onrender.com/",
          image: "/images/yumgo_admin_screenshot_v2.png",
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
          q: "What types of web applications do you develop?",
          a: "We develop administrative control panels, booking engines, customer portals, custom e-commerce marketplaces, inventory systems, and custom SaaS web software.",
        },
        {
          q: "What technologies do you use for web application development?",
          a: "We utilize modern technology stacks including React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, and Tailwind CSS.",
        },
        {
          q: "How long does it take to develop a custom web application?",
          a: "Simple web applications or custom dashboards take 2 to 4 weeks, while complex multi-role platforms take 4 to 8 weeks depending on scope.",
        },
      ]}
      relatedServices={[
        { title: "Website Development", href: "/web-development" },
        { title: "Website Design", href: "/website-design" },
        { title: "E-commerce Development", href: "/ecommerce-development" },
        { title: "WordPress Development", href: "/wordpress-development" },
        { title: "Landing Page Development", href: "/landing-page-development" },
      ]}
    />
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Web Application Development Company Noida | Custom Web Apps",
  description:
    "UrbanTech Webs is a leading web application development company in Noida. We build custom web apps, SaaS dashboards, booking portals, and admin systems.",
  alternates: {
    canonical: "https://urbantechwebs.in/web-application-development",
  },
  openGraph: {
    title: "Web Application Development Company Noida | Custom Web Systems | UrbanTech Webs",
    description:
      "UrbanTech Webs is a custom web application development company in Noida. We build SaaS dashboards, client portals, booking engines, and web applications.",
    url: "https://urbantechwebs.in/web-application-development",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/web_app_dev_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Web Application Development Company in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Application Development Company Noida | UrbanTech Webs",
    description:
      "Custom web app development services, SaaS dashboards, and web systems in Noida & Delhi NCR.",
    images: ["/images/web_app_dev_hero_bg.jpg"],
  },
};

export default function WebApplicationDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="Web Application Development"
      h1="Custom Web Application Development Services in Noida"
      heroImage="/images/web_app_dev_hero_bg.jpg"
      title="Web Application Development Company Noida | Custom Web Apps"
      metaDescription="UrbanTech Webs is a leading web application development company in Noida. We build custom web apps, SaaS dashboards, booking portals, and admin systems."
      introParagraphs={[
        <>
          UrbanTech Webs is a premier web application development company in Noida engineering custom web applications, administrative control dashboards, booking engines, and interactive web portals. We combine backend software logic with clean{" "}
          <Link href="/web-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            custom web development Noida
          </Link>{" "}
          practices to build enterprise-grade web tools.
        </>,
        <>
          Whether you need a full SaaS system, a custom booking portal, or specialized{" "}
          <Link href="/website-design" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            web portal UI/UX design
          </Link>
          , our full-stack engineers build responsive interfaces and high-concurrency API endpoints. You can{" "}
          <Link href="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            consult our web application developers
          </Link>{" "}
          to scope your project requirements.
        </>,
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
        { title: "Booking & Reservation Engines", desc: "Real-time date selection, slot scheduling systems, and payments." },
        { title: "Customer Account Portals", desc: "Secure user authentication, profile settings, and order history." },
        { title: "Real-Time Data Processing", desc: "Live status updates, notification triggers, and order tracking flows." },
        { title: "Third-Party API Connections", desc: "Integration with payment gateways, SMS portals, email, or CRM systems." },
        { title: "Cloud Deployment & Hardened Security", desc: "Hosted on cloud infrastructure with SSL encryption and automated backups." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Workflow Mapping", desc: "Documenting business logic, user permissions, and database schemas." },
        { step: "Step 02", title: "UI & UX Prototyping", desc: "Designing interactive screens, dashboard wireframes, and data flows." },
        { step: "Step 03", title: "Full-Stack Dev", desc: "Developing database models, REST API endpoints, and frontend UI." },
        { step: "Step 04", title: "Testing & Deployment", desc: "Security auditing, load testing, and live cloud server deployment." },
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
          q: "Why choose UrbanTech Webs as your web application development company in Noida?",
          rawText: "We engineer scalable full-stack web applications using Next.js, React, Node.js, and modern databases, delivering high-performance platforms tailored to complex business logic.",
          a: "We engineer scalable full-stack web applications using Next.js, React, Node.js, and modern databases, delivering high-performance platforms tailored to complex business logic.",
        },
        {
          q: "How much does custom web application development cost?",
          rawText: "Web application development cost varies based on feature complexity, database schemas, and multi-user roles. Basic web app portals start from ₹9,999.",
          a: "Web application development cost varies based on feature complexity, database schemas, and multi-user roles. Basic web app portals start from ₹9,999.",
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
        { title: "E-commerce Development", href: "/ecommerce-development" },
        { title: "WordPress Development", href: "/wordpress-development" },
        { title: "SEO & Website Performance", href: "/seo-services" },
      ]}
    />
  );
}

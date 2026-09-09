import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Custom Web Development Services in Noida | UrbanTech Webs",
  description:
    "UrbanTech Webs provides custom web development services in Noida and Delhi NCR. We build responsive business websites, web applications, and API integrations.",
  alternates: {
    canonical: "https://urbantechwebs.in/web-development",
  },
};

export default function WebDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="Web Development"
      h1="Custom Web Development Services in Noida"
      title="Custom Web Development Services in Noida | UrbanTech Webs"
      metaDescription="UrbanTech Webs provides custom web development services in Noida and Delhi NCR. We build responsive business websites, web applications, and API integrations."
      heroImage="/images/web_dev_hero_bg.jpg"
      showStats={true}
      introParagraphs={[
        "UrbanTech Webs delivers custom web development solutions tailored to the operational goals of businesses in Noida, Delhi NCR, and across India.",
        "We focus on writing clean, maintainable code, implementing responsive mobile layouts, integrating external APIs, and optimizing site performance so your business web presence loads fast and performs reliably.",
      ]}
      benefits={[
        {
          title: "Custom Business Architecture",
          desc: "Tailored website structures built around your specific business requirements rather than pre-made generic layouts.",
        },
        {
          title: "API & Third-Party Integrations",
          desc: "Seamless connection with CRM tools, payment gateways, WhatsApp messaging, and custom database endpoints.",
        },
        {
          title: "Mobile-First Responsiveness",
          desc: "Flawless rendering and touch-friendly navigation across smartphones, tablets, and desktop computers.",
        },
        {
          title: "Clean Semantic Code",
          desc: "Developed following modern web standards for enhanced accessibility, security, and search engine crawling.",
        },
        {
          title: "Speed & Performance Optimization",
          desc: "Lightweight asset loads and optimized media delivery to minimize load times and improve Core Web Vitals.",
        },
        {
          title: "Scalable Infrastructure",
          desc: "Built to expand seamlessly as your business adds new pages, products, or functional capabilities.",
        },
      ]}
      features={[
        { title: "Custom Web Design", desc: "Tailored UI/UX visual layout & responsive brand design." },
        { title: "API & Payment Integration", desc: "Connect Razorpay, Paytm, Stripe, or custom APIs." },
        { title: "Database & Backend Support", desc: "Structured data storage and query handling." },
        { title: "Cross-Browser Compatibility", desc: "Verified on Chrome, Safari, Firefox, and Edge." },
        { title: "SEO-Friendly Markup", desc: "Structured H1-H6 headers, meta tags, and schema." },
        { title: "Domain & DNS Setup", desc: "Complete domain connection and SSL configuration." },
        { title: "Website Security & SSL Encryption", desc: "HTTPS encryption, malware protection & firewall security." },
        { title: "Core Web Vitals & Speed Tuning", desc: "Image compression, minification & fast load optimization." },
        {title: "Free 1 Year Post-Launch Support", desc: "1 full year of dedicated maintenance, updates & bug-fix guarantee." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Discovery", desc: "Requirement mapping and technical scope specification." },
        { step: "Step 02", title: "Architecture", desc: "Wireframing sitemap and layout structures." },
        { step: "Step 03", title: "Development", desc: "Writing frontend code and backend logic." },
        { step: "Step 04", title: "QA & Deployment", desc: "Cross-device testing, SSL setup, and live launch." },
      ]}
      portfolioExamples={[
        {
          title: "Karma Business Consultancy Portal",
          desc: "Australian business consultancy agency web portal engineered for brand authority and lead capture.",
          url: "https://karmabs.com.au/",
          image: "/images/karma_business.png",
        },
        {
          title: "ADL UPVC Manufacturing Website",
          desc: "Corporate manufacturing site showcasing UPVC window & door systems with technical specs.",
          url: "https://upvc-project.onrender.com",
          image: "/images/upvc-project.png",
        },
      ]}
      faqs={[
        {
          q: "What types of websites do you build under web development?",
          a: "We build corporate business websites, custom web applications, product catalogues, customer service portals, and custom API-driven platforms.",
        },
        {
          q: "Do you build custom websites or use templates?",
          a: "We build tailored websites structured around your business goals, providing custom code and flexible designs tailored to your brand.",
        },
        {
          q: "How long does a custom web development project take?",
          a: "Typical delivery takes 7 to 14 working days depending on the project complexity, number of pages, and content availability.",
        },
        {
          q: "Will my website be mobile-friendly and fast?",
          a: "Yes, every website is engineered to be fully responsive across mobile phones, tablets, and desktops while adhering to core performance standards.",
        },
      ]}
      relatedServices={[
        { title: "Website Design", href: "/website-design" },
        { title: "E-commerce Development", href: "/ecommerce-development" },
        { title: "WordPress Development", href: "/wordpress-development" },
        { title: "Landing Page Development", href: "/landing-page-development" },
        { title: "Web Application Development", href: "/web-application-development" },
      ]}
    />
  );
}

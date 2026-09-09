import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "SEO & Website Performance Services in Noida | UrbanTech Webs",
  description:
    "UrbanTech Webs provides technical SEO, speed optimization, and local search visibility services in Noida and Delhi NCR.",
  alternates: {
    canonical: "https://urbantechwebs.in/seo-services",
  },
};

export default function SeoServicesPage() {
  return (
    <ServicePageLayout
      badge="SEO & Performance"
      h1="SEO & Website Performance Services in Noida"
      heroImage="/images/seo_services_hero_bg.jpg"
      title="SEO & Website Performance Services in Noida | UrbanTech Webs"
      metaDescription="UrbanTech Webs provides technical SEO, speed optimization, and local search visibility services in Noida and Delhi NCR."
      introParagraphs={[
        "UrbanTech Webs provides technical SEO optimization, speed tuning, and local search visibility enhancements for businesses in Noida and Delhi NCR.",
        "We optimize clean HTML structures, XML sitemaps, meta data, image compressions, and page response times so your business website ranks better on search engines and delivers a fast user experience.",
      ]}
      benefits={[
        {
          title: "Technical SEO Foundation",
          desc: "Proper heading hierarchy, canonical tags, structured JSON-LD schema, and meta tag setup.",
        },
        {
          title: "Page Speed & Core Web Vitals",
          desc: "Asset optimization, image compression, and script cleanup for fast load times.",
        },
        {
          title: "Local Search Optimization",
          desc: "Targeted local SEO strategies for Noida, Delhi NCR, and regional customer acquisition.",
        },
        {
          title: "Mobile Usability Tuning",
          desc: "Ensuring zero layout shifts and mobile-friendly rendering for phone visitors.",
        },
        {
          title: "Search Indexing & Sitemaps",
          desc: "Automated XML sitemap creation and Google Search Console indexing setup.",
        },
        {
          title: "Clean Code Architecture",
          desc: "Semantic HTML5 markup easily readable by Google, Bing, and web crawlers.",
        },
      ]}
      features={[
        { title: "On-Page SEO Optimization", desc: "Meta title, meta description, and H1-H6 tags." },
        { title: "Schema Markup Setup", desc: "JSON-LD structured data for Organization and Services." },
        { title: "Image Compression & WebP", desc: "Optimized image sizes without quality loss." },
        { title: "Sitemap & Robots Configuration", desc: "Clean indexing instructions for search engines." },
        { title: "Speed Audit & Minification", desc: "Reducing render-blocking assets." },
        { title: "Google Search Console Guidance", desc: "Best practices for property verification and monitoring." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Site Audit", desc: "Evaluating current performance, mobile speed, and technical SEO structure." },
        { step: "Step 02", title: "Optimization", desc: "Cleaning meta tags, fixing heading hierarchy, and compressing images." },
        { step: "Step 03", title: "Schema & Speed", desc: "Injecting JSON-LD structured data and tuning asset loads." },
        { step: "Step 04", title: "Submission", desc: "Updating sitemaps and verifying search index status." },
      ]}
      faqs={[
        {
          q: "What is technical SEO?",
          a: "Technical SEO refers to optimizing website infrastructure, clean code, page speed, mobile responsiveness, and sitemaps so search engine bots can crawl and index your site easily.",
        },
        {
          q: "Does website speed affect search rankings?",
          a: "Yes. Google uses page speed and Core Web Vitals as key ranking factors. Faster loading sites deliver better user experiences and convert more visitors.",
        },
      ]}
      relatedServices={[
        { title: "Website Development", href: "/web-development" },
        { title: "Website Design", href: "/website-design" },
        { title: "Logo & Branding", href: "/logo-design" },
        { title: "E-commerce Development", href: "/ecommerce-development" },
        { title: "WordPress Development", href: "/wordpress-development" },
      ]}
    />
  );
}

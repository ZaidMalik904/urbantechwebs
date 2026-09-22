import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "SEO & Website Performance Services",
  description:
    "UrbanTech Webs provides SEO and website performance services. Technical SEO, speed optimization, structured schema, and search visibility.",
  alternates: {
    canonical: "https://urbantechwebs.in/seo-services",
  },
  openGraph: {
    title: "SEO & Website Performance Services",
    description:
      "UrbanTech Webs provides SEO and website performance services. Technical SEO, speed optimization, structured schema, and search visibility.",
    url: "https://urbantechwebs.in/seo-services",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/seo_services_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "SEO & Website Performance Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & Website Performance Services",
    description:
      "Expert technical SEO and website performance optimization.",
    images: ["/images/seo_services_hero_bg.jpg"],
  },
};

export default function SeoServicesPage() {
  return (
    <ServicePageLayout
      badge="SEO & Performance"
      h1="SEO & Website Performance Services"
      heroImage="/images/seo_services_hero_bg.jpg"
      title="SEO & Website Performance Services | UrbanTech Webs"
      metaDescription="UrbanTech Webs provides SEO and website performance services. Technical SEO, speed optimization, structured schema, and search visibility."
      showStats={true}
      statsItems={[
        {
          iconName: "Search",
          title: "Technical On-Page SEO",
          desc: "Semantic HTML5 hierarchy, schema markup & meta tag setup.",
        },
        {
          iconName: "Gauge",
          title: "Core Web Vitals Tuning",
          desc: "90+ Lighthouse performance scores for search engine rankings.",
        },
        {
          iconName: "FileCode",
          title: "Search Indexing Setup",
          desc: "Automated XML sitemaps, robots.txt & canonical URL structure.",
        },
        {
          iconName: "BarChart",
          title: "Content & Keyword Audit",
          desc: "Clean content structure optimized for targeted search terms.",
        },
      ]}
      introParagraphs={[
        <React.Fragment key="intro-1">
          UrbanTech Webs provides expert SEO services, page speed optimization, and search engine visibility enhancements. We integrate technical search strategies into our{" "}
          <Link href="/web-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            SEO-friendly web development
          </Link>{" "}
          and custom layout projects.
        </React.Fragment>,
        <React.Fragment key="intro-2">
          As a performance-focused web team, we tune clean HTML structures, XML sitemaps, JSON-LD schema, and{" "}
          <Link href="/website-design" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            responsive website design
          </Link>{" "}
          elements. You can{" "}
          <Link href="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            get a technical SEO consultation
          </Link>{" "}
          to evaluate your website search visibility today.
        </React.Fragment>,
      ]}
      benefits={[
        {
          title: "Technical SEO Foundation",
          desc: "Proper heading hierarchy (H1-H6), canonical tags, structured JSON-LD schema, and robot meta instructions.",
        },
        {
          title: "Page Speed & Core Web Vitals",
          desc: "Code minification, image compression (WebP), and script optimization for rapid load times and lower bounce rates.",
        },
        {
          title: "WordPress & CMS SEO Tuning",
          desc: (
            <>
              Optimization for CMS platforms via our specialized{" "}
              <Link href="/wordpress-development" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                WordPress SEO configuration
              </Link>{" "}
              services.
            </>
          ),
        },
        {
          title: "Web App & SaaS Speed Optimization",
          desc: (
            <>
              Optimizing dynamic single-page portals and server rendering with our{" "}
              <Link href="/web-application-development" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                web application performance
              </Link>{" "}
              standards.
            </>
          ),
        },
        {
          title: "Search Indexing & Sitemaps",
          desc: "Automated XML sitemap generation and Google Search Console property indexing configuration.",
        },
        {
          title: "Clean Semantic Architecture",
          desc: "Semantic HTML5 markup easily readable and indexed by Google, Bing, and web search crawlers.",
        },
      ]}
      features={[
        { title: "Meta Title & Description Tuning", desc: "Descriptive meta titles and click-worthy search snippet summaries." },
        { title: "Structured Data Schema Markup", desc: "Organization, WebSite, Service, BreadcrumbList, and FAQ JSON-LD." },
        { title: "Canonical URL Configuration", desc: "Prevent duplicate content issues across URL variations." },
        { title: "Core Web Vitals Optimization", desc: "Faster LCP, low CLS, and swift FID interaction speeds." },
        { title: "XML Sitemap & Robots.txt Setup", desc: "Clean crawler navigation rules and automated sitemap updates." },
        { title: "Image Alt Attribute Optimization", desc: "Descriptive image alt attributes for enhanced Google Image visibility." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Technical Audit", desc: "Analyzing current site speed, metadata, heading hierarchy, and index status." },
        { step: "Step 02", title: "Keyword Mapping", desc: "Mapping service keywords to targeted landing pages without cannibalization." },
        { step: "Step 03", title: "Code & Schema Optimization", desc: "Injecting JSON-LD schemas, optimizing images, and tuning canonicals." },
        { step: "Step 04", title: "Indexing & Verification", desc: "Submitting XML sitemaps to search engines and verifying Search Console." },
      ]}
      portfolioExamples={[
        {
          title: "UrbanTech Webs Engine",
          desc: "Our high-speed website engineered with JSON-LD schema, Next.js static rendering, and instant load speeds.",
          url: "https://urbantechwebs.in/",
          image: "/images/hero.jpeg",
        },
      ]}
      faqs={[
        {
          q: "What is included in your SEO & performance services?",
          rawText: "Our SEO services include technical SEO audits, page speed optimization, structured JSON-LD schema markup, XML sitemaps, canonical tags, heading structure optimization, and search engine index setup.",
          a: "Our SEO services include technical SEO audits, page speed optimization, structured JSON-LD schema markup, XML sitemaps, canonical tags, heading structure optimization, and search engine index setup.",
        },
        {
          q: "How fast will my website load after speed optimization?",
          rawText: "We target under 2-second load times on mobile 4G and desktop connections by compressing images, minifying code, and optimizing Core Web Vitals.",
          a: "We target under 2-second load times on mobile 4G and desktop connections by compressing images, minifying code, and optimizing Core Web Vitals.",
        },
        {
          q: "Do you offer SEO for new websites?",
          rawText: "Yes! Every website built by UrbanTech Webs comes with built-in SEO-ready architecture and schema markup from day one.",
          a: "Yes! Every website built by UrbanTech Webs comes with built-in SEO-ready architecture and schema markup from day one.",
        },
      ]}
      relatedServices={[
        { title: "Custom Web Development", href: "/web-development" },
        { title: "Website Design Services", href: "/website-design" },
        { title: "E-Commerce Store Development", href: "/ecommerce-development" },
        { title: "Contact Us", href: "/contact" },
      ]}
    />
  );
}

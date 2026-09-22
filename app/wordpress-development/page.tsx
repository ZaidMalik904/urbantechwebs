import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "WordPress Development Services",
  description:
    "UrbanTech Webs provides WordPress development services. We build custom WordPress themes, business sites, plugins, and easy CMS setups.",
  alternates: {
    canonical: "https://urbantechwebs.in/wordpress-development",
  },
  openGraph: {
    title: "WordPress Development Services",
    description:
      "UrbanTech Webs provides WordPress development services. We build custom WordPress themes, business sites, plugins, and easy CMS setups.",
    url: "https://urbantechwebs.in/wordpress-development",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/wordpress_dev_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "WordPress Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Development Services",
    description:
      "Custom WordPress theme development, plugin configuration, and CMS administration.",
    images: ["/images/wordpress_dev_hero_bg.jpg"],
  },
};

export default function WordpressDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="WordPress Development"
      h1="WordPress Development Services"
      title="WordPress Development Services | UrbanTech Webs"
      metaDescription="UrbanTech Webs provides WordPress development services. We build custom WordPress themes, business sites, plugins, and easy CMS setups."
      heroImage="/images/wordpress_dev_hero_bg.jpg"
      showStats={true}
      statsItems={[
        {
          iconName: "Wrench",
          title: "Custom Gutenberg Themes",
          desc: "Lightweight block themes without heavy pre-made page builders.",
        },
        {
          iconName: "Sliders",
          title: "Easy Admin Management",
          desc: "Intuitive content editing dashboard for effortless site updates.",
        },
        {
          iconName: "ShieldCheck",
          title: "Hardened Security",
          desc: "Firewall protection, malware scanning, and SSL configuration.",
        },
        {
          iconName: "Zap",
          title: "Zero Plugin Bloat",
          desc: "Clean codebase optimized for rapid page load speeds.",
        },
      ]}
      introParagraphs={[
        <React.Fragment key="intro-1">
          UrbanTech Webs offers professional WordPress website development for growing businesses. We craft flexible Content Management Systems paired with modern{" "}
          <Link href="/website-design" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            custom website design
          </Link>{" "}
          to power your corporate blog and service pages.
        </React.Fragment>,
        <React.Fragment key="intro-2">
          Our developers build clean custom WordPress themes, configure plugins for security and speed, set up user-friendly admin panels, and integrate technical{" "}
          <Link href="/seo-services" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            SEO services
          </Link>
          . Feel free to{" "}
          <Link href="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            contact us for WordPress support
          </Link>{" "}
          and custom setup inquiries.
        </React.Fragment>,
      ]}
      benefits={[
        {
          title: "Easy Content Administration",
          desc: "Simple backend admin dashboard allowing non-technical staff to edit text, publish blogs, update service offerings, and upload media.",
        },
        {
          title: "Custom Theme Customization",
          desc: "Tailored visual theme layouts designed specifically to reflect your company branding rather than bloated generic themes.",
        },
        {
          title: "Hardened Security Configuration",
          desc: "Hardened WordPress security practices, login protection, spam filtering, and SSL certificates to safeguard your business site.",
        },
        {
          title: "E-Commerce & WooCommerce Capabilities",
          desc: (
            <>
              Extend your WordPress site into a full online shopping store using WooCommerce and our{" "}
              <Link href="/ecommerce-development" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                e-commerce development services
              </Link>.
            </>
          ),
        },
        {
          title: "SEO Plugin Integration",
          desc: "Setup of Yoast SEO or RankMath plugins along with automated XML sitemap creation for optimal Google indexing.",
        },
        {
          title: "Full-Stack Custom Extensions",
          desc: (
            <>
              For enterprise needs beyond standard CMS plugins, we also engineer custom REST endpoints with our{" "}
              <Link href="/web-development" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                full-stack web development
              </Link>{" "}
              capabilities.
            </>
          ),
        },
      ]}
      features={[
        { title: "WordPress Installation & Database Setup", desc: "Complete MySQL database and core WordPress CMS installation." },
        { title: "Custom Page Builder Setup", desc: "Elementor, Gutenberg block builder, or custom theme options." },
        { title: "Security & Firewall Hardening", desc: "Malware scanning, login protection, and spam prevention." },
        { title: "SEO & Sitemap Configuration", desc: "Automated indexing setup for Google Search Console." },
        { title: "Contact Form & Lead Routing", desc: "Form inquiry dispatch routed straight to your company email." },
        { title: "Mobile Responsive Layouts", desc: "Flawless rendering across mobile, tablet, and desktop displays." },
      ]}
      processSteps={[
        { step: "Step 01", title: "CMS Scope Audit", desc: "Analyzing content requirements, custom post types, and plugin needs." },
        { step: "Step 02", title: "Theme Crafting", desc: "Designing responsive page templates and header/footer structures." },
        { step: "Step 03", title: "WordPress Coding", desc: "Setting up WordPress database, custom fields, and plugin configurations." },
        { step: "Step 04", title: "Client Handover", desc: "Conducting QA testing and providing admin dashboard access training." },
      ]}
      faqs={[
        {
          q: "Why hire UrbanTech Webs for WordPress development?",
          rawText: "We combine custom WordPress theme design, speed optimization, technical security hardening, and on-page SEO setup to ensure your WordPress site runs fast, safe, and efficiently.",
          a: "We combine custom WordPress theme design, speed optimization, technical security hardening, and on-page SEO setup to ensure your WordPress site runs fast, safe, and efficiently.",
        },
        {
          q: "Is WordPress a good choice for my business website?",
          rawText: "Yes! WordPress powers over 40% of all websites globally. It is ideal for businesses that want an easy-to-update site with blog capabilities, service pages, and customizable plugins.",
          a: "Yes! WordPress powers over 40% of all websites globally. It is ideal for businesses that want an easy-to-update site with blog capabilities, service pages, and customizable plugins.",
        },
        {
          q: "Will I be able to update content myself on WordPress?",
          rawText: "Yes. Once the site is deployed, we provide clear instructions on how to log in, add new pages, edit existing text, upload images, and write blog articles.",
          a: "Yes. Once the site is deployed, we provide clear instructions on how to log in, add new pages, edit existing text, upload images, and write blog articles.",
        },
        {
          q: "Do you maintain and update WordPress websites?",
          rawText: "Yes. We offer ongoing maintenance agreements for WordPress core updates, plugin patches, security scans, and backup management.",
          a: "Yes. We offer ongoing maintenance agreements for WordPress core updates, plugin patches, security scans, and backup management.",
        },
      ]}
      relatedServices={[
        { title: "Website Design Services", href: "/website-design" },
        { title: "E-Commerce Development", href: "/ecommerce-development" },
        { title: "SEO Services", href: "/seo-services" },
        { title: "Contact Us", href: "/contact" },
      ]}
    />
  );
}

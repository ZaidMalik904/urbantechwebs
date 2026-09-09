import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "WordPress Development Services in Noida | UrbanTech Webs",
  description:
    "UrbanTech Webs provides WordPress development services in Noida and Delhi NCR. We build custom WordPress themes, business sites, and easy CMS setups.",
  alternates: {
    canonical: "https://urbantechwebs.in/wordpress-development",
  },
};

export default function WordPressDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="WordPress Development"
      h1="WordPress Development Services in Noida"
      title="WordPress Development Services in Noida | UrbanTech Webs"
      metaDescription="UrbanTech Webs provides WordPress development services in Noida and Delhi NCR. We build custom WordPress themes, business sites, and easy CMS setups."
      heroImage="/images/wordpress_dev_hero_bg.jpg"
      showStats={true}
      introParagraphs={[
        "UrbanTech Webs offers professional WordPress website development for businesses in Noida and Delhi NCR seeking an easy-to-manage, flexible Content Management System (CMS).",
        "We build clean custom WordPress setups, configure essential plugins for security and speed, set up user-friendly admin panels, and ensure your team can edit pages, post blogs, and update services effortlessly.",
      ]}
      benefits={[
        {
          title: "Easy Content Administration",
          desc: "Simple backend admin dashboard allowing you to add pages, blog posts, images, and text without coding knowledge.",
        },
        {
          title: "Custom Theme Customization",
          desc: "Tailored visual design and layout structures configured specifically for your corporate brand guidelines.",
        },
        {
          title: "Essential Security Configuration",
          desc: "Hardened WordPress security practices, spam protection, and SSL setup to safeguard your business site.",
        },
        {
          title: "Speed & Caching Optimization",
          desc: "Plugin optimization, database cleanup, and asset caching for quick page load performance.",
        },
        {
          title: "SEO Plugin Integration",
          desc: "Setup of Yoast SEO or RankMath plugins along with automated XML sitemap generation.",
        },
        {
          title: "Scalable Plugin Ecosystem",
          desc: "Integration with contact forms, WhatsApp chat widgets, analytics trackers, and multilingual tools.",
        },
      ]}
      features={[
        { title: "WordPress Installation & Setup", desc: "Complete database and core installation." },
        { title: "Custom Page Builder Setup", desc: "Elementor, Gutenberg, or custom theme options." },
        { title: "Security & Firewall Setup", desc: "Malware protection, spam filtering, and login security." },
        { title: "SEO & Sitemap Configuration", desc: "Automated indexing setup for search engines." },
        { title: "Contact Form & Lead Routing", desc: "Form inquiries delivered directly to your email." },
        { title: "Mobile Responsive Layouts", desc: "Flawless rendering on smartphone and tablet screens." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Setup & Database", desc: "Configuring WordPress core, hosting, and SSL." },
        { step: "Step 02", title: "Theme Customization", desc: "Building page templates and styling elements." },
        { step: "Step 03", title: "Plugin Integration", desc: "Setting up security, SEO, contact forms, and speed plugins." },
        { step: "Step 04", title: "Client Handover", desc: "Testing and providing admin dashboard access training." },
      ]}
      faqs={[
        {
          q: "Is WordPress a good choice for my business website?",
          a: "Yes! WordPress powers over 40% of the web. It is an ideal choice for businesses that want an easy-to-update site with blog capabilities, service pages, and customizable plugins.",
        },
        {
          q: "Will I be able to update content myself on WordPress?",
          a: "Yes. Once the site is deployed, we provide clear instructions on how to log in, add new pages, edit existing text, upload images, and write blog articles.",
        },
        {
          q: "Do you maintain and update WordPress websites?",
          a: "Yes. We offer ongoing maintenance agreements for WordPress core updates, plugin patches, security scans, and backup management.",
        },
      ]}
      relatedServices={[
        { title: "Website Development", href: "/web-development" },
        { title: "Website Design", href: "/website-design" },
        { title: "E-commerce Development", href: "/ecommerce-development" },
        { title: "Landing Page Development", href: "/landing-page-development" },
        { title: "Web Application Development", href: "/web-application-development" },
      ]}
    />
  );
}

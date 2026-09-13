import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "WordPress Development Company in Noida | Services | UrbanTech Webs",
  description:
    "UrbanTech Webs is a leading WordPress development company in Noida & Delhi NCR. We build custom WordPress themes, business sites, plugins, and easy CMS setups.",
  alternates: {
    canonical: "https://urbantechwebs.in/wordpress-development",
  },
  openGraph: {
    title: "WordPress Development Company in Noida | UrbanTech Webs",
    description:
      "UrbanTech Webs is a trusted WordPress development company in Noida. We build custom WordPress themes, business sites, plugins, and easy CMS setups.",
    url: "https://urbantechwebs.in/wordpress-development",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/wordpress_dev_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "WordPress Development Company in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Development Company in Noida | UrbanTech Webs",
    description:
      "Custom WordPress development services and theme customization in Noida & Delhi NCR.",
    images: ["/images/wordpress_dev_hero_bg.jpg"],
  },
};

export default function WordPressDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="WordPress Development"
      h1="WordPress Development Company in Noida"
      title="WordPress Development Company in Noida | Services | UrbanTech Webs"
      metaDescription="UrbanTech Webs is a leading WordPress development company in Noida & Delhi NCR. We build custom WordPress themes, business sites, plugins, and easy CMS setups."
      heroImage="/images/wordpress_dev_hero_bg.jpg"
      showStats={true}
      introParagraphs={[
        <>
          UrbanTech Webs is a trusted WordPress development company in Noida offering professional WordPress website development for businesses in Noida and Delhi NCR. We craft flexible Content Management Systems paired with modern{" "}
          <Link href="/website-design" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            custom website design
          </Link>{" "}
          to power your corporate blog and service pages.
        </>,
        <>
          Our developers build clean custom WordPress themes, configure plugins for security and speed, set up user-friendly admin panels, and integrate technical{" "}
          <Link href="/seo-services" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            SEO services in Noida
          </Link>
          . Feel free to{" "}
          <Link href="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            contact us for WordPress support
          </Link>{" "}
          and custom setup inquiries.
        </>,
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
        { step: "Step 01", title: "Setup & Database", desc: "Configuring WordPress core files, server hosting, and SSL certificates." },
        { step: "Step 02", title: "Theme Customization", desc: "Building custom page templates, header layouts, and styling elements." },
        { step: "Step 03", title: "Plugin Integration", desc: "Setting up security, SEO, contact forms, and caching plugins." },
        { step: "Step 04", title: "Client Handover", desc: "Conducting QA testing and providing admin dashboard access training." },
      ]}
      faqs={[
        {
          q: "Why hire UrbanTech Webs as your WordPress development company in Noida?",
          rawText: "We combine custom WordPress theme design, speed optimization, technical security hardening, and on-page SEO setup to ensure your WordPress site runs fast, safe, and efficiently.",
          a: "We combine custom WordPress theme design, speed optimization, technical security hardening, and on-page SEO setup to ensure your WordPress site runs fast, safe, and efficiently.",
        },
        {
          q: "How much does WordPress website development cost in Noida?",
          rawText: "WordPress website development pricing depends on theme customization, plugin requirements, and page count. Starter WordPress sites start from ₹2,999, while custom business setups start from ₹5,999.",
          a: "WordPress website development pricing depends on theme customization, plugin requirements, and page count. Starter WordPress sites start from ₹2,999, while custom business setups start from ₹5,999.",
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
        { title: "Custom Web Development", href: "/web-development" },
        { title: "Website Design Services", href: "/website-design" },
        { title: "E-commerce Website Development", href: "/ecommerce-development" },
        { title: "High-Converting Landing Pages", href: "/landing-page-development" },
        { title: "SEO & Website Performance", href: "/seo-services" },
      ]}
    />
  );
}

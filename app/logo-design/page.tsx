import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Logo Design Services Noida | Brand Identity & Logo Designer",
  description:
    "UrbanTech Webs provides professional logo design services in Noida & Delhi NCR. Custom logo design, brand identity, vector assets, and visual branding.",
  alternates: {
    canonical: "https://urbantechwebs.in/logo-design",
  },
  openGraph: {
    title: "Logo Design Services Noida | Brand Identity Design | UrbanTech Webs",
    description:
      "UrbanTech Webs provides custom logo design services in Noida and Delhi NCR. Custom brand logos, vector files, color guidelines, and full copyright ownership.",
    url: "https://urbantechwebs.in/logo-design",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/logo_design_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Logo Design Services in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Design Services Noida | UrbanTech Webs",
    description:
      "Professional logo designer & brand identity design company serving Noida & Delhi NCR.",
    images: ["/images/logo_design_hero_bg.jpg"],
  },
};

export default function LogoDesignPage() {
  return (
    <ServicePageLayout
      badge="Logo & Branding"
      h1="Professional Logo Design Services in Noida"
      heroImage="/images/logo_design_hero_bg.jpg"
      title="Logo Design Services Noida | Brand Identity & Logo Designer"
      metaDescription="UrbanTech Webs provides professional logo design services in Noida & Delhi NCR. Custom logo design, brand identity, vector assets, and visual branding."
      introParagraphs={[
        <>
          UrbanTech Webs provides professional logo design services in Noida, crafting distinct logo marks and brand identity packages. We align custom visual assets directly with our{" "}
          <Link href="/website-design" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            website design services Noida
          </Link>{" "}
          to establish instant corporate authority.
        </>,
        <>
          As a creative branding team, we design clean vector marks, define color palettes, and create social media kits. You can explore{" "}
          <Link href="/portfolio" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            our visual brand portfolio
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            start your logo design project
          </Link>{" "}
          with us today.
        </>,
      ]}
      benefits={[
        {
          title: "Memorable Visual Brand Mark",
          desc: "Custom logo concepts engineered by our logo design services Noida team to leave a lasting impression on target customers.",
        },
        {
          title: "Vector Scalability",
          desc: "High-resolution scalable vector files (SVG, EPS, PNG, PDF) suitable for responsive websites, mobile app icons, and high-DPI print media.",
        },
        {
          title: "Brand Color & Typography Guide",
          desc: "Harmonious color palettes (Hex, RGB, CMYK) and custom typography guidelines for consistent branding across digital marketing channels.",
        },
        {
          title: "Landing Page & Ad Integration",
          desc: (
            <>
              Logos formatted specifically for high-impact visual conversion on targeted{" "}
              <Link href="/landing-page-development" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                branding for landing pages
              </Link>.
            </>
          ),
        },
        {
          title: "Professional Business Credibility",
          desc: "Establishes immediate market authority, brand consistency, and trust with prospective business clients.",
        },
        {
          title: "Seamless Website Integration",
          desc: "Logos designed specifically to integrate cleanly into modern web navigation headers, sticky navbars, and mobile favicon displays.",
        },
      ]}
      features={[
        { title: "Custom Logo Concepts", desc: "Multiple unique visual brand symbol options to choose from." },
        { title: "High-Res Vector Source Files", desc: "Scalable SVG, AI, EPS, PDF, and transparent PNG formats." },
        { title: "Brand Color Palette Definition", desc: "Hex, RGB, and CMYK exact color code guidelines." },
        { title: "Favicon & Social Media Kit", desc: "Optimized browser icons and social media profile graphics." },
        { title: "Dark & Light Mode Variants", desc: "Versatile transparent background logo assets for any theme." },
        { title: "100% Full Ownership Rights", desc: "100% intellectual property ownership transferred to your company." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Brand Brief", desc: "Understanding your business vision, industry positioning, and design preferences." },
        { step: "Step 02", title: "Concept Drafting", desc: "Creating initial visual logo mark ideas and custom typography pairings." },
        { step: "Step 03", title: "Refinement", desc: "Fine-tuning colors, line curves, and icon proportions based on your input." },
        { step: "Step 04", title: "Asset Delivery", desc: "Delivering complete vector source files, social media kit, and brand guidelines." },
      ]}
      faqs={[
        {
          q: "Why hire UrbanTech Webs for logo design services in Noida?",
          rawText: "We craft versatile vector logos designed to look sharp on both digital websites and physical print collateral, backed by 100% full copyright transfer.",
          a: "We craft versatile vector logos designed to look sharp on both digital websites and physical print collateral, backed by 100% full copyright transfer.",
        },
        {
          q: "How much does a custom logo design cost in Noida?",
          rawText: "Logo design pricing starts from ₹1,999 for essential brand logo marks, or bundled with website design packages for maximum value.",
          a: "Logo design pricing starts from ₹1,999 for essential brand logo marks, or bundled with website design packages for maximum value.",
        },
        {
          q: "What file formats will I receive with my logo design?",
          rawText: "You will receive high-resolution vector source files (SVG, EPS, PDF) as well as transparent background PNGs and web-optimized files (JPEG, WebP).",
          a: "You will receive high-resolution vector source files (SVG, EPS, PDF) as well as transparent background PNGs and web-optimized files (JPEG, WebP).",
        },
        {
          q: "Will I own full copyright to my logo design?",
          rawText: "Yes! Once final designs are completed and approved, 100% full ownership and copyright rights are transferred to your company.",
          a: "Yes! Once final designs are completed and approved, 100% full ownership and copyright rights are transferred to your company.",
        },
      ]}
      relatedServices={[
        { title: "Website Design Services", href: "/website-design" },
        { title: "Custom Web Development", href: "/web-development" },
        { title: "SEO & Website Performance", href: "/seo-services" },
        { title: "High-Converting Landing Pages", href: "/landing-page-development" },
        { title: "E-commerce Development", href: "/ecommerce-development" },
      ]}
    />
  );
}

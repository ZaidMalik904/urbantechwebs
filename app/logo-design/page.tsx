import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Logo & Brand Design Services in Noida | UrbanTech Webs",
  description:
    "UrbanTech Webs provides custom logo design, brand identity, and visual branding services for businesses in Noida and Delhi NCR.",
  alternates: {
    canonical: "https://urbantechwebs.in/logo-design",
  },
};

export default function LogoDesignPage() {
  return (
    <ServicePageLayout
      badge="Logo & Branding"
      h1="Logo & Brand Design Services in Noida"
      heroImage="/images/logo_design_hero_bg.jpg"
      title="Logo & Brand Design Services in Noida | UrbanTech Webs"
      metaDescription="UrbanTech Webs provides custom logo design, brand identity, and visual branding services for businesses in Noida and Delhi NCR."
      introParagraphs={[
        "UrbanTech Webs crafts distinct logo designs and brand identity packages for businesses in Noida, Delhi NCR, and across India.",
        "We design clean, memorable logos, define consistent color palettes, select brand typography, and create visual brand assets that ensure your business stands out in the marketplace.",
      ]}
      benefits={[
        {
          title: "Memorable Visual Identity",
          desc: "Custom logo concepts engineered to leave a strong impression on target customers.",
        },
        {
          title: "Vector Scalability",
          desc: "High-resolution vector files (SVG, EPS, PNG, PDF) suitable for websites, social media, and physical printing.",
        },
        {
          title: "Brand Color & Typography Guide",
          desc: "Harmonious color palettes and font pairings for consistent branding across marketing channels.",
        },
        {
          title: "Versatile Formats for Print & Web",
          desc: "Dark mode, light mode, and monochrome logo variants formatted for digital and print media.",
        },
        {
          title: "Professional Business Branding",
          desc: "Establishes immediate credibility and trust with prospective clients.",
        },
        {
          title: "Seamless Website Integration",
          desc: "Logos designed to integrate seamlessly into modern website header layouts and mobile app icons.",
        },
      ]}
      features={[
        { title: "Custom Logo Concepts", desc: "Unique visual brand symbol options." },
        { title: "High-Res Vector Source Files", desc: "Scalable SVG, AI, EPS, and PNG formats." },
        { title: "Brand Color Palette", desc: "Hex, RGB, and CMYK color definitions." },
        { title: "Favicon & Social Media Kit", desc: "Optimized app icon and profile pictures." },
        { title: "Dark & Light Mode Variants", desc: "Versatile transparent background logo assets." },
        { title: "Full Ownership Rights", desc: "100% intellectual property ownership transferred to you." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Brand Brief", desc: "Understanding your business vision, industry position, and style preferences." },
        { step: "Step 02", title: "Concept Drafting", desc: "Creating initial visual logo mark ideas and typography styles." },
        { step: "Step 03", title: "Refinement", desc: "Fine-tuning colors, curves, and icon proportions based on your input." },
        { step: "Step 04", title: "Asset Delivery", desc: "Delivering complete vector source files and brand guidelines." },
      ]}
      faqs={[
        {
          q: "What file formats will I receive with my logo design?",
          a: "You will receive high-resolution vector source files (SVG, EPS, PDF) as well as transparent background PNGs and web-optimized files (JPEG, WebP).",
        },
        {
          q: "Will I own the full copyright to my logo?",
          a: "Yes! Once final designs are completed and delivered, full 100% ownership and copyright rights are transferred to you.",
        },
      ]}
      relatedServices={[
        { title: "Website Design", href: "/website-design" },
        { title: "Website Development", href: "/web-development" },
        { title: "SEO Services", href: "/seo-services" },
        { title: "Landing Page Development", href: "/landing-page-development" },
        { title: "E-commerce Development", href: "/ecommerce-development" },
      ]}
    />
  );
}

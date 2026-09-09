import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Landing Page Design & Development Services in Noida | UrbanTech Webs",
  description:
    "UrbanTech Webs designs and develops high-converting landing pages in Noida & Delhi NCR for lead generation, ad campaigns, and product launches.",
  alternates: {
    canonical: "https://urbantechwebs.in/landing-page-development",
  },
};

export default function LandingPageDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="Landing Page Development"
      h1="High-Converting Landing Page Design & Development in Noida"
      title="Landing Page Design & Development Services in Noida | UrbanTech Webs"
      metaDescription="UrbanTech Webs designs and develops high-converting landing pages in Noida & Delhi NCR for lead generation, ad campaigns, and product launches."
      heroImage="/images/landing_page_hero_bg.jpg"
      showStats={true}
      introParagraphs={[
        "UrbanTech Webs designs and builds focused, high-converting landing pages engineered specifically for digital ad campaigns (Google Ads, Meta Ads), lead generation, and special service promotions.",
        "Our landing page designs eliminate distraction, highlight your key value propositions, build instant buyer trust, and guide visitors towards a single primary action—whether submitting an inquiry form or starting a WhatsApp conversation.",
      ]}
      benefits={[
        {
          title: "Ad Campaign Optimization",
          desc: "Designed to align perfectly with your ad copy and keywords, improving ad relevance scores and reducing cost-per-click.",
        },
        {
          title: "Clear Call-to-Action Focus",
          desc: "Uncluttered page hierarchy placing primary CTA buttons and lead capture forms front and center.",
        },
        {
          title: "Instant Mobile Load Speed",
          desc: "Optimized code structure and lightweight media for instant rendering on mobile devices.",
        },
        {
          title: "Direct Lead Routing Options",
          desc: "Inquiries routed immediately to your email address, CRM, or instant WhatsApp chat.",
        },
        {
          title: "Trust & Proof Inclusions",
          desc: "Strategic sections for client testimonials, key statistics, certifications, and service benefits.",
        },
        {
          title: "A/B Testing Friendly",
          desc: "Modular page code that makes it simple to test headline variations, CTA colors, or image banners.",
        },
      ]}
      features={[
        { title: "Above-the-Fold Value Hero", desc: "Compelling headline, subheadline, and primary CTA." },
        { title: "Mobile Touch Optimization", desc: "Big, easily tap-able buttons for phone users." },
        { title: "WhatsApp & Form Capture", desc: "Dual inquiry options for high conversion rates." },
        { title: "Feature & Benefit Grid", desc: "Easy-to-scan visual list of your service advantages." },
        { title: "Social Proof Showcase", desc: "Highlight reviews, trust badges, and project stats." },
        { title: "Fast-Loading Code Base", desc: "Minimal script payload for lightning response time." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Campaign Analysis", desc: "Understanding your ad objective, target offer, and key CTA." },
        { step: "Step 02", title: "Copy & Wireframe", desc: "Structuring persuasive headlines, benefits, and form triggers." },
        { step: "Step 03", title: "Visual Dev", desc: "Coding a clean, responsive landing page." },
        { step: "Step 04", title: "Tracking & Launch", desc: "Connecting analytics tracking pixels and pushing live." },
      ]}
      portfolioExamples={[
        {
          title: "Jinda Car Rentals Platform",
          desc: "Car rental landing experience with instant vehicle specification check and WhatsApp lead triggers.",
          url: "https://jindacarrentals.com/",
          image: "/images/jinda_rentals.png",
        },
      ]}
      faqs={[
        {
          q: "Why do I need a landing page instead of sending ad traffic to my homepage?",
          a: "Homepages contain multiple navigation links and general information, which can distract ad visitors. A dedicated landing page focuses entirely on one specific service or offer, leading to significantly higher lead conversion rates.",
        },
        {
          q: "How fast can you deliver a landing page?",
          a: "Our typical turnaround for a custom-built, responsive landing page is 3 to 7 working days.",
        },
        {
          q: "Can you connect the landing page form to my WhatsApp?",
          a: "Yes! We can set up instant WhatsApp chat buttons and pre-filled form messages so leads connect with you immediately.",
        },
      ]}
      relatedServices={[
        { title: "Website Development", href: "/web-development" },
        { title: "Website Design", href: "/website-design" },
        { title: "E-commerce Development", href: "/ecommerce-development" },
        { title: "WordPress Development", href: "/wordpress-development" },
        { title: "Web Application Development", href: "/web-application-development" },
      ]}
    />
  );
}

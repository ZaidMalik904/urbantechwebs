import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Landing Page Development Noida | High Converting Landing Page Design",
  description:
    "UrbanTech Webs provides landing page development in Noida & Delhi NCR for lead generation, ad campaigns, Google Ads, and product launches.",
  alternates: {
    canonical: "https://urbantechwebs.in/landing-page-development",
  },
  openGraph: {
    title: "Landing Page Development Noida | High Converting Landing Page Design",
    description:
      "UrbanTech Webs provides landing page development in Noida & Delhi NCR for lead generation, ad campaigns, Google Ads, and product launches.",
    url: "https://urbantechwebs.in/landing-page-development",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/landing_page_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Landing Page Development in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page Development Noida | UrbanTech Webs",
    description:
      "High converting landing page design and development for Google & Meta ad campaigns.",
    images: ["/images/landing_page_hero_bg.jpg"],
  },
};

export default function LandingPageDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="Landing Page Development"
      h1="High-Converting Landing Page Design & Development in Noida"
      title="Landing Page Development Noida | High Converting Landing Page Design"
      metaDescription="UrbanTech Webs provides landing page development in Noida & Delhi NCR for lead generation, ad campaigns, Google Ads, and product launches."
      heroImage="/images/landing_page_hero_bg.jpg"
      showStats={true}
      introParagraphs={[
        <>
          UrbanTech Webs specializes in landing page development in Noida, crafting high converting landing page designs tailored for digital ad campaigns (Google Ads, Meta Ads), lead generation, and targeted product launches. We combine UI expertise from our{" "}
          <Link href="/website-design" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            professional website designer
          </Link>{" "}
          team with robust backend lead capture.
        </>,
        <>
          Our landing page solutions work hand-in-hand with our overall{" "}
          <Link href="/web-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            web development services Noida
          </Link>{" "}
          standards to eliminate navigation distraction, highlight your key offer, and guide prospective clients to convert. You can also{" "}
          <Link href="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            request a landing page quote
          </Link>{" "}
          for your next ad campaign.
        </>,
      ]}
      benefits={[
        {
          title: "Ad Campaign Optimization",
          desc: "Engineered to align directly with your ad copy and target keywords, boosting Google Ads quality scores and lowering cost-per-click.",
        },
        {
          title: "Clear Call-to-Action Focus",
          desc: "Uncluttered page hierarchy placing primary call-to-action triggers and quick lead forms prominently above the fold.",
        },
        {
          title: "Instant Mobile Load Speed & Technical SEO",
          desc: (
            <>
              Lightweight HTML5 code structure paired with our{" "}
              <Link href="/seo-services" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                technical SEO optimization
              </Link>{" "}
              for instant loading on mobile devices across 4G/5G networks.
            </>
          ),
        },
        {
          title: "Direct Lead Routing Options",
          desc: "Inquiries dispatched instantly to your email inbox, CRM endpoint, or instant WhatsApp consultation chat.",
        },
        {
          title: "Trust & Proof Inclusions",
          desc: "Strategic sections for client testimonials, key metrics, trust badges, customer reviews, and service benefits.",
        },
        {
          title: "A/B Testing Friendly",
          desc: "Modular code base that makes it easy to test headline variations, CTA button colors, or promotional banners.",
        },
      ]}
      features={[
        { title: "Above-the-Fold Value Hero", desc: "Compelling headline, subheadline, trust badges, and primary CTA." },
        { title: "Mobile Touch Optimization", desc: "Prominent, easily tap-able CTA buttons designed for phone screens." },
        { title: "WhatsApp & Form Lead Capture", desc: "Dual inquiry channels to maximize visitor conversion rates." },
        { title: "Feature & Benefit Grid", desc: "Scannable visual list highlighting your key service advantages." },
        { title: "Social Proof & Reviews", desc: "Highlight client reviews, trust badges, and project statistics." },
        { title: "Fast-Loading Minimal Payload", desc: "Streamlined code base for lightning response times and low bounce rates." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Campaign Strategy", desc: "Analyzing your ad offer, target audience, and primary CTA objective." },
        { step: "Step 02", title: "Copy & Wireframing", desc: "Structuring persuasive headlines, key benefits, and form placement." },
        { step: "Step 03", title: "Visual Dev", desc: "Coding a clean, responsive landing page with fast load speeds." },
        { step: "Step 04", title: "Tracking & Launch", desc: "Integrating Google Analytics/GTM tracking pixels and pushing live." },
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
          q: "Why invest in professional landing page development in Noida?",
          rawText: "Dedicated landing pages focus entirely on one specific service or ad campaign offer, delivering significantly higher conversion rates and lower lead acquisition costs than generic homepages.",
          a: "Dedicated landing pages focus entirely on one specific service or ad campaign offer, delivering significantly higher conversion rates and lower lead acquisition costs than generic homepages.",
        },
        {
          q: "How much does a custom landing page cost in Noida?",
          rawText: "Landing page development cost depends on scope and copy requirements. Dedicated single-page landing pages start from ₹2,999 for ad campaigns.",
          a: "Landing page development cost depends on scope and copy requirements. Dedicated single-page landing pages start from ₹2,999 for ad campaigns.",
        },
        {
          q: "Why do I need a landing page instead of sending ad traffic to my homepage?",
          rawText: "Homepages contain multiple navigation links and general information, which can distract ad visitors. A dedicated landing page guides visitors to a single action.",
          a: "Homepages contain multiple navigation links and general information, which can distract ad visitors. A dedicated landing page guides visitors to a single action.",
        },
        {
          q: "How fast can you deliver a high-converting landing page?",
          rawText: "Our typical turnaround for a custom-built, responsive landing page is 3 to 7 working days.",
          a: "Our typical turnaround for a custom-built, responsive landing page is 3 to 7 working days.",
        },
        {
          q: "Can you connect the landing page form to my WhatsApp?",
          rawText: "Yes! We can set up instant WhatsApp chat buttons and pre-filled form messages so leads connect with you immediately.",
          a: "Yes! We can set up instant WhatsApp chat buttons and pre-filled form messages so leads connect with you immediately.",
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

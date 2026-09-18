import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Landing Page Design & Development Services | UrbanTech Webs",
  description:
    "UrbanTech Webs provides landing page design & development services for lead generation, ad campaigns, Google Ads, and product launches.",
  alternates: {
    canonical: "https://urbantechwebs.in/landing-page-development",
  },
  openGraph: {
    title: "Landing Page Design & Development Services | UrbanTech Webs",
    description:
      "UrbanTech Webs provides landing page design & development services for lead generation, ad campaigns, Google Ads, and product launches.",
    url: "https://urbantechwebs.in/landing-page-development",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/landing_page_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Landing Page Design & Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page Design & Development Services | UrbanTech Webs",
    description:
      "High-converting landing page design & development for ad campaigns & lead generation.",
    images: ["/images/landing_page_hero_bg.jpg"],
  },
};

export default function LandingPageDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="Landing Page Development"
      h1="Landing Page Design & Development"
      title="Landing Page Design & Development Services | UrbanTech Webs"
      metaDescription="UrbanTech Webs provides landing page design & development services for lead generation, ad campaigns, Google Ads, and product launches."
      heroImage="/images/landing_page_hero_bg.jpg"
      showStats={true}
      statsItems={[
        {
          iconName: "Target",
          title: "Max Lead Conversion ROI",
          desc: "Engineered copy & CTA flow to capture maximum ad traffic leads.",
        },
        {
          iconName: "Zap",
          title: "Lightning Speed Load",
          desc: "Instant page rendering to prevent bounce rates on paid ads.",
        },
        {
          iconName: "Split",
          title: "A/B Test Ready Layout",
          desc: "Modular section architecture designed for rapid campaign iterations.",
        },
        {
          iconName: "MessageSquare",
          title: "Instant Form & WhatsApp",
          desc: "Direct lead capture synced to email and WhatsApp messaging.",
        },
      ]}
      introParagraphs={[
        <>
          UrbanTech Webs specializes in landing page development, crafting high-converting landing page designs tailored for digital ad campaigns (Google Ads, Meta Ads), lead generation, and targeted product launches. We combine UI expertise from our{" "}
          <Link href="/website-design" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            professional website design
          </Link>{" "}
          team with robust backend lead capture.
        </>,
        <>
          Our landing page solutions work hand-in-hand with our overall{" "}
          <Link href="/web-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            web development services
          </Link>{" "}
          standards to eliminate navigation distraction, highlight your key offer, and guide prospective clients to convert. You can also{" "}
          <Link href="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            request a custom landing page consultation
          </Link>{" "}
          for your next ad campaign.
        </>,
      ]}
      benefits={[
        {
          title: "Ad Campaign Optimization",
          desc: "Engineered to align directly with your ad copy and target keywords, boosting Google Ads quality scores and lead generation effectiveness.",
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
          title: "A/B Testing Alignment",
          desc: "Built with clean semantic blocks making it simple to split-test headlines, CTA colors, and form fields.",
        },
      ]}
      features={[
        { title: "Above-the-Fold Hero Strategy", desc: "Clear value proposition, background imagery, and prominent CTA." },
        { title: "Fast Lead Form Capture", desc: "Minimal-field input form with instant email notification." },
        { title: "Direct WhatsApp Click-to-Chat", desc: "One-tap WhatsApp button pre-filled with campaign inquiry text." },
        { title: "Mobile Touch Optimization", desc: "Verified for smooth single-thumb scrolling and tap action." },
        { title: "Trust Badges & Testimonial Cards", desc: "Highlight client logos, reviews, metrics, and security icons." },
        { title: "Analytics & Tracking Setup", desc: "Integration with Google Analytics and Google Tag Manager events." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Offer Analysis", desc: "Understanding campaign targets, conversion triggers, and ad copy." },
        { step: "Step 02", title: "Landing Layout", desc: "Wireframing focused visual flow to guide visitor attention to the CTA." },
        { step: "Step 03", title: "Development", desc: "Coding responsive HTML/CSS with fast load speeds and form routing." },
        { step: "Step 04", title: "Campaign Launch", desc: "Testing lead form notifications and launching for live traffic." },
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
          q: "Why invest in professional landing page development?",
          rawText: "Dedicated landing pages focus entirely on one specific service or ad campaign offer, delivering significantly higher conversion rates and stronger visitor engagement than generic homepages.",
          a: "Dedicated landing pages focus entirely on one specific service or ad campaign offer, delivering significantly higher conversion rates and stronger visitor engagement than generic homepages.",
        },
        {
          q: "Why do I need a landing page instead of sending ad traffic to my homepage?",
          rawText: "Homepages contain multiple navigation links and general information, which can distract ad visitors. A dedicated landing page guides visitors to a single action.",
          a: "Homepages contain multiple navigation links and general information, which can distract ad visitors. A dedicated landing page guides visitors to a single action.",
        },
        {
          q: "How fast can you deliver a custom landing page?",
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
        { title: "Website Design Services", href: "/website-design" },
        { title: "Custom Web Development", href: "/web-development" },
        { title: "SEO Services", href: "/seo-services" },
        { title: "Contact Us", href: "/contact" },
      ]}
    />
  );
}

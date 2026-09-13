import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Website Design Company in Noida | Web Design Services | UrbanTech Webs",
  description:
    "UrbanTech Webs is a professional website design company in Noida & Delhi NCR. We craft modern, responsive, and conversion-focused UI/UX layouts for businesses.",
  alternates: {
    canonical: "https://urbantechwebs.in/website-design",
  },
  openGraph: {
    title: "Website Design Company in Noida | Professional Web Design | UrbanTech Webs",
    description:
      "UrbanTech Webs is a professional website design company in Noida. We craft modern, responsive UI/UX web designs for business growth.",
    url: "https://urbantechwebs.in/website-design",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/website_design_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Website Design Company in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Company in Noida | UrbanTech Webs",
    description:
      "Professional website design services in Noida and Delhi NCR.",
    images: ["/images/website_design_hero_bg.jpg"],
  },
};

export default function WebsiteDesignPage() {
  return (
    <ServicePageLayout
      badge="Website Design"
      h1="Website Design Company in Noida & Delhi NCR"
      title="Website Design Company in Noida | Web Design Services | UrbanTech Webs"
      metaDescription="UrbanTech Webs is a professional website design company in Noida & Delhi NCR. We craft modern, responsive, and conversion-focused UI/UX layouts for businesses."
      heroImage="/images/website_design_hero_bg.jpg"
      showStats={true}
      introParagraphs={[
        <>
          UrbanTech Webs is a top-tier website design company in Noida creating modern, visually engaging layouts for businesses across Delhi NCR. Our design approach blends intuitive user interface (UI) principles with comprehensive{" "}
          <Link href="/web-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            web development services
          </Link>{" "}
          to ensure your digital brand looks stunning and performs effortlessly.
        </>,
        <>
          Whether you need a full corporate site refresh or high-converting{" "}
          <Link href="/landing-page-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            conversion landing pages
          </Link>{" "}
          for ad campaigns, our professional website designers optimize typography, color contrast, and layout structure. Feel free to{" "}
          <Link href="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            contact us for a design consultation
          </Link>{" "}
          anytime.
        </>,
      ]}
      benefits={[
        {
          title: "Brand-Aligned Visual Identity",
          desc: (
            <>
              Custom layouts crafted by an experienced web design company in Noida to reflect your brand palette and paired with professional{" "}
              <Link href="/logo-design" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                logo and brand identity design
              </Link>.
            </>
          ),
        },
        {
          title: "User Experience (UX) Optimization",
          desc: "Logical navigation paths and clean page layouts that make information simple for prospective clients to scan and find.",
        },
        {
          title: "Conversion-Focused UI Elements",
          desc: (
            <>
              Strategic placement of prominent call-to-action buttons, lead forms, and instant chat channels ideal for corporate portals and{" "}
              <Link href="/ecommerce-development" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                e-commerce storefront design
              </Link>.
            </>
          ),
        },
        {
          title: "Mobile-First Design Approach",
          desc: "Designed specifically to deliver a smooth touchscreen browsing experience for users across smartphones and tablets.",
        },
        {
          title: "High Visual Contrast & Readability",
          desc: "Legible typography font sizes, harmonious spacing, and crisp visual contrast ratios for effortless reading.",
        },
        {
          title: "Interactive Micro-Animations",
          desc: "Subtle visual hover transitions that make site navigation feel fluid and modern without impacting load times.",
        },
      ]}
      features={[
        { title: "UI/UX Wireframing & Prototyping", desc: "Detailed page visual hierarchy and layout structure planning." },
        { title: "Custom Brand Color & Typography", desc: "Tailored aesthetic palettes, typography, and font hierarchies." },
        { title: "Mobile & Tablet Responsiveness", desc: "Adaptive layouts crafted to render perfectly on any display." },
        { title: "Conversion CTA Integration", desc: "Prominent call-to-action triggers, click-to-call, and forms." },
        { title: "Optimized Graphics & Visuals", desc: "Crisp SVG icons and lightweight WebP image presentation." },
        { title: "Design System Consistency", desc: "Unified styling guidelines maintained across all subpages." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Brand Audit", desc: "Reviewing brand guidelines, target audience expectations, and goals." },
        { step: "Step 02", title: "Wireframing", desc: "Creating visual structure layouts and user navigation flows." },
        { step: "Step 03", title: "UI Crafting", desc: "Designing high-fidelity visual elements and responsive screens." },
        { step: "Step 04", title: "Refinement", desc: "Reviewing client feedback and finalizing visual assets for coding." },
      ]}
      portfolioExamples={[
        {
          title: "Karma Business Consultancy",
          desc: "Clean corporate UI layout engineered for trust, service presentation, and lead capture.",
          url: "https://karmabs.com.au/",
          image: "/images/karma_business.png",
        },
        {
          title: "Narayana Vacation Booking",
          desc: "Vibrant travel showcase layout with package gallery and mobile inquiry forms.",
          url: "https://narayanavacation.com/",
          image: "/images/narayana_vacation.png",
        },
      ]}
      faqs={[
        {
          q: "What makes UrbanTech Webs a leading website design company in Noida?",
          rawText: "We focus on conversion-oriented UI/UX design, custom visual branding, fast mobile response times, and clean page structures tailored specifically for Indian and international businesses.",
          a: (
            <>
              We focus on conversion-oriented UI/UX design, custom visual branding, fast mobile response times, and clean page structures. View{" "}
              <Link href="/portfolio" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                explore our design portfolio
              </Link>{" "}
              to see live client projects.
            </>
          ),
        },
        {
          q: "How much do website design services cost in Noida?",
          rawText: "Website design pricing depends on page complexity, visual assets, and UI customization. Our Starter business website packages begin at ₹2,999, while full Business site designs begin at ₹5,999.",
          a: "Website design pricing depends on page complexity, visual assets, and UI customization. Our Starter business website packages begin at ₹2,999, while full Business site designs begin at ₹5,999.",
        },
        {
          q: "What is the difference between website design and web development?",
          rawText: "Website design focuses on visual aesthetics, UI layout, visual hierarchy, and user experience. Web development focuses on coding the design into a fully functional, responsive website.",
          a: "Website design focuses on visual aesthetics, UI layout, visual hierarchy, and user experience. Web development focuses on coding the design into a fully functional, responsive website.",
        },
        {
          q: "Can you redesign an existing outdated website?",
          rawText: "Yes! We offer complete website redesign services to modernize outdated layouts, enhance mobile usability, and boost lead conversions.",
          a: "Yes! We offer complete website redesign services to modernize outdated layouts, enhance mobile usability, and boost lead conversions.",
        },
      ]}
      relatedServices={[
        { title: "Custom Web Development", href: "/web-development" },
        { title: "High-Converting Landing Pages", href: "/landing-page-development" },
        { title: "E-commerce Store Development", href: "/ecommerce-development" },
        { title: "WordPress Website Development", href: "/wordpress-development" },
        { title: "Custom Web Applications", href: "/web-application-development" },
      ]}
    />
  );
}

import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Website Design Services in Noida & Delhi NCR | UrbanTech Webs",
  description:
    "Professional website design services in Noida and Delhi NCR. UrbanTech Webs crafts modern, responsive, and conversion-focused UI/UX layouts for businesses.",
  alternates: {
    canonical: "https://urbantechwebs.in/website-design",
  },
};

export default function WebsiteDesignPage() {
  return (
    <ServicePageLayout
      badge="Website Design"
      h1="Website Design Services in Noida & Delhi NCR"
      title="Website Design Services in Noida & Delhi NCR | UrbanTech Webs"
      metaDescription="Professional website design services in Noida and Delhi NCR. UrbanTech Webs crafts modern, responsive, and conversion-focused UI/UX layouts for businesses."
      heroImage="/images/website_design_hero_bg.jpg"
      showStats={true}
      introParagraphs={[
        "UrbanTech Webs creates modern, aesthetically appealing, and conversion-focused website designs for growing businesses in Noida and Delhi NCR.",
        "We combine intuitive user interface (UI) principles, responsive layouts, clear visual hierarchy, and brand-aligned styling to ensure your website leaves a memorable impression on every visitor.",
      ]}
      benefits={[
        {
          title: "Brand-Aligned Visual Identity",
          desc: "Custom layouts crafted to reflect your brand's color palette, typography, and professional market positioning.",
        },
        {
          title: "User Experience (UX) Optimization",
          desc: "Logical navigation paths and clear page layouts that make information easy for visitors to scan and find.",
        },
        {
          title: "Conversion-Focused Elements",
          desc: "Strategic placement of call-to-action buttons, lead forms, and inquiry channels for higher engagement.",
        },
        {
          title: "Mobile-First Design Approach",
          desc: "Designed specifically to deliver a smooth touchscreen experience for users on mobile devices.",
        },
        {
          title: "High Visual Contrast & Readability",
          desc: "Legible font sizes, harmonious spacing, and crisp contrast ratios for effortless reading.",
        },
        {
          title: "Interactive Micro-Animations",
          desc: "Subtle visual transitions that make navigation feel fluid and responsive without slowing down page load.",
        },
      ]}
      features={[
        { title: "UI/UX Wireframing", desc: "Detailed page layout structure planning." },
        { title: "Custom Color Palette & Typography", desc: "Tailored brand aesthetics and fonts." },
        { title: "Mobile & Tablet Responsiveness", desc: "Adaptive layouts for every screen resolution." },
        { title: "Call-to-Action Integration", desc: "Prominent contact, WhatsApp, and form triggers." },
        { title: "Visual Assets & Iconography", desc: "Clean icons and optimized image presentation." },
        { title: "Design System Standards", desc: "Consistent styling guidelines across all subpages." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Brand Audit", desc: "Reviewing brand guidelines and target audience expectations." },
        { step: "Step 02", title: "Wireframing", desc: "Creating visual structure layouts and page flows." },
        { step: "Step 03", title: "UI Crafting", desc: "Designing high-fidelity visual elements and responsive layouts." },
        { step: "Step 04", title: "Refinement", desc: "Reviewing feedback and finalizing visual assets for coding." },
      ]}
      portfolioExamples={[
        {
          title: "Karma Business Consultancy",
          desc: "Clean corporate UI layout engineered for trust and service presentation.",
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
          q: "What is the difference between website design and website development?",
          a: "Website design focuses on visual aesthetics, UI layout, visual hierarchy, and user experience. Website development focuses on coding the design into a functional, responsive site using HTML, CSS, JavaScript, and backend logic.",
        },
        {
          q: "Can you redesign an existing outdated website?",
          a: "Yes. We offer complete website redesign services to modernize out-of-date layouts, improve mobile responsiveness, and enhance conversion performance.",
        },
        {
          q: "Will my website design look good on mobile phones?",
          a: "Yes. All our designs are crafted mobile-first and tested across smartphones, tablets, laptops, and desktop monitors.",
        },
      ]}
      relatedServices={[
        { title: "Website Development", href: "/web-development" },
        { title: "Landing Page Development", href: "/landing-page-development" },
        { title: "E-commerce Development", href: "/ecommerce-development" },
        { title: "WordPress Development", href: "/wordpress-development" },
        { title: "Web Application Development", href: "/web-application-development" },
      ]}
    />
  );
}

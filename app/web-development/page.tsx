import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Custom Web Development Services | UrbanTech Webs",
  description:
    "UrbanTech Webs provides custom web development services. We build responsive business websites, web applications, and API integrations.",
  alternates: {
    canonical: "https://urbantechwebs.in/web-development",
  },
  openGraph: {
    title: "Custom Web Development Services | UrbanTech Webs",
    description:
      "UrbanTech Webs provides custom web development services. We build responsive business websites, web applications, and API integrations.",
    url: "https://urbantechwebs.in/web-development",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/web_dev_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Web Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Development Services | UrbanTech Webs",
    description:
      "Professional custom website development solutions for growing businesses.",
    images: ["/images/web_dev_hero_bg.jpg"],
  },
};

export default function WebDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="Web Development"
      h1="Custom Web Development Services"
      title="Custom Web Development Services | UrbanTech Webs"
      metaDescription="UrbanTech Webs provides custom web development services. We build responsive business websites, web applications, and API integrations."
      heroImage="/images/web_dev_hero_bg.jpg"
      showStats={true}
      statsItems={[
        {
          iconName: "Code2",
          title: "Custom Full-Stack Code",
          desc: "Clean Next.js & React architecture built without bloated themes.",
        },
        {
          iconName: "Cpu",
          title: "Fast Server Response",
          desc: "Optimized server-side rendering for lightning quick page load.",
        },
        {
          iconName: "Globe2",
          title: "API & Database Sync",
          desc: "Seamless connection to custom backend endpoints and REST APIs.",
        },
        {
          iconName: "Smartphone",
          title: "100% Mobile Responsive",
          desc: "Fluid layout across smartphones, tablets, laptops, and desktops.",
        },
      ]}
      introParagraphs={[
        <>
          UrbanTech Webs delivers professional web development services tailored to the operational goals of growing businesses. We combine custom frontend layout engineering with robust backend infrastructure to build high-converting platforms, seamless{" "}
          <Link href="/website-design" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            website design solutions
          </Link>
          , and scalable digital portals for clients globally.
        </>,
        <>
          Whether you require custom code for a corporate site, an{" "}
          <Link href="/ecommerce-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            online store development
          </Link>{" "}
          project, or interactive{" "}
          <Link href="/web-application-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            custom web application development
          </Link>
          , our web development team ensures clean semantic HTML, rapid page speeds, and mobile-first responsiveness. You can also{" "}
          <Link href="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            get in touch for a free quote
          </Link>{" "}
          to discuss your exact scope.
        </>,
      ]}
      benefits={[
        {
          title: "Custom Business Architecture",
          desc: "Tailored website structures built around your specific operational requirements rather than generic pre-made templates.",
        },
        {
          title: "API & Third-Party Integrations",
          desc: "Seamless connection with CRM tools, payment gateways, instant WhatsApp messaging, and custom database endpoints.",
        },
        {
          title: "Mobile-First Responsiveness",
          desc: "Flawless rendering and touch-friendly navigation across smartphones, tablets, laptops, and desktop computers.",
        },
        {
          title: "Clean Semantic Code & Technical SEO",
          desc: (
            <>
              Developed following modern HTML5 web standards and integrated with our{" "}
              <Link href="/seo-services" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                technical SEO services
              </Link>{" "}
              for enhanced accessibility, security, and search engine crawling.
            </>
          ),
        },
        {
          title: "Speed & Performance Optimization",
          desc: "Lightweight asset loads and optimized media delivery to minimize load times and improve Core Web Vitals.",
        },
        {
          title: "Scalable Infrastructure",
          desc: "Built to expand seamlessly as your business adds new pages, product lines, or custom functional capabilities.",
        },
      ]}
      features={[
        { title: "Custom Web Architecture", desc: "Tailored UI/UX layout & responsive corporate web structure." },
        { title: "API & Payment Gateway Setup", desc: "Connect Razorpay, Paytm, Stripe, or custom REST APIs." },
        { title: "Database & Backend Support", desc: "Structured data storage, query handling, and security." },
        { title: "Cross-Browser Compatibility", desc: "Verified on Chrome, Safari, Firefox, and Edge browsers." },
        { title: "SEO-Friendly Technical Structure", desc: "Structured H1-H6 headers, meta tags, and JSON-LD schema." },
        { title: "Domain & Cloud DNS Setup", desc: "Complete domain connection, cloud server & SSL configuration." },
        { title: "Website Security & SSL Encryption", desc: "HTTPS encryption, malware protection & firewall hardening." },
        { title: "Core Web Vitals Speed Tuning", desc: "Image compression, minification & fast load optimization." },
        { title: "Free 1 Year Support Guarantee", desc: "1 full year of dedicated maintenance, updates & bug-fix warranty." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Discovery", desc: "Requirement mapping and technical scope specification." },
        { step: "Step 02", title: "Architecture", desc: "Wireframing sitemap and layout structures." },
        { step: "Step 03", title: "Development", desc: "Writing frontend code and backend logic." },
        { step: "Step 04", title: "QA & Deployment", desc: "Cross-device testing, SSL setup, and live launch." },
      ]}
      portfolioExamples={[
        {
          title: "Karma Business Consultancy Portal",
          desc: "Australian business consultancy agency web portal engineered for brand authority and lead capture.",
          url: "https://karmabs.com.au/",
          image: "/images/karma_business.png",
        },
        {
          title: "ADL UPVC Manufacturing Website",
          desc: "Corporate manufacturing site showcasing UPVC window & door systems with technical specs.",
          url: "https://upvc-project.onrender.com",
          image: "/images/upvc-project.png",
        },
      ]}
      faqs={[
        {
          q: "What types of websites do you build under web development services?",
          rawText: "We build corporate business websites, custom web applications, product catalogues, customer service portals, and custom API-driven platforms for modern businesses.",
          a: (
            <>
              We build corporate business websites, custom web portals, product catalogues, customer service systems, and custom API-driven platforms. Explore{" "}
              <Link href="/portfolio" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                our live website portfolio
              </Link>{" "}
              to see examples of our delivered projects.
            </>
          ),
        },
        {
          q: "What is included in your web development services?",
          rawText: "Our web development services include responsive UI design, frontend and backend development, database setup, performance optimization, and SEO-friendly code structure.",
          a: (
            <>
              Our web development services include responsive UI design, clean code architecture, database integration, SEO-friendly structure, and post-launch support. Explore our{" "}
              <Link href="/website-design" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                website design solutions
              </Link>{" "}
              for complete branding and layout options.
            </>
          ),
        },
        {
          q: "Do you build custom websites or use templates?",
          rawText: "We build tailored websites structured around your business goals, providing custom code and flexible designs tailored to your brand identity.",
          a: (
            <>
              We build tailored websites structured around your business goals, providing custom code and flexible layout options. If you prefer a managed CMS, we also offer{" "}
              <Link href="/wordpress-development" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                WordPress website development
              </Link>{" "}
              for easy content updates.
            </>
          ),
        },
        {
          q: "How long does a custom web development project take?",
          rawText: "Typical delivery takes 7 to 14 working days depending on project complexity, page count, and content availability.",
          a: "Typical delivery takes 7 to 14 working days depending on project complexity, page count, and content availability.",
        },
        {
          q: "Will my website be mobile-friendly and fast?",
          rawText: "Yes, every website is engineered to be fully responsive across mobile devices and desktops while meeting Core Web Vitals performance standards.",
          a: "Yes, every website is engineered to be fully responsive across mobile devices and desktops while meeting Core Web Vitals performance standards.",
        },
      ]}
      relatedServices={[
        { title: "Website Design Services", href: "/website-design" },
        { title: "E-Commerce Store Development", href: "/ecommerce-development" },
        { title: "Web Application Development", href: "/web-application-development" },
        { title: "SEO Services", href: "/seo-services" },
        { title: "View Our Work Portfolio", href: "/portfolio" },
        { title: "Get in Touch", href: "/contact" },
      ]}
    />
  );
}

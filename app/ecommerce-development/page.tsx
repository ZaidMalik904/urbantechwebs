import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "E-commerce Website Development Company in Noida | UrbanTech Webs",
  description:
    "UrbanTech Webs is an e-commerce website development company in Noida. We build online stores with product catalogs, shopping carts, and payment gateway setup.",
  alternates: {
    canonical: "https://urbantechwebs.in/ecommerce-development",
  },
};

export default function EcommerceDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="E-commerce Development"
      h1="E-commerce Website Development Company in Noida"
      title="E-commerce Website Development Company in Noida | UrbanTech Webs"
      metaDescription="UrbanTech Webs is an e-commerce website development company in Noida. We build online stores with product catalogs, shopping carts, and payment gateway setup."
      heroImage="/images/ecommerce_dev_hero_bg.jpg"
      showStats={true}
      introParagraphs={[
        "UrbanTech Webs builds secure, responsive, and conversion-focused e-commerce websites for retail businesses, fashion brands, grocery stores, and online sellers in Noida and Delhi NCR.",
        "From high-impact product display galleries and dynamic shopping carts to seamless checkout workflows and payment gateway setups, we deliver robust digital storefronts ready for online sales.",
      ]}
      benefits={[
        {
          title: "Structured Product Catalogs",
          desc: "Organized inventory listings with image galleries, pricing structures, variant selectors, and product detail specs.",
        },
        {
          title: "Seamless Shopping Cart & Checkout",
          desc: "Friction-free cart management and streamlined checkout workflows designed to reduce cart abandonment.",
        },
        {
          title: "Payment Gateway Integration",
          desc: "Secure integration with Indian and global payment processing providers (Razorpay, Paytm, UPI, Cards, NetBanking).",
        },
        {
          title: "Mobile-Optimized Storefront",
          desc: "Fast, responsive mobile shopping experience built specifically for smartphone shoppers.",
        },
        {
          title: "Order & Inventory Controls",
          desc: "Intuitive admin dashboard options to track customer orders, update product stock, and manage pricing.",
        },
        {
          title: "Direct WhatsApp Ordering",
          desc: "Optional instant WhatsApp checkout workflow allowing customers to inquire or order directly via chat.",
        },
      ]}
      features={[
        { title: "Product Grid & Filtering", desc: "Filter by category, price, size, or custom attributes." },
        { title: "Shopping Cart System", desc: "Dynamic item count, price calculations, and promo code support." },
        { title: "Payment Gateway Setup", desc: "Razorpay, Paytm, UPI, Credit/Debit card integration." },
        { title: "Customer Order Inquiry", desc: "Form and WhatsApp inquiry dispatch system." },
        { title: "Admin Management Panel", desc: "Manage catalog entries and inventory details easily." },
        { title: "SSL Security & Data Protection", desc: "Encrypted connection for safe checkout transactions." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Catalog Strategy", desc: "Structuring product categories, variants, and payment requirements." },
        { step: "Step 02", title: "Store UI Design", desc: "Creating customer-centric storefront and product page wireframes." },
        { step: "Step 03", title: "Store Development", desc: "Coding shopping cart workflow and integrating payment endpoints." },
        { step: "Step 04", title: "Testing & Launch", desc: "Testing payment workflows, mobile responsiveness, and live deployment." },
      ]}
      portfolioExamples={[
        {
          title: "Mansoori Garments E-Commerce",
          desc: "Clothing retail platform featuring garments showcase, category filtering, and mobile ordering.",
          url: "https://portfolio-8qup.onrender.com/",
          image: "/images/mansoori_garments.png",
        },
        {
          title: "YumGo Marketplace",
          desc: "Online food & grocery store platform with real-time checkout workflow and admin portal.",
          url: "https://yum-go-fr.onrender.com/",
          image: "/images/yumgo_marketplace_v2.png",
        },
      ]}
      faqs={[
        {
          q: "What payment gateways can you integrate into an e-commerce website?",
          a: "We integrate all major Indian payment gateways including Razorpay, Paytm, PhonePe, Cashfree, UPI, as well as international options like PayPal or Stripe.",
        },
        {
          q: "Can I manage products and pricing myself after launch?",
          a: "Yes. We provide easy-to-use content management setups or admin dashboards allowing you to update product descriptions, images, prices, and stock.",
        },
        {
          q: "Do you support WhatsApp ordering for local businesses?",
          a: "Yes! For businesses that prefer direct customer interaction, we can set up instant WhatsApp product ordering buttons.",
        },
      ]}
      relatedServices={[
        { title: "Website Development", href: "/web-development" },
        { title: "Website Design", href: "/website-design" },
        { title: "WordPress Development", href: "/wordpress-development" },
        { title: "Landing Page Development", href: "/landing-page-development" },
        { title: "Web Application Development", href: "/web-application-development" },
      ]}
    />
  );
}

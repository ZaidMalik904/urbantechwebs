import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "E-commerce Website Development Services | UrbanTech Webs",
  description:
    "UrbanTech Webs provides e-commerce website development services. We build online stores with product catalogs, shopping carts, and payment gateway setup.",
  alternates: {
    canonical: "https://urbantechwebs.in/ecommerce-development",
  },
  openGraph: {
    title: "E-commerce Website Development Services | UrbanTech Webs",
    description:
      "UrbanTech Webs provides e-commerce website development services. We build online stores with product catalogs, shopping carts, and payment gateway setup.",
    url: "https://urbantechwebs.in/ecommerce-development",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/ecommerce_dev_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "E-commerce Website Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Website Development Services | UrbanTech Webs",
    description:
      "Online store development, shopping carts, and payment gateway setup.",
    images: ["/images/ecommerce_dev_hero_bg.jpg"],
  },
};

export default function EcommerceDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="E-commerce Development"
      h1="E-commerce Website Development"
      title="E-commerce Website Development Services | UrbanTech Webs"
      metaDescription="UrbanTech Webs provides e-commerce website development services. We build online stores with product catalogs, shopping carts, and payment gateway setup."
      heroImage="/images/ecommerce_dev_hero_bg.jpg"
      showStats={true}
      statsItems={[
        {
          iconName: "Lock",
          title: "Secure Payment Gateway",
          desc: "Integrated Stripe, PayPal, Razorpay, or custom checkout setups.",
        },
        {
          iconName: "ShoppingBag",
          title: "High-Speed Catalog",
          desc: "Fast searching, category filters, and instant cart updates.",
        },
        {
          iconName: "Smartphone",
          title: "Mobile Checkout Ready",
          desc: "Frictionless buying experience optimized for mobile shoppers.",
        },
        {
          iconName: "PackageCheck",
          title: "Inventory Management",
          desc: "Simple administrative dashboard to track orders and stock.",
        },
      ]}
      introParagraphs={[
        <React.Fragment key="intro-1">
          UrbanTech Webs is an e-commerce website development company building secure, responsive, and conversion-focused online stores. We combine custom storefront layouts with full-stack{" "}
          <Link href="/web-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            custom web development
          </Link>{" "}
          and engaging{" "}
          <Link href="/website-design" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            website design
          </Link>{" "}
          to help brands sell products online seamlessly.
        </React.Fragment>,
        <React.Fragment key="intro-2">
          From structured product catalogs and shopping carts to secure payment gateway integrations (Razorpay, Paytm, Stripe, Credit/Debit Cards), our developers deliver robust storefronts. You can also{" "}
          <Link href="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            discuss your online store project
          </Link>{" "}
          with our team today.
        </React.Fragment>,
      ]}
      benefits={[
        {
          title: "Structured Product Catalogs",
          desc: "Organized online inventory listings with high-resolution image galleries, variant selectors, and detailed product specs.",
        },
        {
          title: "Seamless Shopping Cart & Checkout",
          desc: "Friction-free cart management and streamlined single-page checkout workflows designed to minimize cart abandonment.",
        },
        {
          title: "Payment Gateway Integration",
          desc: "Secure integration with leading payment gateway providers (Razorpay, Paytm, Stripe, Credit/Debit Cards, Digital Wallets).",
        },
        {
          title: "CMS & WooCommerce Options",
          desc: (
            <>
              For stores requiring flexible blog features and simplified inventory editing, we also offer{" "}
              <Link href="/wordpress-development" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                WooCommerce and WordPress development
              </Link>.
            </>
          ),
        },
        {
          title: "Order & Inventory Controls",
          desc: "Intuitive admin management panel to track customer orders, update product stock, modify descriptions, and manage inventory.",
        },
        {
          title: "Direct WhatsApp Ordering",
          desc: "Optional instant WhatsApp product ordering workflow allowing customers to inquire or purchase directly via instant chat.",
        },
      ]}
      features={[
        { title: "Product Grid & Filtering", desc: "Filter by category, brand, size, color, or custom attributes." },
        { title: "Shopping Cart & Checkout System", desc: "Dynamic cart item count, automatic tax/shipping logic, and promo codes." },
        { title: "Payment Gateway Setup", desc: "Razorpay, Paytm, Stripe, Credit/Debit card payment endpoints." },
        { title: "Order Dispatch & Customer Inquiry", desc: "Automated inquiry routing and order notification dispatch." },
        { title: "Admin Catalog Management", desc: "Easy dashboard to add, edit, or remove products and update details." },
        { title: "SSL Security & Encrypted Checkout", desc: "256-bit HTTPS encryption for secure online transactions and customer privacy." },
      ]}
      processSteps={[
        { step: "Step 01", title: "Catalog Strategy", desc: "Structuring product categories, variants, shipping, and payment gateway rules." },
        { step: "Step 02", title: "Store UI Design", desc: "Creating customer-centric storefront layouts and mobile-first product page wireframes." },
        { step: "Step 03", title: "Store Development", desc: "Coding shopping cart workflows and integrating payment endpoints." },
        { step: "Step 04", title: "Testing & Launch", desc: "Testing payment gateway transactions, mobile responsiveness, and live deployment." },
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
          q: "Why choose UrbanTech Webs for e-commerce website development?",
          rawText: "We engineer online stores tailored for fast load speeds, secure payment gateway processing, mobile usability, and clean product navigation designed to boost store sales.",
          a: (
            <>
              We engineer online stores tailored for fast load speeds, secure payment processing, mobile usability, and integrated{" "}
              <Link href="/seo-services" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                technical SEO services
              </Link>{" "}
              to drive store sales.
            </>
          ),
        },
        {
          q: "What payment gateways can you integrate into an e-commerce website?",
          rawText: "We integrate major payment gateways including Razorpay, Paytm, PhonePe, Stripe, PayPal, as well as Credit/Debit card options.",
          a: "We integrate major payment gateways including Razorpay, Paytm, PhonePe, Stripe, PayPal, as well as Credit/Debit card options.",
        },
        {
          q: "Can I manage products myself after launch?",
          rawText: "Yes. We provide easy-to-use content management setups or admin dashboards allowing you to update product descriptions, images, and inventory stock.",
          a: "Yes. We provide easy-to-use content management setups or admin dashboards allowing you to update product descriptions, images, and inventory stock.",
        },
        {
          q: "Do you support WhatsApp ordering for online stores?",
          rawText: "Yes! For businesses targeting direct customer interactions, we set up instant WhatsApp product ordering buttons and pre-filled order chats.",
          a: "Yes! For businesses targeting direct customer interactions, we set up instant WhatsApp product ordering buttons and pre-filled order chats.",
        },
      ]}
      relatedServices={[
        { title: "Custom Web Development", href: "/web-development" },
        { title: "Website Design Services", href: "/website-design" },
        { title: "WordPress Development", href: "/wordpress-development" },
        { title: "SEO Services", href: "/seo-services" },
        { title: "Contact Us", href: "/contact" },
      ]}
    />
  );
}

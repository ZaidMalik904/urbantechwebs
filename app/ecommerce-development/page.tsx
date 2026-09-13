import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Ecommerce Website Development Company in Noida | UrbanTech Webs",
  description:
    "UrbanTech Webs is a leading e-commerce website development company in Noida. We build online stores with product catalogs, shopping carts, and payment gateway setup.",
  alternates: {
    canonical: "https://urbantechwebs.in/ecommerce-development",
  },
  openGraph: {
    title: "Ecommerce Website Development Company in Noida | UrbanTech Webs",
    description:
      "UrbanTech Webs is an e-commerce website development company in Noida. We build online stores with product catalogs, shopping carts, and payment gateway setup.",
    url: "https://urbantechwebs.in/ecommerce-development",
    siteName: "UrbanTech Webs",
    images: [
      {
        url: "/images/ecommerce_dev_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Ecommerce Website Development Company in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Website Development Company in Noida | UrbanTech Webs",
    description:
      "Build high-converting online stores with secure payment integration in Noida & Delhi NCR.",
    images: ["/images/ecommerce_dev_hero_bg.jpg"],
  },
};

export default function EcommerceDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="E-commerce Development"
      h1="E-commerce Website Development Company in Noida"
      title="Ecommerce Website Development Company in Noida | UrbanTech Webs"
      metaDescription="UrbanTech Webs is a leading e-commerce website development company in Noida. We build online stores with product catalogs, shopping carts, and payment gateway setup."
      heroImage="/images/ecommerce_dev_hero_bg.jpg"
      showStats={true}
      introParagraphs={[
        <>
          UrbanTech Webs is a specialized ecommerce website development company in Noida building secure, responsive, and conversion-focused online stores. We combine custom storefront layouts with full-stack{" "}
          <Link href="/web-development" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            custom web development
          </Link>{" "}
          and engaging{" "}
          <Link href="/website-design" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            website design
          </Link>{" "}
          to help brands sell products online seamlessly.
        </>,
        <>
          From structured product catalogs and shopping carts to secure payment gateway integrations (Razorpay, Paytm, UPI, Cards), our experienced developers deliver robust storefronts. You can also{" "}
          <Link href="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            discuss your online store project
          </Link>{" "}
          with our Noida team today.
        </>,
      ]}
      benefits={[
        {
          title: "Structured Product Catalogs",
          desc: "Organized online inventory listings with high-resolution image galleries, dynamic pricing structures, variant selectors, and product detail specs.",
        },
        {
          title: "Seamless Shopping Cart & Checkout",
          desc: "Friction-free cart management and streamlined single-page checkout workflows designed to minimize cart abandonment.",
        },
        {
          title: "Payment Gateway Integration",
          desc: "Secure integration with Indian and international payment gateway providers (Razorpay, Paytm, PhonePe, UPI, Debit/Credit Cards, NetBanking).",
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
          desc: "Intuitive admin management panel to track customer orders, update product stock, modify prices, and manage discounts.",
        },
        {
          title: "Direct WhatsApp Ordering",
          desc: "Optional instant WhatsApp product ordering workflow allowing customers to inquire or purchase directly via instant chat.",
        },
      ]}
      features={[
        { title: "Product Grid & Filtering", desc: "Filter by category, price range, size, color, or custom attributes." },
        { title: "Shopping Cart & Checkout System", desc: "Dynamic cart item count, automatic tax/shipping logic, and promo codes." },
        { title: "Payment Gateway Setup", desc: "Razorpay, Paytm, UPI, Cashfree, Credit/Debit card payment endpoints." },
        { title: "Order Dispatch & Customer Inquiry", desc: "Automated inquiry routing and order notification dispatch." },
        { title: "Admin Catalog Management", desc: "Easy dashboard to add, edit, or remove products and update pricing." },
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
          q: "Why choose UrbanTech Webs as your ecommerce website development company in Noida?",
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
          q: "How much does an e-commerce website cost in Noida?",
          rawText: "E-commerce website pricing depends on product count, custom catalog features, and payment gateway complexity. E-commerce development packages typically start from ₹5,999.",
          a: "E-commerce website pricing depends on product count, custom catalog features, and payment gateway complexity. E-commerce development packages typically start from ₹5,999.",
        },
        {
          q: "What payment gateways can you integrate into an e-commerce website?",
          rawText: "We integrate all major Indian payment gateways including Razorpay, Paytm, PhonePe, Cashfree, UPI, as well as international options like PayPal or Stripe.",
          a: "We integrate all major Indian payment gateways including Razorpay, Paytm, PhonePe, Cashfree, UPI, as well as international options like PayPal or Stripe.",
        },
        {
          q: "Can I manage products and pricing myself after launch?",
          rawText: "Yes. We provide easy-to-use content management setups or admin dashboards allowing you to update product descriptions, images, prices, and inventory stock.",
          a: "Yes. We provide easy-to-use content management setups or admin dashboards allowing you to update product descriptions, images, prices, and inventory stock.",
        },
        {
          q: "Do you support WhatsApp ordering for local Indian online stores?",
          rawText: "Yes! For businesses targeting direct customer interactions, we set up instant WhatsApp product ordering buttons and pre-filled order chats.",
          a: "Yes! For businesses targeting direct customer interactions, we set up instant WhatsApp product ordering buttons and pre-filled order chats.",
        },
      ]}
      relatedServices={[
        { title: "Custom Web Development", href: "/web-development" },
        { title: "Website Design Services", href: "/website-design" },
        { title: "WordPress Development", href: "/wordpress-development" },
        { title: "High-Converting Landing Pages", href: "/landing-page-development" },
        { title: "Custom Web Applications", href: "/web-application-development" },
      ]}
    />
  );
}

import type { Metadata } from "next";
import { Outfit, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urbantechwebs.in"),
  title: {
    default: "UrbanTechWebs | Modern Custom Websites & Web Development Agency Noida",
    template: "%s | UrbanTechWebs",
  },
  description:
    "UrbanTechWebs is a premier web development agency in Noida Sector 62. We build sub-2s fast, mobile-responsive custom websites, e-commerce stores, and high-converting landing pages with WhatsApp lead integration.",
  keywords: [
    // Primary Core Services
    "Website Development",
    "Website Design Agency",
    "Custom Website Development",
    "Business Website Builder",
    "E-commerce Website Development",
    "Landing Page Development",
    "WordPress Development",
    "Website Redesign Services",
    "Custom Web Applications",
    "Sub-2s Web Speed Optimization",
    "Mobile Responsive Web Design",

    // Location & Local SEO
    "Web Development Agency Noida",
    "Website Designer Noida Sector 62",
    "Web Development Company Uttar Pradesh",
    "Website Developers Delhi NCR",
    "Best Web Agency India",

    // Business & Industry Keywords
    "Restaurant Website Development",
    "Salon & Spa Website Design",
    "Retail E-Commerce Store",
    "Real Estate Website Development",
    "Consultancy Web Portal",
    "Car Rental Booking System",
    "Travel & Vacation Website",
    "NGO & Community Foundation Website",
    "UPVC Industrial Manufacturing Website",

    // Tech & Integration Capabilities
    "WhatsApp Lead Routing Website",
    "Google Maps Business Integration",
    "SSL HTTPS Security Setup",
    "SEO Optimized Web Development",
    "Razorpay Stripe Payment Gateway Integration",
    "UrbanTechWebs",
    "UrbanTechWebs Noida",
  ],
  authors: [{ name: "UrbanTechWebs", url: "https://urbantechwebs.in" }],
  creator: "UrbanTechWebs",
  publisher: "UrbanTechWebs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://urbantechwebs.in/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://urbantechwebs.in/",
    title: "UrbanTechWebs | Custom Web Development Agency Noida",
    description:
      "We design fast, professional, and mobile-friendly custom websites that build trust, generate WhatsApp leads, and grow businesses online.",
    siteName: "UrbanTechWebs",
    images: [
      {
        url: "/images/logo (2).png",
        width: 800,
        height: 600,
        alt: "UrbanTechWebs Web Agency Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UrbanTechWebs | Custom Web Development Agency Noida",
    description:
      "We design fast, professional, and mobile-friendly custom websites that build trust, generate WhatsApp leads, and grow businesses online.",
    images: ["/images/logo (2).png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}


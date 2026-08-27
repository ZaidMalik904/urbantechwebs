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
    default: "Website Design & Development Services | UrbanTechWebs",
    template: "%s | UrbanTechWebs",
  },
  description:
    "UrbanTechWebs builds responsive, fast and SEO-friendly websites for businesses, including business websites, e-commerce stores, landing pages and custom web applications.",
  keywords: [
    "Website Design",
    "Website Development",
    "Business Website Design",
    "E-commerce Website Development",
    "Landing Page Design",
    "WordPress Website Development",
    "Website Redesign",
    "Custom Web Applications",
    "Web Development Agency",
    "UrbanTechWebs",
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
    title: "Website Design & Development Services | UrbanTechWebs",
    description:
      "UrbanTechWebs builds responsive, fast and SEO-friendly websites for businesses, including business websites, e-commerce stores, landing pages and custom web applications.",
    siteName: "UrbanTechWebs",
    images: [
      {
        url: "/images/logo (2).png",
        width: 800,
        height: 600,
        alt: "UrbanTechWebs website development project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Development Services | UrbanTechWebs",
    description:
      "UrbanTechWebs builds responsive, fast and SEO-friendly websites for businesses, including business websites, e-commerce stores, landing pages and custom web applications.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://urbantechwebs.in/#organization",
        "name": "UrbanTechWebs",
        "url": "https://urbantechwebs.in/",
        "logo": "https://urbantechwebs.in/images/logo%20(2).png",
        "description": "UrbanTechWebs builds responsive, fast and SEO-friendly websites for businesses, including business websites, e-commerce stores, landing pages and custom web applications.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-7827775353",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://urbantechwebs.in/#website",
        "url": "https://urbantechwebs.in/",
        "name": "UrbanTechWebs",
        "publisher": {
          "@id": "https://urbantechwebs.in/#organization"
        }
      },
      {
        "@type": "Service",
        "name": "Website Design & Development Services",
        "provider": {
          "@id": "https://urbantechwebs.in/#organization"
        },
        "areaServed": "India",
        "serviceType": "Web Development, Website Design, E-commerce Development"
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}


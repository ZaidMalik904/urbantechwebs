import type { Metadata } from "next";
import Script from "next/script";
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

const siteTitle = "UrbanTechWebs | Web Development & Website Design Company";
const siteDescription =
  "UrbanTechWebs is a top web development & website design company in Noida, Delhi NCR. We build custom websites, e-commerce stores, landing pages & web apps.";

export const metadata: Metadata = {
  metadataBase: new URL("https://urbantechwebs.in"),
  title: {
    default: siteTitle,
    template: "%s | UrbanTechWebs",
  },
  description: siteDescription,
  keywords: [
    "Website Design",
    "Website Development",
    "Business Website Design",
    "E-commerce Website Development",
    "Landing Page Design",
    "WordPress Website Development",
    "Website Redesign",
    "Custom Web Applications",
    "Web Development Company in Noida",
    "Website Design Company in Noida",
    "Web Development Services in Delhi NCR",
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
    locale: "en_IN",
    url: "https://urbantechwebs.in/",
    title: siteTitle,
    description: siteDescription,
    siteName: "UrbanTechWebs",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UrbanTechWebs web development and website design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/og-image.jpg"],
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
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://urbantechwebs.in/#organization",
        name: "UrbanTechWebs",
        url: "https://urbantechwebs.in/",
        logo: "https://urbantechwebs.in/images/logo%20(2).png",
        image: "https://urbantechwebs.in/images/og-image.jpg",
        description: siteDescription,
        telephone: "+91-7827775353",
        email: "urbantechwebs904@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Noida Sector 62",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201309",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.628,
          longitude: 77.3649,
        },
        areaServed: ["Noida", "Delhi NCR", "India"],
        priceRange: "₹₹",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-7827775353",
          contactType: "customer service",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://urbantechwebs.in/#website",
        url: "https://urbantechwebs.in/",
        name: "UrbanTechWebs",
        publisher: {
          "@id": "https://urbantechwebs.in/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://urbantechwebs.in/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does it cost to build a website?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Website development cost depends on the number of pages, custom design work, features and integrations required. Our packages start from ₹2,999 for Starter websites and ₹5,999 for Business websites.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to build a website?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Typical delivery is 7–14 working days where applicable, depending on project scope, feature complexity and content availability.",
            },
          },
          {
            "@type": "Question",
            name: "Will my website work on mobile phones?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, all websites are designed to be fully responsive across mobile phones, tablets, laptops and desktop computers.",
            },
          },
          {
            "@type": "Question",
            name: "Can you add WhatsApp to my website?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, WhatsApp contact functionality can be integrated based on your requirements so visitors can message you directly.",
            },
          },
          {
            "@type": "Question",
            name: "Can you add online payments?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, payment gateways can be integrated for suitable e-commerce stores, booking sites and digital service portals.",
            },
          },
          {
            "@type": "Question",
            name: "Can you connect my domain and hosting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, complete domain DNS configuration and cloud hosting setup can be handled as part of the project.",
            },
          },
          {
            "@type": "Question",
            name: "Will I get support after the website is launched?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, post-launch support is available according to your selected package or project agreement.",
            },
          },
          {
            "@type": "Question",
            name: "Can I update my website later?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Future updates, content additions and ongoing maintenance can be provided depending on your evolving requirements.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide SEO services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Websites are developed with an SEO-friendly technical structure (clean HTML, metadata, fast speed). Ongoing SEO services can be provided separately if required.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M8DWD9PT');`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3GCE2QH63L"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3GCE2QH63L');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M8DWD9PT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}



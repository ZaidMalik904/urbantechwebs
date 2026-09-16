import type { Metadata } from "next";
import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/WhatsAppButton";
import ThankYouContent from "@/components/ThankYouContent";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | UrbanTech Webs - Request Received",
  description:
    "Thank you for contacting UrbanTech Webs! We have received your inquiry for website development and will reach out to you within 30 minutes.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://urbantechwebs.in/thank-you",
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main>
        <Suspense
          fallback={
            <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-4">
              <Loader2 className="w-10 h-10 text-cyan-400 animate-spin" />
              <p className="text-slate-400 text-sm font-mono">Loading Thank You Page...</p>
            </div>
          }
        >
          <ThankYouContent />
        </Suspense>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

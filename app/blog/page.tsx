import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/WhatsAppButton";
import { blogPosts } from "@/lib/blogData";

export const metadata: Metadata = {
  title: "Web Development & Website Design Blog | UrbanTech Webs",
  description:
    "Read articles on web development, website design, e-commerce, WordPress, SEO, and website performance from UrbanTech Webs.",
  alternates: {
    canonical: "https://urbantechwebs.in/blog",
  },
};

export default function BlogPage() {
  const categories = [
    "All Topics",
    "Web Development",
    "Website Design",
    "E-commerce",
    "WordPress",
    "Business Websites",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-24">
        {/* Banner Section */}
        <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>INSIGHTS & GUIDES</span>
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Web Development & Website Design Blog
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Practical articles, pricing breakdowns, and strategic guides to help you make informed decisions for your business website.
            </p>

            {/* Category Badges */}
            <div className="pt-4 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {categories.map((cat, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Article Grid */}
        <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span className="inline-flex items-center gap-1 text-cyan-400 font-bold bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock, ArrowLeft, Mail, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/WhatsAppButton";
import { blogPosts } from "@/lib/blogData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://urbantechwebs.in/blog/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-28 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Breadcrumbs & Back Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-800 text-xs font-mono text-slate-400">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </Link>

            <nav className="inline-flex items-center gap-2">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <Link href="/blog" className="hover:text-cyan-400 transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-cyan-400 font-bold truncate max-w-[150px]">{post.category}</span>
            </nav>
          </div>

          {/* Article Header */}
          <header className="py-10 space-y-4 text-center sm:text-left border-b border-slate-800">
            <div className="flex items-center gap-3 text-xs font-mono text-cyan-400">
              <span className="bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span className="text-slate-500">• {post.date}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
              {post.excerpt}
            </p>
          </header>

          {/* Article Content Body */}
          <div className="py-10 space-y-10 text-slate-300 leading-relaxed font-normal text-base sm:text-lg">
            {post.content.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-l-4 border-cyan-400 pl-4 py-1">
                  {sec.heading}
                </h2>

                {sec.body.map((pText, pIdx) => (
                  <p key={pIdx}>{pText}</p>
                ))}

                {sec.subsections && sec.subsections.length > 0 && (
                  <div className="grid grid-cols-1 gap-4 pt-4">
                    {sec.subsections.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-1.5"
                      >
                        <h3 className="text-base font-bold text-white">{sub.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{sub.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Author & Agency Prompt Box */}
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 text-center sm:text-left sm:flex items-center justify-between gap-6">
            <div className="space-y-1 flex-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>UrbanTech Webs Technical Editorial</span>
              </div>
              <h3 className="text-xl font-bold text-white">Need a Website for Your Business?</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                We build fast, responsive business websites, e-commerce stores, and custom web apps for clients in Noida and across India.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex-shrink-0"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us Today</span>
            </Link>
          </div>

        </article>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

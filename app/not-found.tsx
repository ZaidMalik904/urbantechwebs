import React from "react";
import Link from "next/link";
import { Home, ArrowLeft, MessageSquare, AlertCircle } from "lucide-react";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between font-sans relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <header className="p-6 border-b border-slate-800/80 relative z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Logo size="md" darkText={false} />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Center 404 Content */}
      <main className="max-w-xl mx-auto px-4 py-20 text-center relative z-10 space-y-6 my-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider">
          <AlertCircle className="w-4 h-4" />
          <span>ERROR 404 • PAGE NOT FOUND</span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-black text-white tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Oops! This page got lost in space.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            The page you are looking for might have been moved, renamed, or no longer exists. Let&apos;s get you back on track!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 rounded-xl"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>

          <Link
            href="/web-development"
            className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-xl"
          >
            <span>View Services</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-xl"
          >
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span>Contact Us</span>
          </Link>
        </div>
      </main>

      {/* Main Agency Footer */}
      <Footer />
    </div>
  );
}

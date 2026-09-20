"use client";

import React from "react";
import {
  CheckCircle2,
  Clock,
  LayoutGrid,
  ShieldCheck,
  Code2,
  Cpu,
  Globe2,
  Smartphone,
  Palette,
  MousePointerClick,
  Layout,
  Eye,
  Lock,
  ShoppingBag,
  PackageCheck,
  Wrench,
  Sliders,
  Zap,
  Target,
  Split,
  MessageSquare,
  Server,
  LayoutDashboard,
  Network,
  Search,
  Gauge,
  FileCode,
  BarChart,
  Sparkles,
  Maximize,
  Building2,
  Users,
  Globe,
  Headphones,
  Briefcase,
  TrendingUp,
  Layers,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  CheckCircle2,
  Clock,
  LayoutGrid,
  ShieldCheck,
  Code2,
  Cpu,
  Globe2,
  Smartphone,
  Palette,
  MousePointerClick,
  Layout,
  Eye,
  Lock,
  ShoppingBag,
  PackageCheck,
  Wrench,
  Sliders,
  Zap,
  Target,
  Split,
  MessageSquare,
  Server,
  LayoutDashboard,
  Network,
  Search,
  Gauge,
  FileCode,
  BarChart,
  Sparkles,
  Maximize,
  Building2,
  Users,
  Globe,
  Headphones,
  Briefcase,
  TrendingUp,
  Layers,
};

export interface StatItem {
  iconName?: string;
  icon?: React.ElementType;
  title: string;
  desc: string;
}

interface StatsProps {
  items?: StatItem[];
}

export default function Stats({ items }: StatsProps) {
  const defaultHighlights: StatItem[] = [
    {
      iconName: "CheckCircle2",
      title: "100+ Delivered Projects",
      desc: "High-performance websites & custom web applications.",
    },
    {
      iconName: "Clock",
      title: "7–14 Days Fast Delivery",
      desc: "Efficient development workflow from concept to live deployment.",
    },
    {
      iconName: "LayoutGrid",
      title: "Custom UI/UX & Code",
      desc: "Tailored web design built specifically for high visitor conversion.",
    },
    {
      iconName: "ShieldCheck",
      title: "24/7 Technical Support",
      desc: "Direct developer assistance and ongoing post-launch support.",
    },
  ];

  const highlights = items && items.length > 0 ? items : defaultHighlights;

  return (
    <section className="relative z-30 -mt-10 sm:-mt-12 md:-mt-14 py-0 pointer-events-auto w-full">
      {/* Floating Bold Red Banner Box (100% Edge-to-Edge Full Width) */}
      <div className="w-full bg-gradient-to-r from-red-600 via-red-600 to-rose-700 border-y border-red-500/90 shadow-2xl shadow-red-600/35 py-3.5 sm:py-5 lg:py-6 rounded-none overflow-hidden relative">
        
        {/* Style Keyframes for Responsive Single-Line Marquee Animation */}
        <style jsx>{`
          @keyframes statsMarquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-stats-marquee {
            animation: statsMarquee 22s linear infinite;
          }
          .stats-marquee-wrapper:hover .animate-stats-marquee {
            animation-play-state: paused;
          }
        `}</style>

        {/* Desktop View: Static 4-Column Grid (lg screens and above) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 items-center max-w-7xl mx-auto px-6 lg:px-8">
          {highlights.map((item, idx) => {
            const Icon = item.iconName ? ICON_MAP[item.iconName] || CheckCircle2 : item.icon || CheckCircle2;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 pr-4 border-r border-red-500/60 last:border-0"
              >
                <div className="w-10 h-10 rounded-md bg-white/20 text-white border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <Icon className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-red-100 mt-0.5 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsive/Mobile View: Single Line Marquee Animation (< lg screens) */}
        <div className="lg:hidden flex overflow-hidden relative w-full select-none stats-marquee-wrapper py-1">
          <div className="flex items-center gap-6 flex-nowrap animate-stats-marquee w-max">
            {/* Duplicate highlights twice so translateX(-50%) creates a 100% seamless infinite scroll */}
            {[...highlights, ...highlights].map((item, idx) => {
              const Icon = item.iconName ? ICON_MAP[item.iconName] || CheckCircle2 : item.icon || CheckCircle2;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 bg-white/10 border border-white/20 px-4 py-2.5 rounded-xl flex-shrink-0 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/20 text-white border border-white/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 stroke-[2.5]" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xs font-black text-white uppercase tracking-wider whitespace-nowrap">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-red-100 leading-tight font-medium whitespace-nowrap">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}




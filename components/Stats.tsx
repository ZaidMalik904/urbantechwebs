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
      <div className="w-full bg-gradient-to-r from-red-600 via-red-600 to-rose-700 border-y border-red-500/90 shadow-2xl shadow-red-600/35 py-4 sm:py-6 rounded-none overflow-hidden">
        {/* Single Unified Responsive Grid (Mobile, Tablet & Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {highlights.map((item, idx) => {
            const Icon = item.iconName ? ICON_MAP[item.iconName] || CheckCircle2 : item.icon || CheckCircle2;
            return (
              <div key={idx} className="flex items-start gap-3.5 sm:pr-4 sm:border-r border-red-500/60 last:border-0 bg-white/10 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none">
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
      </div>
    </section>
  );
}




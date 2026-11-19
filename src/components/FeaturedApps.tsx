"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Filter, Grid, Download } from "lucide-react";
import { apps } from "@/data/apps";
import AppCard from "@/components/AppCard";

export default function FeaturedApps() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "available", label: "Available to Download" },
    { id: "development", label: "In Development" },
  ];

  const filteredApps = apps.filter((app) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "available") return app.status === "available";
    if (activeFilter === "development") return app.status === "development" || app.status === "coming_soon";
    return true;
  });

  return (
    <section id="featured-apps" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Independent Software Studio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              FEATURED <span className="gradient-text-gold">APPLICATIONS</span>
            </h2>

            <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl">
              Discover native Windows software, AI tools, and productivity utilities built with independent craft and zero telemetry.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#10121d] border border-white/[0.08] self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all ${
                  activeFilter === tab.id
                    ? "bg-gradient-to-r from-gold-500/20 to-crimson-500/20 text-gold-300 border border-gold-500/40 font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {/* View All Apps Link */}
        <div className="mt-14 text-center">
          <Link
            href="/apps"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#141624] hover:bg-[#1b1e32] border border-white/[0.1] hover:border-gold-500/40 transition-all group shadow-lg"
          >
            <span>Open Dedicated Applications Center</span>
            <ArrowRight className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

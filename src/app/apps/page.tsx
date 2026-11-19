"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Filter,
  Download,
  ShieldCheck,
  Cpu,
  Monitor,
  Sparkles,
  Layers,
  ArrowRight,
  HardDrive,
  Calendar,
  X,
} from "lucide-react";
import { apps, AppData } from "@/data/apps";
import AppCard from "@/components/AppCard";

export default function AppsCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const categories = [
    "All",
    "Windows Applications",
    "AI Tools",
    "Productivity",
    "Developer Tools",
    "Experimental Projects",
  ];

  const statusFilters = [
    { id: "all", label: "All Apps" },
    { id: "available", label: "Available" },
    { id: "development", label: "Coming Soon / Dev" },
  ];

  const filteredApps = useMemo(() => {
    return apps.filter((app) => {
      // Search matching
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        app.name.toLowerCase().includes(query) ||
        app.description.toLowerCase().includes(query) ||
        app.tagline.toLowerCase().includes(query) ||
        app.category.toLowerCase().includes(query);

      // Category matching
      const matchesCategory =
        selectedCategory === "All" || app.category === selectedCategory;

      // Status matching
      const matchesStatus =
        selectedStatus === "all" ||
        (selectedStatus === "available" && app.status === "available") ||
        (selectedStatus === "development" &&
          (app.status === "development" || app.status === "coming_soon"));

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  const availableCount = apps.filter((a) => a.status === "available").length;

  return (
    <div className="pt-32 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Download className="w-3.5 h-3.5" />
            <span>Applications Download Center</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase">
            SOFTWARE & <span className="gradient-text-gold">INSTALLERS</span>
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-300 text-sm sm:text-base leading-relaxed">
            Browse, explore, and download official applications engineered by Xtremerpie. Native Windows utilities, AI companions, and productivity tools with zero telemetry.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12131d] border border-white/[0.06]">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              <span>{apps.length} Total Projects</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12131d] border border-white/[0.06]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{availableCount} Ready to Install</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12131d] border border-white/[0.06]">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
              <span>Zero Telemetry Standard</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0d0e17]/85 border border-white/[0.08] backdrop-blur-xl mb-10 space-y-4 shadow-xl">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Live Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search applications by name, keyword, or category..."
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#141624] border border-white/[0.08] focus:border-gold-500/50 focus:outline-none text-sm text-white placeholder-zinc-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Status Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#141624] border border-white/[0.08] shrink-0">
              {statusFilters.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedStatus(tab.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium tracking-wide transition-all ${
                    selectedStatus === tab.id
                      ? "bg-gradient-to-r from-gold-500/20 to-crimson-500/20 text-gold-300 border border-gold-500/40 font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Categories Pill List */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 text-xs">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mr-2 shrink-0">
              Categories:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-white/[0.1] text-gold-400 font-semibold border border-gold-500/30"
                    : "text-zinc-400 hover:text-white bg-white/[0.03] border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-6 px-1">
          <span>
            Showing {filteredApps.length} of {apps.length} applications
          </span>
          {searchQuery && (
            <span>
              Filtered by: &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>

        {/* Applications Grid */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-[#0d0e17]/60 border border-white/[0.06] backdrop-blur-xl">
            <Cpu className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-1">
              No matching applications found
            </h3>
            <p className="text-xs text-zinc-400 max-w-md mx-auto mb-4">
              Try adjusting your search terms or clearing the active filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedStatus("all");
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-gold-400 bg-gold-500/10 border border-gold-500/20 hover:bg-gold-500/20 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Easy Download Link Note for Developer */}
        <div className="mt-20 p-6 sm:p-7 rounded-2xl bg-[#10121d] border border-gold-500/25">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Centralized Download Link Management</span>
              </h3>
              <p className="mt-1 text-xs text-zinc-400 max-w-2xl leading-relaxed">
                All software releases are served directly via Google Drive or direct server links configured in <code className="text-gold-400 font-mono">src/data/apps.ts</code>. Simply update the link in one file to publish new version installers.
              </p>
            </div>

            <a
              href="https://github.com/Xtremerpie"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.04] border border-white/[0.08] hover:border-gold-500/30 transition-all"
            >
              <span>GitHub Repository</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

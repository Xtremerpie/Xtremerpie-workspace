"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bell, Calendar, Tag, ArrowRight, ExternalLink, Sparkles, Filter, CheckCircle2 } from "lucide-react";
import { updates, UpdateItem } from "@/data/updates";
import { formatDate } from "@/lib/utils";

export default function UpdatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Updates" },
    { id: "release", label: "App Releases" },
    { id: "announcement", label: "Announcements" },
    { id: "devlog", label: "Devlogs" },
  ];

  const filteredUpdates = updates.filter((u) => {
    if (selectedCategory === "all") return true;
    return u.category === selectedCategory;
  });

  const getCategoryBadge = (category: UpdateItem["category"]) => {
    switch (category) {
      case "release":
        return {
          label: "App Release",
          className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        };
      case "feature":
        return {
          label: "Feature Upgrade",
          className: "bg-gold-500/10 text-gold-400 border-gold-500/30",
        };
      case "announcement":
        return {
          label: "Announcement",
          className: "bg-blue-500/10 text-blue-400 border-blue-500/30",
        };
      case "devlog":
        return {
          label: "Developer Log",
          className: "bg-crimson-500/10 text-crimson-400 border-crimson-500/30",
        };
    }
  };

  return (
    <div className="pt-32 pb-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Bell className="w-3.5 h-3.5" />
            <span>Changelog & System Dispatch</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            RELEASES & <span className="gradient-text-gold">UPDATES</span>
          </h1>

          <p className="mt-4 text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Follow the continuous evolution of Xtremerpie software. All version releases, changelogs, and technical devlogs documented in one place.
          </p>

          {/* Filter Categories */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-[#10121d] border border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-gold-500/20 to-crimson-500/20 text-gold-300 border border-gold-500/40 font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Updates Feed */}
        <div className="space-y-8">
          {filteredUpdates.map((item) => {
            const badge = getCategoryBadge(item.category);
            return (
              <div
                key={item.id}
                className="p-7 sm:p-8 rounded-3xl bg-[#0d0e17]/85 border border-white/[0.08] backdrop-blur-xl hover:border-gold-500/30 transition-all duration-300 space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`px-3 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border ${badge.className}`}
                    >
                      {badge.label}
                    </span>

                    {item.version && (
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                        v{item.version}
                      </span>
                    )}

                    {item.appName && (
                      <span className="text-xs font-mono text-gold-400">
                        {item.appName}
                      </span>
                    )}
                  </div>

                  <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formatDate(item.date)}</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {item.title}
                </h2>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {item.summary}
                </p>

                {/* Details list */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] space-y-2">
                  <h4 className="text-[11px] font-mono uppercase text-zinc-400 font-semibold tracking-wider">
                    Detailed Changes & Logs:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                {item.links && item.links.length > 0 && (
                  <div className="pt-2 flex items-center gap-4">
                    {item.links.map((link, lIdx) => (
                      <Link
                        key={lIdx}
                        href={link.url}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300 uppercase tracking-wider"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Bell, Sparkles, Tag, Calendar, ExternalLink } from "lucide-react";
import { updates } from "@/data/updates";
import { formatDate } from "@/lib/utils";

export default function LatestUpdates() {
  const getBadgeClass = (category: string) => {
    switch (category) {
      case "release":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "feature":
        return "bg-gold-500/10 text-gold-400 border-gold-500/30";
      case "devlog":
        return "bg-crimson-500/10 text-crimson-400 border-crimson-500/30";
      default:
        return "bg-zinc-500/10 text-zinc-300 border-zinc-500/30";
    }
  };

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Bell className="w-3.5 h-3.5" />
              <span>Changelog & Dispatch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              LATEST <span className="gradient-text-gold">UPDATES</span>
            </h2>

            <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl">
              Recent application releases, architectural upgrades, devlogs, and ecosystem announcements.
            </p>
          </div>

          <Link
            href="/updates"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors group self-start md:self-auto"
          >
            <span>View Complete Changelog</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Updates Timeline List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {updates.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#0e101a]/80 backdrop-blur-xl border border-white/[0.07] hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border ${getBadgeClass(
                      item.category
                    )}`}
                  >
                    {item.category}
                  </span>

                  <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formatDate(item.date)}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  {item.summary}
                </p>

                <ul className="space-y-1.5 mb-6 text-xs text-zinc-400">
                  {item.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.links && item.links.length > 0 && (
                <div className="pt-4 border-t border-white/[0.05] flex items-center gap-3">
                  {item.links.map((link, lIdx) => (
                    <Link
                      key={lIdx}
                      href={link.url}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

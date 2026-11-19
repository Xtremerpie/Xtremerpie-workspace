"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Monitor, HardDrive, Calendar, ShieldCheck, Sparkles } from "lucide-react";
import { AppData } from "@/data/apps";
import DownloadButton from "@/components/DownloadButton";
import { formatDate } from "@/lib/utils";

interface AppCardProps {
  app: AppData;
  featuredView?: boolean;
}

export default function AppCard({ app, featuredView = false }: AppCardProps) {
  const getStatusBadge = (status: AppData["status"]) => {
    switch (status) {
      case "available":
        return {
          label: "Available",
          className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
          dotColor: "bg-emerald-400",
        };
      case "development":
        return {
          label: "In Development",
          className: "bg-gold-500/10 text-gold-400 border-gold-500/30",
          dotColor: "bg-gold-400",
        };
      case "coming_soon":
        return {
          label: "Coming Soon",
          className: "bg-zinc-500/10 text-zinc-400 border-zinc-500/30",
          dotColor: "bg-zinc-500",
        };
    }
  };

  const statusBadge = getStatusBadge(app.status);

  return (
    <div className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0f111a]/80 backdrop-blur-xl border border-white/[0.08] hover:border-gold-500/40 hover:shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8),0_0_25px_-5px_rgba(212,175,55,0.25)] transition-all duration-300">
      {/* Top subtle highlight shimmer */}
      <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Card Header: Icon, Category & Status */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="relative w-14 h-14 rounded-2xl bg-[#141624] border border-white/[0.08] group-hover:border-gold-500/40 p-2 flex items-center justify-center transition-all duration-300 shadow-md">
            <Image
              src={app.logo}
              alt={`${app.name} icon`}
              width={42}
              height={42}
              className="object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${statusBadge.className}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${statusBadge.dotColor} animate-pulse`} />
              {statusBadge.label}
            </span>

            <span className="text-[11px] font-mono text-zinc-500 tracking-wider uppercase">
              {app.category}
            </span>
          </div>
        </div>

        {/* Title & Version */}
        <div className="mb-3">
          <div className="flex items-baseline gap-2.5">
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-gold-400 transition-colors">
              <Link href={`/apps/${app.id}`}>{app.name}</Link>
            </h3>
            <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
              v{app.version}
            </span>
          </div>

          <p className="mt-1 text-xs font-mono text-gold-400/80">
            {app.tagline}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed mb-6">
          {app.description}
        </p>

        {/* Metadata Badges: Platform, Size, Release Date */}
        <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] mb-6 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-1.5 truncate">
            <Monitor className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            <span className="truncate">{app.platform}</span>
          </div>

          {app.fileSize && (
            <div className="flex items-center gap-1.5 truncate">
              <HardDrive className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <span>{app.fileSize}</span>
            </div>
          )}

          <div className="flex items-center gap-1.5 col-span-2 truncate text-[11px] text-zinc-500">
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span>Updated: {formatDate(app.releaseDate)}</span>
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="flex items-center gap-2 pt-4 border-t border-white/[0.06]">
        <Link
          href={`/apps/${app.id}`}
          className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.08] hover:border-gold-500/30 transition-all group/btn"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 text-gold-400" />
        </Link>

        <DownloadButton
          appName={app.name}
          downloads={app.downloads}
          appStatus={app.status}
          variant="card"
        />
      </div>
    </div>
  );
}

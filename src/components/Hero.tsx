"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Download, Sparkles, Terminal, Code2, ShieldCheck, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("featured-apps");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121422]/90 border border-gold-500/30 shadow-[0_0_20px_rgba(212,175,55,0.15)] mb-8">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse shadow-[0_0_8px_#d4af37]" />
            <span className="text-xs font-mono font-medium tracking-widest uppercase text-gold-300">
              XTREMERPIE APP HUB &bull; OFFICIAL PLATFORM
            </span>
            <span className="hidden sm:inline-block text-zinc-600">|</span>
            <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">
              BUILD. CREATE. EVOLVE.
            </span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="max-w-5xl text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.08]">
            BUILDING THE FUTURE,{" "}
            <span className="block gradient-text-gold text-glow-gold">
              ONE PROJECT AT A TIME.
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="mt-7 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
            I&apos;m <strong className="font-semibold text-white">Xtremerpie</strong> — a self-taught developer exploring AI, automation, software engineering, and intelligent systems.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#featured-apps"
              onClick={scrollToProjects}
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-zinc-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all duration-300"
            >
              <span>Explore My Projects</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <Link
              href="/apps"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-white bg-[#141624] hover:bg-[#1a1d30] border border-white/[0.1] hover:border-gold-500/40 shadow-lg transition-all duration-300"
            >
              <Download className="w-4 h-4 text-gold-400" />
              <span>Download Apps</span>
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-zinc-400 hover:text-white bg-transparent hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08] transition-all duration-200"
            >
              <span>About Me</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </Link>
          </div>

          {/* System Status Ribbon */}
          <div className="mt-16 w-full max-w-4xl p-4 sm:p-5 rounded-2xl bg-[#0c0d15]/80 backdrop-blur-xl border border-white/[0.08] shadow-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
              <div className="p-2">
                <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 block">
                  Developer Identity
                </span>
                <span className="text-sm font-semibold text-white mt-1 block">
                  Xtremerpie
                </span>
                <span className="text-[11px] font-mono text-gold-400/90">
                  Self-Taught Eng
                </span>
              </div>

              <div className="p-2 sm:pl-4 pt-4 sm:pt-2">
                <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 block">
                  Core Projects
                </span>
                <span className="text-sm font-semibold text-white mt-1 block">
                  3 Official Applications
                </span>
                <span className="text-[11px] font-mono text-emerald-400">
                  Installers Available
                </span>
              </div>

              <div className="p-2 sm:pl-4 pt-4 sm:pt-2">
                <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 block">
                  Privacy Standard
                </span>
                <span className="text-sm font-semibold text-white mt-1 block">
                  Zero Telemetry
                </span>
                <span className="text-[11px] font-mono text-zinc-400">
                  Local-First Storage
                </span>
              </div>

              <div className="p-2 sm:pl-4 pt-4 sm:pt-2">
                <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 block">
                  Hub Architecture
                </span>
                <span className="text-sm font-semibold text-white mt-1 block">
                  Data-Driven v1.0
                </span>
                <span className="text-[11px] font-mono text-crimson-400">
                  Next.js + TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

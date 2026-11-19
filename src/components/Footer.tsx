"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ShieldCheck, Heart, Terminal, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#07080d]/90 backdrop-blur-2xl pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Identity Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-[#10121d] border border-gold-500/30 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                <Image
                  src="/images/logo.svg"
                  alt="Xtremerpie"
                  width={22}
                  height={22}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-base text-white group-hover:text-gold-400 transition-colors">
                  XTREMERPIE
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                  Build. Create. Evolve.
                </span>
              </div>
            </Link>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              The official software distribution hub and independent developer portfolio of Xtremerpie. Practical utilities, AI tools, and desktop applications built for user sovereignty.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-subtle border border-white/[0.05] text-[11px] font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Independent &bull; Zero Telemetry &bull; Local-First</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/apps" className="hover:text-white transition-colors">
                  Applications Center
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Xtremerpie
                </Link>
              </li>
              <li>
                <Link href="/updates" className="hover:text-white transition-colors">
                  Releases & Changelog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Applications Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold mb-4">
              Applications
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/apps/xtreme-ai-browser" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Xtreme AI Browser</span>
                  <span className="text-[10px] font-mono text-emerald-400">v0.6.0</span>
                </Link>
              </li>
              <li>
                <Link href="/apps/awaken" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Awaken Alert App</span>
                  <span className="text-[10px] font-mono text-emerald-400">v1.0.0</span>
                </Link>
              </li>
              <li>
                <Link href="/apps/rafail-ai" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Rafail AI</span>
                  <span className="text-[10px] font-mono text-gold-400">Preview</span>
                </Link>
              </li>
              <li>
                <Link href="/apps/vyrxone-forge" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>VYRXONE Forge</span>
                  <span className="text-[10px] font-mono text-zinc-500">Upcoming</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Legal */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold mb-4">
              Developer Links
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>GitHub (@Xtremerpie)</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Report an Issue
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Ribbon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>
            &copy; {currentYear} Xtremerpie. All rights reserved. Built independently.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Designed with</span>
            <span className="text-gold-400">Champagne Gold</span>
            <span>&amp;</span>
            <span className="text-crimson-400">Crimson</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Code2,
  Sparkles,
  Monitor,
  Globe,
  Zap,
  Cpu,
  Layout,
  Gamepad2,
  Terminal,
  ShieldCheck,
  Target,
  ArrowRight,
  ExternalLink,
  Mail,
  Compass,
} from "lucide-react";
import { profile } from "@/data/profile";

export const metadata = {
  title: "About Me — Xtremerpie",
  description:
    "Learn about Xtremerpie, an independent self-taught developer exploring AI, automation, browser development, and desktop systems.",
};

export default function AboutPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-gold-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-gold-400" />,
    Monitor: <Monitor className="w-5 h-5 text-gold-400" />,
    Globe: <Globe className="w-5 h-5 text-gold-400" />,
    Zap: <Zap className="w-5 h-5 text-crimson-400" />,
    Cpu: <Cpu className="w-5 h-5 text-gold-400" />,
    Layout: <Layout className="w-5 h-5 text-gold-400" />,
    Gamepad2: <Gamepad2 className="w-5 h-5 text-crimson-400" />,
  };

  return (
    <div className="pt-32 pb-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Developer Journey</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            ABOUT <span className="gradient-text-gold">XTREMERPIE</span>
          </h1>

          <p className="mt-4 text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Independent software developer exploring AI, automation, desktop utilities, and intelligent systems.
          </p>
        </div>

        {/* Developer Identity Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0d0e17]/90 border border-white/[0.08] backdrop-blur-2xl mb-14 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#141624] border border-gold-500/40 p-4 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(212,175,55,0.25)]">
              <Image
                src="/images/logo.svg"
                alt="Xtremerpie"
                width={64}
                height={64}
              />
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Xtremerpie</h2>
                <p className="text-xs font-mono text-gold-400 tracking-wider uppercase mt-0.5">
                  Independent Software Engineer &bull; Self-Taught
                </p>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl">
                {profile.bio}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-zinc-200 bg-white/[0.04] border border-white/[0.08] hover:border-gold-500/40 hover:text-white transition-all"
                >
                  <span>GitHub (@Xtremerpie)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-gold-400 bg-gold-500/10 border border-gold-500/20 hover:bg-gold-500/20 transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Journey */}
        <div className="space-y-12 mb-16">
          <div className="p-8 rounded-3xl bg-[#0f111a] border border-white/[0.06] space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <Target className="w-5 h-5 text-gold-400" />
              <span>The Developer Journey</span>
            </h3>

            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
              <p>
                My development journey began out of pure curiosity about how computers, operating systems, and programs operate under the hood. As an entirely self-taught developer, I learned not by reading abstract theory in lecture halls, but by compiling code, breaking systems down to their primitives, and building real tools that solve daily computing problems.
              </p>
              <p>
                Over time, this curiosity grew into designing comprehensive standalone applications — from exploring Chromium internals to build <strong>Xtreme AI Browser</strong> with sandboxed identities, to writing background task utilities like <strong>Awaken</strong>, to exploring autonomous assistant architectures in <strong>Rafail AI</strong>.
              </p>
            </div>

            {/* Journey Milestones */}
            <div className="pt-4 border-t border-white/[0.06] space-y-3">
              <h4 className="text-xs font-mono uppercase text-gold-400 tracking-wider">
                Progression Timeline
              </h4>
              <div className="space-y-3">
                {profile.journey.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-zinc-300">
                    <span className="w-5 h-5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Philosophy: Build. Create. Evolve. */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#121422] to-[#0d0e17] border border-gold-500/30 space-y-6 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400">
                Core Ethos
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                BUILD. CREATE. EVOLVE.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.principles.map((p, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-black/30 border border-white/[0.06]"
                >
                  <strong className="text-sm text-white block mb-1">
                    {p.title}
                  </strong>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 8 Areas of Interest */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
              Areas of <span className="gradient-text-gold">Interest & Research</span>
            </h3>
            <p className="text-xs text-zinc-400 font-mono mt-1">
              The eight pillars driving my current software initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profile.interests.map((interest, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0d0e17] border border-white/[0.06] hover:border-gold-500/30 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#141624] border border-white/[0.08] flex items-center justify-center shrink-0">
                  {iconMap[interest.icon] || <Code2 className="w-5 h-5 text-gold-400" />}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {interest.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps CTA */}
        <div className="p-8 rounded-3xl bg-[#0e1019] border border-white/[0.08] text-center space-y-4">
          <h3 className="text-lg font-bold text-white">
            Explore the Applications Hub
          </h3>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Ready to test out the software? Check out Xtreme AI Browser and Awaken in our download center.
          </p>
          <div className="pt-2">
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
            >
              <span>Browse Applications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  Sparkles,
  Monitor,
  Globe,
  Zap,
  Cpu,
  Layout,
  Gamepad2,
  ArrowRight,
  Shield,
  Target,
  Compass,
} from "lucide-react";
import { profile } from "@/data/profile";

export default function AboutSection() {
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
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Developer Profile</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            ABOUT <span className="gradient-text-gold">XTREMERPIE</span>
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400 text-sm sm:text-base leading-relaxed">
            A self-taught developer passionate about building practical software, AI-powered systems, automation tools, and independent technology projects.
          </p>
        </div>

        {/* Narrative & Focus Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Authentic Journey & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0d0e17]/90 border border-white/[0.08] backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <Target className="w-5 h-5 text-gold-400" />
                <span>The Independent Mindset</span>
              </h3>

              <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
                <p>
                  I build software independently with a focus on practical utility and clean user sovereignty. Rather than building ephemeral toys or lock-in platforms, my projects are created to run directly on your hardware, respect your privacy, and solve real computing friction.
                </p>
                <p>
                  As a self-taught engineer, my knowledge is forged through continuous hands-on experimentation — breaking down operating system mechanics, investigating how browser engines manage tab memory, and connecting generative AI directly to local desktop automation pipelines.
                </p>
              </div>

              {/* Journey Highlights */}
              <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-3">
                <h4 className="text-xs uppercase font-mono tracking-wider text-gold-400 font-semibold">
                  Key Principles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {profile.principles.map((principle, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                    >
                      <strong className="text-white block mb-1">{principle.title}</strong>
                      <span className="text-zinc-400">{principle.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Current Focus & Goals (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Current Focus Box */}
            <div className="p-7 rounded-2xl bg-[#121422]/90 border border-gold-500/30 backdrop-blur-xl shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-mono uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Active Trajectory</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Current Focus</h3>
              <ul className="space-y-2.5 text-xs text-zinc-300">
                {profile.currentFocus.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Mission Box */}
            <div className="p-7 rounded-2xl bg-[#0e1019]/80 border border-white/[0.08] backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-crimson-400" />
                <span>Independent Goals</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-zinc-400">
                {profile.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 mt-1.5 shrink-0" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300 uppercase tracking-wider group"
                >
                  <span>Read Full Developer Story</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Areas of Interest Grid (8 items from Master Prompt) */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">
              Areas of <span className="gradient-text-gold">Interest & Exploration</span>
            </h3>
            <p className="text-xs text-zinc-400 font-mono mt-1">
              Core domains shaping the Xtremerpie ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {profile.interests.map((interest, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-[#0f111a]/70 border border-white/[0.06] hover:border-gold-500/40 hover:bg-[#141624]/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#171926] border border-white/[0.06] group-hover:border-gold-500/30 flex items-center justify-center mb-4 transition-colors">
                    {iconMap[interest.icon] || <Code2 className="w-5 h-5 text-gold-400" />}
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
                    {interest.title}
                  </h4>

                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

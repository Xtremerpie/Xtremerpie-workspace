import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, EyeOff, Server, HardDrive, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Xtremerpie App Hub",
  description:
    "Zero telemetry, local storage only, and strict user sovereignty. Read Xtremerpie's privacy commitments across all software products.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-gold-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>

        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Privacy Commitment</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            PRIVACY <span className="gradient-text-gold">POLICY</span>
          </h1>

          <p className="mt-2 text-xs font-mono text-zinc-500">
            Effective Date: November 2024 &bull; Version 1.0
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-[#0d0e17]/90 border border-white/[0.08] backdrop-blur-2xl space-y-8 text-sm text-zinc-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-gold-400" />
              <span>1. Zero Telemetry & Surveillance</span>
            </h2>
            <p>
              Applications distributed by Xtremerpie (including <strong>Xtreme AI Browser</strong>, <strong>Awaken</strong>, and future desktop releases) are engineered with an uncompromising privacy foundation: <strong>Zero Telemetry</strong>. We do not track, log, aggregate, or sell your keystrokes, browsing history, alert schedules, or hardware identifiers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-gold-400" />
              <span>2. Local-First Data Storage</span>
            </h2>
            <p>
              All configurations, custom media files, profile states, and cache directories created by our applications remain exclusively on your local machine in designated user application data folders (e.g., <code>%APPDATA%</code> on Windows). You retain 100% control over this data and can wipe or inspect it at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-gold-400" />
              <span>3. AI and Model Processing</span>
            </h2>
            <p>
              When utilizing AI features (such as Rafail AI within Xtreme AI Browser):
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-400 pl-2">
              <li>In local model mode (GGUF / Ollama), inference runs 100% offline on your device with zero network packets emitted.</li>
              <li>In remote API mode, only the exact text prompt or page fragment you actively submit is processed by your configured provider, adhering to their API data retention terms.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-gold-400" />
              <span>4. Website & App Hub Analytics</span>
            </h2>
            <p>
              This website (Xtremerpie App Hub) uses no third-party tracking cookies or marketing surveillance pixels. Download links to Google Drive are direct file distribution links governed by standard Google Drive infrastructure.
            </p>
          </section>

          <div className="pt-6 border-t border-white/[0.06] text-xs text-zinc-500 font-mono">
            Questions regarding our privacy principles can be sent to <code>contact@xtremerpie.dev</code>.
          </div>
        </div>
      </div>
    </div>
  );
}

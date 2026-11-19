"use client";

import React from "react";
import { CheckCircle2, AlertTriangle, HelpCircle, Terminal, ShieldAlert, Sparkles } from "lucide-react";
import { InstallationStep } from "@/data/apps";

interface InstallationGuideProps {
  steps: InstallationStep[];
  appName: string;
}

export default function InstallationGuide({ steps, appName }: InstallationGuideProps) {
  return (
    <div className="space-y-6">
      {/* Steps List */}
      <div className="space-y-4">
        {steps.map((item) => (
          <div
            key={item.step}
            className="p-5 sm:p-6 rounded-2xl bg-[#0e1019]/80 border border-white/[0.08] backdrop-blur-xl transition-all"
          >
            <div className="flex items-start gap-4">
              {/* Step Number Badge */}
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold-500/20 to-crimson-500/20 border border-gold-500/40 text-gold-300 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                0{item.step}
              </div>

              <div className="space-y-2 flex-1">
                <h4 className="text-base font-bold text-white">
                  {item.title}
                </h4>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Warning note if present (e.g. SmartScreen) */}
                {item.warning && (
                  <div className="p-3.5 rounded-xl bg-crimson-500/10 border border-crimson-500/30 text-xs text-crimson-200 flex items-start gap-2.5 mt-3">
                    <ShieldAlert className="w-4 h-4 text-crimson-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item.warning}</span>
                  </div>
                )}

                {/* Helpful Tip */}
                {item.tip && (
                  <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs text-gold-300 flex items-start gap-2 mt-2">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                    <span>{item.tip}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Troubleshooting Alert Box */}
      <div className="p-6 rounded-2xl bg-[#14121a] border border-white/[0.08]">
        <div className="flex items-center gap-2.5 text-gold-400 text-sm font-semibold mb-2">
          <HelpCircle className="w-4 h-4" />
          <span>Troubleshooting & Safety Verification</span>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed">
          All applications released by Xtremerpie are compiled from authentic local source trees with zero telemetry and zero adware. If an antivirus flags the executable, verify the SHA256 checksum matching our official release notes, or report the checksum to our GitHub repository.
        </p>
      </div>
    </div>
  );
}

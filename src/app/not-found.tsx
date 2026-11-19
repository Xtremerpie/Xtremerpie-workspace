import React from "react";
import Link from "next/link";
import { Terminal, ArrowLeft, Home, Download } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative z-10">
      <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl bg-[#0d0e17]/90 border border-gold-500/30 backdrop-blur-2xl text-center space-y-6 shadow-[0_0_50px_rgba(212,175,55,0.15)]">
        <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mx-auto">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-crimson-400 uppercase tracking-widest block">
            404 &bull; Signal Not Found
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            SECTOR UNMAPPED
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            The route or project artifact you are searching for does not exist in the current Xtremerpie registry.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/apps"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.04] border border-white/[0.08] hover:border-gold-500/30 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Browse Apps</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

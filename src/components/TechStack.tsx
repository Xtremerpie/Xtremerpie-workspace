"use client";

import React, { useState } from "react";
import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  GitBranch,
  Bot,
  Boxes,
} from "lucide-react";
import { profile } from "@/data/profile";

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Languages", "Frameworks", "Platforms", "Tools"];

  const filteredTech = profile.technologies.filter((tech) => {
    if (selectedCategory === "All") return true;
    return tech.category === selectedCategory;
  });

  const getTechIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "python":
        return <Terminal className="w-5 h-5 text-gold-400" />;
      case "typescript":
      case "javascript":
        return <Code2 className="w-5 h-5 text-gold-400" />;
      case "react":
      case "next.js":
        return <Layers className="w-5 h-5 text-gold-400" />;
      case "electron":
        return <Boxes className="w-5 h-5 text-crimson-400" />;
      case "ai integrations":
        return <Bot className="w-5 h-5 text-gold-300" />;
      case "github":
        return <GitBranch className="w-5 h-5 text-zinc-300" />;
      case "automation":
        return <Zap className="w-5 h-5 text-crimson-400" />;
      default:
        return <Cpu className="w-5 h-5 text-gold-400" />;
    }
  };

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Engineering Arsenal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            TECHNOLOGY & <span className="gradient-text-gold">CORE SKILLS</span>
          </h2>

          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl">
            Real tools, frameworks, and engineering languages powering Xtremerpie applications. No fabricated metrics or skill bars.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-[#10121d] border border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-gold-500/25 to-crimson-500/25 text-gold-300 border border-gold-500/40 font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="group relative p-5 rounded-2xl bg-[#0d0e17]/80 border border-white/[0.06] hover:border-gold-500/40 hover:bg-[#141624]/90 backdrop-blur-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#171926] border border-white/[0.08] group-hover:border-gold-500/30 flex items-center justify-center transition-colors">
                  {getTechIcon(tech.name)}
                </div>

                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 px-2 py-0.5 rounded bg-white/[0.03]">
                  {tech.category}
                </span>
              </div>

              <h4 className="text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                {tech.name}
              </h4>

              {tech.description && (
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {tech.description}
                </p>
              )}

              {tech.highlight && (
                <div className="mt-3 inline-flex items-center gap-1 text-[10px] font-mono text-gold-400/90">
                  <span className="w-1 h-1 rounded-full bg-gold-400" />
                  <span>Primary Stack</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, ExternalLink, Terminal, Send, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate client-side send
    setFormSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Developer Channel</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            CONTACT & <span className="gradient-text-gold">INQUIRIES</span>
          </h1>

          <p className="mt-4 text-zinc-300 text-base sm:text-lg max-w-xl leading-relaxed">
            Have feedback on Xtreme AI Browser, bug reports for Awaken, or collaboration ideas? Reach out directly.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {/* Email Direct Box */}
          <div className="p-7 rounded-3xl bg-[#0d0e17]/90 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-3">
                <Mail className="w-5 h-5" />
              </div>

              <h3 className="text-base font-bold text-white">Direct Email</h3>
              <p className="text-xs text-zinc-400 mt-1">
                For technical discussions, software feedback, or security reports.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
              <span className="font-mono text-xs text-gold-300 truncate">
                {profile.links.email}
              </span>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.05] hover:bg-gold-500/20 hover:text-gold-300 text-zinc-300 transition-colors shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* GitHub Repository Box */}
          <div className="p-7 rounded-3xl bg-[#0d0e17]/90 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white mb-3">
                <Terminal className="w-5 h-5" />
              </div>

              <h3 className="text-base font-bold text-white">GitHub Profile</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Track issues, source repositories, releases, and upcoming commits.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-gold-400 hover:text-gold-300 transition-colors"
              >
                <span>github.com/Xtremerpie</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0f111a] border border-white/[0.08] shadow-2xl">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-gold-400" />
              <span>Send a Message</span>
            </h3>
            <p className="text-xs text-zinc-400">
              Fill in your thoughts and it will launch your native mail client addressed directly to Xtremerpie.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-base font-bold text-white">
                Message Dispatched
              </h4>
              <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                Thank you for reaching out. You can also send an email directly to <code className="text-gold-400">{profile.links.email}</code>.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name or handle"
                    className="w-full px-4 py-3 rounded-xl bg-[#141624] border border-white/[0.08] focus:border-gold-500/50 focus:outline-none text-sm text-white placeholder-zinc-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#141624] border border-white/[0.08] focus:border-gold-500/50 focus:outline-none text-sm text-white placeholder-zinc-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                  Subject / Application
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g., Feedback for Xtreme AI Browser v0.6.0"
                  className="w-full px-4 py-3 rounded-xl bg-[#141624] border border-white/[0.08] focus:border-gold-500/50 focus:outline-none text-sm text-white placeholder-zinc-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message, bug report, or feature suggestion..."
                  className="w-full px-4 py-3 rounded-xl bg-[#141624] border border-white/[0.08] focus:border-gold-500/50 focus:outline-none text-sm text-white placeholder-zinc-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Dispatch Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

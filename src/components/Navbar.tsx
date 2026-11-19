"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Download, Terminal, Sparkles, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Applications", href: "/apps" },
    { name: "About Me", href: "/about" },
    { name: "Updates", href: "/updates" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a10]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group relative select-none"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-[#0f101a] border border-gold-500/30 group-hover:border-gold-400 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
            <Image
              src="/images/logo.svg"
              alt="Xtremerpie Emblem"
              width={26}
              height={26}
              className="group-hover:scale-105 transition-transform duration-300"
            />
            {/* Ambient subtle glow ring */}
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-gold-500/20 to-crimson-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-wider text-base sm:text-lg text-white group-hover:text-gold-400 transition-colors duration-200">
                XTREMERPIE
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] uppercase font-mono tracking-widest rounded bg-gold-500/10 text-gold-400 border border-gold-500/20">
                HUB
              </span>
            </div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 group-hover:text-zinc-300 transition-colors">
              Independent Software Dev
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#10121c]/70 border border-white/[0.08] backdrop-blur-md">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium tracking-wide transition-all duration-200 ${
                  active
                    ? "text-white font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-500/20 to-crimson-500/20 border border-gold-500/40 -z-10" />
                )}
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Button & Live Status */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-subtle border border-white/[0.05] text-[11px] font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            <span>Systems Online</span>
          </div>

          <Link
            href="/apps"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase text-zinc-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_28px_rgba(212,175,55,0.5)] transition-all duration-300"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Apps</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-[#0c0d14]/95 backdrop-blur-2xl border-b border-white/[0.1] px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all ${
                    active
                      ? "text-gold-400 bg-gold-500/10 border border-gold-500/30"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{link.name}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shadow-[0_0_8px_#d4af37]" />}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
              <Link
                href="/apps"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold tracking-wider uppercase text-zinc-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <Download className="w-4 h-4" />
                <span>Download Apps</span>
              </Link>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono text-zinc-400 hover:text-white bg-white/[0.03] border border-white/[0.06]"
              >
                <span>github.com/Xtremerpie</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Download,
  ShieldCheck,
  CheckCircle2,
  HardDrive,
  Calendar,
  Monitor,
  Cpu,
  Layers,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Clock,
  Sparkles,
  FileCode,
  Tag,
  AlertCircle,
  Copy,
  ChevronDown,
  Terminal,
  Shield,
  Bot,
  Lock,
  Workflow,
  Key,
  Bell,
  Music,
  Minimize2,
  Moon,
  Power,
  Code2,
  Eye,
  Network,
} from "lucide-react";
import { apps, getAppById, AppData } from "@/data/apps";
import DownloadButton from "@/components/DownloadButton";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import InstallationGuide from "@/components/InstallationGuide";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return apps.map((app) => ({
    slug: app.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const app = getAppById(params.slug);
  if (!app) {
    return {
      title: "App Not Found",
    };
  }

  return {
    title: `${app.name} — Download & Overview`,
    description: `${app.tagline}. ${app.description}`,
    openGraph: {
      title: `${app.name} (v${app.version}) | Xtremerpie Official App Hub`,
      description: app.description,
      images: [
        {
          url: app.logo,
          width: 512,
          height: 512,
          alt: app.name,
        },
      ],
    },
  };
}

export default function AppDetailPage({ params }: PageProps) {
  const app = getAppById(params.slug);

  if (!app) {
    notFound();
    return null;
  }

  const currentApp = app;
  const relatedApps = apps.filter((a) => a.id !== currentApp.id).slice(0, 3);

  const getStatusBadge = (status: AppData["status"]) => {
    switch (status) {
      case "available":
        return {
          label: "Available to Download",
          className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
          dotColor: "bg-emerald-400",
        };
      case "development":
        return {
          label: "In Active Development",
          className: "bg-gold-500/10 text-gold-400 border-gold-500/30",
          dotColor: "bg-gold-400",
        };
      case "coming_soon":
        return {
          label: "Coming Soon",
          className: "bg-zinc-500/10 text-zinc-400 border-zinc-500/30",
          dotColor: "bg-zinc-500",
        };
    }
  };

  const statusBadge = getStatusBadge(app.status);

  // Icon mapping for features
  const renderFeatureIcon = (name: string) => {
    const iconClass = "w-5 h-5 text-gold-400";
    switch (name) {
      case "Bot":
        return <Bot className={iconClass} />;
      case "Shield":
        return <Shield className={iconClass} />;
      case "Lock":
        return <Lock className={iconClass} />;
      case "Code2":
        return <Code2 className={iconClass} />;
      case "Cpu":
        return <Cpu className={iconClass} />;
      case "Layers":
        return <Layers className={iconClass} />;
      case "Bell":
        return <Bell className={iconClass} />;
      case "Music":
        return <Music className={iconClass} />;
      case "Minimize2":
        return <Minimize2 className={iconClass} />;
      case "Moon":
        return <Moon className={iconClass} />;
      case "Clock":
        return <Clock className={iconClass} />;
      case "Power":
        return <Power className={iconClass} />;
      case "Terminal":
        return <Terminal className={iconClass} />;
      case "Eye":
        return <Eye className={iconClass} />;
      case "Network":
        return <Network className={iconClass} />;
      case "Workflow":
        return <Workflow className={iconClass} />;
      case "Key":
        return <Key className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <div className="pt-28 pb-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Apps Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-gold-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Applications</span>
          </Link>
        </div>

        {/* =========================================================================
            A. PROJECT HERO
        ========================================================================= */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0d0e17]/90 border border-white/[0.08] backdrop-blur-2xl mb-16 shadow-2xl relative overflow-hidden">
          {/* Subtle top glow line */}
          <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* App Logo */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#131524] border border-gold-500/30 p-4 flex items-center justify-center shrink-0 shadow-[0_0_35px_rgba(212,175,55,0.2)]">
                <Image
                  src={app.logo}
                  alt={`${app.name} logo`}
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Title & Metadata */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${statusBadge.className}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${statusBadge.dotColor} animate-pulse`} />
                    {statusBadge.label}
                  </span>

                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.08]">
                    v{app.version}
                  </span>

                  <span className="text-xs font-mono text-zinc-500 uppercase">
                    {app.category}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {app.name}
                </h1>

                <p className="text-sm sm:text-base font-mono text-gold-400/90 max-w-xl">
                  {app.tagline}
                </p>
              </div>
            </div>

            {/* Quick Actions / Download button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <DownloadButton
                appName={app.name}
                downloads={app.downloads}
                appStatus={app.status}
                variant="primary"
                showAllOptions={true}
              />

              {app.githubUrl && (
                <a
                  href={app.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] transition-all"
                >
                  <span>Source / GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Specifications Strip */}
          <div className="mt-10 pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-zinc-500 block uppercase text-[10px]">Platform</span>
              <span className="text-zinc-200 mt-1 block font-medium">{app.platform}</span>
            </div>

            {app.fileSize && (
              <div>
                <span className="text-zinc-500 block uppercase text-[10px]">Package Size</span>
                <span className="text-zinc-200 mt-1 block font-medium">{app.fileSize}</span>
              </div>
            )}

            <div>
              <span className="text-zinc-500 block uppercase text-[10px]">Release Date</span>
              <span className="text-zinc-200 mt-1 block font-medium">{formatDate(app.releaseDate)}</span>
            </div>

            <div>
              <span className="text-zinc-500 block uppercase text-[10px]">License</span>
              <span className="text-emerald-400 mt-1 block font-medium">Independent / Free</span>
            </div>
          </div>
        </div>

        {/* Two-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* =========================================================================
                B. ABOUT THE APPLICATION
            ========================================================================= */}
            <section id="about-app" className="space-y-6">
              <div className="flex items-center gap-2.5 text-gold-400 text-xs font-mono uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>Overview & Purpose</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                About {app.name}
              </h2>

              <p className="text-base text-zinc-300 leading-relaxed">
                {app.longDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-[#0f111a] border border-white/[0.06]">
                  <h3 className="text-xs font-mono uppercase text-gold-400 font-semibold mb-2">
                    The Problem It Solves
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {app.problemSolved}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0f111a] border border-white/[0.06]">
                  <h3 className="text-xs font-mono uppercase text-crimson-400 font-semibold mb-2">
                    Target Users & Utility
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {app.whoIsItFor}
                  </p>
                </div>
              </div>
            </section>

            {/* =========================================================================
                C. KEY FEATURES
            ========================================================================= */}
            <section id="features" className="space-y-6">
              <div className="flex items-center gap-2.5 text-gold-400 text-xs font-mono uppercase tracking-widest">
                <Layers className="w-4 h-4" />
                <span>Engineering Capabilities</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Key Features
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {app.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all duration-300 ${
                      feature.highlight
                        ? "bg-[#141624]/90 border-gold-500/30 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                        : "bg-[#0f111a]/80 border-white/[0.06]"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#181a29] border border-white/[0.06] flex items-center justify-center mb-3">
                      {renderFeatureIcon(feature.iconName)}
                    </div>

                    <h3 className="text-sm font-bold text-white mb-1.5">
                      {feature.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* =========================================================================
                D. SCREENSHOT GALLERY
            ========================================================================= */}
            <section id="screenshots" className="space-y-6">
              <div className="flex items-center gap-2.5 text-gold-400 text-xs font-mono uppercase tracking-widest">
                <Monitor className="w-4 h-4" />
                <span>User Interface</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Application Previews
              </h2>

              <ScreenshotGallery
                screenshots={app.screenshots}
                appName={app.name}
              />
            </section>

            {/* =========================================================================
                E. STEP-BY-STEP INSTALLATION GUIDE
            ========================================================================= */}
            <section id="installation" className="space-y-6">
              <div className="flex items-center gap-2.5 text-gold-400 text-xs font-mono uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4" />
                <span>Setup Procedure</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Step-by-Step Installation Guide
              </h2>

              <InstallationGuide
                steps={app.installation}
                appName={app.name}
              />
            </section>

            {/* =========================================================================
                G. RELEASE & VERSION MANAGEMENT
            ========================================================================= */}
            <section id="releases" className="space-y-6">
              <div className="flex items-center gap-2.5 text-gold-400 text-xs font-mono uppercase tracking-widest">
                <Tag className="w-4 h-4" />
                <span>Changelog & History</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Release Information
              </h2>

              <div className="space-y-6">
                {app.releases.map((release) => (
                  <div
                    key={release.version}
                    className="p-6 rounded-2xl bg-[#0e101a] border border-white/[0.08]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg font-bold text-white">
                          Version {release.version}
                        </span>
                        {release.isLatest && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            Latest Release
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-mono text-zinc-500">
                        {release.date}
                      </span>
                    </div>

                    {release.highlight && (
                      <p className="text-xs font-mono text-gold-300 mb-4 bg-gold-500/10 border border-gold-500/20 p-2.5 rounded-xl">
                        {release.highlight}
                      </p>
                    )}

                    <div className="space-y-2 text-xs">
                      <h4 className="font-mono uppercase text-zinc-400 text-[11px] font-semibold">
                        What&apos;s New:
                      </h4>
                      <ul className="space-y-1.5 text-zinc-300">
                        {release.changes.map((c, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1 shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {release.fixes && release.fixes.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-white/[0.05] space-y-1.5 text-xs">
                        <h4 className="font-mono uppercase text-zinc-400 text-[11px] font-semibold">
                          Fixes:
                        </h4>
                        <ul className="space-y-1 text-zinc-400">
                          {release.fixes.map((f, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 shrink-0" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* =========================================================================
                H. FAQ SECTION
            ========================================================================= */}
            <section id="faq" className="space-y-6">
              <div className="flex items-center gap-2.5 text-gold-400 text-xs font-mono uppercase tracking-widest">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {app.faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#0f111a] border border-white/[0.06]"
                  >
                    <h3 className="text-sm font-bold text-white mb-2 flex items-start gap-2">
                      <span className="text-gold-400 font-mono">Q:</span>
                      <span>{item.question}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-6">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* =========================================================================
                F. SYSTEM REQUIREMENTS
            ========================================================================= */}
            <div className="p-6 rounded-2xl bg-[#0d0e17] border border-white/[0.08] backdrop-blur-xl sticky top-28 space-y-6">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-mono uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>Hardware Specifications</span>
              </div>

              <h3 className="text-lg font-bold text-white">System Requirements</h3>

              <div className="space-y-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-zinc-500 uppercase block text-[10px]">Operating System</span>
                  <span className="text-zinc-200 font-medium mt-1 block">{app.requirements.os}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-zinc-500 uppercase block text-[10px]">Processor</span>
                  <span className="text-zinc-200 font-medium mt-1 block">{app.requirements.processor}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-zinc-500 uppercase block text-[10px]">Memory (RAM)</span>
                  <span className="text-zinc-200 font-medium mt-1 block">{app.requirements.ram}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-zinc-500 uppercase block text-[10px]">Disk Storage</span>
                  <span className="text-zinc-200 font-medium mt-1 block">{app.requirements.storage}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-zinc-500 uppercase block text-[10px]">Architecture</span>
                  <span className="text-zinc-200 font-medium mt-1 block">{app.requirements.architecture}</span>
                </div>

                {app.requirements.additional && (
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1">
                    <span className="text-zinc-500 uppercase block text-[10px]">Additional Notes</span>
                    {app.requirements.additional.map((note, idx) => (
                      <span key={idx} className="text-zinc-400 block text-[11px]">&bull; {note}</span>
                    ))}
                  </div>
                )}
              </div>

              {/* SHA256 Checksum Card */}
              {app.downloads.windowsInstaller?.checksum && (
                <div className="p-4 rounded-xl bg-[#141624] border border-gold-500/20 text-xs space-y-2">
                  <div className="flex items-center gap-1.5 text-gold-400 font-mono text-[11px] font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Official SHA256 Checksum</span>
                  </div>
                  <p className="font-mono text-[10px] text-zinc-400 break-all bg-black/40 p-2 rounded-lg border border-white/[0.05]">
                    {app.downloads.windowsInstaller.checksum}
                  </p>
                </div>
              )}

              {/* Download Call-to-action */}
              <div className="pt-2">
                <DownloadButton
                  appName={app.name}
                  downloads={app.downloads}
                  appStatus={app.status}
                  variant="primary"
                  className="w-full justify-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            I. RELATED PROJECTS
        ========================================================================= */}
        <div className="mt-24 pt-16 border-t border-white/[0.08]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                Related Applications by <span className="gradient-text-gold">Xtremerpie</span>
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Explore more independent software from the ecosystem
              </p>
            </div>

            <Link
              href="/apps"
              className="text-xs font-semibold text-gold-400 hover:text-gold-300 uppercase tracking-wider inline-flex items-center gap-1.5"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedApps.map((related) => (
              <div
                key={related.id}
                className="p-6 rounded-2xl bg-[#0d0e17]/80 border border-white/[0.06] hover:border-gold-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#141624] border border-white/[0.08] p-1.5 flex items-center justify-center">
                      <Image
                        src={related.logo}
                        alt={related.name}
                        width={28}
                        height={28}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{related.name}</h4>
                      <span className="text-[10px] font-mono text-zinc-500">v{related.version}</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-2 mb-4">
                    {related.description}
                  </p>
                </div>

                <Link
                  href={`/apps/${related.id}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-gold-400 hover:text-gold-300"
                >
                  <span>Explore {related.name}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

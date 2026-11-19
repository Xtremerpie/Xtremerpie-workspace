"use client";

import React, { useState } from "react";
import { Download, ChevronDown, Check, Copy, AlertCircle, Sparkles, ExternalLink, ShieldCheck } from "lucide-react";
import { DownloadOption, DownloadsCollection, formatDownloadUrl, getAvailableDownloads } from "@/lib/downloads";

interface DownloadButtonProps {
  appName: string;
  downloads?: DownloadsCollection;
  appStatus?: "available" | "development" | "coming_soon";
  variant?: "primary" | "secondary" | "card";
  showAllOptions?: boolean;
  className?: string;
}

export default function DownloadButton({
  appName,
  downloads,
  appStatus = "available",
  variant = "primary",
  showAllOptions = true,
  className = "",
}: DownloadButtonProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [copiedChecksum, setCopiedChecksum] = useState<string | null>(null);
  const [showConfigModal, setShowConfigModal] = useState(false);

  // Parse available download options
  const primaryOption = downloads?.windowsInstaller || Object.values(downloads || {})[0];
  const primaryParsed = primaryOption ? formatDownloadUrl(primaryOption.url) : { isValid: false, downloadUrl: "", isPlaceholder: false, isGoogleDrive: false };

  const handleCopyChecksum = (checksum: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(checksum);
    setCopiedChecksum(checksum);
    setTimeout(() => setCopiedChecksum(null), 2500);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    if (!primaryParsed.isValid) {
      e.preventDefault();
      setShowConfigModal(true);
    }
  };

  // Card view styling
  if (variant === "card") {
    if (appStatus !== "available") {
      return (
        <span className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-zinc-500 bg-white/[0.02] border border-white/[0.05] select-none cursor-default">
          <Download className="w-3.5 h-3.5 opacity-40" />
          <span>Coming Soon</span>
        </span>
      );
    }

    if (primaryParsed.isValid) {
      return (
        <a
          href={primaryParsed.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide text-zinc-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_22px_rgba(212,175,55,0.5)] transition-all cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download</span>
        </a>
      );
    }

    // Available app, but link is placeholder or pending Google Drive URL
    return (
      <>
        <button
          onClick={handleButtonClick}
          className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide text-gold-300 bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/30 hover:border-gold-500/50 shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all cursor-pointer"
          title="Click to view download or set Google Drive link"
        >
          <Download className="w-3.5 h-3.5 text-gold-400" />
          <span>Download</span>
        </button>

        {showConfigModal && (
          <ConfigGuideModal appName={appName} onClose={() => setShowConfigModal(false)} />
        )}
      </>
    );
  }

  // Primary / Standard View
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* Primary Action Button */}
      <a
        href={primaryParsed.isValid ? primaryParsed.downloadUrl : "#"}
        onClick={handleButtonClick}
        target={primaryParsed.isValid ? "_blank" : undefined}
        rel="noopener noreferrer"
        download={primaryParsed.isValid}
        className={`group relative flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 select-none ${
          primaryParsed.isValid
            ? "text-zinc-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] cursor-pointer"
            : appStatus === "available"
            ? "text-gold-300 bg-gold-500/15 border border-gold-500/40 hover:bg-gold-500/25 shadow-[0_0_20px_rgba(212,175,55,0.2)] cursor-pointer"
            : "text-zinc-400 bg-surface-subtle border border-white/[0.08] hover:border-white/[0.15] cursor-pointer"
        }`}
      >
        <Download className={`w-4 h-4 transition-transform group-hover:-translate-y-0.5 ${primaryParsed.isValid ? "text-zinc-950" : "text-gold-400"}`} />
        <span>
          {primaryParsed.isValid
            ? primaryOption?.label || "Download Installer"
            : appStatus === "available"
            ? "Download Application"
            : "Coming Soon"}
        </span>

        {primaryOption?.fileSize && (
          <span className="ml-1 text-[11px] font-mono font-normal opacity-85 px-2 py-0.5 rounded-full bg-black/30 text-white">
            {primaryOption.fileSize}
          </span>
        )}
      </a>

      {/* Dropdown Toggle for Multiple Formats (Installer, Portable, ZIP) */}
      {showAllOptions && downloads && Object.keys(downloads).length > 1 && (
        <div className="relative ml-1.5">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="p-3.5 rounded-xl bg-surface-subtle border border-white/[0.08] hover:border-gold-500/40 text-zinc-300 hover:text-white transition-all"
            aria-label="View more download options"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180 text-gold-400" : ""}`} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl bg-[#0e101a] border border-gold-500/30 p-2 shadow-2xl z-50 backdrop-blur-2xl">
              <div className="px-3 py-2 text-[11px] uppercase tracking-wider font-mono text-zinc-400 border-b border-white/[0.06]">
                Available Packages
              </div>

              <div className="flex flex-col gap-1 mt-1">
                {Object.entries(downloads).map(([key, opt]) => {
                  if (!opt) return null;
                  const parsed = formatDownloadUrl(opt.url);

                  return (
                    <div
                      key={key}
                      className="p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors flex flex-col gap-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-zinc-200">{opt.label}</span>
                        {opt.fileSize && (
                          <span className="text-[10px] font-mono text-zinc-400">{opt.fileSize}</span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-1">
                        {parsed.isValid ? (
                          <a
                            href={parsed.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            onClick={() => setDropdownOpen(false)}
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-gold-400 hover:text-gold-300"
                          >
                            <Download className="w-3 h-3" />
                            <span>Download {opt.format?.toUpperCase()}</span>
                          </a>
                        ) : (
                          <button
                            onClick={() => {
                              setDropdownOpen(false);
                              setShowConfigModal(true);
                            }}
                            className="text-[11px] text-gold-400 hover:text-gold-300 text-left font-medium"
                          >
                            Set Drive Link &rarr;
                          </button>
                        )}

                        {opt.checksum && (
                          <button
                            onClick={(e) => handleCopyChecksum(opt.checksum!, e)}
                            className="flex items-center gap-1 text-[10px] font-mono text-zinc-400 hover:text-zinc-200"
                            title="Copy SHA256 Checksum"
                          >
                            {copiedChecksum === opt.checksum ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                            <span>SHA256</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Guide modal if developer hasn't pasted Google Drive link yet */}
      {showConfigModal && (
        <ConfigGuideModal appName={appName} onClose={() => setShowConfigModal(false)} />
      )}
    </div>
  );
}

function ConfigGuideModal({ appName, onClose }: { appName: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-lg p-6 sm:p-7 rounded-3xl bg-[#0f1019] border border-gold-500/40 shadow-[0_0_60px_rgba(212,175,55,0.25)]">
        <div className="flex items-center gap-3 text-gold-400 mb-3">
          <AlertCircle className="w-6 h-6 text-gold-400 shrink-0" />
          <h3 className="text-lg font-bold text-white">Google Drive Download Link</h3>
        </div>

        <p className="text-sm text-zinc-300 leading-relaxed">
          Application <strong className="text-gold-400">{appName}</strong> is ready for installation.
        </p>

        <div className="mt-4 p-4 rounded-2xl bg-surface-subtle border border-white/[0.08] text-xs font-mono text-zinc-300 space-y-2.5">
          <p className="text-gold-300 font-semibold font-sans">To connect your installer file:</p>
          <ol className="list-decimal list-inside space-y-1.5 text-zinc-400">
            <li>Upload your installer (.exe or .zip) to your Google Drive.</li>
            <li>Right click &rarr; Share &rarr; Set to <strong>&ldquo;Anyone with the link can view&rdquo;</strong>.</li>
            <li>Open <code className="text-gold-400 bg-black/40 px-1.5 py-0.5 rounded">src/data/apps.ts</code>.</li>
            <li>Paste your Google Drive share URL into <code className="text-zinc-200">downloads.windowsInstaller.url</code>.</li>
          </ol>
        </div>

        <p className="mt-3 text-[11px] text-zinc-400">
          The Hub automatically converts any Google Drive link into an instant direct-download link.
        </p>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-md transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

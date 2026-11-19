"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Screenshot } from "@/data/apps";

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
  appName: string;
}

export default function ScreenshotGallery({ screenshots, appName }: ScreenshotGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="p-8 rounded-2xl bg-surface-subtle border border-white/[0.08] text-center text-zinc-400 text-sm">
        Screenshots will be uploaded upon official release.
      </div>
    );
  }

  const currentScreenshot = screenshots[selectedIndex] || screenshots[0];

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="space-y-4">
      {/* Primary Selected Image Showcase */}
      <div className="group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-gold-500/40 bg-[#0a0b12] shadow-2xl transition-all duration-300">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={currentScreenshot.url}
            alt={currentScreenshot.caption || `${appName} screenshot ${selectedIndex + 1}`}
            fill
            className="object-contain p-2 sm:p-4 select-none"
            priority
          />
        </div>

        {/* Overlay Controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-6 pointer-events-none">
          <div className="flex justify-end pointer-events-auto">
            <button
              onClick={() => setLightboxOpen(true)}
              className="p-2.5 rounded-xl bg-black/60 hover:bg-gold-500 text-white hover:text-black border border-white/20 transition-all"
              aria-label="View fullscreen image"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          <div className="pointer-events-auto">
            <p className="text-xs sm:text-sm font-medium text-white drop-shadow">
              {currentScreenshot.caption}
            </p>
          </div>
        </div>

        {/* Left/Right Next & Prev arrow buttons if multiple screenshots */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-black/60 hover:bg-gold-500 text-white hover:text-black border border-white/10 opacity-0 group-hover:opacity-100 transition-all"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-black/60 hover:bg-gold-500 text-white hover:text-black border border-white/10 opacity-0 group-hover:opacity-100 transition-all"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Strip */}
      {screenshots.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {screenshots.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative flex-shrink-0 w-28 sm:w-36 aspect-[16/10] rounded-xl overflow-hidden border transition-all ${
                selectedIndex === idx
                  ? "border-gold-400 ring-2 ring-gold-400/30 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  : "border-white/[0.08] opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={s.url}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-fade-in">
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-10"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Fullscreen Image Container */}
          <div className="relative w-full max-w-6xl max-h-[85vh] aspect-[16/10]">
            <Image
              src={currentScreenshot.url}
              alt={currentScreenshot.caption}
              fill
              className="object-contain"
            />
          </div>

          {/* Caption in Lightbox */}
          <div className="absolute bottom-6 inset-x-0 text-center px-4">
            <span className="inline-block px-4 py-2 rounded-xl bg-black/70 border border-white/10 text-xs sm:text-sm text-zinc-200">
              {currentScreenshot.caption} ({selectedIndex + 1} / {screenshots.length})
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

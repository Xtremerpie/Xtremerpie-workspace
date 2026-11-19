"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Generate floating particles
    const particleCount = Math.min(Math.floor(width / 35), 45); // Limit particle density for 60fps
    const particles: Particle[] = [];

    const colors = [
      "rgba(212, 175, 55, ", // Gold
      "rgba(243, 208, 105, ", // Light Gold
      "rgba(230, 57, 70, ", // Crimson
      "rgba(255, 255, 255, ", // Star white
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle orbital rings centered near top
      const centerX = width * 0.5;
      const centerY = height * 0.28;

      angle += 0.0008;

      // Outer Orbital Ring 1
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.ellipse(0, 0, width * 0.42, width * 0.18, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(212, 175, 55, 0.06)";
      ctx.lineWidth = 1;
      ctx.setLineDash([8, 12]);
      ctx.stroke();

      // Satellite glow node on Ring 1
      const sat1X = Math.cos(angle * 2) * (width * 0.42);
      const sat1Y = Math.sin(angle * 2) * (width * 0.18);
      ctx.beginPath();
      ctx.arc(sat1X, sat1Y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(230, 57, 70, 0.6)";
      ctx.shadowColor = "#e63946";
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();

      // Outer Orbital Ring 2 (Counter-rotation)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-angle * 0.7);
      ctx.beginPath();
      ctx.ellipse(0, 0, width * 0.3, width * 0.12, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(230, 57, 70, 0.05)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.shadowColor = p.color.includes("230") ? "#e63946" : "#d4af37";
        ctx.shadowBlur = 4;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Deep Background Gradient Base */}
      <div className="absolute inset-0 bg-[#08080c]" />

      {/* Futuristic Grid Pattern */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)]" 
      />

      {/* Atmospheric Gold Radial Light Beams */}
      <div 
        className="absolute -top-[15%] left-[20%] w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] rounded-full opacity-20 blur-[130px] bg-gradient-to-br from-gold-500/30 via-gold-600/10 to-transparent animate-pulse-glow" 
      />

      {/* Atmospheric Crimson Radial Glow */}
      <div 
        className="absolute top-[35%] -right-[10%] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] rounded-full opacity-15 blur-[120px] bg-gradient-to-tl from-crimson-600/30 via-crimson-500/10 to-transparent" 
      />

      {/* Secondary Bottom Ambient Light */}
      <div 
        className="absolute -bottom-[20%] left-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full opacity-15 blur-[140px] bg-gradient-to-tr from-gold-600/20 via-surface/40 to-transparent" 
      />

      {/* Canvas for Orbitals & Stardust Particles */}
      {!reducedMotion && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-80"
        />
      )}

      {/* Interactive Cursor Following Light Halo */}
      {!reducedMotion && mousePos.x > 0 && (
        <div
          className="absolute w-[450px] h-[450px] rounded-full pointer-events-none transition-transform duration-300 ease-out -translate-x-1/2 -translate-y-1/2 opacity-25 blur-[90px]"
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)`,
            background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(230,57,70,0.1) 40%, transparent 70%)",
          }}
        />
      )}

      {/* Vignette Rim */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(4,4,6,0.75)_100%)]" />
    </div>
  );
}

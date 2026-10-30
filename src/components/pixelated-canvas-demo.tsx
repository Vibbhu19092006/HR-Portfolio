"use client";

import React, { useState } from "react";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { Sparkles, RefreshCw, Wand2, Eye } from "lucide-react";

export default function PixelatedCanvasDemo({
  src = "/images/vibbhu.jpg",
  width = 330,
  height = 400,
}: {
  src?: string;
  width?: number;
  height?: number;
}) {
  const [distortionMode, setDistortionMode] = useState<"swirl" | "repel" | "attract">("swirl");
  const [shape, setShape] = useState<"square" | "circle">("square");
  const [isHovered, setIsHovered] = useState(false);

  const toggleMode = () => {
    setDistortionMode((prev) =>
      prev === "swirl" ? "repel" : prev === "repel" ? "attract" : "swirl"
    );
  };

  const toggleShape = () => {
    setShape((prev) => (prev === "square" ? "circle" : "square"));
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 sm:p-4">
      {/* Interactive Container with Hover State */}
      <div
        className="relative group cursor-crosshair select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Ambient Glow */}
        <div
          className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-amber-400 to-rose-400 blur-lg transition-all duration-500 ${
            isHovered ? "opacity-75 scale-[1.02]" : "opacity-35"
          }`}
        />

        <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 bg-slate-950 shadow-2xl p-2.5">
          {/* Canvas & Image Frame */}
          <div
            className="relative rounded-xl overflow-hidden mx-auto bg-slate-950"
            style={{ width, height }}
          >
            {/* 1. Interactive Pixelated Canvas (active and responsive underneath) */}
            <PixelatedCanvas
              src={src}
              width={width}
              height={height}
              cellSize={3}
              dotScale={0.88}
              shape={shape}
              backgroundColor="#070b14"
              dropoutStrength={0.3}
              interactive
              distortionStrength={3.5}
              distortionRadius={90}
              distortionMode={distortionMode}
              followSpeed={0.25}
              jitterStrength={3.5}
              jitterSpeed={3.5}
              sampleAverage
              tintColor="#FFFFFF"
              tintStrength={0.15}
              className="w-full h-full block rounded-xl"
            />

            {/* 2. Original Portrait Image (visible when idle, fades smoothly on hover to reveal pixel effect) */}
            <div
              className={`absolute inset-0 z-10 transition-all duration-500 ease-in-out pointer-events-none overflow-hidden ${
                isHovered
                  ? "opacity-0 scale-105 blur-[1px]"
                  : "opacity-100 scale-100 blur-0"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="VIBBHU A Portrait"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
            </div>

            {/* Floating Interaction Prompt */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-300">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md border shadow-lg transition-all duration-300 ${
                  isHovered
                    ? "bg-amber-500/90 text-white border-amber-300/40 shadow-amber-500/20"
                    : "bg-slate-900/85 text-slate-200 border-white/20 animate-pulse"
                }`}
              >
                {isHovered ? (
                  <>
                    <Sparkles className="w-3 h-3 text-white animate-spin-once" />
                    <span>Pixel Effect Active • Move Cursor</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-3 h-3 text-amber-400" />
                    <span>Hover for Pixel Effect</span>
                  </>
                )}
              </span>
            </div>
          </div>

          {/* Overlay Status Bar */}
          <div className="mt-2.5 flex items-center justify-between px-2 text-xs">
            <div className="flex items-center gap-1.5 text-slate-300 font-medium">
              <span
                className={`w-2 h-2 rounded-full transition-colors ${
                  isHovered ? "bg-amber-400 animate-ping" : "bg-emerald-400"
                }`}
              />
              <span className="font-bold text-white text-[11px]">VIBBHU A</span>
              <span className="text-[10px] text-slate-400 font-mono">
                • {isHovered ? "Pixel Canvas" : "Original Photo"}
              </span>
            </div>

            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
              {isHovered ? distortionMode : "Ready"}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="flex items-center gap-2 mt-4 text-xs">
        <button
          type="button"
          onClick={toggleMode}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg font-semibold bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-amber-400 transition-colors shadow-sm"
          title="Switch pixel interaction mode"
        >
          <RefreshCw className="w-3 h-3 text-indigo-500" />
          <span>Mode: {distortionMode}</span>
        </button>

        <button
          type="button"
          onClick={toggleShape}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg font-semibold bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-amber-400 transition-colors shadow-sm"
          title="Switch pixel shape"
        >
          <Wand2 className="w-3 h-3 text-amber-500" />
          <span>Shape: {shape}</span>
        </button>
      </div>

      <p className="text-[11px] font-mono text-slate-400 mt-2 text-center">
        Hover over the portrait to morph into interactive pixels &amp; distortion physics
      </p>
    </div>
  );
}

export { PixelatedCanvas };

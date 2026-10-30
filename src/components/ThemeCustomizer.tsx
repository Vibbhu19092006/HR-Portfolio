"use client";

import React, { useEffect, useState } from "react";
import { Palette, Sparkles, Check } from "lucide-react";

export interface ColorTheme {
  id: string;
  name: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  previewGradient: string;
}

export const COLOR_THEMES: ColorTheme[] = [
  {
    id: "amber-indigo",
    name: "Indigo & Amber",
    description: "Classic HR & Executive Tech",
    primaryColor: "#4f46e5",
    secondaryColor: "#f59e0b",
    previewGradient: "from-indigo-600 via-amber-400 to-rose-400",
  },
  {
    id: "cyber-cyan",
    name: "Cyber Cyan",
    description: "Modern Security & Tech",
    primaryColor: "#0284c7",
    secondaryColor: "#06b6d4",
    previewGradient: "from-sky-500 via-cyan-400 to-blue-500",
  },
  {
    id: "emerald-teal",
    name: "Emerald Talent",
    description: "People Growth & Culture",
    primaryColor: "#059669",
    secondaryColor: "#10b981",
    previewGradient: "from-emerald-500 via-teal-400 to-green-500",
  },
  {
    id: "electric-violet",
    name: "Electric Violet",
    description: "High-Impact & Creative",
    primaryColor: "#7c3aed",
    secondaryColor: "#c026d3",
    previewGradient: "from-violet-500 via-fuchsia-400 to-rose-400",
  },
  {
    id: "warm-coral",
    name: "Warm Coral",
    description: "Approachable & People First",
    primaryColor: "#ea580c",
    secondaryColor: "#f59e0b",
    previewGradient: "from-orange-500 via-amber-400 to-rose-500",
  },
];

export function ThemeCustomizer() {
  const [activeTheme, setActiveTheme] = useState<string>("amber-indigo");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("hr_color_theme") || "amber-indigo";
    setActiveTheme(savedTheme);
    document.documentElement.setAttribute("data-color-theme", savedTheme);
  }, []);

  const changeTheme = (themeId: string) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute("data-color-theme", themeId);
    localStorage.setItem("hr_color_theme", themeId);
  };

  if (!mounted) return null;

  const current = COLOR_THEMES.find((t) => t.id === activeTheme) || COLOR_THEMES[0];

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:border-amber-400 dark:hover:border-amber-400 transition-all shadow-sm group"
        title="Change interactive text color theme"
        aria-label="Interactive color theme selector"
      >
        <span
          className="w-2.5 h-2.5 rounded-full animate-pulse shrink-0"
          style={{ backgroundColor: current.secondaryColor }}
        />
        <span className="hidden sm:inline font-mono text-[11px]">{current.name}</span>
        <Palette className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
      </button>

      {/* Dropdown Palette Picker */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-white/10">
              <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Interactive Text Theme
              </span>
              <span className="text-[10px] font-mono text-slate-400">5 Palettes</span>
            </div>

            <div className="space-y-1.5">
              {COLOR_THEMES.map((theme) => {
                const isSelected = activeTheme === theme.id;
                return (
                  <button
                    key={theme.id}
                    type="button"
                    onClick={() => {
                      changeTheme(theme.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all text-xs ${
                      isSelected
                        ? "bg-slate-100 dark:bg-slate-800 font-semibold ring-1 ring-amber-400/50"
                        : "hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {/* Dual-color swatch */}
                      <div className="flex items-center -space-x-1">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-white dark:border-slate-900 shadow-sm"
                          style={{ backgroundColor: theme.primaryColor }}
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-white dark:border-slate-900 shadow-sm"
                          style={{ backgroundColor: theme.secondaryColor }}
                        />
                      </div>
                      <div>
                        <div className="text-slate-900 dark:text-white font-medium">
                          {theme.name}
                        </div>
                        <div className="text-[10px] text-slate-400 leading-tight">
                          {theme.description}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

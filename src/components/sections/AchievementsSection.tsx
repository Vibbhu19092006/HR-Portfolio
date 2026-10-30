"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { AchievementCard } from "@/components/cards/AchievementCard";
import { Card, CardTitle, CardDescription } from "@/components/ui/cards-demo-3";
import { Trophy, LayoutGrid, Clock, Medal, CheckCircle2 } from "lucide-react";

export function AchievementsSection() {
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("grid");

  return (
    <section id="achievements" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="ambient-glow top-20 right-10 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors &amp; Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Competitions &amp; Achievements
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Consistently recognized in state-level startup summits, collegiate hackathons, and
            competitive innovation arenas for teamwork, resilience, and problem-solving.
          </p>

          {/* View Mode Toggle */}
          <div className="inline-flex items-center p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 mt-6 shadow-sm">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                viewMode === "grid"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards Grid</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("timeline")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                viewMode === "timeline"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Animated Timeline</span>
            </button>
          </div>
        </div>

        {/* Card Grid View (Without Image Preview) */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.achievements.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full"
              >
                <AchievementCard item={item} />
              </motion.div>
            ))}
          </div>
        ) : (
          /* Animated Timeline View (Without Image Preview) */
          <div className="relative max-w-3xl mx-auto py-6">
            <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber-400 via-indigo-500 to-amber-500 sm:-translate-x-1/2" />
            <div className="space-y-8">
              {portfolioData.achievements.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Node marker */}
                    <div className="absolute left-6 sm:left-1/2 w-8 h-8 rounded-full bg-amber-400 text-slate-900 border-4 border-white dark:border-slate-900 flex items-center justify-center -translate-x-1/2 z-20 shadow-md">
                      <Medal className="w-4 h-4 text-slate-950" />
                    </div>

                    <div className="hidden sm:block sm:w-1/2" />

                    <div className="ml-14 sm:ml-0 sm:w-1/2 sm:px-6 w-full">
                      <Card className="hover:border-amber-400/50 shadow-md">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-200/60 dark:border-amber-800/40">
                            {item.award}
                          </span>
                          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                            {item.year}
                          </span>
                        </div>
                        <CardTitle className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </CardTitle>
                        <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5 mb-2">
                          {item.organization}
                        </div>
                        <CardDescription className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                          {item.description}
                        </CardDescription>
                        <div className="pt-3 border-t border-slate-200/60 dark:border-white/10 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1.5 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                            Verified Honor
                          </span>
                          <span className="font-mono text-[11px] text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                            Honors
                          </span>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

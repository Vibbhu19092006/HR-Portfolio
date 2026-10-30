"use client";

import React from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/cards-demo-3";
import { AchievementItem } from "@/data/portfolio";
import { Trophy, Calendar, Medal, CheckCircle2 } from "lucide-react";

export function AchievementCard({ item }: { item: AchievementItem }) {
  return (
    <Card className="h-full flex flex-col justify-between border-slate-200/90 dark:border-white/10 hover:border-amber-400/50 dark:hover:border-amber-400/50 shadow-md">
      <div>
        {/* Award & Year Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            {item.award}
          </span>
          <div className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{item.year}</span>
          </div>
        </div>

        {/* Title */}
        <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1.5">
          {item.title}
        </CardTitle>

        {/* Organization */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
          <Medal className="w-4 h-4" />
          <span>{item.organization}</span>
        </div>

        {/* Description */}
        <CardDescription className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
          {item.description}
        </CardDescription>
      </div>

      {/* Clean verification footer without image preview */}
      <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
          <span>Recognized Award</span>
        </div>
        <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 dark:bg-slate-800 border border-amber-200/60 dark:border-white/5">
          Honors
        </span>
      </div>
    </Card>
  );
}

"use client";

import React from "react";
import { Card, CardTitle, CardDescription, Sparkles } from "@/components/ui/cards-demo-3";
import { ImagesBadge } from "@/components/ui/images-badge";
import { ExperienceItem } from "@/data/portfolio";
import { Briefcase, Calendar, CheckCircle2, Building2 } from "lucide-react";

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <Card className="h-full flex flex-col justify-between border-slate-200/90 dark:border-white/10 hover:border-amber-400/50 dark:hover:border-amber-400/50 shadow-md">
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40">
            <Building2 className="w-3.5 h-3.5 text-indigo-500" />
            {item.organization}
          </div>
          <div className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{item.period}</span>
          </div>
        </div>

        {/* Title */}
        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {item.role}
        </CardTitle>

        {/* Description */}
        <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
          {item.description}
        </CardDescription>

        {/* Skills Tag Pills */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
            Key Competencies & Outreach Skills:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {item.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-400/60 transition-colors"
              >
                <CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer with Verified badge */}
      <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span>{item.organization} Verified Program</span>
        </div>
        <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40">
          {item.period}
        </span>
      </div>
    </Card>
  );
}

"use client";

import React from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/cards-demo-3";
import { CertificationItem } from "@/data/portfolio";
import { Award, Calendar, CheckCircle2, ShieldCheck } from "lucide-react";

export function CertificationCard({ cert }: { cert: CertificationItem }) {
  const isHR = cert.category === "HR & Professional";

  return (
    <Card className="h-full flex flex-col justify-between border-slate-200/90 dark:border-white/10 hover:border-amber-400/50 dark:hover:border-amber-400/50 shadow-md">
      <div>
        {/* Category & Year */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
              isHR
                ? "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200/60 dark:border-amber-800/40"
                : "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200/60 dark:border-indigo-800/40"
            }`}
          >
            <Award className="w-3 h-3" />
            {cert.category}
          </span>
          <div className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{cert.year}</span>
          </div>
        </div>

        {/* Title */}
        <CardTitle className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">
          {cert.title}
        </CardTitle>

        {/* Issuer */}
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 mb-4">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {cert.issuer}
          </span>
        </div>
      </div>

      {/* Clean verification footer without image preview */}
      <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span>Verified Credential</span>
        </div>
        <span className="text-[11px] font-mono text-indigo-600 dark:text-amber-400 font-semibold px-2 py-0.5 rounded bg-indigo-50 dark:bg-slate-800 border border-slate-200/60 dark:border-white/5">
          {cert.issuer}
        </span>
      </div>
    </Card>
  );
}

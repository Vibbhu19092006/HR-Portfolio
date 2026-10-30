"use client";

import React from "react";
import { Card, CardTitle, CardDescription, Sparkles } from "@/components/ui/cards-demo-3";
import { ImagesBadge } from "@/components/ui/images-badge";
import { ProjectItem } from "@/data/portfolio";
import { ExternalLink, Calendar, Code2, Layers, CheckCircle } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Card className="h-full flex flex-col justify-between border-slate-200/90 dark:border-white/10 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 shadow-md">
      <div>
        {/* Header & Year */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40">
            <Layers className="w-3.5 h-3.5 text-amber-500" />
            {project.subtitle}
          </div>
          <div className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{project.year}</span>
          </div>
        </div>

        {/* Title */}
        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-3">
          {project.title}
        </CardTitle>

        {/* Highlights / Bullets */}
        <div className="space-y-2 mb-5">
          {project.highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <CheckCircle className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-6">
          <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
            <Code2 className="w-3.5 h-3.5" /> Tech Stack:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer: Verified System status + GitHub Link Button */}
      <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
          <span>Full-Stack Application</span>
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-indigo-600 dark:hover:bg-amber-400 dark:hover:text-slate-900 transition-colors shadow-sm"
          title="GitHub Repository (User placeholder link)"
        >
          <GitHubIcon className="w-3.5 h-3.5" />
          <span>View on GitHub</span>
        </a>
      </div>
    </Card>
  );
}

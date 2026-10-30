"use client";

import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { FolderGit2 } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="ambient-glow top-20 left-10 w-80 h-80 bg-indigo-600/10 dark:bg-indigo-600/10" />
      <div className="ambient-glow bottom-10 right-10 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Technical Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Software &amp; Security Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Full-stack systems demonstrating structured problem solving, database architecture,
            and safety-critical features built with modern web technologies.
          </p>
        </div>

        {/* Project Cards Grid using cards-demo-3 style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { Card, CardTitle, CardDescription } from "@/components/ui/cards-demo-3";
import PixelatedCanvasDemo from "@/components/pixelated-canvas-demo";
import {
  GraduationCap,
  Calendar,
  Building2,
  Sparkles,
  CheckCircle2,
  UserCheck,
  Target,
  Award,
} from "lucide-react";

export function AboutEducationSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Journey &amp; Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About &amp; Profile Spotlight
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Combining rigorous computer engineering discipline with people-first HR operations,
            candidate screening, and student community outreach.
          </p>
        </div>

        {/* Interactive Pixelated Canvas & Profile Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 max-w-6xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl"
        >
          {/* Left Column: Pixelated Canvas Demo with Vibbhu's Photo */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <PixelatedCanvasDemo
              src="/images/vibbhu.jpg"
              width={310}
              height={380}
            />
          </div>

          {/* Right Column: Key Focus Areas & Leadership Snapshot */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Interactive Digital Canvas • VIBBHU A</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Bridging Technical Problem Solving &amp;{" "}
              <span className="theme-gradient-text">Human-Centric HR Operations</span>
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              As a B.E Computer Science &amp; Cyber Security student at{" "}
              <strong className="text-slate-900 dark:text-white">Sri Eshwar College of Engineering</strong>,
              I cultivate a dual strength: structured analytical precision paired with genuine empathy for people,
              recruiting, and team development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1">
                  <UserCheck className="w-4 h-4 text-indigo-500" />
                  <span>Candidate Screening</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Aptitude for matching candidate strengths to operational requisites with accuracy.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1">
                  <Target className="w-4 h-4 text-amber-500" />
                  <span>Interview Scheduling</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Disciplined tracking, prompt correspondence, and streamlined candidate logistics.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Coimbatore, Tamil Nadu • 8.14 CGPA • Open to Trainee Opportunities</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {portfolioData.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-sm text-center group hover:border-amber-400/50 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-black theme-gradient-text mb-1">
                {stat.value}
                <span className="theme-accent-text">{stat.suffix}</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline spine */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-amber-400 to-indigo-500 sm:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-12">
            {portfolioData.education.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-amber-400 dark:border-amber-400 shadow-md flex items-center justify-center -translate-x-1/2 z-20">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                  </div>

                  {/* Spacer for other half */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card using cards-demo-3 style */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-6 w-full">
                    <Card className="hover:border-amber-400/50 dark:hover:border-amber-400/50 shadow-md">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-200/60 dark:border-amber-800/40">
                          {item.score}
                        </span>
                      </div>

                      <CardTitle className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.degree}
                      </CardTitle>

                      <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1 mb-2">
                        <Building2 className="w-4 h-4 text-indigo-500 shrink-0" />
                        <span>{item.institution}</span>
                      </div>

                      {item.description && (
                        <CardDescription className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
                          {item.description}
                        </CardDescription>
                      )}

                      {item.scoreLabel && (
                        <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                          <span>Status: {item.scoreLabel}</span>
                          <span className="text-emerald-500 font-semibold">Active Record</span>
                        </div>
                      )}
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

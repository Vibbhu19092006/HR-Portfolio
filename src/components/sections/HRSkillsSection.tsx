"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { Card, CardTitle, CardDescription } from "@/components/ui/cards-demo-3";
import {
  Users,
  UserCheck,
  CalendarCheck,
  FileCheck2,
  FileSpreadsheet,
  CheckCircle2,
  MailCheck,
  ListTodo,
  MessageSquare,
  Award,
  Sparkles,
  ShieldCheck,
  Target,
} from "lucide-react";

export function HRSkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...portfolioData.hrSkills.map((c) => c.category)];

  const getSkillIcon = (name: string) => {
    switch (name) {
      case "Candidate Screening":
        return <UserCheck className="w-5 h-5 text-indigo-500" />;
      case "Interview Scheduling":
        return <CalendarCheck className="w-5 h-5 text-amber-500" />;
      case "Documentation Management":
        return <FileCheck2 className="w-5 h-5 text-emerald-500" />;
      case "Data Accuracy":
        return <ShieldCheck className="w-5 h-5 text-cyan-500" />;
      case "Spreadsheet Tracking":
        return <FileSpreadsheet className="w-5 h-5 text-emerald-500" />;
      case "Task Coordination":
        return <ListTodo className="w-5 h-5 text-indigo-500" />;
      case "Professional Email Communication":
        return <MailCheck className="w-5 h-5 text-amber-500" />;
      case "Communication":
        return <MessageSquare className="w-5 h-5 text-rose-500" />;
      case "Leadership":
        return <Award className="w-5 h-5 text-amber-500" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-indigo-500" />;
    }
  };

  const filteredGroups =
    selectedCategory === "All"
      ? portfolioData.hrSkills
      : portfolioData.hrSkills.filter((c) => c.category === selectedCategory);

  return (
    <section id="hr-skills" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/40">
      {/* Glow elements */}
      <div className="ambient-glow top-10 right-10 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/10" />
      <div className="ambient-glow bottom-10 left-10 w-96 h-96 bg-indigo-600/10 dark:bg-indigo-600/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Core HR Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            HR Skills &amp; Strengths
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            People-first skills honed through active campus ambassadorship, student community
            engagement, and meticulous administrative coordination.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-indigo-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grouped Skills Grid */}
        <div className="space-y-12">
          {filteredGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="space-y-5"
            >
              {/* Category Header Bar */}
              <div className="flex items-center gap-3">
                <div className="h-7 w-1.5 rounded-full bg-gradient-to-b from-indigo-500 to-amber-500" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Skills Chips / Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md hover:border-indigo-400/50 dark:hover:border-amber-400/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-white/5 group-hover:scale-110 transition-transform">
                          {getSkillIcon(skill.name)}
                        </div>
                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40">
                          {skill.proficiency || 95}% Proficiency
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:theme-accent-text transition-colors">
                        {skill.name}
                      </h4>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5">
                      <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency || 90}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            background: "linear-gradient(90deg, var(--primary-from), var(--primary-via), var(--primary-to))",
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

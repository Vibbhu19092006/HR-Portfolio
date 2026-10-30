"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "@/data/portfolio";
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
  Code,
  Database,
  Shield,
  Wrench,
  Search,
} from "lucide-react";

export function SkillsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filterTabs = [
    "All",
    "HR Competencies",
    "Administrative Skills",
    "Soft Skills",
    "Technical & Tools",
  ];

  const getHRIcon = (name: string) => {
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

  const getTechIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code className="w-4 h-4 text-indigo-500" />;
      case "Database":
        return <Database className="w-4 h-4 text-emerald-500" />;
      case "Core Security Concepts":
        return <Shield className="w-4 h-4 text-rose-500" />;
      case "Tools & Platforms":
        return <Wrench className="w-4 h-4 text-amber-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-500" />;
    }
  };

  // Determine which HR skill categories to show based on filter
  const showHRSkills =
    selectedFilter === "All" ||
    selectedFilter === "HR Competencies" ||
    selectedFilter === "Administrative Skills" ||
    selectedFilter === "Soft Skills";

  const showTechSkills =
    selectedFilter === "All" || selectedFilter === "Technical & Tools";

  const filteredHRGroups = portfolioData.hrSkills.filter((group) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "HR Competencies" && group.category === "HR Skills") return true;
    if (selectedFilter === "Administrative Skills" && group.category === "Administrative Skills") return true;
    if (selectedFilter === "Soft Skills" && group.category === "Soft Skills") return true;
    return false;
  });

  return (
    <section id="skills" className="py-24 relative bg-slate-50/50 dark:bg-slate-950/40">
      {/* Glow elements */}
      <div className="ambient-glow top-10 right-10 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/10" />
      <div className="ambient-glow bottom-10 left-10 w-96 h-96 bg-indigo-600/10 dark:bg-indigo-600/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Comprehensive Capability Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills &amp; Competencies
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            People-first HR capabilities refined through campus ambassadorship, combined with
            a structured technical foundation in systems, data, and security.
          </p>

          {/* Filter Pills & Quick Search */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedFilter(tab)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    selectedFilter === tab
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Quick Keyword Search */}
            <div className="relative w-full sm:w-56">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search any skill..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* ================= HR & PEOPLE COMPETENCIES ================= */}
        {showHRSkills && (
          <div className="space-y-10 mb-16">
            {filteredHRGroups.map((group, groupIdx) => {
              const matchedSkills = group.skills.filter(
                (skill) =>
                  skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  (skill.description &&
                    skill.description.toLowerCase().includes(searchTerm.toLowerCase()))
              );

              if (matchedSkills.length === 0) return null;

              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
                  className="space-y-4"
                >
                  {/* Category Title & Description */}
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-1.5 rounded-full bg-gradient-to-b from-indigo-500 to-amber-500" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {group.category}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Cards Grid - ZERO percentages, clean capability badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {matchedSkills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -3, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md hover:border-indigo-400/50 dark:hover:border-amber-400/40 transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-white/5 group-hover:scale-105 transition-transform">
                              {getHRIcon(skill.name)}
                            </div>
                            {/* Descriptive capability badge instead of a numeric percentage */}
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40">
                              {skill.tag || "Core Competency"}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:theme-accent-text transition-colors">
                            {skill.name}
                          </h4>

                          {skill.description && (
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                              {skill.description}
                            </p>
                          )}
                        </div>

                        {/* Status Footer Tag */}
                        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Verified Capability
                          </span>
                          <span className="text-indigo-500 font-medium">{group.category}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* ================= TECHNICAL & PRODUCTIVITY PLATFORMS ================= */}
        {showTechSkills && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-6 w-1.5 rounded-full bg-gradient-to-b from-amber-500 to-indigo-500" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Technical Foundation &amp; Productivity Platforms
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Programming languages, databases, security concepts, and enterprise tracking tools.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {Object.entries(portfolioData.technicalSkills).map(
                ([category, skills], catIndex) => {
                  const filteredSkills = skills.filter((s) =>
                    s.toLowerCase().includes(searchTerm.toLowerCase())
                  );

                  if (filteredSkills.length === 0) return null;

                  return (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                      className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-indigo-400/50 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-4">
                          <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                            {getTechIcon(category)}
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-slate-900 dark:text-white">
                              {category}
                            </h4>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">
                              {filteredSkills.length} competencies verified
                            </p>
                          </div>
                        </div>

                        {/* Skill Chips */}
                        <div className="flex flex-wrap gap-2">
                          {filteredSkills.map((skill, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/70 dark:border-white/5 hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-300 hover:scale-105 transition-all cursor-default"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>Category: {category}</span>
                        <span className="text-indigo-500 font-medium">Curriculum Verified</span>
                      </div>
                    </motion.div>
                  );
                }
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

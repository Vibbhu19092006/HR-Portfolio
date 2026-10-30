"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { CertificationCard } from "@/components/cards/CertificationCard";
import { AchievementCard } from "@/components/cards/AchievementCard";
import { Card, CardTitle, CardDescription } from "@/components/ui/cards-demo-3";
import {
  Briefcase,
  FolderGit2,
  Award,
  Trophy,
  LayoutGrid,
  Clock,
} from "lucide-react";

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<
    "all" | "experience" | "projects" | "certifications" | "achievements"
  >("all");
  const [certFilter, setCertFilter] = useState<string>("All");
  const [achieveView, setAchieveView] = useState<"grid" | "timeline">("grid");

  const tabs = [
    { id: "all", label: "All Experience & Work" },
    { id: "experience", label: "Campus Leadership" },
    { id: "projects", label: "Technical Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "achievements", label: "Achievements & Awards" },
  ];

  const certCategories = ["All", "HR & Professional", "Technical & Cloud"];

  const filteredCerts =
    certFilter === "All"
      ? portfolioData.certifications
      : portfolioData.certifications.filter((c) => c.category === certFilter);

  return (
    <section id="experience" className="py-24 relative">
      {/* Ambient background glows */}
      <div className="ambient-glow top-20 left-10 w-80 h-80 bg-indigo-600/10 dark:bg-indigo-600/10" />
      <div className="ambient-glow bottom-20 right-10 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience, Projects &amp; Credentials
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Hands-on campus leadership, real-world cyber security development, certified professional
            qualifications, and competitive hackathon honors.
          </p>

          {/* Subcategory Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-105"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-indigo-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ================= SUBSECTION: CAMPUS LEADERSHIP & EXPERIENCE ================= */}
        {(activeTab === "all" || activeTab === "experience") && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/40">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Leadership &amp; Campus Ambassadorship
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Student outreach, peer coordination, and public relations initiatives.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
              {portfolioData.experiences.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <ExperienceCard item={item} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SUBSECTION: TECHNICAL PROJECTS ================= */}
        {(activeTab === "all" || activeTab === "projects") && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/40">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Technical &amp; Security Projects
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Engineering systems applying analytical precision and database design.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SUBSECTION: CERTIFICATIONS ================= */}
        {(activeTab === "all" || activeTab === "certifications") && (
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Professional Certifications
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Verified credentials across HR workflows, cloud systems, and cyber security.
                  </p>
                </div>
              </div>

              {/* Sub-filter for cert categories */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10">
                {certCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCertFilter(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      certFilter === cat
                        ? "bg-amber-500 text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCerts.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="h-full"
                >
                  <CertificationCard cert={cert} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SUBSECTION: COMPETITIONS & ACHIEVEMENTS ================= */}
        {(activeTab === "all" || activeTab === "achievements") && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/40">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Key Competitions &amp; Honors
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Recognized achievements in state-level project schemes and collegiate hackathons.
                  </p>
                </div>
              </div>

              {/* View Switcher: Cards Grid vs Animated Timeline */}
              <div className="inline-flex items-center p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm">
                <button
                  type="button"
                  onClick={() => setAchieveView("grid")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    achieveView === "grid"
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Cards</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAchieveView("timeline")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    achieveView === "timeline"
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Timeline</span>
                </button>
              </div>
            </div>

            {achieveView === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.achievements.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="h-full"
                  >
                    <AchievementCard item={item} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="relative max-w-4xl mx-auto py-4">
                <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber-500 via-indigo-500 to-amber-500 sm:-translate-x-1/2" />
                <div className="space-y-8">
                  {portfolioData.achievements.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className={`relative flex flex-col sm:flex-row items-start ${
                          isEven ? "sm:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="absolute left-4 sm:left-1/2 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-4 border-amber-400 shadow-md flex items-center justify-center -translate-x-1/2 z-20">
                          <Trophy className="w-2.5 h-2.5 text-indigo-600 dark:text-amber-400" />
                        </div>
                        <div className="hidden sm:block sm:w-1/2" />
                        <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-6 w-full">
                          <Card className="hover:border-amber-400/50 shadow-md">
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40">
                                {item.award}
                              </span>
                              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                                {item.year}
                              </span>
                            </div>
                            <CardTitle className="text-base font-bold text-slate-900 dark:text-white">
                              {item.title}
                            </CardTitle>
                            <div className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                              {item.organization}
                            </div>
                            <CardDescription className="text-xs text-slate-600 dark:text-slate-300">
                              {item.description}
                            </CardDescription>
                          </Card>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

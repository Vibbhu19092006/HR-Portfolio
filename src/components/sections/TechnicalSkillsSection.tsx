"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { Code, Database, Shield, Wrench, Search, Sparkles } from "lucide-react";

export function TechnicalSkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const tabList = ["All", ...Object.keys(portfolioData.technicalSkills)];

  const getCategoryIcon = (category: string) => {
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

  const getCategoriesToShow = () => {
    if (activeTab === "All") {
      return Object.entries(portfolioData.technicalSkills);
    }
    return Object.entries(portfolioData.technicalSkills).filter(
      ([cat]) => cat === activeTab
    );
  };

  return (
    <section id="technical-skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40 mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>Technical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills &amp; Platforms
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Proficiencies in programming languages, databases, security concepts, and daily
            productivity &amp; tracking platforms essential for technical HR recruiting and analytics.
          </p>

          {/* Search & Tabs Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10">
              {tabList.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === tab
                      ? "bg-white dark:bg-indigo-600 text-indigo-700 dark:text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Quick Search Bar */}
            <div className="relative w-full sm:w-60">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Filter skill or tool..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Grouped Skills Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {getCategoriesToShow().map(([category, skills], catIndex) => {
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
                className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-indigo-400/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                      {getCategoryIcon(category)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {category}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {filteredSkills.length} competencies
                      </p>
                    </div>
                  </div>

                  {/* Skills Cloud */}
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
                  <span className="text-indigo-500 font-medium">Verified in Curriculum</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

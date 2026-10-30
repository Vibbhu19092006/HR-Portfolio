"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { CertificationCard } from "@/components/cards/CertificationCard";
import { Award, CheckCircle, Shield } from "lucide-react";

export function CertificationsSection() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "HR & Professional", "Technical & Cloud"];

  const filteredCerts =
    filter === "All"
      ? portfolioData.certifications
      : portfolioData.certifications.filter((c) => c.category === filter);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials &amp; Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Verified credentials in HR workflows, job interviewing, Cambridge communication,
            cloud fundamentals, and cyber defense.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  filter === cat
                    ? "bg-amber-500 text-white shadow-md shadow-amber-500/30 scale-105"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-amber-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid using cards-demo-3 style and expandable ImagesBadge */}
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
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import PixelatedCanvasDemo from "@/components/pixelated-canvas-demo";
import { Card, CardTitle, CardDescription } from "@/components/ui/cards-demo-3";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import {
  FileDown,
  Mail,
  ChevronDown,
  Sparkles,
  GraduationCap,
  Calendar,
  Building2,
  UserCheck,
  Target,
  CheckCircle2,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export function AboutLandingSection() {
  // Typewriter effect for roles
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = portfolioData.personal.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 25 : 55;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, roles]);

  return (
    <section id="about" className="relative w-full pt-28 sm:pt-32 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow top-16 left-1/4 w-[36rem] h-[36rem] bg-indigo-600/15 dark:bg-indigo-600/20" />
      <div className="ambient-glow top-40 right-1/4 w-[30rem] h-[30rem] bg-amber-500/15 dark:bg-amber-500/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================= LANDING PAGE HERO WITH PORTRAIT PIXEL CANVAS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-140px)] mb-20">
          {/* Left Column: Introductions, Headlines, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50/90 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/50 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to HR Trainee &amp; Talent Acquisition</span>
            </motion.div>

            {/* Main Greeting & Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hello, I&apos;m{" "}
                <span className="theme-gradient-text transition-all duration-300">
                  {portfolioData.personal.name}
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-200">
                {portfolioData.personal.headline}
              </h2>
            </motion.div>

            {/* Interactive Typewriter Display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10 flex items-center justify-center lg:justify-start"
            >
              <span className="text-sm sm:text-base md:text-lg font-semibold theme-accent-text font-mono transition-colors duration-300">
                &gt; {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Concise Bio / Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
            >
              {portfolioData.personal.tagline}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <a
                href={portfolioData.personal.resumeUrl}
                download="VIBBHU_A_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Skills</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:border-indigo-400 hover:-translate-y-0.5 transition-all shadow-sm"
              >
                <Briefcase className="w-4 h-4 text-indigo-500" />
                <span>Experience</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </motion.div>

            {/* Social Profile Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1"
            >
              <a
                href={portfolioData.personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-amber-400 transition-colors border border-slate-200/60 dark:border-white/10 shadow-sm"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#0077B5]" />
                <span>LinkedIn: {portfolioData.personal.linkedInUser}</span>
              </a>

              <a
                href={portfolioData.personal.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-amber-400 transition-colors border border-slate-200/60 dark:border-white/10 shadow-sm"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-slate-900 dark:text-white" />
                <span>GitHub: {portfolioData.personal.gitHubUser}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: PORTRAIT PIXEL IMAGE (Featured Landing Page Visual) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative">
              {/* Highlight badge above portrait */}
              <div className="mb-3 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-once" />
                  <span>Interactive Portrait • Landing Showcase</span>
                </span>
              </div>

              {/* Pixelated Canvas Component */}
              <PixelatedCanvasDemo
                src="/images/vibbhu.jpg"
                width={330}
                height={400}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator prompting next content */}
        <div className="flex flex-col items-center pb-12 text-slate-400 dark:text-slate-500">
          <span className="text-[11px] font-mono uppercase tracking-widest mb-1 flex items-center gap-1 theme-accent-text">
            Scroll to explore Academic Background &amp; Profile Details
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-indigo-500" />
        </div>

        {/* ================= STATS & PROFILE SPOTLIGHT ================= */}
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

        {/* Core Pillars / Focus Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40 mb-3">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Core Profile Philosophy</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
              Bridging Technical Precision &amp;{" "}
              <span className="theme-gradient-text">Human-Centric Talent Operations</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              As a B.E Computer Science &amp; Cyber Security student at{" "}
              <strong className="text-slate-900 dark:text-white">Sri Eshwar College of Engineering</strong>,
              I cultivate structured analytical thinking alongside a genuine passion for people, candidate screening,
              interview coordination, and student community outreach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                <UserCheck className="w-4 h-4 text-indigo-500" />
                <span>Candidate Screening</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Evaluating candidate strengths against role specifications with high attention to detail.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                <Target className="w-4 h-4 text-amber-500" />
                <span>Interview Scheduling</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Disciplined tracking, prompt correspondence, and streamlined candidate logistics.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Community Engagement</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Direct peer engagement and campus outreach cultivated through Internshala ambassadorship.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= EDUCATION TIMELINE ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education Journey
          </h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
            Consistent academic excellence from high school through collegiate engineering studies.
          </p>
        </div>

        {/* Vertical Timeline */}
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

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { ImagesBadge } from "@/components/ui/images-badge";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import {
  FileDown,
  Mail,
  FolderGit2,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  // Typewriter effect
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = portfolioData.personal.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

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
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[175vh] w-full bg-slate-50 dark:bg-[#070b14] overflow-clip"
    >
      {/* Background ambient lighting */}
      <div className="ambient-glow top-20 left-1/4 w-[32rem] h-[32rem] bg-indigo-600/15 dark:bg-indigo-600/20" />
      <div className="ambient-glow top-40 right-1/4 w-[28rem] h-[28rem] bg-amber-500/15 dark:bg-amber-500/15" />

      {/* Google Gemini Effect Component */}
      <GoogleGeminiEffect
        className="top-24 sm:top-28 md:top-32"
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title={
          <div className="flex flex-col items-center">
            {/* Status Pill & User Identification */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50/80 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/50 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open to HR Trainee &amp; Talent Acquisition</span>
              </div>

              {/* Photo pill of Vibbhu */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="w-5 h-5 rounded-full overflow-hidden border border-amber-400 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/vibbhu.jpg"
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {portfolioData.personal.name}
                </span>
              </div>
            </div>

            {/* Interactive Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-2 select-none">
              Hello, I&apos;m{" "}
              <span className="theme-gradient-text transition-all duration-300">
                {portfolioData.personal.name}
              </span>
            </h1>

            {/* Headline */}
            <h2 className="text-base sm:text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-200 mt-1">
              {portfolioData.personal.headline}
            </h2>

            {/* Interactive Typewriter text */}
            <div className="h-8 my-2 flex items-center justify-center">
              <span className="text-sm sm:text-base md:text-lg font-semibold theme-accent-text font-mono transition-colors duration-300">
                &gt; {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>
        }
        description={
          <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto block leading-relaxed px-4">
            {portfolioData.personal.tagline}
          </span>
        }
      >
        {/* Children: Action buttons, Socials, Profile images-badge-demo */}
        <div className="flex flex-col items-center gap-6 mt-4 max-w-xl mx-auto px-4">
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={portfolioData.personal.resumeUrl}
              download="VIBBHU_A_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:border-indigo-400 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <FolderGit2 className="w-4 h-4 text-indigo-500" />
              <span>View Projects</span>
            </a>
          </div>

          {/* Social Profiles & Verified Profile Photo badge */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            <a
              href={portfolioData.personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-amber-400 transition-colors border border-slate-200/60 dark:border-white/10 shadow-sm"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-[#0077B5]" />
              <span>{portfolioData.personal.linkedInUser}</span>
            </a>

            <a
              href={portfolioData.personal.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-amber-400 transition-colors border border-slate-200/60 dark:border-white/10 shadow-sm"
            >
              <GitHubIcon className="w-3.5 h-3.5 text-slate-900 dark:text-white" />
              <span>{portfolioData.personal.gitHubUser}</span>
            </a>

            {/* Profile photo badge with real photo of Vibbhu */}
            <div className="p-1 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/10 shadow-sm">
              <ImagesBadge
                text="VIBBHU A (Photo)"
                images={["/images/vibbhu.jpg"]}
                folderSize={{ width: 34, height: 24 }}
                teaserImageSize={{ width: 20, height: 14 }}
                hoverImageSize={{ width: 52, height: 36 }}
              />
            </div>
          </div>

          {/* Scroll Down Prompt */}
          <div className="flex flex-col items-center pt-2 text-slate-400 dark:text-slate-500">
            <span className="text-[11px] font-mono uppercase tracking-widest mb-1 flex items-center gap-1 theme-accent-text">
              <Sparkles className="w-3 h-3 text-amber-400 animate-spin-once" />
              Scroll to explore Gemini effect
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-indigo-500" />
          </div>
        </div>
      </GoogleGeminiEffect>
    </section>
  );
}

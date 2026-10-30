"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { Moon, Sun, Menu, X, FileDown, Sparkles } from "lucide-react";
import { ThemeCustomizer } from "@/components/ThemeCustomizer";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Top scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
    // Initial theme check
    const savedTheme = localStorage.getItem("hr_portfolio_theme");
    if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for the 4 primary components
      const sections = ["about", "skills", "experience", "contact"];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("hr_portfolio_theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("hr_portfolio_theme", "dark");
    }
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-amber-400 to-coral-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Main Header / Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/60 dark:border-white/10 shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#about"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Vibbhu A Portfolio"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-amber-400/80 dark:border-amber-400 shadow-md group-hover:scale-105 group-hover:border-indigo-500 transition-all shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={portfolioData.personal.avatar}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-amber-400 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400">
                Aspiring HR Professional
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1.5 rounded-full bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-inner">
            {portfolioData.navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-white dark:bg-indigo-600 text-indigo-700 dark:text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Palette + Dark Mode + Resume CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Interactive Theme Palette Selector */}
            <ThemeCustomizer />

            {/* Dark / Light Mode Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
            >
              {mounted && theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-once" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Quick Resume Link */}
            <a
              href={portfolioData.personal.resumeUrl}
              download="VIBBHU_A_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white shadow-sm hover:shadow transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open Navigation Menu"
              className="lg:hidden p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-4 py-4 shadow-xl"
          >
            <div className="flex flex-col space-y-1">
              {portfolioData.navigation.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-amber-400 font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex justify-between items-center">
                <a
                  href={portfolioData.personal.resumeUrl}
                  download="VIBBHU_A_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-amber-500 hover:bg-amber-600 text-white"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}

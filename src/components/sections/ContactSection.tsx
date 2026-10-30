"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { portfolioData } from "@/data/portfolio";
import {
  Mail,
  Phone,
  Send,
  Copy,
  Check,
  ArrowUp,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";

export function ContactSection() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write a message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Front-end only simulated submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#4f46e5", "#f59e0b", "#fb7185", "#10b981"],
        });
      } catch (err) {
        console.error("Confetti trigger failed", err);
      }
    }, 900);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="pt-20 pb-12 relative bg-slate-50/70 dark:bg-slate-950/70">
      <div className="ambient-glow top-20 left-10 w-80 h-80 bg-indigo-600/10 dark:bg-indigo-600/10" />
      <div className="ambient-glow bottom-20 right-10 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Let&apos;s Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Interested in discussing HR internship roles, talent acquisition initiatives, or
            campus collaboration? Feel free to reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto mb-20">
          {/* Contact Details & Click to Copy Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Reach out directly via email, phone, or connect across professional platforms.
              </p>

              {/* Email Card with Click to Copy */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5 mb-3 group">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Email Address
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(portfolioData.personal.email, "email")}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-amber-400 hover:underline"
                    title="Copy Email"
                  >
                    {copiedType === "email" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white break-all">
                  <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="hover:text-indigo-600 dark:hover:text-amber-400 transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              {/* Phone Card with Click to Copy */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5 mb-3 group">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Phone Number
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(portfolioData.personal.phone, "phone")}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-amber-400 hover:underline"
                    title="Copy Phone"
                  >
                    {copiedType === "phone" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <a
                    href={`tel:${portfolioData.personal.phone}`}
                    className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    +91 {portfolioData.personal.phone}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-3 border-t border-slate-200/60 dark:border-white/10 flex flex-col gap-2">
                <a
                  href={portfolioData.personal.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5 hover:border-[#0077B5] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedInIcon className="w-4 h-4 text-[#0077B5]" />
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      LinkedIn: {portfolioData.personal.linkedInUser}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 group-hover:text-[#0077B5]">
                    Visit &rarr;
                  </span>
                </a>

                <a
                  href={portfolioData.personal.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5 hover:border-slate-400 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <GitHubIcon className="w-4 h-4 text-slate-900 dark:text-white" />
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      GitHub: {portfolioData.personal.gitHubUser}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white">
                    Visit &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form UI */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-sm relative overflow-hidden">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center justify-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Thank You! Message Received.
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md">
                    Thank you, {formData.name}! Your message has been noted. I look forward to
                    connecting with you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                    Leave your details and note below.
                  </p>

                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors ${
                        errors.name
                          ? "border-rose-500 ring-1 ring-rose-500"
                          : "border-slate-200 dark:border-white/10 focus:border-indigo-500"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Your Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors ${
                        errors.email
                          ? "border-rose-500 ring-1 ring-rose-500"
                          : "border-slate-200 dark:border-white/10 focus:border-indigo-500"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="form-message"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      placeholder="Share details regarding your inquiry or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors ${
                        errors.message
                          ? "border-rose-500 ring-1 ring-rose-500"
                          : "border-slate-200 dark:border-white/10 focus:border-indigo-500"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-amber-500 hover:from-indigo-500 hover:to-amber-400 text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    <span>{isSubmitting ? "Sending Message..." : "Submit Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer with Back to Top button */}
        <footer className="pt-8 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-end">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-indigo-400 text-slate-700 dark:text-slate-300 transition-colors shadow-sm text-xs font-semibold"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </footer>
      </div>
    </section>
  );
}

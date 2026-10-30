"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative w-full rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-[2px_4px_24px_0px_rgba(0,0,0,0.4)_inset] hover:shadow-xl hover:border-indigo-400/50 dark:hover:border-indigo-500/40 transition-all duration-300 group flex flex-col justify-between overflow-hidden",
        className
      )}
    >
      {/* Subtle hover gradient shimmer */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-amber-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </div>
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white py-1 transition-colors group-hover:theme-accent-text",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-sm font-normal text-slate-600 dark:text-slate-300/90 leading-relaxed",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardSkeletonContainer({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) {
  return (
    <div
      className={cn(
        "h-[12rem] sm:h-[14rem] rounded-xl z-20 relative overflow-hidden flex items-center justify-center mb-4",
        className,
        showGradient &&
          "bg-slate-100 dark:bg-slate-950/60 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)] border border-slate-200/60 dark:border-white/5"
      )}
    >
      {children}
    </div>
  );
}

const SPARKLES = [
  { top: "15%", left: "20%", moveX: "6px", moveY: "-8px", opacity: 0.8, duration: 3.5 },
  { top: "45%", left: "80%", moveX: "-7px", moveY: "5px", opacity: 0.6, duration: 4.2 },
  { top: "75%", left: "35%", moveX: "5px", moveY: "-6px", opacity: 0.9, duration: 3.1 },
  { top: "25%", left: "70%", moveX: "-4px", moveY: "7px", opacity: 0.5, duration: 4.8 },
  { top: "60%", left: "15%", moveX: "8px", moveY: "-5px", opacity: 0.7, duration: 3.8 },
  { top: "85%", left: "60%", moveX: "-6px", moveY: "-6px", opacity: 0.85, duration: 4.5 },
  { top: "35%", left: "50%", moveX: "4px", moveY: "8px", opacity: 0.65, duration: 3.3 },
  { top: "10%", left: "90%", moveX: "-8px", moveY: "4px", opacity: 0.75, duration: 4.0 },
  { top: "50%", left: "25%", moveX: "7px", moveY: "-7px", opacity: 0.9, duration: 3.7 },
  { top: "70%", left: "85%", moveX: "-5px", moveY: "5px", opacity: 0.55, duration: 4.6 },
  { top: "90%", left: "40%", moveX: "6px", moveY: "-4px", opacity: 0.8, duration: 3.9 },
  { top: "30%", left: "10%", moveX: "-7px", moveY: "8px", opacity: 0.7, duration: 4.3 },
];

export const Sparkles = ({ count = 12 }: { count?: number }) => {
  const items = SPARKLES.slice(0, count);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {items.map((s, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${s.top} + ${s.moveY})`,
            left: `calc(${s.left} + ${s.moveX})`,
            opacity: s.opacity,
            scale: [1, 1.3, 0],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: s.top,
            left: s.left,
            width: "2px",
            height: "2px",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-indigo-600 dark:bg-amber-300 shadow-[0_0_6px_#f59e0b]"
        />
      ))}
    </div>
  );
};

export function CardBeamEffect() {
  return (
    <div className="h-40 w-px absolute top-10 m-auto z-30 bg-gradient-to-b from-transparent via-indigo-500 dark:via-amber-400 to-transparent animate-move pointer-events-none">
      <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-5">
        <Sparkles count={8} />
      </div>
    </div>
  );
}

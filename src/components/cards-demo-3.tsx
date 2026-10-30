"use client";

import React, { useEffect } from "react";
import { animate, motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardTitle,
  CardDescription,
  CardSkeletonContainer,
  Sparkles,
} from "@/components/ui/cards-demo-3";
import { UserCheck, CalendarCheck, FileSpreadsheet, ShieldAlert, Users } from "lucide-react";

export default function CardDemo() {
  return (
    <Card className="max-w-md">
      <CardSkeletonContainer>
        <HRSkeleton />
      </CardSkeletonContainer>
      <CardTitle>HR & Talent Operations</CardTitle>
      <CardDescription>
        Bridging candidate screening, scheduling workflows, and people coordination with data-backed accuracy.
      </CardDescription>
    </Card>
  );
}

const HRSkeleton = () => {
  const scale = [1, 1.08, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence: any = [
    [".badge-1", { scale, transform }, { duration: 0.8 }],
    [".badge-2", { scale, transform }, { duration: 0.8 }],
    [".badge-3", { scale, transform }, { duration: 0.8 }],
    [".badge-4", { scale, transform }, { duration: 0.8 }],
    [".badge-5", { scale, transform }, { duration: 0.8 }],
  ];

  useEffect(() => {
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-6 overflow-hidden h-full relative flex items-center justify-center w-full">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2 sm:gap-3">
        <Container className="h-9 w-9 sm:h-10 sm:w-10 badge-1 text-indigo-500">
          <UserCheck className="h-5 w-5" />
        </Container>
        <Container className="h-11 w-11 sm:h-12 sm:w-12 badge-2 text-amber-500">
          <CalendarCheck className="h-6 w-6" />
        </Container>
        <Container className="h-14 w-14 sm:h-16 sm:w-16 badge-3 text-emerald-500 bg-indigo-50/50 dark:bg-indigo-950/40">
          <Users className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
        </Container>
        <Container className="h-11 w-11 sm:h-12 sm:w-12 badge-4 text-amber-500">
          <FileSpreadsheet className="h-6 w-6" />
        </Container>
        <Container className="h-9 w-9 sm:h-10 sm:w-10 badge-5 text-indigo-500">
          <ShieldAlert className="h-5 w-5" />
        </Container>
      </div>

      <div className="h-36 w-px absolute top-12 m-auto z-40 bg-gradient-to-b from-transparent via-amber-400 to-transparent animate-move">
        <div className="w-10 h-28 top-1/2 -translate-y-1/2 absolute -left-5">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `rounded-full flex items-center justify-center bg-white dark:bg-slate-800/80
        shadow-[0px_0px_10px_0px_rgba(99,102,241,0.25)_inset,0px_16px_20px_-10px_rgba(0,0,0,0.30)]
        border border-slate-200 dark:border-white/10
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

export { Card, CardTitle, CardDescription, CardSkeletonContainer };

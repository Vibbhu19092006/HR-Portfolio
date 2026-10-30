"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white"
        >
          {/* Pulsing Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.95, 1.05, 1], opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-amber-500 flex items-center justify-center text-white text-3xl font-black shadow-2xl shadow-indigo-500/40 mb-6"
          >
            VA
          </motion.div>

          {/* Name & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-center"
          >
            <h2 className="text-xl font-bold tracking-tight text-white mb-1">
              VIBBHU A
            </h2>
            <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">
              Aspiring HR Professional
            </p>
          </motion.div>

          {/* Loading Bar */}
          <div className="w-48 h-1 rounded-full bg-slate-800 overflow-hidden mt-6">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-indigo-500 to-amber-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion } from "framer-motion";

export default function StatsRow() {
  const stats = [
    { value: "10,000+", label: "Verified Components" },
    { value: "8", label: "Industry Segments" },
    { value: "24-Hour", label: "RFQ Turnaround" },
    { value: "Global", label: "Supply Chain Network" },
  ];

  return (
    <div className="w-full bg-brand-surface/30 border border-brand-border/40 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative layout line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-brand-border/40">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className={`flex flex-col items-center justify-center text-center ${
              idx > 1 ? "pt-4 md:pt-0" : ""
            } ${idx % 2 === 1 ? "pl-2" : "pr-2"}`}
          >
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-brand-cyan glow-cyan tracking-tight">
              {stat.value}
            </span>
            <span className="mt-1 text-[11px] sm:text-xs font-sans font-medium uppercase tracking-wider text-brand-muted">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

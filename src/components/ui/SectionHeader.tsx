"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: "left" | "center";
}

export default function SectionHeader({ title, subtitle, align = "center" }: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 mb-3.5"
      >
        <span className="h-[2px] w-8 bg-brand-cyan shadow-glow-cyan" />
        <span className="text-xs uppercase tracking-widest font-display font-semibold text-brand-cyan">
          Zentrix Solutions
        </span>
        <span className="h-[2px] w-8 bg-brand-cyan shadow-glow-cyan" />
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-brand-text"
      >
        {title}
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 text-base sm:text-lg font-sans text-brand-muted leading-relaxed"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}

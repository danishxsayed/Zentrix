"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumbs?: { name: string; href: string }[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-bg overflow-hidden border-b border-brand-border/40">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 z-0" />
      <div className="absolute inset-0 bg-circuit-overlay opacity-30 z-0 animate-pulse" style={{ animationDuration: "8s" }} />
      
      {/* Custom SVG circuit trace background graphics */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M 100 100 L 200 150 L 400 150 L 500 250 L 800 250" fill="none" stroke="#00D4FF" strokeWidth="2" />
          <path d="M 300 0 L 300 100 L 400 200 L 400 450" fill="none" stroke="#00D4FF" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="4" fill="#00D4FF" />
          <circle cx="800" cy="250" r="4" fill="#00D4FF" />
          <circle cx="300" cy="0" r="4" fill="#00D4FF" />
          <circle cx="400" cy="450" r="4" fill="#00D4FF" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center space-x-2 mb-6 text-xs md:text-sm font-sans text-brand-muted"
          >
            <Link href="/" className="hover:text-brand-cyan transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={crumb.name} className="flex items-center space-x-2">
                <ChevronRight className="h-3.5 w-3.5 shrink-0" />
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-brand-cyan font-medium">{crumb.name}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-brand-cyan transition-colors">
                    {crumb.name}
                  </Link>
                )}
              </span>
            ))}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-brand-text glow-cyan"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-sans text-brand-muted leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}

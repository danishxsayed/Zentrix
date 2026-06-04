"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { UploadCloud, ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-brand-bg">
      {/* Decorative radial gradients for glowing cyan tech aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-cyan/10 to-brand-bg z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid opacity-30 z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-brand-surface/60 border border-brand-border/60 p-8 md:p-12 rounded-3xl backdrop-blur-md relative overflow-hidden"
        >
          {/* Inner border line */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />
          
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-text tracking-tight mb-4">
            Ready to Source Components?
          </h2>
          <p className="text-sm sm:text-base font-sans text-brand-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Upload your BOM file or submit your component list. Our team of pricing specialists will verify availability and source your parts within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/rfq"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-cyan hover:bg-brand-cyan-dark text-brand-bg font-sans font-bold text-sm transition-all duration-300 hover:shadow-glow-cyan"
            >
              <UploadCloud className="mr-2 h-4 w-4 shrink-0" />
              Upload BOM File
            </Link>
            <Link
              href="/rfq"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent hover:bg-brand-card/50 border border-brand-border/80 hover:border-brand-cyan/60 text-brand-text font-sans font-semibold text-sm transition-all duration-300"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

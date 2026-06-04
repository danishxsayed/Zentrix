"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, FileSpreadsheet, Globe } from "lucide-react";

export default function TrustStrip() {
  const points = [
    {
      icon: ShieldCheck,
      title: "Verified Components",
      desc: "100% trace origin checks with zero tolerance for counterfeit electronics.",
    },
    {
      icon: Zap,
      title: "Fast RFQ Response",
      desc: "Dedicated pricing desk returns custom BOM quotes inside 24 hours.",
    },
    {
      icon: FileSpreadsheet,
      title: "OEM & BOM Support",
      desc: "Paste component numbers or upload complete .xlsx sheets with ease.",
    },
    {
      icon: Globe,
      title: "Global Supply Chain",
      desc: "Distributed shipping hubs for reliable delivery across Americas, EU, and Asia.",
    },
  ];

  return (
    <section className="bg-brand-surface/40 border-y border-brand-border/40 py-12 md:py-16 relative overflow-hidden">
      {/* Glow dot in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-brand-card border border-brand-border/60 flex items-center justify-center group-hover:bg-brand-cyan/15 group-hover:border-brand-cyan/40 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-brand-cyan group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-display font-bold text-brand-text mb-1 group-hover:text-brand-cyan transition-colors duration-300">
                    {point.title}
                  </h4>
                  <p className="text-xs font-sans text-brand-muted leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

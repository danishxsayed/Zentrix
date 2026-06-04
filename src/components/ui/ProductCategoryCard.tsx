"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as Icons from "lucide-react";

interface ProductCategoryCardProps {
  name: string;
  description: string;
  iconName: string;
  href: string;
  index: number;
}

export default function ProductCategoryCard({
  name,
  description,
  iconName,
  href,
  index,
}: ProductCategoryCardProps) {
  // Dynamically resolve icon from lucide-react
  const IconComponent = (Icons as any)[iconName] || Icons.HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl border border-brand-border/60 bg-brand-card/50 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-brand-card hover:border-brand-border/90 hover:shadow-glow-cyan-hover"
    >
      {/* Cyan top border accent shown only on hover */}
      <span className="absolute top-0 left-0 right-0 h-[2px] bg-brand-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl shadow-glow-cyan" />
      
      <div>
        {/* Icon Container */}
        <div className="w-12 h-12 rounded-xl bg-brand-surface/85 border border-brand-border/80 flex items-center justify-center mb-6 group-hover:bg-brand-cyan/10 group-hover:border-brand-cyan/45 transition-colors duration-300">
          <IconComponent className="h-6 w-6 text-brand-muted group-hover:text-brand-cyan group-hover:scale-110 transition-all duration-300" />
        </div>

        {/* Content */}
        <h3 className="text-lg md:text-xl font-display font-bold text-brand-text mb-3 group-hover:text-brand-cyan transition-colors duration-300">
          {name}
        </h3>
        
        <p className="text-sm font-sans text-brand-muted leading-relaxed mb-6 group-hover:text-brand-text/90 transition-colors duration-300">
          {description}
        </p>
      </div>

      <div className="pt-2 border-t border-brand-border/40">
        <Link
          href={href}
          className="inline-flex items-center text-xs font-display font-semibold tracking-wider uppercase text-brand-cyan hover:text-brand-text transition-colors duration-300"
        >
          View Products
          <Icons.ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

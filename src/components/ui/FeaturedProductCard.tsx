"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

interface ProductProps {
  name: string;
  category: string;
  manufacturer: string;
  specs: string;
  image: string;
}

interface FeaturedProductCardProps {
  product: ProductProps;
  index: number;
}

export default function FeaturedProductCard({ product, index }: FeaturedProductCardProps) {
  // Pre-fill parts list when navigating to /rfq
  const rfqLink = `/rfq?part=${encodeURIComponent(`${product.manufacturer} ${product.name}`)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-brand-surface/40 border border-brand-border/60 hover:border-brand-cyan/60 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-glow-cyan-hover"
    >
      <div>
        {/* Product Image Placeholder */}
        <div className="relative h-48 w-full bg-brand-card overflow-hidden flex items-center justify-center border-b border-brand-border/40">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Category Badge overlay */}
          <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-sans font-bold uppercase tracking-wider bg-brand-bg/90 border border-brand-border/80 text-brand-cyan rounded-full backdrop-blur-sm">
            {product.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-1.5 text-xs font-sans font-semibold text-brand-muted">
            <Tag className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
            <span>{product.manufacturer}</span>
          </div>

          <h3 className="text-lg font-display font-bold text-brand-text leading-tight group-hover:text-brand-cyan transition-colors duration-300 min-h-[50px] line-clamp-2">
            {product.name}
          </h3>

          <div className="pt-2 border-t border-brand-border/40">
            <span className="text-xs text-brand-muted block mb-1 font-display uppercase tracking-wider">Specifications</span>
            <p className="text-xs font-mono bg-brand-bg/65 border border-brand-border/40 p-2.5 rounded text-brand-text leading-relaxed">
              {product.specs}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          href={rfqLink}
          className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-brand-cyan/10 hover:bg-brand-cyan border border-brand-cyan/35 hover:border-brand-cyan text-brand-cyan hover:text-brand-bg font-sans font-semibold text-xs tracking-wider uppercase transition-all duration-300"
        >
          Request Quote
          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}

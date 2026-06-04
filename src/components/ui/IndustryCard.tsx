"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface IndustryCardProps {
  name: string;
  description: string;
  imageSeed: string;
  href: string;
  index: number;
}

export default function IndustryCard({ name, description, imageSeed, href, index }: IndustryCardProps) {
  // Use unique seed images from Unsplash or Picsum, electronics/industrial themed.
  const imageUrl = `https://images.unsplash.com/photo-${imageSeed}?auto=format&fit=crop&w=600&q=80`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group relative h-96 rounded-2xl overflow-hidden border border-brand-border/60 bg-brand-surface/40 flex flex-col justify-end p-6 md:p-8 transition-all duration-300 hover:border-brand-cyan/60 hover:shadow-glow-cyan-hover"
    >
      {/* Background Image with lazy loading via standard next/image or dynamic img wrapper */}
      <div className="absolute inset-0 z-0 bg-brand-bg">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Dark overlay gradients to ensure content readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-brand-bg/80 to-transparent opacity-90" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 space-y-4">
        <div className="w-10 h-1 bg-brand-cyan shadow-glow-cyan rounded-full transition-all duration-300 group-hover:w-20" />
        
        <h3 className="text-xl md:text-2xl font-display font-bold text-brand-text tracking-wide group-hover:text-brand-cyan transition-colors duration-300">
          {name}
        </h3>
        
        <p className="text-sm font-sans text-brand-muted leading-relaxed group-hover:text-brand-text/90 transition-colors duration-300 line-clamp-2">
          {description}
        </p>

        <div className="pt-2">
          <Link
            href={href}
            className="inline-flex items-center text-xs font-display font-semibold tracking-wider uppercase text-brand-cyan hover:text-brand-text transition-colors duration-300"
          >
            Explore Solutions
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

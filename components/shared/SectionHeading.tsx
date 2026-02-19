"use client";

import { motion } from "framer-motion";
import { fadeIn, viewportConfig } from "@/lib/animations";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeIn}
      className={`${align === "center" ? "text-center" : "text-left"} mb-12 ${className}`}
    >
      {tag && <p className="tag-label mb-4">{tag}</p>}
      <h2 className="text-3xl md:text-4xl font-semibold font-display text-text-primary mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-[0.9rem] max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}

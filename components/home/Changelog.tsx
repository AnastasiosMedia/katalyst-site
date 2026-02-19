"use client";

import { motion } from "framer-motion";
import { CHANGELOGS } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Changelog() {
  const displayChangelogs = CHANGELOGS.slice(0, 4);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="What's New"
          title="Changelog"
          subtitle="See what's new in Katalyst"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="relative"
        >
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-8">
            {displayChangelogs.map((entry) => (
              <motion.div
                key={entry.date}
                variants={staggerItem}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-bg-primary border-2 border-accent-gold" />

                <time className="text-xs text-text-dim font-mono">{entry.date}</time>
                <h3 className="text-base font-semibold text-text-primary mt-1 mb-2">
                  {entry.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {entry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="text-center mt-10">
          <a
            href="/changelogs"
            className="text-sm text-accent-gold hover:text-accent-gold-hover transition-colors duration-300 inline-flex items-center gap-1"
          >
            View all changes
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

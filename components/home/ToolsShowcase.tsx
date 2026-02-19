"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FEATURES } from "@/lib/constants";
import { fadeIn, viewportConfig } from "@/lib/animations";
import SectionHeading from "@/components/shared/SectionHeading";

const ALL_TOOLS = FEATURES.flatMap((f) =>
  f.toolList.map((tool) => ({ tool, category: f.name, icon: f.icon }))
);

export default function ToolsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? ALL_TOOLS.filter((t) => t.category === activeCategory)
    : ALL_TOOLS;

  return (
    <section className="py-24 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="Full Tool Reference"
          title="Every Tool, at a Glance"
          subtitle="All 57 MCP tools your agent can call — click a category to filter"
        />

        {/* Category Pills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all duration-200 ${
              activeCategory === null
                ? "bg-accent-gold text-bg-primary border-accent-gold"
                : "bg-transparent text-text-secondary border-border hover:border-accent-gold/30"
            }`}
          >
            All ({ALL_TOOLS.length})
          </button>
          {FEATURES.map((f) => (
            <button
              key={f.name}
              onClick={() => setActiveCategory(activeCategory === f.name ? null : f.name)}
              className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all duration-200 ${
                activeCategory === f.name
                  ? "bg-accent-gold text-bg-primary border-accent-gold"
                  : "bg-transparent text-text-secondary border-border hover:border-accent-gold/30"
              }`}
            >
              {f.name} ({f.tools})
            </button>
          ))}
        </motion.div>

        {/* Tool Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2"
        >
          {filtered.map((t) => (
            <motion.div
              key={t.tool}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="group bg-bg-secondary border border-border rounded-lg px-3 py-2.5 hover:border-accent-gold/20 transition-colors duration-200"
            >
              <p className="text-[11px] font-mono text-accent-gold/80 truncate">
                {t.tool}
              </p>
              <p className="text-[9px] text-text-dim mt-0.5 truncate">
                {t.category}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stat */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
          className="mt-8 text-center"
        >
          <p className="text-sm text-text-dim">
            <span className="text-accent-gold font-mono">{filtered.length}</span> tools
            {activeCategory ? ` in ${activeCategory}` : " across all categories"} — one{" "}
            <span className="font-mono text-text-secondary">MCP connection</span> to access them all
          </p>
        </motion.div>
      </div>
    </section>
  );
}

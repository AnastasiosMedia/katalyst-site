"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BENCHMARKS } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

function BenchmarkCard({
  benchmark,
}: {
  benchmark: (typeof BENCHMARKS)[number];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      className="bg-bg-secondary border border-border rounded-xl p-6"
    >
      <h3 className="text-2xl font-semibold font-display text-accent-gold mb-1">
        {benchmark.label}
      </h3>
      <p className="text-sm text-text-dim mb-6">{benchmark.metric}</p>

      <div className="space-y-4">
        {benchmark.values.map((item, i) => {
          const percentage = benchmark.invert
            ? ((benchmark.values[0].max - item.value) /
                benchmark.values[0].max) *
                100 +
              20
            : (item.value / item.max) * 100;
          const isKatalyst = item.name === "Katalyst";

          return (
            <div key={item.name}>
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={`text-sm ${
                    isKatalyst
                      ? "text-text-primary font-medium"
                      : "text-text-secondary"
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`text-sm font-mono ${
                    isKatalyst ? "text-accent-gold" : "text-text-dim"
                  }`}
                >
                  <AnimatedCounter
                    value={item.value}
                    suffix={item.unit}
                    decimals={item.unit === "%" || item.unit === "M" ? 1 : 0}
                  />
                </span>
              </div>
              <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                  className={`h-full rounded-full ${
                    isKatalyst
                      ? "bg-accent-gold"
                      : "bg-text-dim/40"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Benchmarks() {
  return (
    <section className="py-24 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="Performance"
          title="If You Use AI Coding Agents, Use Katalyst"
          subtitle="AI coding agents perform better on backend tasks with Katalyst"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {BENCHMARKS.map((benchmark) => (
            <BenchmarkCard key={benchmark.label} benchmark={benchmark} />
          ))}
        </motion.div>

        <div className="text-center">
          <a
            href="#"
            className="text-sm text-accent-gold hover:text-accent-gold-hover transition-colors duration-300 inline-flex items-center gap-1"
          >
            View full benchmark report
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

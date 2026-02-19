"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FRAMEWORKS } from "@/lib/constants";
import { fadeIn, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export default function FrameworkStrip() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
          className="text-center mb-8"
        >
          <p className="tag-label">
            Supports Any Framework You Need
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {FRAMEWORKS.map((framework) => (
            <motion.div
              key={framework.name}
              variants={staggerItem}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-bg-secondary border border-border hover:border-border-hover transition-colors duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-bg-tertiary flex items-center justify-center overflow-hidden">
                {framework.icon ? (
                  <Image
                    src={framework.icon}
                    alt={framework.name}
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-xs font-bold text-text-tertiary font-mono">
                    {framework.name.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <span className="text-sm font-medium text-text-primary">{framework.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

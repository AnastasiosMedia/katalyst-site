"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ASK_AI_LINKS } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import SectionHeading from "@/components/shared/SectionHeading";

export default function AskAI() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="What's Katalyst? Ask AI"
          subtitle="Get instant answers from your favorite AI assistant"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {ASK_AI_LINKS.map((ai) => (
            <motion.a
              key={ai.name}
              variants={staggerItem}
              href={ai.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-bg-secondary border border-border hover:border-border-hover transition-all duration-300 card-hover"
            >
              <div className="w-8 h-8 rounded-lg bg-bg-tertiary border border-border flex items-center justify-center overflow-hidden">
                {ai.icon ? (
                  <Image
                    src={ai.icon}
                    alt={ai.name}
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-xs font-bold text-text-tertiary">
                    {ai.name[0]}
                  </span>
                )}
              </div>
              <span className="text-sm font-medium text-text-primary group-hover:text-accent-gold transition-colors duration-300">
                {ai.name}
              </span>
              <svg
                className="w-4 h-4 text-text-dim group-hover:text-accent-gold transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

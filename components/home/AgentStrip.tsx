"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AGENTS } from "@/lib/constants";
import { fadeIn, viewportConfig } from "@/lib/animations";

function AgentIcon({ agent }: { agent: (typeof AGENTS)[number] }) {
  const initials = agent.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="flex flex-col items-center gap-2 px-6 flex-shrink-0">
      <div className="w-12 h-12 rounded-xl bg-bg-tertiary border border-border flex items-center justify-center overflow-hidden">
        {agent.icon ? (
          <Image
            src={agent.icon}
            alt={agent.name}
            width={32}
            height={32}
            className="object-contain"
          />
        ) : (
          <span className="text-sm font-semibold text-text-tertiary font-mono">
            {initials}
          </span>
        )}
      </div>
      <span className="text-xs text-text-dim whitespace-nowrap">{agent.name}</span>
    </div>
  );
}

export default function AgentStrip() {
  const doubled = [...AGENTS, ...AGENTS];

  return (
    <section className="py-16 border-y border-border overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeIn}
        className="text-center mb-8"
      >
        <p className="tag-label">
          Works perfectly with
        </p>
      </motion.div>

      <div className="scroll-container">
        <div className="flex animate-scroll-left">
          {doubled.map((agent, i) => (
            <AgentIcon key={`${agent.name}-${i}`} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
}

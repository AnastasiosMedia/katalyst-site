"use client";

import { motion } from "framer-motion";
import { fadeIn, viewportConfig } from "@/lib/animations";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-display mb-6 tracking-tight">
            Start Building{" "}
            <span className="text-accent-gold">Real Apps</span>
          </h2>
          <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
            One MCP connection. 57 tools. Your agent gets database, auth, storage, AI, functions, vectors, realtime, cron, and memory.
          </p>
          <Button variant="primary" size="lg" href="#">
            Start Building Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { HERO, DEMO_STEPS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Button from "@/components/ui/Button";

function DemoPanel() {
  return (
    <motion.div
      variants={staggerItem}
      className="mt-16 max-w-5xl mx-auto relative"
    >
      {/* Subtle glow behind panel */}
      <div className="absolute -inset-4 bg-accent-gold/[0.04] rounded-3xl blur-2xl -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
        {/* IDE Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-bg-secondary border border-border rounded-xl overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-tertiary">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-error/40" />
              <div className="w-3 h-3 rounded-full bg-warning/40" />
              <div className="w-3 h-3 rounded-full bg-success/40" />
            </div>
            <span className="text-xs text-text-dim font-mono ml-2">claude code</span>
          </div>
          <div className="p-4">
            <div className="flex items-start gap-2">
              <span className="text-accent-gold text-sm font-mono mt-0.5">&gt;</span>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-sm text-text-secondary font-mono leading-relaxed"
              >
                Build me a SaaS app with user auth, file uploads, and a cron job that sends weekly reports.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Connection Lines */}
        <div className="hidden lg:flex items-center justify-center relative">
          <svg className="w-full h-24" viewBox="0 0 200 80" fill="none">
            <motion.path
              d="M0 40 Q50 10 100 40 Q150 70 200 40"
              stroke="#C8A97E"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              strokeOpacity="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
            />
          </svg>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.4, type: "spring", damping: 25, stiffness: 300 }}
            className="absolute w-10 h-10 bg-accent-gold rounded-lg flex items-center justify-center"
          >
            <span className="text-bg-primary font-bold text-sm font-display">K</span>
          </motion.div>
        </div>

        {/* Katalyst MCP Tool Calls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-bg-secondary border border-border rounded-xl overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-tertiary">
            <div className="w-3 h-3 bg-accent-gold rounded" />
            <span className="text-xs text-text-dim font-mono">katalyst mcp</span>
            <span className="text-[10px] text-accent-gold font-mono ml-auto">57 tools</span>
          </div>
          <div className="p-4 space-y-2.5">
            {DEMO_STEPS.map((step) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: step.delay + 0.8, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: step.delay + 1,
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                >
                  <svg
                    className="w-4 h-4 text-success flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <span className="text-xs text-accent-gold/80 font-mono">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 0.5 }}
        className="mt-4 flex items-center justify-center gap-8"
      >
        {[
          { value: "57", label: "MCP Tools" },
          { value: "12", label: "Categories" },
          { value: "1", label: "Connection" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="text-lg font-display font-semibold text-accent-gold">{stat.value}</span>
            <span className="text-xs text-text-dim ml-1.5">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Tag */}
          <motion.div variants={staggerItem} className="mb-6">
            <span className="tag-label">
              AI-Native Backend Platform
            </span>
          </motion.div>

          {/* Headline — serif display */}
          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-semibold font-display tracking-tight leading-[1.1] mb-6 text-balance"
          >
            <span className="text-accent-gold">57</span> Backend Tools.{" "}
            <span className="text-accent-gold">One</span> MCP Connection.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {HERO.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg" href="#">
              {HERO.cta1}
            </Button>
            <Button variant="secondary" size="lg" href="#">
              {HERO.cta2}
            </Button>
          </motion.div>

          {/* Demo Panel */}
          <DemoPanel />
        </motion.div>
      </div>
    </section>
  );
}

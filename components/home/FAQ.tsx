"use client";

import { motion } from "framer-motion";
import { FAQS } from "@/lib/constants";
import { fadeIn, viewportConfig } from "@/lib/animations";
import Accordion from "@/components/ui/Accordion";
import SectionHeading from "@/components/shared/SectionHeading";

export default function FAQ() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="Support"
          title="Frequently Asked Questions"
          subtitle="Questions? We've got answers"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
          className="mb-8 text-center"
        >
          <a
            href="#"
            className="text-sm text-accent-gold hover:text-accent-gold-hover transition-colors duration-300"
          >
            Read our full documentation &rarr;
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
        >
          <Accordion items={FAQS} />
        </motion.div>
      </div>
    </section>
  );
}

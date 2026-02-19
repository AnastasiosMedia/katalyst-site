"use client";

import { motion, AnimatePresence } from "framer-motion";
import { NAV_PRODUCTS, NAV_COMPARE, NAV_LINKS } from "@/lib/constants";
import { useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [productsExpanded, setProductsExpanded] = useState(false);
  const [compareExpanded, setCompareExpanded] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 top-16 z-40 bg-bg-primary/95 backdrop-blur-xl lg:hidden overflow-y-auto"
        >
          <div className="px-6 py-6 space-y-1">
            {/* Products */}
            <div>
              <button
                onClick={() => setProductsExpanded(!productsExpanded)}
                className="flex items-center justify-between w-full px-3 py-3 text-base text-text-primary"
              >
                Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${productsExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {productsExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden pl-4"
                  >
                    {NAV_PRODUCTS.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={onClose}
                        className="block px-3 py-2.5 text-sm text-text-secondary hover:text-text-primary"
                      >
                        <span className="font-medium">{item.name}</span>
                        <span className="block text-xs text-text-tertiary">{item.description}</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={onClose}
                className="block px-3 py-3 text-base text-text-primary hover:text-accent-gold"
              >
                {link.name}
              </a>
            ))}

            {/* Compare */}
            <div>
              <button
                onClick={() => setCompareExpanded(!compareExpanded)}
                className="flex items-center justify-between w-full px-3 py-3 text-base text-text-primary"
              >
                Compare
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${compareExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {compareExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden pl-4"
                  >
                    {NAV_COMPARE.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={onClose}
                        className="block px-3 py-2.5 text-sm text-text-secondary hover:text-text-primary"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <div className="pt-4 space-y-3 border-t border-border mt-4">
              <a
                href="/contact"
                onClick={onClose}
                className="block w-full px-4 py-3 text-center text-sm text-text-primary border border-border rounded-lg hover:border-border-hover"
              >
                Talk to Founders
              </a>
              <a
                href="#"
                onClick={onClose}
                className="block w-full px-4 py-3 text-center text-sm text-bg-primary bg-accent-gold rounded-lg font-bold hover:bg-accent-gold-hover"
              >
                Start Building Now
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

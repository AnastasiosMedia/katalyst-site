import type { Metadata } from "next";
import { PRICING_TIERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for Katalyst. Start free, scale as you grow.",
};

export default function PricingPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="tag-label mb-4">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-semibold font-display mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl p-8 ${
                tier.highlighted
                  ? "bg-bg-secondary border-2 border-accent-gold/30"
                  : "bg-bg-secondary border border-border"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-bold text-bg-primary bg-accent-gold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-text-primary font-display mb-2">
                  {tier.name}
                </h2>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-text-primary font-display">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-text-secondary text-sm">{tier.period}</span>
                  )}
                </div>
                <p className="text-sm text-text-secondary mt-2">{tier.description}</p>
              </div>

              <a
                href="#"
                className={`block w-full py-3 text-center text-sm font-bold rounded-lg transition-all duration-300 mb-8 ${
                  tier.highlighted
                    ? "bg-accent-gold text-bg-primary hover:bg-accent-gold-hover"
                    : "bg-bg-tertiary text-text-primary border border-border hover:border-border-hover"
                }`}
              >
                {tier.cta}
              </a>

              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

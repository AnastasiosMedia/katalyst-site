import type { Metadata } from "next";
import { CHANGELOGS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Changelogs",
  description: "Track every update, feature, and improvement to the Katalyst platform.",
};

export default function ChangelogsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight font-display mb-4">
            Changelogs
          </h1>
          <p className="text-lg text-text-secondary">
            Track every update, feature, and improvement to Katalyst
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {CHANGELOGS.map((entry) => {
              const anchorId = entry.date
                .toLowerCase()
                .replace(/\s/g, "-")
                .replace(/,/g, "");

              return (
                <div
                  key={entry.date}
                  id={anchorId}
                  className="relative pl-8 scroll-mt-24"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-bg-primary border-2 border-accent-gold" />

                  <time className="text-xs text-text-tertiary font-mono">{entry.date}</time>
                  <h2 className="text-xl font-bold text-text-primary mt-1 mb-3 font-display">
                    {entry.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {entry.description}
                  </p>

                  <ul className="space-y-2">
                    {entry.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5"
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
                        <span className="text-sm text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

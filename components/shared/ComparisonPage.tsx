interface ComparisonData {
  name: string;
  date: string;
  whatIs: string;
  whatSimilar: string[];
  operatorModel: { katalyst: string; competitor: string };
  backendPrimitives: { katalyst: string; competitor: string };
  workflow: { katalyst: string; competitor: string };
  conclusion: string;
}

export default function ComparisonPage({ data }: { data: ComparisonData }) {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <a
          href="/"
          className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </a>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight font-display mb-4">
          Katalyst vs {data.name}
        </h1>

        <div className="flex items-center gap-3 mb-10 text-sm text-text-tertiary">
          <time>{data.date}</time>
          <span>&middot;</span>
          <span>Katalyst Team</span>
        </div>

        {/* What is competitor */}
        <section className="mb-10">
          <h2 className="text-xl font-bold font-display text-text-primary mb-3">
            What is {data.name}?
          </h2>
          <p className="text-text-secondary leading-relaxed">{data.whatIs}</p>
        </section>

        {/* What is Katalyst */}
        <section className="mb-10">
          <h2 className="text-xl font-bold font-display text-text-primary mb-3">
            What is Katalyst?
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Katalyst is an AI-native Backend-as-a-Service platform designed for the agentic coding era.
            It provides a complete backend — database, authentication, storage, edge functions, AI model gateway,
            realtime subscriptions, and vector search — all operated by AI coding agents through MCP
            (Model Context Protocol). No dashboards, no manual configuration. Your agent handles everything.
          </p>
        </section>

        {/* What's Similar */}
        <section className="mb-10">
          <h2 className="text-xl font-bold font-display text-text-primary mb-3">
            What&apos;s Similar?
          </h2>
          <ul className="space-y-2">
            {data.whatSimilar.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-text-tertiary flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What's Different */}
        <section className="mb-10">
          <h2 className="text-xl font-bold font-display text-text-primary mb-3">
            What&apos;s Different?
          </h2>

          <div className="space-y-6">
            {/* Operator Model */}
            <div className="bg-bg-secondary border border-border rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-border bg-bg-tertiary">
                <h3 className="text-sm font-semibold text-text-primary">Operator Model</h3>
              </div>
              <div className="divide-y divide-border">
                <div className="px-4 py-3 flex items-start gap-3">
                  <span className="text-xs font-semibold text-accent-gold bg-accent-gold/10 px-2 py-0.5 rounded flex-shrink-0">
                    Katalyst
                  </span>
                  <span className="text-sm text-text-secondary">{data.operatorModel.katalyst}</span>
                </div>
                <div className="px-4 py-3 flex items-start gap-3">
                  <span className="text-xs font-semibold text-text-tertiary bg-bg-tertiary px-2 py-0.5 rounded flex-shrink-0">
                    {data.name}
                  </span>
                  <span className="text-sm text-text-secondary">{data.operatorModel.competitor}</span>
                </div>
              </div>
            </div>

            {/* Backend Primitives */}
            <div className="bg-bg-secondary border border-border rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-border bg-bg-tertiary">
                <h3 className="text-sm font-semibold text-text-primary">Backend Primitives</h3>
              </div>
              <div className="divide-y divide-border">
                <div className="px-4 py-3 flex items-start gap-3">
                  <span className="text-xs font-semibold text-accent-gold bg-accent-gold/10 px-2 py-0.5 rounded flex-shrink-0">
                    Katalyst
                  </span>
                  <span className="text-sm text-text-secondary">{data.backendPrimitives.katalyst}</span>
                </div>
                <div className="px-4 py-3 flex items-start gap-3">
                  <span className="text-xs font-semibold text-text-tertiary bg-bg-tertiary px-2 py-0.5 rounded flex-shrink-0">
                    {data.name}
                  </span>
                  <span className="text-sm text-text-secondary">{data.backendPrimitives.competitor}</span>
                </div>
              </div>
            </div>

            {/* Development Workflow */}
            <div className="bg-bg-secondary border border-border rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-border bg-bg-tertiary">
                <h3 className="text-sm font-semibold text-text-primary">Development Workflow</h3>
              </div>
              <div className="divide-y divide-border">
                <div className="px-4 py-3 flex items-start gap-3">
                  <span className="text-xs font-semibold text-accent-gold bg-accent-gold/10 px-2 py-0.5 rounded flex-shrink-0">
                    Katalyst
                  </span>
                  <span className="text-sm text-text-secondary">{data.workflow.katalyst}</span>
                </div>
                <div className="px-4 py-3 flex items-start gap-3">
                  <span className="text-xs font-semibold text-text-tertiary bg-bg-tertiary px-2 py-0.5 rounded flex-shrink-0">
                    {data.name}
                  </span>
                  <span className="text-sm text-text-secondary">{data.workflow.competitor}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-10">
          <h2 className="text-xl font-bold font-display text-text-primary mb-3">
            Conclusion
          </h2>
          <p className="text-text-secondary leading-relaxed">{data.conclusion}</p>
        </section>

        {/* CTA */}
        <div className="border-t border-border pt-8 mt-10">
          <p className="text-text-secondary text-sm mb-4">
            Ready to try Katalyst?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-bg-primary bg-accent-gold rounded-lg hover:opacity-90 hover:bg-accent-gold-hover transition-all"
          >
            Talk to Founders
          </a>
        </div>
      </div>
    </div>
  );
}

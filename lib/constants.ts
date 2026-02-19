export const NAV_PRODUCTS = [
  { name: "Database", description: "Multi-tenant Postgres with 13 tools", href: "#" },
  { name: "Authentication", description: "JWT auth with bcrypt — 6 tools", href: "#" },
  { name: "Storage", description: "S3-compatible object storage — 7 tools", href: "#" },
  { name: "Edge Functions", description: "Sandboxed Deno runtime — 5 tools", href: "#" },
  { name: "AI Gateway", description: "Multi-provider model routing — 6 tools", href: "#" },
  { name: "Realtime", description: "PG LISTEN/NOTIFY channels — 5 tools", href: "#" },
  { name: "Vector Search", description: "pgvector similarity search — 4 tools", href: "#" },
  { name: "Agent Memory", description: "Persistent context across sessions — 6 tools", href: "#" },
  { name: "Cron Jobs", description: "Scheduled SQL execution — 5 tools", href: "#" },
];

export const NAV_COMPARE = [
  { name: "Katalyst vs Supabase", href: "/alternatives/katalyst-vs-supabase" },
  { name: "Katalyst vs Firebase", href: "/alternatives/katalyst-vs-firebase" },
  { name: "Katalyst vs Hosted Postgres", href: "/alternatives/katalyst-vs-hosted-postgres" },
];

export const NAV_LINKS = [
  { name: "Customer Stories", href: "#" },
  { name: "Blog", href: "/blog" },
  { name: "Docs", href: "#" },
  { name: "Pricing", href: "/pricing" },
  { name: "Roadmap", href: "#" },
];

export const HERO = {
  headline: "57 Backend Tools. One MCP Connection.",
  subheadline: "Your coding agent gets database, auth, storage, AI models, edge functions, vector search, realtime channels, cron jobs, and persistent memory — all through a single protocol.",
  cta1: "Start Building Now",
  cta2: "Install Katalyst",
};

export const DEMO_STEPS = [
  { label: "create_project(\"my-app\")", delay: 0.6 },
  { label: "create_table(\"users\", [...])", delay: 1.1 },
  { label: "enable_auth(\"my-app\")", delay: 1.6 },
  { label: "create_bucket(\"uploads\")", delay: 2.1 },
  { label: "deploy_function(\"on-signup\")", delay: 2.6 },
  { label: "enable_memory(\"my-app\")", delay: 3.1 },
];

export const AGENTS = [
  { name: "Cursor", icon: "/assets/icons/cursor.webp" },
  { name: "Claude Code", icon: "/assets/icons/claude-color.webp" },
  { name: "GitHub Copilot", icon: "/assets/icons/copilot-color.webp" },
  { name: "Google Antigravity", icon: "/assets/icons/google.webp" },
  { name: "Codex", icon: "/assets/icons/openai.webp" },
  { name: "Cline", icon: "/assets/icons/cline.webp" },
  { name: "Windsurf", icon: "/assets/icons/windsurf.webp" },
  { name: "Kiro", icon: "/assets/icons/kiro.svg" },
  { name: "Trae", icon: "/assets/icons/trae-color.webp" },
  { name: "Qoder", icon: "/assets/icons/qoder.png" },
  { name: "Roo Code", icon: "/assets/icons/roocode.png" },
];

export const FEATURES = [
  {
    name: "Postgres Database",
    description: "Multi-tenant PostgreSQL — every project gets its own isolated database with full schema control",
    icon: "database",
    tools: 13,
    toolList: ["create_project", "list_projects", "delete_project", "list_tables", "describe_table", "create_table", "add_column", "drop_table", "query", "insert_rows", "update_rows", "delete_rows", "run_sql"],
  },
  {
    name: "Authentication",
    description: "JWT auth with bcrypt via pgcrypto — user registration, login, token verification, all at the database level",
    icon: "auth",
    tools: 6,
    toolList: ["enable_auth", "register_user", "login_user", "list_users", "delete_user", "verify_token"],
  },
  {
    name: "Cloud Storage",
    description: "S3-compatible storage via MinIO — presigned upload/download URLs, bucket management, file listing",
    icon: "storage",
    tools: 7,
    toolList: ["create_bucket", "list_buckets", "upload_url", "download_url", "list_files", "delete_file", "delete_bucket"],
  },
  {
    name: "Vector Search",
    description: "pgvector similarity search — store embeddings, run cosine distance queries, namespace isolation",
    icon: "vector",
    tools: 4,
    toolList: ["enable_vectors", "upsert_embeddings", "vector_search", "delete_embeddings"],
  },
  {
    name: "AI Gateway",
    description: "Multi-provider AI routing — connect OpenAI, Anthropic, LM Studio, Ollama, or any compatible endpoint",
    icon: "ai",
    tools: 6,
    toolList: ["add_ai_provider", "list_providers", "list_models", "chat_completion", "create_embedding", "remove_provider"],
  },
  {
    name: "Agent Memory",
    description: "Persistent context across sessions — store decisions, architecture notes, and knowledge with semantic search",
    icon: "memory",
    tools: 6,
    toolList: ["enable_memory", "store_memory", "recall", "search_memory", "get_project_context", "clear_memory"],
  },
  {
    name: "Edge Functions",
    description: "Deploy TypeScript/JS code executed in a sandboxed Deno runtime with logging and invocation tracking",
    icon: "functions",
    tools: 5,
    toolList: ["deploy_function", "list_functions", "invoke_function", "view_function_logs", "delete_function"],
  },
  {
    name: "Realtime Channels",
    description: "Pub/sub messaging via PostgreSQL LISTEN/NOTIFY — create channels, broadcast events, query history",
    icon: "realtime",
    tools: 5,
    toolList: ["create_channel", "list_channels", "broadcast", "channel_history", "delete_channel"],
  },
  {
    name: "Cron Jobs",
    description: "Scheduled SQL execution with cron expressions — create jobs, view history, run on demand",
    icon: "cron",
    tools: 5,
    toolList: ["create_cron_job", "list_cron_jobs", "delete_cron_job", "run_job_now", "view_job_history"],
  },
];

export const BENCHMARKS = [
  {
    label: "1.6x Faster",
    metric: "Speed",
    values: [
      { name: "Katalyst", value: 150, max: 300, unit: "s" },
      { name: "Supabase", value: 239, max: 300, unit: "s" },
      { name: "Postgres", value: 215, max: 300, unit: "s" },
    ],
    invert: true,
  },
  {
    label: "30% Fewer Tokens",
    metric: "Token Usage",
    values: [
      { name: "Katalyst", value: 8.2, max: 15, unit: "M" },
      { name: "Supabase", value: 11.6, max: 15, unit: "M" },
      { name: "Postgres", value: 10.4, max: 15, unit: "M" },
    ],
    invert: true,
  },
  {
    label: "1.7x Higher Accuracy",
    metric: "Accuracy",
    values: [
      { name: "Katalyst", value: 47.6, max: 100, unit: "%" },
      { name: "Supabase", value: 28.6, max: 100, unit: "%" },
      { name: "Postgres", value: 38.1, max: 100, unit: "%" },
    ],
    invert: false,
  },
];

export const FRAMEWORKS = [
  { name: "Next.js", icon: "/assets/icons/nextjs.webp" },
  { name: "React", icon: "/assets/icons/react.webp" },
  { name: "Svelte", icon: null },
  { name: "Vue", icon: null },
  { name: "Nuxt", icon: null },
];

export const CHANGELOGS = [
  {
    date: "Feb 19, 2026",
    title: "v0.3.0 — 31 New Agentic Tools",
    description: "Massive expansion: 6 new tool modules bringing Katalyst to 57 total MCP tools across 12 categories. Vector search, AI gateway, agent memory, edge functions, realtime channels, and cron jobs.",
    items: [
      "Vector search with pgvector — similarity search, embeddings, namespace isolation",
      "AI gateway — route to OpenAI, Anthropic, LM Studio, Ollama, any compatible provider",
      "Agent memory — persistent context with full-text and semantic search across sessions",
      "Edge functions — deploy and invoke TypeScript/JS in sandboxed Deno runtime",
      "Realtime channels — pub/sub messaging via PostgreSQL LISTEN/NOTIFY",
      "Cron jobs — scheduled SQL execution with history tracking",
    ],
  },
  {
    date: "Feb 6, 2026",
    title: "VS Code Extension, Status Page, MCP Installer",
    description: "Install and manage Katalyst MCP servers directly from VS Code. Monitor service health with our new status page. Simplified MCP installer for all supported agents.",
    items: [
      "VS Code extension for Katalyst MCP management",
      "Public status page at status.katalyst.dev",
      "One-click MCP installer for Cursor, Claude Code, and more",
      "Improved error messages for edge function deployments",
    ],
  },
  {
    date: "Jan 29, 2026",
    title: "Model Gateway Support for Latest Models",
    description: "Access the newest AI models through Katalyst's unified model gateway. Simplified configuration and automatic fallback routing.",
    items: [
      "Added support for Claude 3.5, GPT-4o, and Gemini 2.0",
      "Automatic model fallback and load balancing",
      "Per-project API key management",
      "Usage analytics dashboard",
    ],
  },
  {
    date: "Jan 26, 2026",
    title: "Site Deployment, Expanded AI Models, PDF & Web Search",
    description: "Deploy static sites and SPAs directly from Katalyst. New AI model integrations and document processing capabilities.",
    items: [
      "One-command site deployment to Katalyst Edge",
      "Custom domain support with automatic SSL",
      "PDF parsing and web search tool for AI agents",
      "Expanded model gateway with 15+ providers",
    ],
  },
  {
    date: "Dec 21, 2025",
    title: "Realtime Module, Apple OAuth, New AI Models",
    description: "Subscribe to database changes in real time. Apple Sign-In support and new AI model integrations.",
    items: [
      "WebSocket-based realtime subscriptions",
      "Apple OAuth provider for authentication",
      "Anthropic Claude and Google Gemini in model gateway",
      "Improved MCP protocol stability",
    ],
  },
  {
    date: "Dec 10, 2025",
    title: "Vector Search & pgVector Integration",
    description: "Semantic search powered by pgVector. Store and query embeddings directly in your Postgres database.",
    items: [
      "pgVector extension enabled by default",
      "Embedding generation via model gateway",
      "Similarity search API endpoints",
      "Vector indexing for fast retrieval",
    ],
  },
  {
    date: "Nov 28, 2025",
    title: "Edge Functions GA, Storage Improvements",
    description: "Edge Functions are now generally available. Improved storage with resumable uploads and image transformations.",
    items: [
      "Edge Functions general availability",
      "Resumable uploads for large files",
      "On-the-fly image transformations",
      "Function logging and monitoring",
    ],
  },
  {
    date: "Nov 15, 2025",
    title: "Authentication System Launch",
    description: "Complete authentication system with JWT tokens, OAuth providers, and role-based access control.",
    items: [
      "JWT-based authentication",
      "Google, GitHub, and Discord OAuth",
      "Role-based access control (RBAC)",
      "Email/password with magic links",
    ],
  },
  {
    date: "Oct 30, 2025",
    title: "Katalyst Beta Launch",
    description: "The first public beta of Katalyst. Database provisioning, basic auth, and MCP protocol support.",
    items: [
      "Postgres database provisioning via MCP",
      "Basic authentication module",
      "MCP protocol v1 support",
      "CLI tool for project management",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    role: "Developer",
    avatar: "AR",
    quote: "I never touched a database before. With Katalyst, I didn't even realize one was created until my app was already storing data.",
  },
  {
    name: "Morgan Chen",
    role: "Developer",
    avatar: "MC",
    quote: "No dashboards, no configs, no endless setup. Just Katalyst. I describe what I need and my agent builds it.",
  },
  {
    name: "Priya Sharma",
    role: "CEO of FlowAI",
    avatar: "PS",
    quote: "It feels like cheating. My coding agent handles the frontend, Katalyst covers the backend. Together they just ship.",
  },
  {
    name: "James Park",
    role: "Technical Consultant",
    avatar: "JP",
    quote: "Prototype to product in one weekend. The only difference? I plugged my agent into Katalyst.",
  },
  {
    name: "Elena Torres",
    role: "Software Engineer",
    avatar: "ET",
    quote: "Hooked up Cursor with Katalyst and suddenly my agent wasn't just writing UI. It shipped the whole app. Unreal.",
  },
  {
    name: "David Kim",
    role: "Data Analyst",
    avatar: "DK",
    quote: "I tried Firebase, Supabase, even AWS dashboards. Katalyst felt different \u2014 just connect and code.",
  },
  {
    name: "Sam Foster",
    role: "Content Creator",
    avatar: "SF",
    quote: "Connecting Claude Code to Katalyst was like flipping a switch. One minute I had a prototype, next minute I had a real product.",
  },
  {
    name: "Lisa Wang",
    role: "Creator of TaskHive",
    avatar: "LW",
    quote: "For agent-driven coding Katalyst is in another league. Zero friction.",
  },
  {
    name: "Marcus Johnson",
    role: "Software Engineer",
    avatar: "MJ",
    quote: "Cursor plus Katalyst is deadly. I typed 'build a blog app' and suddenly comments were flowing into a live database.",
  },
  {
    name: "Nina Rodriguez",
    role: "Founder of PetPal",
    avatar: "NR",
    quote: "Before Katalyst, debugging was a rabbit hole. After connecting Katalyst, the loop stopped and things finally worked.",
  },
  {
    name: "Omar Hassan",
    role: "CTO @ GreenMarket",
    avatar: "OH",
    quote: "I asked my agent for Google login and Katalyst handled everything out of the box. No setup, it just worked.",
  },
  {
    name: "Rachel Liu",
    role: "Investor",
    avatar: "RL",
    quote: "Katalyst connected straight to OpenAI and stored chat history in the database. My Cursor built the chatbot for me right away.",
  },
];

export const FAQS = [
  {
    question: "What is Katalyst?",
    answer: "Katalyst is an AI-native Backend-as-a-Service with 57 MCP tools across 12 categories. Your coding agent gets database, auth, storage, vector search, AI models, edge functions, realtime channels, cron jobs, and persistent memory — all through a single MCP connection. No dashboards, no manual setup.",
  },
  {
    question: "What coding agents work with Katalyst?",
    answer: "Any agent that supports MCP — Cursor, Claude Code, GitHub Copilot, Cline, Windsurf, Kiro, Trae, Qoder, Roo Code, and more. Connect once, and your agent has access to all 57 tools.",
  },
  {
    question: "What can my agent actually do with Katalyst?",
    answer: "Everything a fullstack backend needs: create databases and tables (13 tools), register users and issue JWTs (6 tools), manage file storage with presigned URLs (7 tools), deploy and run TypeScript functions in a Deno sandbox (5 tools), route requests to OpenAI/Anthropic/local AI models (6 tools), run vector similarity searches (4 tools), send realtime messages via PG LISTEN/NOTIFY (5 tools), schedule SQL jobs with cron (5 tools), and persist agent memory across sessions (6 tools).",
  },
  {
    question: "What is Agent Memory?",
    answer: "Agent Memory lets your AI agent store and recall context across sessions. It can save architecture decisions, schema knowledge, bug history, and preferences — then retrieve them with full-text or semantic vector search. Your agent gets smarter the more it works on your project.",
  },
  {
    question: "How is Katalyst different from Supabase?",
    answer: "Supabase gives humans a dashboard to configure backends. Katalyst gives AI agents 57 MCP tools to build and manage backends autonomously. Both offer similar primitives (database, auth, storage), but Katalyst adds agent memory, a multi-provider AI gateway, and cron jobs — capabilities designed for the agentic era, not the dashboard era.",
  },
  {
    question: "Is Katalyst open-source?",
    answer: "Yes. Katalyst is fully open-source and self-hostable. Clone the repo, configure your PostgreSQL and MinIO, and your agent has a complete backend. No vendor lock-in.",
  },
  {
    question: "Can I self-host Katalyst?",
    answer: "Absolutely. Katalyst runs on any machine with PostgreSQL, MinIO, and Node.js. We run ours on a dedicated Windows machine with Cloudflare Tunnels for secure remote access. The entire platform is ~1,600 lines of TypeScript.",
  },
];

export const PRICING_TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for side projects and experimentation",
    cta: "Get Started",
    highlighted: false,
    features: [
      "1 project",
      "500MB database",
      "1GB storage",
      "100K edge function invocations",
      "Community support",
      "Shared infrastructure",
    ],
  },
  {
    name: "Pro",
    price: "$25",
    period: "/month",
    description: "For professional developers and growing teams",
    cta: "Start Free Trial",
    highlighted: true,
    features: [
      "Unlimited projects",
      "8GB database",
      "100GB storage",
      "2M edge function invocations",
      "Priority support",
      "Dedicated infrastructure",
      "Custom domains",
      "AI model gateway access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced requirements",
    cta: "Contact Sales",
    highlighted: false,
    features: [
      "Everything in Pro",
      "Unlimited database",
      "Unlimited storage",
      "Unlimited functions",
      "SSO / SAML",
      "SLA guarantees",
      "Dedicated support engineer",
      "Custom integrations",
    ],
  },
];

export const BLOG_POSTS = [
  {
    slug: "introducing-mobile-sdks",
    title: "Introducing Katalyst Mobile SDKs: Native Support for Swift and Kotlin",
    date: "Feb 12, 2026",
    author: "Katalyst Team",
    excerpt: "Build native mobile apps with Katalyst. Our new Swift and Kotlin SDKs bring the full power of Katalyst to iOS and Android.",
    featured: true,
  },
  {
    slug: "vscode-extension",
    title: "Manage Katalyst MCP Servers Directly in VS Code",
    date: "Feb 6, 2026",
    author: "Katalyst Team",
    excerpt: "Install, configure, and monitor your Katalyst MCP servers without leaving your editor.",
    featured: true,
  },
  {
    slug: "introducing-deployment",
    title: "Introducing Katalyst Deployment",
    date: "Jan 26, 2026",
    author: "Katalyst Team",
    excerpt: "Deploy your sites and apps to the edge with a single command. Custom domains, automatic SSL, and global CDN included.",
    featured: true,
  },
  {
    slug: "introducing-realtime",
    title: "Introducing Katalyst Real-time",
    date: "Dec 21, 2025",
    author: "Katalyst Team",
    excerpt: "Subscribe to database changes and broadcast events in real time with WebSocket-powered subscriptions.",
    featured: false,
  },
  {
    slug: "context-is-everything",
    title: "Why Context is Everything in AI Coding",
    date: "Dec 15, 2025",
    author: "Katalyst Team",
    excerpt: "AI coding agents are only as good as the context they receive. Here's how Katalyst provides the right context at the right time.",
    featured: false,
  },
  {
    slug: "most-reliable-backend",
    title: "Katalyst MCP: The Most Reliable Backend for AI Agents",
    date: "Nov 30, 2025",
    author: "Katalyst Team",
    excerpt: "How we built the MCP protocol implementation that AI agents trust. Reliability, consistency, and developer experience.",
    featured: false,
  },
  {
    slug: "katalyst-launch",
    title: "Katalyst Launch",
    date: "Oct 30, 2025",
    author: "Katalyst Team",
    excerpt: "Today we're launching Katalyst \u2014 the backend platform built for the agentic coding era. Here's our vision and what's shipping today.",
    featured: false,
  },
  {
    slug: "model-context-protocol",
    title: "Model Context Protocol: The Open Standard for Connected AI",
    date: "Oct 15, 2025",
    author: "Katalyst Team",
    excerpt: "MCP is changing how AI agents interact with tools and services. Here's what it means for backend development.",
    featured: false,
  },
];

export const ASK_AI_LINKS = [
  { name: "Gemini", href: "https://gemini.google.com/", icon: "/assets/icons/gemini-color.webp" },
  { name: "ChatGPT", href: "https://chat.openai.com/", icon: "/assets/icons/openai.webp" },
  { name: "Claude", href: "https://claude.ai/", icon: "/assets/icons/claude-color.webp" },
  { name: "Grok", href: "https://x.com/i/grok", icon: "/assets/icons/grok.webp" },
  { name: "Perplexity", href: "https://www.perplexity.ai/", icon: "/assets/icons/perplexity-color.webp" },
];

export const COMPARISONS = {
  supabase: {
    name: "Supabase",
    date: "Feb 10, 2026",
    whatIs: "Supabase is an open-source Backend-as-a-Service built on top of PostgreSQL. It provides authentication, database, storage, edge functions, and realtime subscriptions through a web dashboard and client libraries. Supabase is designed for human developers who configure their backend through a visual interface.",
    whatSimilar: [
      "Both provide PostgreSQL databases as the core data layer",
      "Both offer authentication with OAuth providers",
      "Both include S3-compatible object storage",
      "Both support serverless edge functions",
      "Both have realtime subscription capabilities",
      "Both are open-source and can be self-hosted",
    ],
    operatorModel: {
      katalyst: "AI agents via MCP protocol \u2014 your coding agent provisions and manages everything",
      competitor: "Human developers via web dashboard \u2014 manual configuration through a GUI",
    },
    backendPrimitives: {
      katalyst: "Database (13 tools), Auth (6), Storage (7), Functions (5), AI Gateway (6), Vector Search (4), Realtime (5), Agent Memory (6), Cron Jobs (5)",
      competitor: "Database, Auth, Storage, Functions, Realtime, Vector (via extensions)",
    },
    workflow: {
      katalyst: "Describe what you want \u2192 Agent builds it \u2192 Backend is live",
      competitor: "Open dashboard \u2192 Configure each service \u2192 Write client code \u2192 Deploy separately",
    },
    conclusion: "Supabase is an excellent platform for developers who prefer visual configuration. Katalyst is built for the next era \u2014 where AI agents handle the backend so you can focus on what matters. If you're already using AI coding agents, Katalyst removes the last manual bottleneck in your workflow.",
  },
  firebase: {
    name: "Firebase",
    date: "Feb 10, 2026",
    whatIs: "Firebase is Google's Backend-as-a-Service platform offering a suite of tools including Firestore (NoSQL database), Authentication, Cloud Storage, Cloud Functions, and Hosting. Firebase uses a proprietary NoSQL database and requires manual configuration through the Firebase Console.",
    whatSimilar: [
      "Both provide authentication with multiple OAuth providers",
      "Both offer cloud storage for files and media",
      "Both support serverless functions",
      "Both include hosting and deployment capabilities",
      "Both have realtime data synchronization",
    ],
    operatorModel: {
      katalyst: "AI agents via MCP protocol \u2014 zero dashboard configuration needed",
      competitor: "Human developers via Firebase Console \u2014 extensive manual setup required",
    },
    backendPrimitives: {
      katalyst: "PostgreSQL database, Auth, Storage, Functions, AI Gateway, Vector Search, Realtime",
      competitor: "Firestore (NoSQL), Auth, Storage, Functions, Hosting, Analytics",
    },
    workflow: {
      katalyst: "Describe your app \u2192 Agent provisions everything \u2192 Ship immediately",
      competitor: "Create Firebase project \u2192 Enable services \u2192 Configure rules \u2192 Write integration code",
    },
    conclusion: "Firebase is a mature platform with deep Google Cloud integration. However, its NoSQL-first approach and manual configuration model don't align with how modern AI agents work. Katalyst's PostgreSQL foundation and agent-first design make it the natural choice for developers building with AI coding tools.",
  },
  "hosted-postgres": {
    name: "Hosted Postgres",
    date: "Feb 10, 2026",
    whatIs: "Hosted Postgres services (like Neon, Railway, Render, or AWS RDS) provide managed PostgreSQL databases in the cloud. They handle infrastructure, backups, and scaling, but only provide the database layer \u2014 you need to build or integrate everything else yourself.",
    whatSimilar: [
      "Both use PostgreSQL as the core database",
      "Both offer managed infrastructure and automatic backups",
      "Both provide connection pooling and performance optimization",
      "Both support standard SQL and PostgreSQL extensions",
    ],
    operatorModel: {
      katalyst: "AI agents manage the full backend stack through a unified MCP interface",
      competitor: "Developers manage database only \u2014 auth, storage, functions require separate services",
    },
    backendPrimitives: {
      katalyst: "Database + Auth + Storage + Functions + AI + Vector + Realtime + Deployment (all-in-one)",
      competitor: "Database only \u2014 everything else requires separate providers and integration work",
    },
    workflow: {
      katalyst: "One MCP connection gives your agent a complete backend",
      competitor: "Provision database \u2192 Find auth provider \u2192 Set up storage \u2192 Deploy functions separately",
    },
    conclusion: "Hosted Postgres is great if you only need a database and want to assemble the rest yourself. Katalyst gives you the same PostgreSQL foundation plus every backend service you need, all accessible through a single MCP connection that your AI agent can operate autonomously.",
  },
};

export const FOOTER_LINKS = {
  product: [
    { name: "Blog", href: "/blog" },
    { name: "Docs", href: "#" },
    { name: "Pricing", href: "/pricing" },
    { name: "Changelogs", href: "/changelogs" },
  ],
  company: [
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ],
  community: [
    { name: "GitHub", href: "#" },
    { name: "Discord", href: "#" },
    { name: "Twitter", href: "#" },
  ],
};

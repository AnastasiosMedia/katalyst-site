# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Katalyst marketing site — a static Next.js 14 showcase for an AI-native Backend-as-a-Service platform. Promotes 57 MCP tools across 9 backend categories. No API calls or backend integration; all content is driven from `lib/constants.ts`.

Part of a larger ecosystem:
- **This repo** (`Web/Katalyst/`) — Marketing site
- `Web/katalyst-platform/` — MCP server + API + mobile app (pnpm monorepo)
- `Web/katalyst-studio-vscode/` — VS Code fork IDE

## Commands

```bash
npm run dev      # Dev server (localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

No test suite configured.

## Architecture

### Stack
- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS 3 (custom dark theme in `tailwind.config.ts`)
- Framer Motion (scroll-triggered animations)

### Path Alias
`@/*` maps to the project root — use `@/components/...`, `@/lib/...`.

### Content Model
All site content lives in **`lib/constants.ts`** (~600 lines): hero copy, feature lists, 57 tool definitions, benchmarks, changelogs, testimonials, FAQs, pricing tiers, blog posts, and comparison data. Components import and iterate over these arrays — there is no CMS or API.

### Animation System
`lib/animations.ts` exports shared Framer Motion variants:
- `fadeIn` / `staggerContainer` / `staggerItem` — used across all sections
- `viewportConfig` (`{ once: true, margin: "-50px" }`) — standard trigger config

Components use `whileInView` with these variants. Auto-scrolling strips (agents, frameworks) use CSS `animate-scroll-left`/`animate-scroll-right` defined in `globals.css`.

### Page Structure
`app/page.tsx` (home) assembles 11 section components in order from `components/home/`. Other pages: `/pricing`, `/blog`, `/changelogs`, `/contact`, `/alternatives/katalyst-vs-*`.

### Component Organization
```
components/
  home/       — Homepage sections (Hero, FeaturesGrid, ToolsShowcase, Benchmarks, etc.)
  layout/     — Navbar, MobileMenu, Footer
  shared/     — SectionHeading, GradientText, ComparisonPage template
  ui/         — Button, Card, Accordion, Badge, AnimatedCounter
```

### Design Tokens (Tailwind)
Dark theme with gold accents — defined in `tailwind.config.ts`:
- Backgrounds: `bg-primary` (#050505), `bg-secondary` (#0a0a0a), `bg-tertiary` (#0f0f0f)
- Accent: `accent-gold` (#C8A97E), `accent-gold-hover` (#D4B88E)
- Text: `text-primary` (#f0ebe3 warm beige), `text-secondary` (#888), `text-dim` (#333)
- Fonts: Cormorant Garamond (display), DM Sans (body), JetBrains Mono (mono)

Custom CSS classes in `globals.css`: `card-hover`, `glass`, `scroll-container`, `tag-label`.

### Comparison Pages
Use a shared `ComparisonPage` template component. Data for each competitor is in `lib/constants.ts` under `COMPARISONS`.

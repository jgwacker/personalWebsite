# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:4321
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run Biome linter
```

No test suite is configured.

## Architecture

**Stack:** Astro 5 (SSG) + MDX + Tailwind CSS 3 + TypeScript. Linting via Biome (not ESLint/Prettier).

**Routing:** File-based under `src/pages/`. Dynamic routes use `[slug].astro` with `getStaticPaths()` from content collections.

**Content Collections** (`src/content/config.ts`): Two collections with Zod schemas:
- `blog` — posts with `title`, `description`, `pubDate`, `tags`, `draft`
- `research` — papers with `title`, `abstract`, `pubDate`, `venue`, `doi`, `arxiv`, `tags`, custom `links`

Content lives as `.mdx` files in `src/content/blog/` and `src/content/research/`. Draft posts are filtered out via `draft !== true` in page queries.

**Layouts:** Three-level hierarchy — `BaseLayout` (header/footer shell) → `IndexLayout` / `ArticleLayout` (page-type wrappers) → page components.

**Path Aliases** (defined in `tsconfig.json`):
- `@components/*`, `@layouts/*`, `@styles/*`, `@data/*`, `@content/*`

**Photography:** Static data only — photo metadata lives in `src/data/photos.ts`, no content collection.

**Tailwind Theme** (`tailwind.config.cjs`): Custom semantic color palette (`base-bg`, `base-text`, `base-mute`, `base-border`, `base-accent`). Font is Inter Variable with weights 300/400/600.

**Site URL:** Currently set to `https://example.com` in `astro.config.mjs` — update before deploying.

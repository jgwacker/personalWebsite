import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Static guides under public/guides/ are not Astro pages, so list them
// explicitly here so they appear in the sitemap.
const guidePages = [
  'https://jaywacker.com/guides/',
  'https://jaywacker.com/guides/world/',
  'https://jaywacker.com/guides/world/guides/ebola-2026/',
  'https://jaywacker.com/guides/world/guides/bougainville-2026/',
  'https://jaywacker.com/guides/world/guides/ai-race-2026/',
  'https://jaywacker.com/guides/world/guides/ai-rulebook-2026/',
  'https://jaywacker.com/guides/world/guides/ai-values-2026/',
];

export default defineConfig({
  site: 'https://jaywacker.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap({ customPages: guidePages }),
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://jaywacker.com',
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  markdown: {
    syntaxHighlight: 'shiki',
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
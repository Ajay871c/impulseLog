import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import katexStyle from 'katex/dist/katex.min.css';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  site: "http://localhost:4321",
  integrations: [sitemap()],
});
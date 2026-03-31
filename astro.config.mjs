// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import { remarkMark } from './src/plugins/remark-mark.mjs';
import { rehypeWrapH3 } from './src/plugins/rehype-wrap-h3.mjs';
import { remarkDirective, remarkCallout } from './src/plugins/remark-callout.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://235blog.netlify.app/',
  devToolbar: { enabled: false },
  integrations: [sitemap(), pagefind()],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkMark, remarkDirective, remarkCallout],
    rehypePlugins: [rehypeWrapH3],
    shikiConfig: {
      themes: {
        light: 'rose-pine-dawn',
        dark: 'rose-pine-moon',
      },
    },
  },
});

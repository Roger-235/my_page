// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://235blog.netlify.app/',
  devToolbar: { enabled: false },
  integrations: [sitemap(), pagefind()],
  markdown: 
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'github-dark-default',
    },
  },
});

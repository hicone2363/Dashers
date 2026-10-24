import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dashermath.com',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  build: {
    format: 'directory',
  },
});

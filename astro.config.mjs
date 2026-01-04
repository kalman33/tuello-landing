import { defineConfig } from 'astro/config';

// Pour GitHub Pages: https://kalman33.github.io/tuello-landing/
// Si tu as un domaine personnalisé, change site et retire base
export default defineConfig({
  site: 'https://kalman33.github.io',
  base: '/tuello-landing',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});

import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://agtrevino.github.io/portfolio/
// For a custom domain or a user site (agtrevino.github.io repo),
// set SITE and BASE in the workflow, or edit the defaults below.
export default defineConfig({
  site: process.env.SITE ?? 'https://agtrevino.github.io',
  base: process.env.BASE ?? '/portfolio',
});

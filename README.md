# Portfolio

Personal portfolio for Aaron G. Trevino. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

This is a port of the original Angular site. The design, copy, and animations are unchanged.

## Develop

Requires Node.js 22 or later.

```sh
npm install
npm run dev      # http://localhost:4321/portfolio/
npm run build    # outputs to dist/
npm run preview
```

## Where things live

| Path | What it holds |
|---|---|
| `src/components/home.html` | Page markup (all sections, copy, and links) |
| `src/styles/home.scss` | Styles from the original component |
| `src/scripts/home.js` | Scroll, nav, and hover behavior (jQuery) |
| `src/pages/index.astro` | Page shell that loads the files above |
| `public/assets/` | Fonts, images, videos, and the resume PDF |

In `home.html`, `%BASE%` is replaced with the site's base path at build time. Keep it in asset URLs.

## Deploy

The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `master`.

1. In the repository, go to **Settings** > **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

The default base path is `/portfolio`. For a custom domain or a `<user>.github.io` repository, set the `SITE` and `BASE` environment variables in the workflow.

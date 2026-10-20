# Portfolio

Personal portfolio for Aaron G. Trevino. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321/portfolio/
npm run build    # outputs to dist/
npm run preview
```

## Update content

Edit `src/data/site.ts`. It holds the bio, experience, skills, projects, and contact links. Search for `TODO` to find items that need your input.

To add a resume, place the PDF in a new `public/` folder (for example `public/resume.pdf`) and set `resumeUrl: '/resume.pdf'` in `src/data/site.ts`.

## Deploy

The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `master`.

1. In the repository, go to **Settings** > **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

The default base path is `/portfolio`. For a custom domain or a `<user>.github.io` repository, set the `SITE` and `BASE` environment variables in the workflow.

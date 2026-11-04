# Sujith Bandaru: personal site

My home on the internet: who I am, where I have been, what I am building, and what I am thinking about. Built with Astro, written in Markdown, deployed automatically when changes reach `main`.

This README describes the target structure. Until Phase 1 is done, some of these paths do not exist yet; `STATUS.md` says where things stand.

## What you can do here

| I want to... | Open this |
|---|---|
| Add or edit a blog post | `src/content/posts/` (see `src/content/README.md`) |
| Add or edit a project | `src/content/projects/` |
| Add or edit a chapter of my journey | `src/content/journey/` |
| Change colours, fonts or spacing across the site | `src/styles/tokens.css` |
| Change the navigation or footer | `src/layouts/BaseLayout.astro` |
| Replace my CV or favicon | `public/` |
| Change the placeholder home page text (until Phase 3 replaces it) | `src/pages/index.astro` |
| Preview, check and publish my changes | "Check and publish" in `src/content/README.md` |
| See why something was built the way it was | `docs/DECISIONS.md` |
| See what phase the build is in | `STATUS.md` |

Pushing to `main` publishes the live site. Preview locally first.

## Run it on your machine

You need Node (the version in `.nvmrc`) and git.

```
npm install        # once, after cloning
npm run dev        # live preview at http://localhost:4321, updates as you save
npm run build      # the same build the host runs; must pass before you push
```

## How it fits together

Words are Markdown files in `src/content/`, one file per post, project or journey chapter. Each folder has a schema in `src/content.config.ts` that checks the frontmatter, so a missing date or title fails the build with a message saying which file and which field.

Pages in `src/pages/` read those files and render them through shared layouts and components. The visual identity is CSS variables in `src/styles/tokens.css`; components never use raw colour or font values.

There is no JavaScript framework and no CSS framework. Anyone who knows HTML and CSS can read every file.

## For developers

Standard Astro project. Output is fully static. Hosting and domain details are in `docs/DECISIONS.md`. If you change how something works, update this README and add a dated entry to `docs/DECISIONS.md`.

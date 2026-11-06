# Sujith Bandaru: personal site

My home on the internet: who I am, where I have been, what I am building, and what I am thinking about. Built with Astro, written in Markdown, deployed automatically when changes reach `main`.

## What you can do here

| I want to... | Open this |
|---|---|
| Add or edit a blog post | `src/content/posts/` (see `src/content/README.md`) |
| Add or edit a project | `src/content/projects/` |
| Add or edit a chapter of my journey | `src/content/journey/` |
| Change colours, fonts or spacing across the site | `src/styles/tokens.css` |
| Change the sticky header | `src/components/SiteHeader.astro` |
| Change the footer, boat or waves | `src/layouts/BaseLayout.astro` |
| Swap a font | The `fonts` list in `astro.config.mjs`, then `src/styles/tokens.css` |
| Change the rope or anchor | `src/components/AnchorLine.astro` |
| Change the sea floor scenery | `src/components/SeaFloor.astro` |
| Change the margin down each side of every page | `--page-gutter` in `src/styles/tokens.css` |
| Redraw the tab icons or link preview image | `scripts/make-images.mjs`, then run `node scripts/make-images.mjs` |
| Replace my CV | `public/` |
| Change my first line, headings, links or the header menu | `src/content/site.json` |
| Change the About page | `src/content/about.md` |
| Change the home page layout | `src/pages/index.astro` |
| Change the layout of another page | `src/pages/`, where each file or folder is named after its web address |
| Change how deep a page starts | The `water` setting at the top of its page file, using the gradients in `src/styles/tokens.css` |
| Change the shared title block or reading text | `src/components/PageHead.astro`, `src/components/Reading.astro` |
| Change the link back to the spot left on the home page | `src/components/BackToDive.astro`, and the script in `src/pages/index.astro` |
| Change the blog feed | `src/pages/rss.xml.js` |
| Change the corner year marker | `src/components/YearMarker.astro` |
| Change the project and post rows, or their arrow | `src/components/ArrowRow.astro` |
| Change what counts as published, or the order | `src/lib/content.ts` |
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

## Working with someone else

Working alone, committing to `main` and pushing is fine. Anyone else should make changes on a branch instead, because pushing to `main` publishes the site, and a branch lets the change be reviewed first. They need to be added as a collaborator on GitHub, or to send the change from their own copy of the repo.

1. Create a branch: `git switch -c short-description`
2. Make the change, run `npm run build`, then commit it
3. Push the branch: `git push -u origin short-description`
4. Open a pull request on GitHub, using the link git prints after the push
5. Merge it once it has been reviewed, which publishes the site
6. Go back to `main` and update it: `git switch main`, then `git pull`

## For developers

Standard Astro project. Output is fully static. Hosting and domain details are in `docs/DECISIONS.md`. If you change how something works, update this README and add a dated entry to `docs/DECISIONS.md`.

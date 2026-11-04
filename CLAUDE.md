# Agent Instructions: personal site

This repo is Sujith's personal website: a home on the internet about who he is, his journey so far, what he is building, his interests, and a blog. Recruiters will see it, but they are not the audience it is written for. It should read like a person, not a CV.

Read `STATUS.md` first. It says which phase we are in and what was decided last session. `docs/DECISIONS.md` holds every lasting choice and its reason; check it before proposing to change anything it covers, so we do not relitigate settled questions.

## The one requirement everything serves

Sujith must be able to change this site without AI, and a web developer must be able to pick it up without a handover. Every rule below exists for that. When a choice is close, take the option a stranger could understand by reading the files.

## Where things live

- Words live in Markdown under `src/content/`: `projects/`, `journey/`, `posts/`. Pages read from there. Never hardcode text a person would want to edit inside a component or page file, because then changing a sentence means editing code.
- The look lives in `src/styles/tokens.css`: colours, fonts, spacing, as CSS variables. Components use the variables and never raw values, so the whole site can be restyled from one file.
- Shared page structure (head, nav, footer) is defined once in `src/layouts/`. Reusable pieces go in `src/components/`.
- Images go in `src/assets/` when Astro should optimise them, `public/` only for files that must keep an exact URL (favicon, CV PDF).

Only two folders get a README: the root and `src/content/`. The rest follow Astro's standard layout, which any developer already knows, and a README in every framework folder would be noise for them. `src/content/README.md` is the one Sujith opens most: it explains how to add a project, a journey chapter or a post, with a copyable example of the frontmatter.

## Rules

Content schemas are the guardrail, not prose. Each collection has a schema in `src/content.config.ts`, so a post missing its date fails the build with a clear error. If content fails a schema, fix the content; loosen a schema only when Sujith agrees, and record why in `DECISIONS.md`.

No new dependency without asking, and every one that is added gets a line in `DECISIONS.md` saying what it does and why the site could not do without it. Each dependency is something a future maintainer has to understand and update.

No JavaScript framework and no CSS framework unless a decision says otherwise. Astro components and plain CSS are readable by anyone who knows HTML; React islands and utility-class soup are not.

Readable over clever. Comment the why, never the what. A developer can read what the code does; they cannot recover why it was done that way.

Show before you build. For anything visual (a new page layout, a design direction), produce a quick mock or a preview first and get an approve or reject before building it properly, because a correction is cheap while it is still a mock.

One piece at a time. One page or one component per step, previewed with `npm run dev`, before the next.

Every phase ends with a hand test: Sujith makes one change himself with no AI (edits a sentence, adds a post, changes a colour) following the README. If he cannot, the README or the structure is wrong, and fixing that is part of the phase.

## His words are his

Never invent facts about Sujith. The About page, journey chapters and posts are written by him; edit only typos and broken formatting unless he asks for more, and say what you changed. If he asks for a draft, mark it `draft: true` so it cannot publish by accident.

Nothing about other people or private matters goes on the site unless Sujith has explicitly approved that specific content. Never put a plain-text email address in the HTML, because scrapers harvest it within days. Job-search tooling goes on the site only as a write-up Sujith has approved, and never anything about specific applications.

## Git and publishing

Pushing to `main` publishes the site, so a push is an outward-facing action: commit freely in small steps with plain-English messages, but push only when Sujith says so. Never force-push. Run `npm run build` before every commit, because the host runs the same build and a broken build means the live site stops updating.

## Facts that are always true here

The machine is Windows. Node is pinned in `.nvmrc`; use that version, because a different major version is the most likely cause of a build that works on one machine and not another.

The repo is public. Anything committed is visible forever in git history, including a draft that was later deleted, so unfinished posts stay in Sujith's Obsidian vault until they are ready.

Secrets do not exist in this repo and should not. If something seems to need an API key, stop and ask, because a static personal site should not.

## Keep the docs current

After any change that alters how something works, update the one file that owns that fact in the same pass: the README menu for how-to, `DECISIONS.md` for a choice and its reason, `STATUS.md` for where we are. Do not wait to be asked.

## House style

Written for a human first. No emoji, no em dashes, no decorative bold. Prose carries the reasoning.

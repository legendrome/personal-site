# Status

Current phase: 3, pages, one at a time (Phase 0 writing continues alongside). Phase 2 is finished. The ocean look is live on the test address, with newer work committed locally until Sujith says to push: https://personal-site.bsujith-pro.workers.dev/

Each phase ends with a hand test: one change made by Sujith with no AI, following the README. A phase is not done until that works.

## Phase 0: content and decisions (Sujith, no code)

- [x] Pick a domain (see `docs/DECISIONS.md`, open questions)
- [ ] Write the About page in Obsidian: who I am now, in my own voice
- [ ] Write the journey chapters: Malmö, Hyderabad, Kenya, Warwick, now
- [ ] Write up a first passion project; more follow over the years, so the section can launch small
- [ ] Draft one blog post, so the blog launches with something in it
- [ ] Decide what is public about other people and private matters
- [ ] Decide whether to have a /now page (only if I will update it monthly)

## Phase 1: skeleton and pipeline

- [x] Install Node LTS and git (already installed: Node 24, git 2.55)
- [x] GitHub account and repo (legendrome/personal-site)
- [x] Create the repo from these starter files; Astro minimal template
- [x] Content collections and schemas for projects, journey, posts
- [x] Write `src/content/README.md`
- [x] Connect the host; a placeholder page live on the free subdomain
- [x] Hand test: change the placeholder text, push, see it live

## Phase 2: design direction

- [x] Two or three static mocks of the home page; pick one
- [x] Encode it in `src/styles/tokens.css`
- [x] Hand test: change one colour in tokens.css and see it everywhere

## Phase 3: pages, one at a time

- [x] Content structure: site words, About text and marked placeholders
- [ ] Home: the full dive, with journey chapters, featured projects and latest post
- [ ] About: who I am now and interests
- [ ] Journey: one page per chapter that has a full write-up
- [ ] Work: index and one page per project, at /work
- [ ] Writing: index, one page per post, RSS feed
- [ ] 404 page, including the Cloudflare setting that serves it
- [ ] Footer: LinkedIn, GitHub, contact without a plain-text email
- [ ] Hand test: add a post from scratch using only `src/content/README.md`

## Phase 4: domain and finish

- [x] Register the domain (sujithbandaru.com)
- [ ] Connect the domain and change the `site` address in `astro.config.mjs` to it
- [ ] Redirect the test address to the domain, so two copies of the site do not exist
- [ ] Sitemap, social preview images, favicon
- [ ] Accessibility check (contrast, keyboard, alt text)
- [ ] Decide on analytics, privacy-friendly or none

## Phase 5: handover test

- [ ] Clone the repo onto a clean machine or folder and follow the README cold
- [ ] Ideally, a friend who codes reads it and says what confused them
- [ ] Add a README section on upkeep: updating Astro and checking the site still builds

## Decisions log

2026-11-03 - Plan set. Stack, hosting, repo shape and audience recorded in `docs/DECISIONS.md`.
2026-11-03 - Phase 1 started. Astro 7 minimal template in place, placeholder home page builds, first local commit made.
2026-11-04 - GitHub repo created and connected, commits use the GitHub private email, project rules renamed to CLAUDE.md, first push done. Next: connect Cloudflare, then content collections.
2026-11-04 - Cloudflare settings added (Workers with static assets, see `docs/DECISIONS.md`). Not connected yet.
2026-11-04 - Cloudflare connected to GitHub; placeholder live and checked. Next: content collections and `src/content/README.md`, then the hand test.
2026-11-04 - Content collections built and tested. Next: `src/content/README.md`, then the hand test.
2026-11-04 - Content README written and its examples tested. Next: the Phase 1 hand test, done by Sujith with no AI.
2026-11-04 - Phase 1 hand test passed: Sujith changed the placeholder and published it with no AI. The two gaps it exposed (opening the right folder, the PowerShell script block) are now in `src/content/README.md`. Next: Phase 2 mocks.
2026-11-04 - Phase 2 in progress. Tried: poster stack layout, Unbounded titles, Rock Salt notes, Major Mono Display labels, deep space blue with light sky text and a rose accent. Sujith says the result still feels off, so none of this is final or built. Next: work out what feels off. Mocks are private, not in this repo; the design brief is in his vault at Website/Site brief - first version.md.
2026-11-05 - Ocean dive direction chosen and built into tokens.css, the layout and two sticky headers. Next: Sujith does the colour hand test. Open for Phase 3: a time or age marker alongside or instead of the depth gauge, and whether to show age or years.
2026-11-05 - Phase 2 hand test passed: Sujith changed a colour in tokens.css with no AI and saw it change everywhere. Next: push the look when he says so, then start Phase 3.
2026-11-05 - The dive will mark chapters by year, not age, so visitors cannot work out a birth date. The sky now fills the first screen. Next for the home page: Sujith to give chapter years and approve the Kenya chapter.
2026-11-04 - Cloudflare branch builds fixed by adding the empty `previews` block to `wrangler.jsonc`.
2026-11-05 - Phase 3 build started from the agreed plan, with unwritten words as marked placeholders. Real chapter drafts stay in the vault until Sujith approves them.
2026-11-05 - The journey is now the heart of the site, and the Work and Writing pages fill up over the next few years, so full journey chapters are the writing priority. See `docs/DECISIONS.md`.

# Status

Current phase: 2, design direction (Phase 0 writing continues alongside). Phase 1 is finished: the site is on GitHub and live on the test address, https://personal-site.bsujith-pro.workers.dev/

Each phase ends with a hand test: one change made by Sujith with no AI, following the README. A phase is not done until that works.

## Phase 0: content and decisions (Sujith, no code)

- [x] Pick a domain (see `docs/DECISIONS.md`, open questions)
- [ ] Write the About page in Obsidian: who I am now, in my own voice
- [ ] Write the journey chapters: Malmö, Hyderabad, Kenya, Warwick, now
- [ ] Write up two projects: problem, what I built, what broke, what changed
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

- [ ] Two or three static mocks of the home page; pick one
- [ ] Encode it in `src/styles/tokens.css`
- [ ] Hand test: change one colour in tokens.css and see it everywhere

## Phase 3: pages, one at a time

- [ ] Home: short intro, latest posts, featured projects
- [ ] About: journey timeline and interests
- [ ] Projects: index and one page per project
- [ ] Writing: index, one page per post, RSS feed
- [ ] Footer: LinkedIn, GitHub, contact without a plain-text email
- [ ] Hand test: add a post from scratch using only `src/content/README.md`

## Phase 4: domain and finish

- [ ] Register and connect the domain
- [ ] Sitemap, social preview images, favicon
- [ ] Accessibility check (contrast, keyboard, alt text)
- [ ] Decide on analytics, privacy-friendly or none

## Phase 5: handover test

- [ ] Clone the repo onto a clean machine or folder and follow the README cold
- [ ] Ideally, a friend who codes reads it and says what confused them

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

# Status

Current phase: 4, domain and finish (Phase 0 writing continues alongside). Phase 3 is finished. The site is live at https://sujithbandaru.com/. The test address (https://personal-site.bsujith-pro.workers.dev/) still works too, until it is turned off or redirected.

Each phase ends with a hand test: one change made by Sujith with no AI, following the README. A phase is not done until that works.

## Design pass (approved 2026-11-16)

A senior audit found the theme works but a recruiter cannot tell who Sujith is or how to reach him in the first seconds. Direction chosen: "Deeper dive", which keeps the ocean, Unbounded and Karla, and adds buoy orange for the main action. Five phases, each shown to Sujith before the next:

1. Foundation: type scale, accent, breakpoints, shared tokens, Karla 700, link colour, tap sizes, checks at 320px and 200% zoom. Done 2026-11-16, committed locally, not pushed.
2. Home page, mocked first: a hero with a plain line and two buttons ("Get in touch", "Start the dive"), an "At a glance" strip, a tighter journey section, a contact button in the footer. Text in `site.json`.
3. Inner pages: experience before interests on About, the headline as the h1, a decision on Work, plain labels in place of "Back to the dive".
4. Features: hand-written sitemap and robots.txt, missing link-preview tags, structured data, his photo when he has one; analytics and an email link only if he says yes.
5. Check and hand over: keyboard, contrast, Lighthouse, 320px and 200% zoom, docs, and his hand test.

## Plan (tentative, set 2026-11-14)

Sujith is sending the site to someone on 2026-11-15, so the work before that is only what that person will notice.

Before sending:

1. Build Warwick from the approved version 5, with the lesson layout: a big line per lesson, the story folded under "Read the story", and "What I did" cards that point to files in `src/content/experience/`. New home page line: "Where I learned the difference between what something is worth and what makes it worthwhile." About an hour.
2. Read every page as the person receiving it would, and fix anything that reads badly. About 20 minutes.
3. Push.
4. Connect sujithbandaru.com, if there is time. Sujith clicks through Cloudflare while the address in `astro.config.mjs` changes. About 30 minutes. The first thing to drop if time runs short.
5. Sujith checks the site and its link preview on his iPhone, then sends it.

After sending:

6. Write the page-writing process into a skill in the repo: brief, discovery interview, format proposal, spine and outline, follow-up questions, draft with a fresh-eyes fact check, build, and revision (diagnose vague feedback against a fixed list of causes, state the intended result, show every change marked up, and turn lasting feedback into rules). It keeps a list of the formats the site has, starting with lessons.
7. A fact-checker agent definition that reads only the draft and Sujith's sources, and checks the draft against the brief.
8. Two templates in the vault, a brief and a discovery interview, for Sujith to answer by voice note.
9. Use the process on the other chapters one at a time, starting with Hyderabad, then posts.
10. Still parked: the space either side of chapter text on wide screens, sitemap, accessibility check, analytics, and the Phase 5 handover test.

## Phase 0: content and decisions (Sujith, no code)

- [x] Pick a domain (see `docs/DECISIONS.md`, open questions)
- [x] Write the About page in Obsidian: who I am now, in my own voice
- [x] Write the journey chapters: Malmö, Hyderabad, Kenya, Warwick, now
- [x] Write up a first passion project; more follow over the years, so the section can launch small
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
- [x] Home: the full dive, with journey chapters, featured projects and latest post
- [x] About: who I am now and interests
- [x] Journey: one page per chapter that has a full write-up
- [x] Work: index and one page per project, at /work
- [x] Writing: index, one page per post, RSS feed
- [x] 404 page, including the Cloudflare setting that serves it (check it on the live site after the next push)
- [x] Link previews and soft page changes
- [x] Header links, skip link and footer with GitHub (LinkedIn appears once its address is in `site.json`)
- [x] Hand test: add a post from scratch using only `src/content/README.md`

## Phase 4: domain and finish

- [x] Register the domain (sujithbandaru.com)
- [x] Connect the domain and change the `site` address in `astro.config.mjs` to it
- [ ] Make www.sujithbandaru.com work, by sending it to sujithbandaru.com (it does not answer at all yet)
- [ ] Redirect the test address to the domain, so two copies of the site do not exist
- [x] Social preview image and favicon
- [ ] Sitemap
- [ ] Check the phone top-of-page colour and link preview on a real iPhone
- [ ] Accessibility check (contrast, keyboard, alt text)
- [ ] Decide on analytics, privacy-friendly or none

## Phase 5: handover test

- [ ] Clone the repo onto a clean machine or folder and follow the README cold
- [ ] Ideally, a friend who codes reads it and says what confused them
- [ ] Add a README section on upkeep: updating Astro and checking the site still builds

## After prototype version 1

Sujith wants these once the first version is done, so they are not part of it.

- [ ] A more realistic sea floor, including seaweed that ripples along its length instead of swaying from its base
- [ ] A more realistic boat

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
2026-11-05 - Home page dive built, committed locally with placeholder words. Its project and post rows lead to "page not found" until those pages exist. Next: header links and footer.
2026-11-05 - Pushed the dive to the test address at Sujith's request, so a friend could see it, knowing the words are placeholders and the rows lead nowhere yet.
2026-11-05 - Header links, skip link and footer built, committed locally. The header links lead to "page not found" until the inner pages exist. Next: a mock of the inner pages. For the Phase 4 accessibility check: the header name is low contrast for the moment it crosses the waves, which is where the skip link lands.
2026-11-05 - Inner pages built from the approved mock, committed locally, so every link now leads somewhere. Words are still placeholders. Next: the Phase 3 hand test, then Sujith's real words.
2026-11-05 - Added "Back to the dive", and filled in headings so the site is easier to navigate. Still placeholders: chapter lines and text, About text, the first post and the project write-up.
2026-11-05 - Chapter lines approved in upbeat wording and pushed with the full site. Cloudflare's page-not-found setting confirmed working live.
2026-11-06 - Added the anchor line, sea floor, boat icon, link preview image, sea-coloured text selection, sky colour above the top of the page and "Come aboard". Committed locally. Next: Sujith's hand test, then chapters and small details side by side.
2026-11-06 - First hand test attempt: Sujith wrote and added a post himself, but the build refused it because the file started with the guide's box markers and `\---`. The error named the file, but not the real cause. The guide now covers this, so the test still needs one clean run with no help.
2026-11-06 - Phase 3 hand test passed: Sujith deleted the placeholder post, built, committed and pushed his first post with no AI, and it is live. Next: the About text and a first full chapter, then the switch to sujithbandaru.com.
2026-11-06 - About text approved and added, with the family company left out, and the LinkedIn link added. The domain work is paused while the pages get finished. Next: the Kenya chapter.
2026-11-06 - Added the sea floor and widened the page margin so the anchor has room. Sanity check done. Found Sujith's own chapter lines and answers in his vault note `Website/stuff to do.md`, which should come before the wording Claude wrote.
2026-11-06 - Sujith's chapter lines and his original post wording are in and live, and the boat is higher. Next: mock the About page as a visual, nice to look at CV covering everything he has done, as his note asks, using only facts he gives, with examples marked. Then the Kenya chapter, the other chapters and the project write-up. Sujith is gathering photos for each chapter, and anyone else in them must be okay with appearing. From the sanity check, still to change: too many ocean puns (keep two at most), the same giant title and one line at the top of About, Work and Writing, the clip-art starfish, the empty gaps between chapters on a computer, and a faint line under the waves on About and the page-not-found page. Open wording choices in his post: the opening, the ending and the description. His note also liked "The bottom." as the sea floor heading, which the upbeat pass changed. Parked: the www address and turning off the test address.
2026-11-08 - About rebuilt in two parts from the approved mock: who Sujith is, then what he has done, grouped by journey chapter, with roles as files in `src/content/experience/`. Chapter years are real now, so they also show on the home page. Committed locally, not pushed. Still to check with Sujith: the reworded role lines drawn from his CV, and a photo of him for the top of About if he has one he likes.
2026-11-08 - Added his school years under Hyderabad from his university application CV, leaving out contact details and references. Committed locally, not pushed. Guitar, badminton and his two mottos are now in the first part of About, at his request; French is left out, because he is no longer learning it.
2026-11-09 - The Kenya chapter is in, from the web draft Sujith approved, with his bike ride photo as its main image (no faces shown). Committed locally, not pushed. Next: more Kenya photos as he finds them, then mark the vault draft as published once it is live.
2026-11-11 - Kenya caption pushed. Sanity check fixes done from the approved mock: page tops on About, Work and Writing lead with their sentence, fewer ocean puns (Sujith kept "Come aboard" and "Keep diving"), a basketball replaces the starfish, smaller gaps between chapters on a computer, and the faint line under the waves is gone. Committed locally, not pushed. Next: the Warwick chapter.
2026-11-11 - The Malmö, Hyderabad, Warwick and Now chapters are in from the web drafts Sujith approved, with two edits to Hyderabad (IB years, and a line about his election friends removed). The "This website" write-up is in, drafted by Claude from the build and approved by Sujith. No placeholders remain. Committed locally, not pushed. The finish (domain, sitemap, accessibility check) is parked for later.
2026-11-11 - Warwick restructured around three lessons, with numbered headings and bubbles rising behind the numbers, from the approved mock. Chapters opt in with `lessons: true`. Committed locally, not pushed. Next: decide whether the other chapters get the same treatment.
2026-11-11 - Chapter pages: larger text, centred with the chapter list, on big screens. What fills the space either side is for later. Committed locally, not pushed.
2026-11-11 - Paused mid-Warwick. Read as a recruiter would, the chapter shows self-awareness but none of the Warwick achievements, its opening undersells the choice of course, and it ends on doubts about career and work ethic. Sujith likes the lighter layout mocked tonight (one big line per lesson, the story folded under "Read the story", a "What I did" card), but wants to rethink the content himself tomorrow before anything is built. Lesson three has no card yet. Three commits wait to push: the chapters, Warwick's lessons and the centred chapter text.
2026-11-14 - Plan step 1 done: Warwick version 5 built with the lesson layout and its new home page line, checked on a computer and a phone. Committed locally, not pushed.
2026-11-14 - Plan step 2 done: reader pass on every page. With Sujith's OK, cut the outdated "just a prototype" ending from his post, the "national player" line from Malmö, and plainened one sentence in Now.
2026-11-14 - Plan step 4: the domain was already serving the site, so only the `site` address in `astro.config.mjs` changed, which link previews and the feed use. Still to do after sending: www, and turning off or redirecting the test address.
2026-11-14 - Added Sujith's graduation speech (42:15 to 49:06 of the school's video) to the end of Hyderabad, with his favourite line as a quote, linked from About. Committed locally, not pushed.
2026-11-14 - Plan steps 1 to 4 done and pushed. Sujith's iPhone check found the speech player sitting small in the corner of its panel; fixed and pushed. Left: he reloads Hyderabad on his iPhone to confirm, then sends the site. After that, plan steps 6 to 10.
2026-11-14 - Plan steps 6 to 8 done: the write-page skill, the fact-checker agent, and the brief and interview templates in the vault. Next: step 9, Hyderabad through the new process.
2026-11-15 - Hyderabad rewritten through the write-page process (brief and interview in the vault, fact-checked) as a straight story with five headings; new home page line "Where I learned to include myself." The speech label now says "high school graduation", because in India "graduation" means a university degree. Pushed. Next: Malmö, Now and Kenya the same way.
2026-11-15 - Malmö rewritten the same way (brief and interview in the vault, fact-checked): a short chapter opening on Pildammsparken and the beach, with the electromagnetism project and the two badminton finals; new home page line "Where I started learning for myself." Pushed.
2026-11-15 - Kenya revised the same way (brief and interview in the vault, fact-checked): campus life, a fuller curium story from his slides, and a closing link to Warwick. Line and photo unchanged. Pushed.
2026-11-15 - Now rewritten the same way (brief and interview in the vault, fact-checked): his days, two ideas from the valuation and McKinsey courses, the valuation bot, and the kinds of roles he wants next, with no companies named. All five chapters have now been through the write-page process. Pushed.

# Decisions

Every lasting choice and why. Newest at the bottom. Before changing anything covered here, read the entry; if the reason no longer holds, add a new entry rather than editing the old one.

## 2026-11-03

**Audience: a personal home that recruiters happen to see.** Pages are written as a person talking about their life and work, not as a CV. This rules out keyword-stuffed headlines and a "hire me" home page.

**Stack: Astro, static output.** Content is separated from code, so editing words never means editing code; it is mainstream enough that a developer can take over without a handover. Plain HTML was rejected because shared parts (nav, footer) would be copied into every page and drift. Next.js was rejected as an app framework, more than a personal site needs. Wix and Framer were rejected because the site would live in their editor rather than in files Sujith owns.

**Content in Markdown collections with schemas.** Posts, projects and journey chapters are one Markdown file each. Schemas make a malformed file fail the build loudly, which is a check rather than a rule someone has to remember.

**Plain CSS with design tokens, no CSS framework.** Tailwind is widely known, but its class-heavy markup is hard to read for someone who does not code. One `tokens.css` file means the whole look changes from one place.

**No JavaScript framework.** Astro components output plain HTML. Interactivity, if any is ever needed, is added per component and recorded here.

**English only.** Adding languages later is possible in Astro but not planned; no i18n structure is built in now.

**Blog from day one.** It is a content collection like the others, so it costs little to include now and is awkward to retrofit into URLs and navigation later.

**Its own repo, separate from the main AI workspace repo.** The workspace holds private material and Windows-specific Python conventions that do not apply here; a developer cloning the site should get the site and nothing else. The working principles are shared through the user-level CLAUDE.md, not by nesting this repo inside the other.

**Public repo.** Code a developer can read is part of what the site demonstrates, and public repos get free hosting integrations everywhere. Trade-off: git history is permanent, so drafts stay in Obsidian until ready.

**Ownership, not self-hosting.** Sujith owns the code (GitHub) and the domain. The host is replaceable: the build output is plain files that can move to any static host. Running a personal server was considered and rejected; it adds patching and uptime work with no benefit for a static site.

**Host: Cloudflare, with the domain registered there too.** Free static hosting, domains sold at cost, and both managed in one account. Netlify and GitHub Pages are equal fallbacks. Confirm Cloudflare's current product for static sites at Phase 1, since its offering has been changing.

**Folder READMEs only at the root and in `src/content/`.** This departs from the workspace convention of a README in every folder. Astro's folder layout is a standard developers already know; extra READMEs there would be noise for them. `src/content/` gets one because it is where Sujith works most.

**Node 24 pinned in `.nvmrc`.** It is a long-term support release and was already installed on Sujith's machine, so there was nothing to install; Astro 7 needs 22 or newer. Move to the next LTS when 24 nears end of support (April 2028).

**Astro's template `AGENTS.md` and `README.md` not kept.** Our own README replaces theirs, and `CLAUDE.md` already does the job of agent instructions, so a second instructions file would drift from the first.

**Line endings fixed to LF with `.gitattributes`.** Windows and Mac/Linux write line breaks differently; without this rule, a developer on another system would see every line changed.

## 2026-11-04

**Cloudflare product: Workers with static assets, not Pages.** This settles the check the host entry asked for at Phase 1. Cloudflare's own Astro guide now deploys through Workers, and requests for static files are free and unlimited there. Pages still works but independent guides describe new features going to Workers first, so starting here avoids a later move. The site stays plain files, so the "any static host" escape route still holds.

**No Cloudflare adapter and no Wrangler dependency.** The adapter is only for pages built on demand, and every page here is built ahead of time. Wrangler is Cloudflare's upload tool; the deploy command runs it through `npx`, so it never joins `package.json` and there is nothing extra to keep updated. Astro's guide suggests installing it, and doing so becomes worthwhile only if a deploy ever breaks because a new Wrangler version changed behaviour.

**Journey chapters sort by start year, with `priority` only as a tiebreak.** Sujith proposed a priority number to settle chapters starting in the same year. Using it as the main sort was rejected because adding a chapter would mean renumbering those after it, and the numbers could disagree with the years.

**No tags on posts for now.** Tags need their own pages and do little until there are many posts; they can be added later.

## 2026-11-05

**Design direction: one ocean dive.** The page opens on a boat in the sky and scrolling descends through water that darkens to the sea floor. It came from Sujith, and it gives the site one idea to hang together, after earlier mocks felt disjointed. Rejected along the way: warm off-white paper (overdone on AI-made sites), a different background per chapter and sliding posters (these broke the flow of a single dive), red and green accents (jarring on the blue), and starry decoration (gimmicky).

**Two fonts: Unbounded for titles and Karla for reading.** Sujith chose Unbounded; Karla is a plain partner for long text. Using more display fonts was tried and looked messy.

**Fonts served through Astro's built-in Fonts API.** Astro downloads them at build time and serves them from this site, so there is no new dependency and visitors never contact Google. The trade-off is that a build needs to reach Google Fonts.

**Two sticky headers, handed over at the waterline.** One sits above the water and one below, each sticking only within its own part of the page, so the colour changes without JavaScript. A single header would not stay readable over both sky and water.

**One fixed header in place of the handed-over sticky ones.** Sujith wanted a header that stays put with no visible bar, like the one on Josh Comeau's blog. Both copies are now fixed to the same spot, and a clip-path on the sky and the water shows each only over its own area. That blog hides content behind solid strips, but those cannot match a gradient, so a blur does that job here. This replaces the earlier entry about two sticky headers.

**A solid sky bar that stops above the boat, with the header text carrying on into the water.** Sujith specified this after trying the blurred version: the bar hides the title as it scrolls away, and leaves just before the boat so the boat stays visible. The text stays in place and changes colour part way up the waves. This replaces the blur in the sky from the entry above; the water still uses a blur, because a solid bar would show against the gradient.

**The water header is solid and matches the water, using a small script.** Sujith wanted a solid bar that blends in at any depth, in place of the blur. The bar is painted with the same gradient as the water, and about ten lines of plain JavaScript in `BaseLayout.astro` keep the two lined up while scrolling. This is the first JavaScript on the site, and there is no library behind it. Without it the bar stays one shade of blue and everything still works. The gradient now lives once in `tokens.css`.

**The dive marks chapters by year, not age.** Showing ages beside years would let any visitor work out a birth date. Years alone, next to details such as when A-levels ended, still allow a rough guess at a birth year, so real years go in only when Sujith approves each chapter.

**The journey is the heart of the site, and Work holds passion projects that build up over time.** Sujith wants the value to come from his experiences and journey, with no need for the site to prove anything. So Work and Writing launch small and grow over the next few years, and their pages must look intentional with only one or two items. This replaces the earlier target of two project write-ups at launch.

**Words used across the site live in `src/content/site.json`, and the About text in `src/content/about.md`.** Both are checked by a schema like every other collection. This keeps the first line, headings and links out of page code, so changing them never means editing code. JSON is fussier than Markdown about commas and quotes, but these are short fields rather than prose, and a mistake fails the build with an error instead of reaching the site.

**Placeholders start with the word `Placeholder:` and use 1 to 5 as chapter order, with `showYear: false`.** A search for that word finds everything still unwritten. No real years, personal facts or draft chapters are committed until Sujith approves them, because the repo is public and its history is permanent. `showYear` stays available after that for any chapter whose year would give away a birth date.

## Open questions

**Domain.** “2026-11-03 - Registered sujithbandaru.com at Cloudflare, auto-renew on.”
2026-11-03 - Registered sujithbandaru.com at Cloudflare


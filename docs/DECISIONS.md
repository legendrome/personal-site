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

## Open questions

**Domain.** “2026-11-03 - Registered sujithbandaru.com at Cloudflare, auto-renew on.”
2026-11-03 - Registered sujithbandaru.com at Cloudflare


---
name: write-page
description: The process for writing or rewriting a page of Sujith's site with him, the way a professional writer works with a client - brief, interview, format, outline, draft, fact check, build and revision. Use for any journey chapter, project write-up, post or About text, and whenever he gives feedback on a page's writing.
---

# Writing a page with Sujith

You are working as his writer. He is the client: the story, the facts and the final say are his, and your job is to find what he wants the page to do, draw out the material, pick the shape that serves it, and write it in his voice. This process came out of rewriting the Warwick chapter, where polishing his notes three times made it smoother but not better, and ten interview questions found the idea that carried it.

Read `CLAUDE.md`, `STATUS.md` and `docs/DECISIONS.md` first, as for any work here. The project's rules on private matters, upbeat tone, plain-text email and job-search tooling apply to every page.

Never skip step 1 or step 4. Every other step can be short.

## 1. Brief

Agree what the page is for before gathering anything. Ask, and write the answers down:

- Who is this page for? (A recruiter, a friend, someone who found the site by chance.)
- When they finish, what should they know, think or feel? Push for one sentence. For Warwick it was: "not only can he reflect, he is skilfully capable, it comes naturally to him, and I understand him better."
- What is the one thing he most wants to get across?
- What is off limits? (People, private matters, anything he is not ready to share.)

The brief is the test for everything after it. "Is this better?" only has an answer once you know what the page is for. Sujith can fill in `Website/Page brief - template.md` in his vault beforehand.

## 2. Discovery interview

Open questions that draw out material. Ask for answers in his own words, by voice note if he likes; you do the shaping. Adapt the questions to the page. The ones that worked for Warwick:

- If a close friend asked what this changed in you, in one sentence, what would you say? (This found the spine.)
- What is the moment something went wrong, or surprised you?
- When did you first notice you had changed? Ask for a real moment with people in it.
- Where did it show up in real work? What did you personally do, what was hardest, what happened in the room?
- What does it look like day to day? A habit, a system, how you start a task.
- What would people come to you for?
- What would you tell yourself at the start?

Check his vault notes (`Website/` and the chapter's notes in `Website/Journey/`) and `src/content/experience/` before asking anything those already answer. The questions also live in `Website/Discovery interview - template.md`.

## 3. Format

Propose two or three formats from the list below, say why each fits this brief and this material, and recommend one. He picks. Do not default to the last format used.

### Formats the site already has

- **Plain chapter or post.** Paragraphs in Markdown, with `##` headings if needed. For a story told straight through.
- **Lessons** (`lessons: true` in a journey chapter). An opening, then numbered lessons, each with one big line, its story folded under "Read the story", and an optional "What I did" card naming a file in `experience/`, then a closing. For growth backed by proof, where a skimmer should get the point in seconds. Used by Warwick. How to write it: `src/content/README.md`, "Write a chapter as lessons".
- **Video moment** (`video:` in a journey chapter). A quote and a play button for a stretch of a YouTube video, at the end of the chapter. For evidence that has to be seen, such as a speech. Used by Hyderabad.
- **Main image with caption** (`image:` in frontmatter). For one photo with the story behind it. Used by Kenya.
- **Case study.** The project headings: the problem, what I built, what broke, what changed. Used by the "This website" project.

### Formats proposed but not built yet

Each is built only when a real page needs it, then moved up to the list above.

- **Single narrative** building to one moment. Might suit Kenya.
- **Then and now**, when the change matters more than the path. Might suit Hyderabad.
- **Moments**, a short series of snapshots, for memories that come in fragments. Might suit Malmö.
- **Photo story**, when the pictures carry it, each with a caption.

A new format gets a quick mock for approval before it is built, as `CLAUDE.md` requires for anything visual.

## 4. Spine and outline

Before drafting, give him in about five lines: the spine sentence, and which story or proof goes where in the chosen format. He approves or redirects. A correction here costs a minute; after a full draft it costs an hour.

## 5. Follow-up questions

Only for the gaps the format exposes: lessons need a proof for each lesson, a photo story needs a caption for each photo, and so on.

## 6. Draft

- His words. Reorder, trim and join; do not add facts, reasons or feelings he did not give. On Warwick, a reason for choosing the university was invented and nearly published. Any sentence of yours that interprets his story (such as a line tying a lesson back to the spine) is marked for him to confirm.
- State a word budget before drafting, then count. Say plainly if the draft misses it.
- Follow the rules below.
- Show the draft marked up against what it replaces: green for new, red for cut.

Then run the fact check: ask the `fact-checker` agent (`.claude/agents/fact-checker.md`) to compare the draft with his sources and the brief. Fix what it finds before showing him, and tell him what it caught.

## 7. Build

A format the site already has goes straight into the site, previewed with `npm run preview` at computer and phone sizes. A new format is mocked first. Then `npm run build`, update the one doc that owns each changed fact, and commit. Push only when he says so.

## 8. Revision

He will often react before he can say why ("it irks me", "it feels wordy"). Those reactions are usually right, so do not guess and rewrite.

1. **Take the reaction as he gives it.** He should not have to diagnose it first.
2. **Diagnose it together.** Offer the three or four most likely causes for this page, from this list, and let him pick or correct:
   - Truth: something is not what happened or what he meant.
   - Voice: it does not sound like him.
   - Impression: a reader would think something he does not want them to.
   - Weight: too long, too dense, too much at a glance.
   - Structure: the point is buried, or the parts do not connect.
   - Tone: too negative, too polished, trying too hard.
   - Purpose: it does not do what the brief said.

   On Warwick, "irks me" was impression and purpose (a recruiter would read doubt, and saw no proof), and "wordy" was weight and structure.
3. **State the intended result** in one sentence before changing anything: "After this change, a reader should..."
4. **Propose, then show the change marked up.** Two options when there is a real choice, one when it is obvious.
5. **Turn lasting feedback into a rule** by adding it to the list below, with the date. Feedback about one page stays with that page.

## Rules learned so far

Each came from Sujith's feedback. Add to this list rather than relying on memory.

- No signposting, such as "the three lessons below" or "all of this runs on a simple system". It is a writer's voice, not his. (2026-11-14)
- No endings that admit doubt about his direction or work ethic. End on where he is heading. (2026-11-14)
- Proof goes inside the story, not beside it; a card only summarises it. (2026-11-14)
- Never supply a reason, feeling or fact he did not give. (2026-11-14)
- Do not repeat a lesson's big line word for word inside its story. (2026-11-14)
- Lead with the interesting fact, not the constraint. Warwick opens with the course, not the cost of the alternatives. (2026-11-14)
- Nothing a professional reader could take literally as an overclaim, such as "national player" for junior club tournaments. (2026-11-14)
- Pages must work for a professional reader skimming them, as well as for a friend reading closely. (2026-11-11)

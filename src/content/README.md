# Adding and editing content

Every post, project and journey chapter is one Markdown file in this folder, and the words used across the site are in `site.json`. You can do everything here with a text editor and a terminal, with no AI and no code.

| I want to... | Do this |
|---|---|
| Add a blog post | Add a file to `posts/` (example below) |
| Add a project | Add a file to `projects/` (example below) |
| Add a journey chapter | Add a file to `journey/` (example below) |
| Change my first line, headings or links | Edit `site.json` (see "Site words" below) |
| Change the About page | Edit `about.md` (see "The About page" below) |
| Add a role, course or note to About | Add a file to `experience/` (example below) |
| Replace a placeholder | See "Replace a placeholder" below |
| Fix a typo or change some words | Edit the file, then follow "Check and publish" |
| Remove something from the site | Delete its file, then follow "Check and publish" |

The home page shows every journey chapter, every project marked `featured: true`, your latest post and the words in `site.json`. Every post, project and chapter with writing also gets its own page.

## Replace a placeholder

Anything starting with `Placeholder:` is waiting for your words. To find what is left, search the `src/content` folder for that word in VS Code with Ctrl+Shift+F.

Overwrite the placeholder words with your own and keep the rest of the file. For a journey chapter, replace the placeholder line below the second `---` with the full chapter. If you delete it and write nothing, the chapter keeps its one line on the home page and has no page of its own.

The placeholder project and post can simply be deleted once you have real ones.

## Site words

`site.json` is a list of fields, each with its name and its text in double quotes. Keep the comma at the end of every line except the last, and keep the quotes, because the build fails without them. If your text needs a double quote inside it, write `\"`.

| Field | Where it appears |
|---|---|
| `name` | Your name on the first screen and in the browser tab |
| `firstLine` | The sentence under your name |
| `description` | Search results and link previews |
| `pinnedSentence` | The sentence that stays still while the journey drifts past |
| `workHeading`, `writingHeading` | The headings above your projects and writing on the home page |
| `floorHeading`, `floorLine` | The heading and last line at the bottom of the dive |
| `markerStart` | What the corner marker says before the first chapter |
| `chapterLink` | The link under a chapter that has a full write-up |
| `workTitle`, `workIntro`, `workMore` | The title and sentence at the top of the Work page, and the line under its list |
| `allWork`, `projectLink` | On a project page, the link back to all projects and the link to a project's `link` address |
| `writingTitle`, `writingIntro`, `allWriting` | The title and sentence at the top of the Writing page, and the link back to it from a post |
| `keepDiving`, `journeyEnd`, `backUpTo` | The words at the end of a chapter page |
| `lostTitle`, `lostLine`, `lostLink` | The page people see at an address that does not exist |
| `backUp` | The link at the bottom of pages with a boat, which returns to the top |
| `backToDive` | The link at the top and bottom of inner pages, which returns to the spot left on the home page |
| `skipLink` | The link keyboard users meet first, which jumps past the header |
| `nav` | The header menu, with each item's label and the page it goes to |
| `github`, `linkedin` | Your links in the footer, each a full address starting with `https://` |

`linkedin` is optional, and its link is left out until you add a line for it. Put it just above `github`, in the same form:

```json
"linkedin": "https://www.linkedin.com/in/your-name",
```

## How a file works

Each file has two parts. The block between the two `---` lines is the frontmatter, a short list of facts about the piece. Everything below it is your writing, in normal text.

The very first line of the file must be `---`, with nothing above it. When you copy an example from this guide, copy only the lines inside the grey box. Lines reading ` ```markdown ` or ` ``` ` mark the edges of the box and are not part of the example. Create the file in VS Code and paste it there, because Word, Notes and similar apps can change the text as it is pasted, such as turning `---` into `\---`.

Name the file in lowercase with hyphens and no spaces, such as `my-first-post.md`, because the name becomes part of the page's web address.

Separate paragraphs with one blank line, because a single long block of text shows on the page as one long paragraph.

Put double quotes around any text in the frontmatter, because a character such as a colon can otherwise break it. Dates and numbers need no quotes.

Keep unfinished writing in Obsidian until it is ready. This repo is public and its history is permanent, so anyone can read a file once it is pushed, even if it is marked `draft: true` or deleted later. `draft: true` only keeps a finished piece off the site's pages.

## Add a blog post

Create a file in `posts/` and copy this in:

```markdown
---
title: "Your title"
date: 2026-11-04
description: "One sentence saying what this post is about."
---

Your writing starts here.
```

All three fields are required. Add `draft: true` to keep the post off the site. The post with the newest `date` is the one shown on the home page.

## Add a project

Create a file in `projects/` and copy this in:

```markdown
---
title: "Project name"
summary: "One sentence saying what it is."
date: 2026-11-04
---

## The problem

## What I built

## What broke

## What changed
```

`date` is when you started it. The headings are a suggestion, so change them if a project does not fit.

There are three optional fields, each on its own line in the frontmatter:

- `featured: true` shows it on the home page.
- `link: "https://example.com"` adds a web address, which must start with `https://`.
- `draft: true` keeps it off the site.

## Add a journey chapter

Create a file in `journey/` and copy this in:

```markdown
---
title: "Chapter title"
place: "City or place"
line: "The one line shown for this chapter on the home page."
start: 2019
end: 2022
---

Your writing starts here.
```

`start` and `end` are whole years with no quotes, because the timeline sorts on them. Delete the `end` line for your current chapter. The writing below the second `---` is optional: a chapter without any just shows its one line on the home page, and adding some makes `chapterLink` appear under it. Years appear in the corner marker as `2019 to 2022`, as `2019` when `start` and `end` match, and as `2026 onwards` when there is no `end`.

There are three optional fields:

- `showYear: false` hides the years on the page, while `start` still sets the order. Use it if a chapter's year would give away a birth date.
- `priority: 1` settles the order when two chapters start in the same year, with the lower number first. You can ignore it otherwise.
- `draft: true` keeps it off the site.

## The About page

About has two parts, and its words live in two places.

The first part, who you are, is `about.md`. The writing below the second `---` is the paragraphs at the top. The frontmatter holds everything else:

| Field | Where it appears |
|---|---|
| `description` | The sentence under the title, and link previews |
| `languagesHeading`, `languages` | Your languages. Each has a `name`, the `level` word shown beside it, and a `score` from 1 to 5 that sets the length of its bar |
| `interestsHeading`, `interests` | The chips for what you do off the clock, one per line starting with `-` |
| `interestsNote` | The optional line under the chips |
| `doneHeading`, `doneIntro` | The heading and paragraph that open the second part |
| `closing` | The last line of the page |

The second part, what you have done, shows every journey chapter, newest first, with its one line. Under each chapter come the files in `experience/` that name it. To change a chapter's line, edit its file in `journey/`.

## Add a role, course or note to About

Create a file in `experience/` and copy this in:

```markdown
---
chapter: "warwick"
title: "Head of Operations"
organisation: "Warwick Consulting Society"
when: "2025 to 2026"
date: 2025-04-01
---

One or two sentences about what you did.
```

`chapter` is the name of a file in `journey/` without `.md`, such as `"malmo"` or `"now"`. A name that matches no chapter fails the build, which tells you which file to fix.

`when` is the dates as shown on the page, so `"Summer 2025"` works. `date` is when it started, and only sets the order, newest first.

Every field except `chapter` is optional. A file with no `title` is a plain note that shows just its writing, like the tools line under Warwick, and a file with no `date` comes after the dated ones in its chapter. Add `draft: true` to hide one.

## Add an image

Put the image in `src/assets/`, creating that folder if it does not exist yet, so Astro can optimise it. Then add this line where you want it in your writing, from a file in `posts/`, `projects/` or `journey/`:

```text
![A short description of the image](../../assets/your-image.jpg)
```

The description is what people using screen readers hear, so say what the image shows.

To give a post, project or chapter one main image, add this to its frontmatter instead. The description is required, so a missing one fails the build:

```yaml
image:
  src: "../../assets/your-image.jpg"
  alt: "A short description of the image"
  caption: "Optional: the story behind the photo, shown under it."
```

`alt` is for screen readers and describes what the image shows. `caption` is for everyone, and can be left out.

## Check and publish

Open the project in VS Code with File then Open Folder, choosing `personal-site`, because the commands only work from that folder. Then open a terminal with Terminal then New Terminal. Its prompt should end in `personal-site`; if it does not, run `cd C:\Users\kumar\Projects\personal-site`. Run each command on its own.

To preview your work, run this and open http://localhost:4321 in your browser. It updates each time you save. Press Ctrl+C in the terminal to stop it.

```bash
npm run dev
```

Before publishing, run the same check the host runs. It must end with `Complete!`.

```bash
npm run build
```

Save your work to git, replacing the words in quotes with a short description of your change:

```bash
git add -A
```

```bash
git commit -m "Add post about my first project"
```

Then publish it. Pushing to `main` puts it on the live site, and it usually appears within a couple of minutes.

```bash
git push
```

## When the build fails

The error names the file and the field. For example:

```text
[InvalidContentEntryDataError] posts → my-first-post data does not match collection schema.
  date: Needs a date written like 2026-11-04
```

That means `posts/my-first-post.md` has a missing or badly written `date`. Fix the file and run `npm run build` again. A failed build on your machine changes nothing on the live site.

| The message says | What it means | The fix |
|---|---|---|
| `title`, `date` and `description` all fail at once | The build cannot find the frontmatter at all | Make `---` the very first line of the file, and remove anything above it or any `\` before it |
| `Required` | A required field is missing | Add the field, spelled as in the examples above |
| `Needs a date written like 2026-11-04` | The date is missing or not year-month-day | Write it like the example, with no quotes needed |
| `Expected type "number", received "string"` | A year or number has quotes or words in it | Write just the number, such as `start: 2019` |
| `Expected type "boolean"` | `draft` or `featured` is not true or false | Write `true` or `false` with no quotes |
| `Invalid URL` | The link is not a full web address | Start it with `https://` |

The warning `No files found matching` only means a folder has no content yet, so you can ignore it.

The rules behind these messages are in `src/content.config.ts`, if you ever need to add or change a field.

## When a command will not run

If `npm` fails with `running scripts is disabled on this system`, Windows PowerShell is blocking the script that starts it. Run this once, which lets PowerShell run scripts made on your computer and signed ones from the internet, for your Windows account only:

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

If a command is `not recognized`, or git says `not a git repository`, the terminal is in the wrong folder. Run the `cd` command from "Check and publish".

If git says `nothing to commit`, your edit was not saved. Press Ctrl+S in the file and try again.

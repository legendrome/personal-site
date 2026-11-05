// The rules each file in src/content/ must follow. A file that breaks them fails
// the build with a message naming the file and field, so a mistake stops at the
// build instead of reaching the live site.
import { defineCollection, type SchemaContext } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// An image always comes with its description, because screen readers need one.
// Without this rule, a missing description would pass unnoticed.
const optionalImage = (image: SchemaContext['image']) =>
	z.object({ src: image(), alt: z.string() }).optional();

const posts = defineCollection({
	loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date({ error: 'Needs a date written like 2026-11-04' }),
			description: z.string(),
			image: optionalImage(image),
			draft: z.boolean().default(false),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			date: z.coerce.date({ error: 'Needs a date written like 2026-11-04' }),
			featured: z.boolean().default(false),
			link: z.url().optional(),
			image: optionalImage(image),
			draft: z.boolean().default(false),
		}),
});

const journey = defineCollection({
	loader: glob({ base: './src/content/journey', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			place: z.string(),
			// The one line shown for this chapter on the home page.
			line: z.string(),
			// Whole years rather than free text like "autumn 2019", because the timeline sorts on them.
			start: z.number().int(),
			// Left out for the current chapter.
			end: z.number().int().optional(),
			// Hides the years on the page, while "start" still sets the order. For a chapter
			// whose year would give away a birth date, or a placeholder with no real year yet.
			showYear: z.boolean().default(true),
			// Only a tiebreak for chapters starting in the same year, lower first. As the
			// main sort, adding a chapter would mean renumbering every chapter after it.
			priority: z.number().int().optional(),
			image: optionalImage(image),
			draft: z.boolean().default(false),
		}),
});

// A collection of one file, so the About text gets the same checks as everything else.
const about = defineCollection({
	loader: glob({ base: './src/content', pattern: 'about.md' }),
	schema: z.object({
		title: z.string(),
		// The sentence under the title, and what link previews show.
		description: z.string(),
	}),
});

// Words used across the site, kept out of the page code so changing them never means
// editing code. The parser lets site.json be one plain list of fields, without the
// extra wrapper Astro otherwise expects around each entry.
const site = defineCollection({
	loader: file('./src/content/site.json', {
		parser: (text) => ({ site: JSON.parse(text) }),
	}),
	schema: z.object({
		name: z.string(),
		firstLine: z.string(),
		description: z.string(),
		pinnedSentence: z.string(),
		workHeading: z.string(),
		writingHeading: z.string(),
		floorHeading: z.string(),
		floorLine: z.string(),
		markerStart: z.string(),
		chapterLink: z.string(),
		backUp: z.string(),
		backToDive: z.string(),
		skipLink: z.string(),
		nav: z.array(z.object({ label: z.string(), href: z.string() })),
		workTitle: z.string(),
		workIntro: z.string(),
		workMore: z.string(),
		allWork: z.string(),
		projectLink: z.string(),
		writingTitle: z.string(),
		writingIntro: z.string(),
		allWriting: z.string(),
		keepDiving: z.string(),
		journeyEnd: z.string(),
		backUpTo: z.string(),
		lostTitle: z.string(),
		lostLine: z.string(),
		lostLink: z.string(),
		// LinkedIn stays optional until Sujith gives the address, and its link is left out until then.
		linkedin: z.url().optional(),
		github: z.url(),
	}),
});

export const collections = { posts, projects, journey, about, site };

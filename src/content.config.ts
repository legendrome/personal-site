// The rules each Markdown file in src/content/ must follow. A file that breaks
// them fails the build with a message naming the file and field, so a mistake
// stops at the build instead of reaching the live site.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
	loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date({ error: 'Needs a date written like 2026-11-04' }),
		description: z.string(),
		draft: z.boolean().default(false),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		date: z.coerce.date({ error: 'Needs a date written like 2026-11-04' }),
		featured: z.boolean().default(false),
		link: z.url().optional(),
		draft: z.boolean().default(false),
	}),
});

const journey = defineCollection({
	loader: glob({ base: './src/content/journey', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		place: z.string(),
		// Whole years rather than free text like "autumn 2019", because the timeline sorts on them.
		start: z.number().int(),
		// Left out for the current chapter.
		end: z.number().int().optional(),
		// Only a tiebreak for chapters starting in the same year, lower first. As the
		// main sort, adding a chapter would mean renumbering every chapter after it.
		priority: z.number().int().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { posts, projects, journey };

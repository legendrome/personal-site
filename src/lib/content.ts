// One place that decides what is published and in what order, so a draft cannot
// appear on one page because that page forgot to hide it.
import { getCollection, type CollectionEntry } from 'astro:content';

export async function getChapters() {
	const chapters = await getCollection('journey', ({ data }) => !data.draft);
	return chapters.sort(
		(a, b) => a.data.start - b.data.start || (a.data.priority ?? 0) - (b.data.priority ?? 0),
	);
}

export async function getProjects() {
	const projects = await getCollection('projects', ({ data }) => !data.draft);
	return projects.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getPosts() {
	const posts = await getCollection('posts', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

// The roles and notes for one chapter on About, newest first. Notes have no date, so
// they come last, which keeps a closing line like the tools list at the bottom.
export async function getExperience(chapterId: string) {
	const entries = await getCollection(
		'experience',
		({ data }) => !data.draft && data.chapter.id === chapterId,
	);
	const time = (entry: CollectionEntry<'experience'>) => entry.data.date?.getTime() ?? -Infinity;
	return entries.sort((a, b) => time(b) - time(a));
}

// A chapter with only its one line has no page of its own to link to.
export function hasFullChapter(chapter: CollectionEntry<'journey'>) {
	return Boolean(chapter.body?.trim());
}

// Each chapter page is one stretch of the descent, and the bottom of one is the exact
// colour at the top of the next, so reading in order feels like one dive. Worked out
// from the position, so adding a chapter needs no new colours. The last chapter goes
// down to the sea floor. A browser without color-mix shows the page's dark background.
export function chapterWater(index: number, total: number) {
	const shallow = 'var(--colour-water-shallow)';
	const deep = 'var(--colour-water-deep)';
	const floor = 'var(--colour-water-floor)';
	if (index === total - 1) return `linear-gradient(${deep}, ${floor})`;

	const depth = (position: number) =>
		`color-mix(in srgb, ${deep} ${(position / (total - 1)) * 100}%, ${shallow})`;
	return `linear-gradient(${depth(index)}, ${depth(index + 1)})`;
}

// Empty for a chapter with showYear: false, whose years must not appear anywhere.
export function chapterYears({ data }: CollectionEntry<'journey'>) {
	if (!data.showYear) return '';
	if (data.end === undefined) return `${data.start} onwards`;
	if (data.end === data.start) return `${data.start}`;
	return `${data.start} to ${data.end}`;
}

// Dates are stored as UTC, so without the time zone a visitor in the Americas
// could see the day before the one written in the file.
export function formatDate(date: Date) {
	return date.toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC',
	});
}

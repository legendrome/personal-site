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

// A chapter with only its one line has no page of its own to link to.
export function hasFullChapter(chapter: CollectionEntry<'journey'>) {
	return Boolean(chapter.body?.trim());
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

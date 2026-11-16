// One place that decides what is published and in what order, so a draft cannot
// appear on one page because that page forgot to hide it.
import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

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
	await checkExperienceChapters();
	const entries = await getCollection(
		'experience',
		({ data }) => !data.draft && data.chapter.id === chapterId,
	);
	return entries.sort(byFinish);
}

// Newest first by when it was finished, because a role counts once it is done. Something
// with no finish date yet comes by when it started; a tie goes to the later start. Notes
// have neither, so they come last.
function byFinish(a: CollectionEntry<'experience'>, b: CollectionEntry<'experience'>) {
	const finish = (entry: CollectionEntry<'experience'>) =>
		(entry.data.finished ?? entry.data.date)?.getTime() ?? -Infinity;
	const start = (entry: CollectionEntry<'experience'>) => entry.data.date?.getTime() ?? -Infinity;
	return finish(b) - finish(a) || start(b) - start(a);
}

// Astro only logs a warning when a file names a chapter that does not exist, and the build
// still finishes, so the entry would silently vanish from the live site. Failing here makes
// the build stop with the file's name instead.
async function checkExperienceChapters() {
	const chapters = new Set((await getCollection('journey')).map(({ id }) => id));
	for (const entry of await getCollection('experience')) {
		if (!chapters.has(entry.data.chapter.id)) {
			throw new Error(
				`experience/${entry.id}.md names the chapter "${entry.data.chapter.id}", but there is no journey/${entry.data.chapter.id}.md`,
			);
		}
	}
}

// Looks up the "What I did" cards a chapter names in its `proof` list. Fails the build on a
// name that matches no file, for the same reason as above.
export async function getProof(chapter: CollectionEntry<'journey'>) {
	return Promise.all(
		chapter.data.proof.map(async (item) => {
			if (!item) return undefined;
			const entry = await getEntry(item);
			if (!entry) {
				throw new Error(
					`journey/${chapter.id}.md lists "${item.id}" in proof, but there is no experience/${item.id}.md`,
				);
			}
			return entry;
		}),
	);
}

// The roles marked featured, for the proof cards on the home page and Work, most recently
// finished first.
export async function getFeaturedExperience() {
	await checkExperienceChapters();
	const entries = await getCollection('experience', ({ data }) => !data.draft && data.featured);
	return entries.sort(byFinish);
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

// The single colour halfway down a chapter's water. Solid lesson numbers are mixed with it,
// so they look soft against the water while still hiding the bubbles behind them.
export function chapterMidWater(index: number, total: number) {
	const shallow = 'var(--colour-water-shallow)';
	const deep = 'var(--colour-water-deep)';
	const floor = 'var(--colour-water-floor)';
	if (index === total - 1) return `color-mix(in srgb, ${floor} 50%, ${deep})`;
	return `color-mix(in srgb, ${deep} ${((index + 0.5) / (total - 1)) * 100}%, ${shallow})`;
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

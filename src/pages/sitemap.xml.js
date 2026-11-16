// A list of every page, so search engines find them all, including ones few links point to.
// Written by hand instead of using Astro's sitemap package, like the RSS feed, because it
// is short enough to not need a dependency. It reads the same content as the pages, so a
// new chapter, project or post is listed by itself.
import { getChapters, getPosts, getProjects, hasFullChapter } from '../lib/content';

export async function GET({ site: address }) {
	const chapters = (await getChapters()).filter(hasFullChapter);
	const projects = await getProjects();
	const posts = await getPosts();

	const paths = [
		'/',
		'/about',
		'/work',
		'/journey',
		'/writing',
		...chapters.map((chapter) => `/journey/${chapter.id}`),
		...projects.map((project) => `/work/${project.id}`),
		...posts.map((post) => `/writing/${post.id}`),
	];

	const urls = paths.map((path) => `\t<url><loc>${new URL(path, address).href}</loc></url>`);
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

	return new Response(sitemap, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

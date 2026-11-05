// The blog feed, so people can follow new posts in a feed reader. Written by hand instead
// of using Astro's RSS package, because this is short enough to not need a dependency.
import { getEntry } from 'astro:content';
import { getPosts } from '../lib/content';

// These characters have a special meaning in XML, so a title using them would break the feed.
const escapeXml = (text) =>
	text
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');

export async function GET({ site: address }) {
	const { data: site } = await getEntry('site', 'site');
	const posts = await getPosts();

	const items = posts.map((post) => {
		const link = new URL(`/writing/${post.id}`, address).href;
		return `<item>
			<title>${escapeXml(post.data.title)}</title>
			<link>${link}</link>
			<guid>${link}</guid>
			<description>${escapeXml(post.data.description)}</description>
			<pubDate>${post.data.date.toUTCString()}</pubDate>
		</item>`;
	});

	const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
	<channel>
		<title>${escapeXml(site.name)}</title>
		<link>${new URL('/writing', address).href}</link>
		<description>${escapeXml(site.writingIntro)}</description>
		${items.join('\n\t\t')}
	</channel>
</rss>`;

	return new Response(feed, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}

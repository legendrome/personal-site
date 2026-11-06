// Draws the tab icons and the link preview image into public/. Run it again with
// "node scripts/make-images.mjs" if the boat or the site's colours ever change, because
// these files are pictures and cannot read tokens.css. It uses sharp, the image tool that
// already comes with Astro, so it adds no dependency. The site build never runs this.
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const sky = '#bfe1f0';
const ink = '#0b2a57';
const water = '#1c6ca3';

// The same boat and wave as src/layouts/BaseLayout.astro.
const boat = '<path d="M58 6 V62 H18 Z"/><path d="M64 18 V62 H98 Z"/><path d="M6 66 H114 L98 88 H22 Z"/>';
const wave = 'M0 40 C 180 10, 360 70, 540 40 S 900 10, 1080 40 S 1320 70, 1440 36 V90 H0 Z';

// A plain boat on sky, large enough to read at the tiny size of a browser tab.
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
	<rect width="128" height="128" rx="24" fill="${sky}"/>
	<g transform="translate(14 24) scale(0.83)" fill="${ink}">${boat}</g>
</svg>`;

// The first screen of the site in miniature. It has no words, because a link preview
// already shows the page's title and description next to the image.
const preview = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
	<rect width="1200" height="630" fill="${sky}"/>
	<g transform="translate(420 170) scale(3)" fill="${ink}">${boat}</g>
	<g transform="translate(0 390) scale(0.8334 1.2)" fill="${water}"><path d="${wave}"/></g>
	<rect y="497" width="1200" height="133" fill="${water}"/>
</svg>`;

const png = (svg, width, height) =>
	sharp(Buffer.from(svg), { density: 300 }).resize(width, height).png().toBuffer();

// An .ico file is a short header followed by the image, which is allowed to be a PNG.
// Older browsers and some feed readers still ask for this file by name.
function toIco(image, size) {
	const header = Buffer.alloc(22);
	header.writeUInt16LE(1, 2); // This file holds icons.
	header.writeUInt16LE(1, 4); // One image.
	header.writeUInt8(size, 6);
	header.writeUInt8(size, 7);
	header.writeUInt16LE(1, 10); // One colour plane.
	header.writeUInt16LE(32, 12); // 32 bits per pixel.
	header.writeUInt32LE(image.length, 14);
	header.writeUInt32LE(header.length, 18); // The image starts right after this header.
	return Buffer.concat([header, image]);
}

await writeFile('public/favicon.svg', `${icon}\n`);
await writeFile('public/favicon.ico', toIco(await png(icon, 32, 32), 32));
await writeFile('public/apple-touch-icon.png', await png(icon, 180, 180));
await writeFile('public/preview.png', await png(preview, 1200, 630));

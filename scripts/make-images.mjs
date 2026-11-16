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

const sun = '#fbefc4';

// The first screen of the site in miniature: the pale sun in the corner with Sujith's photo
// in it, its rays, and the boat on the waves. It has no words, because a link preview
// already shows the page's title and description next to the image. The photo is added
// below, from src/assets/portrait.webp, so a new photo there shows up here too.
const preview = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
	<rect width="1200" height="630" fill="${sky}"/>
	<g fill="#ffffff" opacity="0.3">
		<path d="M1200 0 L216 497 L360 497 Z"/><path d="M1200 0 L552 497 L648 497 Z"/>
		<path d="M1200 0 L840 497 L960 497 Z"/>
	</g>
	<circle cx="1200" cy="0" r="330" fill="${sun}" opacity="0.45"/>
	<circle cx="1200" cy="0" r="290" fill="${sun}"/>
	<g transform="translate(300 170) scale(3)" fill="${ink}">${boat}</g>
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
// The photo, cut to a circle and placed in the sun's corner.
const photoSize = 210;
const circle = Buffer.from(
	`<svg xmlns="http://www.w3.org/2000/svg" width="${photoSize}" height="${photoSize}"><circle cx="${photoSize / 2}" cy="${photoSize / 2}" r="${photoSize / 2}"/></svg>`,
);
const photo = await sharp('src/assets/portrait.webp')
	.resize(photoSize, photoSize)
	.composite([{ input: circle, blend: 'dest-in' }])
	.png()
	.toBuffer();
const previewImage = await sharp(await png(preview, 1200, 630))
	.composite([{ input: photo, left: 1200 - photoSize - 40, top: 40 }])
	.png()
	.toBuffer();
await writeFile('public/preview.png', previewImage);

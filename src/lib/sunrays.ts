// The sun's rays on the home page, shared by the sky (src/pages/index.astro) and the water
// (src/components/DiveScenery.astro), so a ray below the waves always carries on the same
// line as the ray above them.
//
// Every ray starts at the sun, in the top-right corner of the page. Each pair is where a
// ray's left and right edges cross the bottom of the sky, as a percentage of the page's
// width. Change a pair to move or widen a ray; both halves follow.
export const sunrays: [number, number][] = [
	[18, 30],
	[46, 54],
	[70, 80],
	[92, 97],
];

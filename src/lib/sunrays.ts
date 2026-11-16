// The sun's rays on the home page, shared by the sky (src/pages/index.astro) and the water
// (src/components/DiveScenery.astro), so a ray below the waves always carries on the same
// line as the ray above them.
//
// Every ray starts at the sun, in the top-right corner of the page. The first two numbers
// are where the ray's left and right edges cross the bottom of the sky, as a percentage of
// the page's width. The third is how deep it reaches before it has faded away, as a
// percentage of the sunlit zone's depth: different for each ray, so they do not all stop
// on one line, the way real light thins out unevenly in water.
export const sunrays: [number, number, number][] = [
	[18, 30, 65],
	[46, 54, 100],
	[70, 80, 50],
	[92, 97, 85],
];

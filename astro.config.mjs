// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Astro downloads these at build time and serves them from this site, so visitors
	// never contact Google and there is no font package to keep updated.
	fonts: [
		{
			name: 'Unbounded',
			cssVariable: '--font-unbounded',
			provider: fontProviders.google(),
			weights: [800],
		},
		{
			name: 'Karla',
			cssVariable: '--font-karla',
			provider: fontProviders.google(),
			weights: [400, 500],
		},
	],
});

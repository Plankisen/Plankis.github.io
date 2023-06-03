import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex'
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
		})	
	},
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	],
	extensions: ['.svelte', '.md', '.svx'],

	preprocess: [
		mdsvex({
			extensions: ['.md','.svx']
		})
	]
};

export default config;


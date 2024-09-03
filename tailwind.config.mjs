// tailwind.config.mjs
import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			/*Normales*/
			'white': '#FFFFFF',
			'black': '#000000',
			/*Texto*/
			'title-text': '#f1f1f1',
			'subtitle-text': '#8d8c8b',
			'body-text': '#adadad',
			'body-text-lighty': '#f3f3f3',
			/*Corporativos*/
			'clstudio-pink': '#CC147F',
			'clstudio-black': '#13151a',
		},
		extend: {},
	},
	plugins: [
		animations
	],
}

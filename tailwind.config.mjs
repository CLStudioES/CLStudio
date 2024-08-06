/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			/*Básicos*/
			'white': '#ffffff',
			'black': '#000000',
			/*Básicos*/
			/*Interface*/
			'interface-black': '#16161e;',
			/*Interface*/
			/*Corporativos*/
			'optimafar-azul': '#1F9DA5',
			'optimafar-gris': '#777676',
			/*Corporativos*/
		},
		extend: {},
	},
	plugins: [
		animations
	],
}

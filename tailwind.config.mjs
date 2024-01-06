/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				emoji: "'Noto Color Emoji', sans-serif"
			},
			colors: {
				'jk-black': '#131313',
				'jk-purple': '#7342dc',
				'jk-white': '#ffffff',
				'jk-gray': '#404040',
				'jk-grey': '#808080'
			}
		}
	},
	plugins: []
}

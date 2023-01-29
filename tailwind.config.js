/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#FF0A47',
				secondary: '#FFD11A',
				dark: '#0D1140',
				light: '#F7F9FD',
			},
		},
	},
	plugins: [],
}

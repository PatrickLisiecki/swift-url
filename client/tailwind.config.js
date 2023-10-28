/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			raleway: ['Raleway', 'sans-serif'],
		},
		extend: {
			colors: {
				'dark-body': '#1c1c1c',
				'dark-text': '#ededed',
				'dark-text-secondary': '#565656',
				'dark-border': '#3e3e3e',
				'dark-border-hover': '#656565',
				'dark-bg': '#232323',
				accent: '#00BFFF',
			},
			boxShadow: {
				around: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
				a: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
			},
		},
	},
	plugins: [],
};

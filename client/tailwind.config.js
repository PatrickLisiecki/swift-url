/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			raleway: ["Raleway", "sans-serif"],
		},
		extend: {
			colors: {
				"dark-body": "#1c1c1c",
				"dark-text": "#ededed",
				"dark-text-secondary": "#565656",
				"dark-border": "#3e3e3e",
				"dark-border-hover": "#656565",
				"dark-bg": "#232323",
				accent: "#00BFFF",
			},
		},
	},
	plugins: [],
};

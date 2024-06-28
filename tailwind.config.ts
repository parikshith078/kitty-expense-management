import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		colors: {
			primary: "#424242",
			gray: "#F5F5F5",
			backgound: "#FFFFFF",
			blue: "#027BEF",
			red: "#E53935",
			green: "#00897B",
			black: "#212121",
		},
		fontFamily: {
			inter: ["Inter", "sans-serif"],
		},
		extend: {},
	},

	plugins: [],
} as Config;

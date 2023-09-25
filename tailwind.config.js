/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "rgb(254, 114, 76)",
				alt: "rgb(255, 197, 41)",
				dark: "rgb(26, 29, 38)",
				gray: "rgb(154, 159, 174)"
			}
		},
		boxShadow: {
			"btn-primary": "0 20px 30px 0 rgba(254,114,76,0.25)",
			"btn-alt": "0 20px 30px 0 rgba(211,209,216,0.25)",
			"xl": "18px 18px 36px 0 #D3D1D840"
		},
		fontFamily: {
			sans: ["SVN-Sofia Pro", "sans-serif"]
		}
	},
	plugins: []
};

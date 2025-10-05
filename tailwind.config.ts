import type { Config } from "tailwindcss";

// Tailwind v4 - Most configuration is now in index.css via @theme
export default {
	content: ["./src/**/*.{ts,tsx}"],
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

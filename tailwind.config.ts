import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forestTeal: "#235b5d",
        aqua: "#4dc4d3",
        oceanMist: "#e5eaf2",
      },
    },
  },
  plugins: [],
};
export default config;

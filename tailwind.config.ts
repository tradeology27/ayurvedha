import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B4332", // Deep Forest Green
        secondary: "#C9A84C", // Warm Gold
        accent: "#B5541A", // Earthy Terracotta
        background: "#FAF7F2", // Cream White
        foreground: "#1C1C1C", // Dark Charcoal
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(to bottom, rgba(27, 67, 50, 0.7), rgba(27, 67, 50, 0.3))',
      }
    },
  },
  plugins: [],
};
export default config;

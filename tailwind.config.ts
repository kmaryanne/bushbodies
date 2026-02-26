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
        // Deep, dark forest green
        spruce: {
          DEFAULT: "#13241b",
          light: "#1d3528",
        },
        // High-visibility safety orange (Safety Vest)
        action: {
          DEFAULT: "#ff5500",
          hover: "#e64d00",
        },
        // High-visibility safety yellow (Neon/Lime)
        yellow: {
          DEFAULT: "#ccff00",
          light: "#ddff33",
        },
        // Rugged slate gray for neutrals
        slate: {
          DEFAULT: "#475569",
          dark: "#1a202c",
          light: "#f8fafc",
        },
        // Canadian Shield granite
        granite: {
          DEFAULT: "#f4f4f0",
          dark: "#d1d1cc",
        },
      },
      fontFamily: {
        // 'Bebas Neue' for rugged, reliable headings
        serif: ['var(--font-bebas-neue)', 'cursive'],
        // 'Outfit' for sharp, clear vision
        vision: ['var(--font-outfit)', 'sans-serif'],
        // Clean 'toolkit' sans-serif for high-utility body text
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'tunnel-vision': 'radial-gradient(circle at center, transparent 0%, rgba(26, 54, 34, 0.4) 40%, rgba(26, 54, 34, 0.9) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
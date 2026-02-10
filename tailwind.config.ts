import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#eebd2b",
        "background-light": "#f8f7f6",
        "background-dark": "#221d10",
      },
      fontFamily: {
        "display": ["var(--font-public-sans)", "sans-serif"],
        "sans": ["var(--font-public-sans)", "sans-serif"]
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #eebd2b 0%, #c4961a 100%)',
      }
    },
  },
  plugins: [],
};
export default config;
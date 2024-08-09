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
        primary: "#0B7373",
        secondary: "#004040",
        tertiary: "#D6B66B",
        "neutral" : "#FAF9F5"
      },
      backgroundImage: {
        "hero-image": "url('/images/website-header.png')",
        "advertisement-image": "url('/images/bg-advertisement.png')",
      },
      fontFamily: {
        "the-signature": ['"The Signature"', "sans-serif"],
        ubounded: ['"Unbounded"', "sans-serif"],
        "albert-sans": ['"Albert Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

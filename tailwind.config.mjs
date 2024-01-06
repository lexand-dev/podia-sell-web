/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      podia: "#fdfbf9",
      white: "#ffffff",
      "podia-primary": {
        light: "#9484c6",
        DEFAULT: "#4b2aad",
        dark: "#201445",
      },
      "podia-secondary": "#9c8881",
      "podia-shadow": "#f5efeb",
      "podia-description": "#5c5856",
    },
    extend: {
      fontFamily: {
        tiempos: ["tiempos", "sans-serif"],
        "zen-antique": "Zen Antique",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    darkTheme: "light",
  },
};

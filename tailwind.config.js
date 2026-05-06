/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        

        /* LIGHT BACKGROUND */
        lightStart: "#fff7fb",
        lightMid: "#fbeaf3",
        lightEnd: "#b48298",

        /* DARK PLUM GRADIENT */
        plumStart: "#1a0f1f",
        plumMid: "#3b1c3f",
        plumEnd: "#6b2d5c",

        /* ACCENT (TEXT GRADIENT) */
        accent1: "#ff6a88",
        accent2: "#f5b2b4",
        accent3: "#e4a797",
      },

      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar__bg: "rgba(255, 255, 255, 0.25)",
        border__bg: "rgba(255, 255, 255, 0.18)",
      },
    },
  },
  plugins: [],
};

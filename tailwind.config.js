/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        azeret: ["Azeret Mono", "monospace"],
        geist: ["Geist Mono", "monospace"],
        pixelify: ["Pixelify Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

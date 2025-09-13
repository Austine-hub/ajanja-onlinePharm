/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // very important so Tailwind scans all components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

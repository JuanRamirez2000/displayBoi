/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        32: "repeat(32, minmax(0,1fr))",
      },
      gridTemplateRows: {
        32: "repeat(32, minmax(0,1fr))",
      },
    },
  },
  plugins: [],
};

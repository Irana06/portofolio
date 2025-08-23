/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ['minecraftFont', 'sans-serif'],
        minecraft2: ['minecraftFont2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

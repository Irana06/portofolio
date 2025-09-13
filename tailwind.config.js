/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ["minecraftFont", "sans-serif"],
        minecraft2: ["minecraftFont2", "sans-serif"],
      },
      keyframes: {
        waveLoop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        waveLoop: "waveLoop 8s linear infinite",
      },
    },
  },
  plugins: [],
};

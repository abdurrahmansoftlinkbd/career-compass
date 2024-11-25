/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "career-primary": "#2A73CC",
      },
    },
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "career-primary": "#2A73CC",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        slide1:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://i.ibb.co.com/Qjd1nTh/rsz-dylan-gillis-kdeqa3atnby-unsplash.jpg')",
        slide2:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://i.ibb.co.com/DYjgQQc/rsz-austin-distel-wd1lrb9oeeo-unsplash.jpg')",
        slide3:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url('https://i.imghippo.com/files/Aud6625vNE.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};

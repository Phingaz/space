/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url(./components/asset/main.png)",
        destination: "url(./components/asset/destination.jpg)",
        crew: "url(./components/asset/crew.png)",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "sans-serif"],
        barlow_cond: ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        dark: "#0B0D17",
        light: "#fff",
        alt: "#D0D6F9",
      },
    },
  },
  plugins: [],
};

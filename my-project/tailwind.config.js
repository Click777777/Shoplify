/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0px",
      },
    },
    extend: {
      backgroundImage: {
        bgHero: "url('./src/img/bg_hero.svg')",
      },
      colors: {
        primary: "#222222",
        secondary: "#F5E6E0",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

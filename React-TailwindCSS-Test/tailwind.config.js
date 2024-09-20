/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#751919",
        secondary: "#823030",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        custom: ["Lobster", "cursive"],
      },
      backgroundSize: {
        200: "200% 200%",
      },
      keyframes: {
        movingGradient: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
      },
      animation: {
        movingGradient: "movingGradient 5s linear infinite alternate",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: "#F2F3F5",
        darkBlue: "#1B263B",
        cyanAccent: "#2DD4BF",
        purpleCard: "#5B4B8A",
      },
      keyframes: {
        snailMove: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(6px)" },
        },
        bombShake: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(8deg)" },
          "75%": { transform: "rotate(-8deg)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        zoomIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        fadeLeft: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: 0, transform: "translateX(20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        snail: "snailMove 2.4s infinite ease-in-out",
        bomb: "bombShake 0.4s infinite",
        pulseSoft: "pulseSoft 2.8s infinite ease-in-out",
        fadeUp: "fadeUp 0.8s ease-out forwards",
        zoomIn: "zoomIn 0.9s ease-out forwards",
        fadeLeft: "fadeLeft 0.8s ease-out forwards",
        fadeRight: "fadeRight 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

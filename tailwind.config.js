/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        sandstone: "#C89B67",
        saffron: "#E78A00",
        indigo: "#2B2A7B",
        offwhite: "#FFF8F2",
        charcoal: "#222222",
        "gold-glow": "rgba(255, 215, 130, 0.35)",
        "dark-bg": "#0F0F15",
        "neon-indigo": "#4A48C9",
      },
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        petal: "petal-fall 15s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "petal-fall": {
          "0%": {
            transform: "translateY(-10vh) rotate(0deg) translateX(0)",
            opacity: "0",
          },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.6" },
          "100%": {
            transform: "translateY(100vh) rotate(360deg) translateX(100px)",
            opacity: "0",
          },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
        "neon-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 5px #4A48C9, 0 0 10px #4A48C9, 0 0 20px #4A48C9",
          },
          "50%": {
            boxShadow: "0 0 10px #4A48C9, 0 0 20px #4A48C9, 0 0 40px #4A48C9",
          },
        },
      },
      backdropBlur: {
        xl: "20px",
      },
    },
  },
  plugins: [],
};

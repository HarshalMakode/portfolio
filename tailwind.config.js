export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        pulseArrow: {
          "0%,100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
      },

      animation: {
        "pulse-arrow": "pulseArrow 2s ease-in-out infinite",
        "spin": "spin 4s linear infinite", 
      },

      fontFamily: {
        pokemon: ["'Press Start 2P'", "cursive"],
      },

      colors: {
        pokeRed: "#E3350D",
        pokeYellow: "#FFCB05",
        darkBlue: "#003A70",
      },
    },
  },
  plugins: [],
};
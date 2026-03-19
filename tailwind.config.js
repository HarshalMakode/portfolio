export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
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
/* eslint-env node */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      heading: ["Inter", "sans-serif"],
    },
    colors: {
      green: {
        100: "#e6ffed",
        200: "#b2f5ea",
        300: "#93FFD0",
        400: "#62b390",
        500: "#60BF60",
        600: "#65C9BA",
        700: "#00E5B4",
        800: "#00be8d",
        900: "#008d68",
      },
      blue: {
        100: "#5C82CC",
        200: "#60A7D6",
        300: "#60B3BF",
        400: "#60D6C6",
        500: "#5CCC9D",
        600: "#5c9bc3",
        700: "#00b0b0",
        800: "#00a0a0",
        900: "#0d1117",
      },
      red: {
        100: "#FFE6E6",
        200: "#FFBDBD",
        300: "#FF9B9B",
        400: "#FF6B6B",
        500: "#FF6B6B",
        600: "#FF6B6B",
        700: "#FF6B6B",
        800: "#FF6B6B",
        900: "#FF6B6B",
      },

      brown: {
        100: "#fff5f5",
        200: "#fed7d7",
        300: "#feb2b2",
        400: "#fc8181",
        500: "#BF4C84",
        600: "#C95151",
        700: "#B35F50",
        800: "#C97451",
        900: "#BF7F4C",
      },
      gray: {
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#636363",
        700: "#666666",
        800: "#2F2F2F",
        900: "#0A0A0A",
      },
      white: "#ffffff",
    },
  },
  plugins: [],
};

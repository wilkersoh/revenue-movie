module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
      colors: {
        main: "#141414",
      },
      height: {
        sVideo: "400px",
        mVideo: "600px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

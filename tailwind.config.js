module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      "bg-color": "#FFFFFF",
      primary: {
        300: "#FEE3B9",
        500: "#7762DA",
        700: "#001A57",
      },
      secondary: {
        300: "#A2E845",
        500: "#FBB850",
        700: "#CD7F04",
      },
    },
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
    },
    fontSize: {
      base: ["1rem", "150%"],
      md: ["1.25rem", "140%"],
      lg: ["1.5625rem", "120%"],
      xl: ["1.95rem", "120%"],
      "2xl": ["2.44rem", "100%"],
      "3xl": ["3.05rem", "100%"],
    },
    extend: {
      textColor: {
        "base-color": "#25272D",
        light: "#AAA7B9",
        white: "#FFFFFF",
      },
      keyframes: {
        "menu-slide-in": {
          "0%": {
            transform: "translateX(0px)",
            transitionTimingFunction: "ease-in",
          },
          "100%": {
            transform: "translateX(300px)",
            transitionTimingFunction: "ease-out",
          },
        },
      },
      animation: {
        "menu-slide-in": "menu-slide-in .5s 1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

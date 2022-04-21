module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sx: "1rem", // => @media (min-width: 330px) { ... }
        xs: "1rem", // => @media (min-width: 360px) { ... }
        ms: "2rem", // => @media (min-width: 480px) { ... }
        sm: "3rem", // => @media (min-width: 640px) { ... }
        md: "2rem", // => @media (min-width: 768px) { ... }
        lg: "4rem", // => @media (min-width: 1024px) { ... }
        xl: "13rem", // => @media (min-width: 1280px) { ... }
        "2xl": "13rem", // => @media (min-width: 1536px) { ... }
      },
    },

    screens: {
      sx: "330px",
      // => @media (min-width: 330px) { ... }

      xs: "360px",
      // => @media (min-width: 360px) { ... }

      ms: "480px",
      // => @media (min-width: 480px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    fontFamily: {
      dmsans: ['"DM Sans"', "sans - serif"],
      sourcesans: ['"Source Sans Pro"', "sans-serif"],
      body: ['"DM Sans"', "sans - serif"],
    },

    extend: {
      colors: {
        /* colors */
        "primary-blue": "#4A72FF",
        "regal-blue": "#EEF2FF",
        "dark-bold": "#0C1B4D",
        "spacing-color": "#FFD39F",

        /* background-color */
        "primary-bg-light": "#F4F7FF",
      },
      dropShadow: {
        "3xl": "0px 30px 60px 0px rgba(74, 114, 255, 0.25)",
      },

      animation: {
        slideright: "slideright 6s ease-in-out infinite",
        slideleft: "slideleft 2s ease-in-out infinite",
        flip: "flip 0.40s linear forwards 1",
      },
      keyframes: {
        slideright: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50px)" },
        },

        slideleft: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50px)" },
        },

        flip: {
          from: { transform: "rotate(-10deg)" },
          to: { transform: "rotate(10deg)" },
        },

        flipX: {
          from: { transform: "rotate(10deg)" },
          to: { transform: "rotate(-10deg)" },
        },
      },
    },
  },
  plugins: [],
};

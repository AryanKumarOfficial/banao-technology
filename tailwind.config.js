/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-white": "#fff",
        "purple-3": "#f7f5f9",
        "grey-darkest": "#08090a",
        "primary-full": "#8064a2",
        plum: "#997dbd",
        darkgray: "#939ca3",
        "blue-2": "#f7fdff",
        "blue-1": "#0096c8",
        "base-black": "#000",
        "purple-2": "#ccc1da",
        "grey-darker": "#6d747a",
        gainsboro: {
          "300": "#e6e6e6",
          "400": "#dedbe0",
        },
        "grey-light": "#ced4da",
        darkslategray: {
          "400": "#333",
          "500": "rgba(51, 51, 51, 0.09)",
        },
        "grey-lighter": "#ebedf0",
        "grey-hover": "#f8f9fa",
      },
      spacing: {},
      fontFamily: {
        "text-sm-bold": "Poppins",
      },
      borderRadius: {
        "12xs-4": "0.4px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      xs: "0.75rem",
      "3xs": "0.625rem",
      xl: "1.25rem",
      "17xl": "2.25rem",
      "10xl": "1.813rem",
      "3xl": "1.375rem",
      lg: "1.125rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      base: "1rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
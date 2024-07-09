/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "link-underline":
          "linear-gradient(transparent, transparent), linear-gradient(#fff, #fff)",
        "link-underline-black":
          "linear-gradient(transparent, transparent), linear-gradient(#8190e6, #8190e6)",
      },
      backgroundSize: {
        "size-0-3": "0 3px",
        "size-100-3": "100% 3px",
      },
      backgroundPosition: {
        "pos-0-100": "0 100%",
        "pos-100-100": "100% 100%",
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out",
      },
      transitionProperty: {
        size: "background-size",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        light: "#f4f6ff",
        lightHover: "#eef1ff",
        lightActive: "#dce2ff",
        primary: "#8fa0ff",
        primaryHover: "#8190e6",
        primaryActive: "#7280cc",
        dark: "#6b78bf",
        darkHover: "#566099",
        darkActive: "#404873",
        darker: "#323859",
      },
    },
  },
  plugins: [],
};

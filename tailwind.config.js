/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#672294",
          secondary: "#7b3da1",
          accent: "#9060ae",
          neutral: "#3d4451",
          "base-100": "#fbf6fb",
        },
      },
      "dark",
      "cupcake",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}

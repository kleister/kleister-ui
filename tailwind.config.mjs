/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],

  darkMode: "class",
  theme: {
    extend: {},
  },

  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",

    "./node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",

    "./vueform.config.ts",
    "./node_modules/@vueform/vueform/themes/tailwind/**/*.vue",
    "./node_modules/@vueform/vueform/themes/tailwind/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("flowbite/plugin"),

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("@vueform/vueform/tailwind"),
  ],
};

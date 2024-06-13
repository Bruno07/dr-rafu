const defaultTheme = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['"Karla"', ...defaultTheme.fontFamily.sans],
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


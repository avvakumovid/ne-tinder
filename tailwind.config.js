const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gg: 'gold',
      },
      transitionDuration: {
        DEFAULT: '400ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fade: 'fadeIn .5s  ease-in-out',
      },
      boxShadow: {
        b: '0 0 5px 0 #0000001f',
        s: '0 2px 5px 0 #00000047',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bordeaux': '#A2083F',
        'bleu':'#36B7C1',
        'ecolo':'#128b5e',
        'ps': '#ff0000',
        'mr': '#002eff',

      },
    },
  },
  plugins: [require("daisyui")],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Cinzel"', 'serif'],
        masthead: ['"UnifrakturMaguntia"', 'serif'],
        valentine: ['"Valentine"', '"Great Vibes"', '"Pinyon Script"', 'cursive'],
        masthead: ['"UnifrakturMaguntia"', 'serif'],
        valentine: ['"Valentine"', '"Great Vibes"', '"Pinyon Script"', 'cursive'],
        cursiva: ['"Cursiva"', '"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

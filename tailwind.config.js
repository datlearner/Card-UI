/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'dark-grey': 'hsl(0, 0%, 12%)',
        'light-grey' : 'hsl(0, 0%, 20%)',
        'Green' : 'hsl(75, 94%, 57%)',
        'off' : 'hsl(0, 0%, 8%)',
      },
    },
  },
  plugins: [],
}
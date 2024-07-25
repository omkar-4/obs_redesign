/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,css,js}"
  ],
  theme: {
    extend: {
      colors: {
        'obs-pink': 'var(--obs-pink)',
      },
    },
  },
  plugins: [],
}


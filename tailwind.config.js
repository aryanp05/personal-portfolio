/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        strongPurple: '#6A0DAD',
      },
      backgroundImage: {
        'gradient-to-r-gold-purple': 'linear-gradient(to right, #FFD700, #6A0DAD)',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        basalto: '#212322',
        arena:   '#d6832b',
        tierra:  '#feaa61',
        oceano:  '#415364',
        aire:    '#d5e0ee',
      },
      fontFamily: {
        serif: ['PPEditorialNew', 'Georgia', 'serif'],
        sans:  ['NeueHaasGrot', 'Helvetica Neue', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        onchain: ['onchain', 'sans-serif'],
      },
      colors: {
        background: {
          dark: '#181818',
          light: '#f8f8f8',
        },
        text: {
          dark: 'rgba(255, 255, 255, 0.87)',
          light: '#181818',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'media',
}
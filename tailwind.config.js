/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E7',
        quiet: '#E5E6DA',
        forest: {
          DEFAULT: '#1F3325',
          deep: '#16281C',
        },
        citron: '#D6ED45',
        canvas: '#F5F0E7',
        sand: {
          50: '#F5F0E7',
          100: '#E5E6DA',
          200: '#F5F0E7',
        },
        spruce: {
          800: '#1F3325',
          900: '#16281C',
        },
        charcoal: {
          DEFAULT: '#1F3325',
          muted: 'rgba(31, 51, 37, 0.72)',
        },
        navy: {
          DEFAULT: '#F5F0E7',
          mid: '#E5E6DA',
          light: 'rgba(31, 51, 37, 0.14)',
        },
        white: '#F5F0E7',
        'off-white': '#F5F0E7',
        'grey-mid': 'rgba(31, 51, 37, 0.65)',
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        border: 'var(--border)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        'massive': '14vw',
      },
    },
  },
  plugins: [typography],
};

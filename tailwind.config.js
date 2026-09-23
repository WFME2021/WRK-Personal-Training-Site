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
        canvas: '#FAF8F5',
        sand: {
          50: '#FDFBF7',
          100: '#F4ECE1',
          200: '#EADBC8',
        },
        spruce: {
          800: '#1F3325',
          900: '#16281C',
        },
        charcoal: {
          DEFAULT: '#2D2A26',
          muted: '#68645E',
        },
        terracotta: '#C19388',
        navy: {
          DEFAULT: '#171717',
          mid: '#0a0a0a',
          light: '#262626',
        },
        orange: {
          burnt: '#2dd4bf',
          hover: '#0d9488',
        },
        white: '#f5f5f5',
        'off-white': '#d4d4d8',
        'grey-mid': '#9ca3af',
        gold: {
          rule: '#34d399',
        },
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

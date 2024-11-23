/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          light: 'var(--background-light)'
        },
        foreground: {
          DEFAULT: 'var(--foreground)',
          light: 'var(--foreground-light)'
        },
        card: {
          DEFAULT: 'var(--card)',
          light: 'var(--card-light)'
        },
        'card-foreground': {
          DEFAULT: 'var(--card-foreground)',
          light: 'var(--card-foreground-light)'
        },
        primary: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bea6ff',
          400: '#9f75ff',
          500: '#843dff',
          600: '#7916ff',
          700: '#6b04fd',
          800: '#5a03d5',
          900: '#4b05ad',
        }
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-pattern-1': 'linear-gradient(115deg, #000000, #444444)',
        'gradient-pattern-2': 'linear-gradient(115deg, #000000, #444444)',
      },
      colors: {
        theme: 'var(--theme-color)',
        light: 'var(--light-color)',

        darkest: 'var(--darkest-color)',
        lightest: 'var(--lightest-color)',

        // text
        primary: 'var(--primary-text)',
        secondary: 'var(--secondary-text)',

        // background
        dark: 'var(--dark-color)',
        mid: 'var(--mid-dark-color)',

        // hover
        'theme-hover': 'var(--theme-hover)',
        'light-hover': 'var(--light-hover)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '1400px',
        },
      },
    },
  },
  plugins: [],
}

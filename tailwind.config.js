/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0072F5',
          50: '#F5F8FF',
          100: '#EDF2FF',
          200: '#D1E0FF',
          300: '#A6C3FF',
          400: '#669EFF',
          500: '#0072F5',
          600: '#005FCC',
          700: '#004B9E',
          800: '#003875',
          900: '#00264D',
          950: '#001833'
        },
        dark: {
          DEFAULT: '#000000',
          50: '#FFFFFF',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D1D1D6',
          400: '#A0A0AB',
          500: '#70707B',
          600: '#51525C',
          700: '#3F3F46',
          800: '#26272B',
          900: '#18181B',
          950: '#09090B'
        }
      },
      animation: {
        'meteor': 'meteor 5s linear infinite',
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fade-in 0.5s linear forwards',
        'fade-down': 'fade-down 0.5s linear forwards',
        'fade-up': 'fade-up 0.5s linear forwards',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'slow-spin': 'spin 20s linear infinite',
      },
      keyframes: {
        'meteor': {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
        'spotlight': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
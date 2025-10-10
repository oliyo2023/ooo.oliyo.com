import { type Config } from "tailwindcss";

const colors = {
  darkPurple: {
    50: '#f8f7ff',
    100: '#f0eaff',
    200: '#d9c7ff',
    300: '#b993ff',
    400: '#935dff',
    500: '#7e3bff',
    600: '#6a26d9',
    700: '#5220a3',
    800: '#3d1a73',
    900: '#2a154c',
  },
  darkBg: {
    DEFAULT: '#0f0b1a',
    100: '#1a152e',
    200: '#241f42',
  },
  mysticGold: {
    DEFAULT: '#d4af37',
    100: '#f0e68c',
    200: '#eedc82',
  },
};

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.darkPurple,
        secondary: colors.mysticGold,
        background: colors.darkBg,
        text: {
          DEFAULT: '#e5e7eb',
          light: '#f3f4f6',
          dark: '#1f2937',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['Fira Code', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'mystic-gradient': 'linear-gradient(135deg, rgba(126, 59, 255, 0.15) 0%, rgba(212, 175, 55, 0.1) 100%)',
        'cosmic-pattern': 'radial-gradient(circle at 20% 50%, rgba(126, 59, 255, 0.2) 0%, transparent 20%), radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 25%)',
      },
      boxShadow: {
        'mystic': '0 10px 30px rgba(126, 59, 255, 0.3), 0 5px 15px rgba(212, 175, 55, 0.2)',
        'mystic-sm': '0 4px 12px rgba(126, 59, 255, 0.2)',
      },
      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { 'box-shadow': '0 0 0 0 rgba(126, 59, 255, 0.7)' },
          '70%': { 'box-shadow': '0 0 0 10px rgba(126, 59, 255, 0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

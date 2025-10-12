/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': 'rgb(102, 102, 255)',
        'brand-primary-light': 'rgba(102, 102, 255, 0.1)',
        'brand-accent': 'rgb(102, 204, 255)',
        'dark-bg': 'rgb(10, 2, 21)',
        'dark-card': 'rgba(255, 255, 255, 0.05)',
        'dark-card-hover': 'rgba(255, 255, 255, 0.1)',
        'dark-border': 'rgba(255, 255, 255, 0.1)',
        'dark-border-hover': 'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        sans: ['"PingFang SC"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.png')",
        'main-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(102,102,255,.3),rgba(255,255,255,0))',
      },
      boxShadow: {
        'card': '0 10px 20px rgba(0,0,0,.2)',
        'button': '0 4px 20px rgba(102,102,255,.4)',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
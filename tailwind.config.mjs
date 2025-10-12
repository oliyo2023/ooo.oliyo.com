export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./routes/**/*.{js,ts,jsx,tsx,mdx}",
    "./islands/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "mystic-purple": {
          50: "#f8f6ff",
          100: "#f1eeff",
          200: "#e4dbff",
          300: "#d1b3ff",
          400: "#bd8cff",
          500: "#a864ff",
          600: "#8b3cff",
          700: "#7e3bff",
          800: "#5220a3",
          900: "#3d1580",
          950: "#2a0d4f",
        },
        "dark-mystic": {
          50: "#faf9ff",
          100: "#f3f1ff",
          200: "#e6e3ff",
          300: "#cdc6ff",
          400: "#b4a6ff",
          500: "#9b86ff",
          600: "#8265ff",
          700: "#6a44ff",
          800: "#5220a3",
          900: "#3d1580",
          950: "#1a0d33",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
        ],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          from: {
            boxShadow: "0 0 10px rgba(126, 59, 255, 0.4)",
          },
          to: {
            boxShadow:
              "0 0 20px rgba(126, 59, 255, 0.6), 0 0 30px rgba(126, 59, 255, 0.4)",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F9F8',
          100: '#D6F2EE',
          200: '#B0E4DC',
          300: '#7FD2C6',
          400: '#4ABBAA',
          500: '#009688', // Exact logo fill
          600: '#007A6F',
          700: '#00625A',
          800: '#064943',
          900: '#0B3B36',
          950: '#052320',
        },
        lino: {
          50: '#FCFCFB',
          100: '#F7F7F4',
          200: '#EFEFEA',
          300: '#DFE0D7',
        },
        dark: {
          900: '#0D1413',
          800: '#141E1C',
          700: '#1C2927',
          600: '#2A3B38',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0, 150, 136, 0.08)',
        'card': '0 4px 20px -2px rgba(13, 20, 19, 0.04), 0 2px 6px -1px rgba(13, 20, 19, 0.02)',
        'card-hover': '0 20px 40px -4px rgba(13, 20, 19, 0.08), 0 8px 16px -2px rgba(0, 150, 136, 0.06)',
      }
    },
  },
  plugins: [],
};
export default config;

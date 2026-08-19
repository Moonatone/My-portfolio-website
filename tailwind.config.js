/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
          dark: '#5B21B6',
        },
        sunny: {
          DEFAULT: '#FFC845',
          light: '#FFDD8A',
          dark: '#E6A817',
        },
        coral: {
          DEFAULT: '#FF6B6B',
          light: '#FF9B9B',
          dark: '#E14545',
        },
        mint: {
          DEFAULT: '#2DD4BF',
          light: '#6EE7DB',
          dark: '#0F9D8C',
        },
        app: {
          light: '#FAF7FF',
          dark: '#14101F',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1F1830',
        },
        ink: {
          light: '#1A1225',
          dark: '#F5F0FF',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(20px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-15px, 15px) scale(0.95)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'fill-bar': {
          '0%': { width: '0%' },
        },
      },
      animation: {
        blob: 'blob 9s infinite ease-in-out',
        'fade-up': 'fade-up 0.6s ease-out both',
        blink: 'blink 1s step-end infinite',
        wiggle: 'wiggle 0.4s ease-in-out',
      },
    },
  },
  plugins: [],
}

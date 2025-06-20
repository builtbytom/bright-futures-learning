/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        rainbow: {
          red: '#FF6B6B',
          orange: '#FFA726',
          yellow: '#FFD93D',
          green: '#6BCF7F',
          blue: '#4ECDC4',
          indigo: '#95A8D6',
          purple: '#C77DFF',
        },
        primary: {
          50: '#fef3f2',
          100: '#ffe3e0',
          200: '#ffccc7',
          300: '#ffa8a0',
          400: '#ff766a',
          500: '#ff4739',
          600: '#ed281b',
          700: '#c81e13',
          800: '#a51c13',
          900: '#881e17',
        },
      },
      fontFamily: {
        'display': ['"Comic Neue"', 'cursive'],
        'body': ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'organic': '30% 70% 70% 30% / 30% 30% 70% 70%',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}


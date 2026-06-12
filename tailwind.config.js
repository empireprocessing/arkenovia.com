/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1c0f17',
        aubergine: '#2a1a1f',
        plum: '#3a2030',
        wine: '#5d1a23',
        magenta: '#c4477e',
        amber: '#e0a458',
        brass: '#c5a15a',
        brassDark: '#7a552c',
        cream: '#e0d6c3',
        sand: '#d4b996',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Roboto Slab"', 'serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        flow: {
          '0%': { strokeDashoffset: '40' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out forwards',
        flow: 'flow 1.5s linear infinite',
      },
    },
  },
  plugins: [],
}

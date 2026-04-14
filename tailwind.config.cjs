/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1A1464',
        coral: '#FF6B6B',
        magenta: '#C850C0',
        paper: '#F8F7F4',
        ink: '#191824',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.08)',
        cardStrong: '0 18px 48px rgba(0,0,0,0.14)',
        glow: '0 18px 48px rgba(255,107,107,0.32)',
      },
      borderRadius: {
        card: '20px',
        pill: '100px',
        tag: '6px',
      },
    },
  },
  plugins: [],
};

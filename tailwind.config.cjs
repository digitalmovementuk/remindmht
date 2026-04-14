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
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.08)',
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
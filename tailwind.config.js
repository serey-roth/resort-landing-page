/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      animation: {
        'marquee': 'marquee 15s linear infinite',
      },
      keyframes: {
        'marquee': {
          'from': { transform: 'translate(0%, 0)' },
          'to' : { transform:  'translate(-100%, 0)' }
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lcars: {
          orange: '#ff9900',
          purple: '#cc99cc',
          blue: '#99ccff',
          gold: '#ffcc00',
          red: '#cc3333',
        },
      },
      fontFamily: {
        lcars: ['"Antonio"', '"Arial Narrow"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

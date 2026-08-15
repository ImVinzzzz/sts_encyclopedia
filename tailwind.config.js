/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lcars: {
          orange: '#ff9900',
          amber: '#ffcc00',
          violet: '#cc6699',
          skyblue: '#99ccff',
          alert: '#cc3333',
          teal: '#33cccc',
          gold: '#ffb000',
          cream: '#ffdcae',
        },
        void: {
          950: '#020310',
          900: '#050a1f',
          800: '#0a1230',
          700: '#111c42',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      backgroundImage: {
        'deep-space':
          'radial-gradient(ellipse at top, #111c42 0%, #050a1f 45%, #020310 100%)',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        scanline: 'scanline 3s linear infinite',
        blink: 'blink 1.6s ease-in-out infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-1000': { perspective: '1000px' },
        '.perspective-1500': { perspective: '1500px' },
        '.transform-style-3d': { transformStyle: 'preserve-3d' },
        '.backface-hidden': { backfaceVisibility: 'hidden' },
        '.rotate-y-180': { transform: 'rotateY(180deg)' },
      })
    },
  ],
}

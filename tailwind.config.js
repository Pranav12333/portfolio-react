// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(80vw)' }, // more horizontal travel
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100vh)' }, // more vertical travel
        },
        floatXY: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(80vw, 100vh)' }, // full-screen floating
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        spinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'float-x': 'floatX 20s ease-in-out infinite',
        'float-y': 'floatY 25s ease-in-out infinite',
        'float-xy': 'floatXY 30s ease-in-out infinite',
        'spin-slow': 'spinSlow 30s linear infinite',
        'spin-reverse': 'spinReverse 40s linear infinite',
      },
    },
  },
  plugins: [],
};

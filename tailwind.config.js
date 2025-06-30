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
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(40px)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-40px)" },
        },
        floatXY: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(20px, -10px)" },
          "50%": { transform: "translate(-20px, 20px)" },
          "75%": { transform: "translate(10px, -15px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        spinReverse: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "float-x": "floatX 8s ease-in-out infinite",
        "float-y": "floatY 10s ease-in-out infinite",
        "float-xy": "floatXY 12s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-reverse": "spinReverse 20s linear infinite",
      },
    },
  },
  plugins: [],
};

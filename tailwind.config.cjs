/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const Rotate180Y = plugin(({ addUtilities }) => {
  addUtilities({
    ".rotate-y-180" : {
      transform: "rotateY(180deg)",
    },
  });
});
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulse : {
          "0%" : { transform: "scale(1)"},
          "50%" : {transform: "scale(1.2)"},
          "100%" : { transform: "scale(1)"}
        },
        typing : {
            "0%" : { width: "0" },
            "100%" : { width: "100%" },
        },
        blinkCaret : {
          "0%" : { borderColor: "transparent" },
          "50%": { borderColor: "orange" },
          "100%" : { borderColor: "transparent" },
      },
      animation : {
        'pulse-letter' : 'pulse 2.5s linear infinite',
        'typing' : 'typing 3.5s steps(40, end)',
        'blink-caret': 'blinkCaret 1s step-end infinite'
      },
    },
  },
  plugins: [Rotate180Y],
  }
}

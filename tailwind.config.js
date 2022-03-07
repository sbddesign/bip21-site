const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "bpr-purple": "#D264B6",
      "bpr-orange": "#FBB13C",
      "bpr-pink": "#FF499E",
      "bpr-blue": "#779BE7",
      "bpr-cyan": "#49B6FF",
      "bpr-code-gray": "#EAEAEA",
      ...colors,
    },
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      dropShadow: {
        qr: "0px 6.74227px 16.8557px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};

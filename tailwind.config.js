module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 200: "var(--blue_gray_200)", 900: "var(--blue_gray_900)" },
        purple: { 200: "var(--purple_200)" },
        white: { a700: "var(--white_a700)" },
        black: { 600: "var(--black_600)", A700_01: "var(--black_A700_01)" },
        gray_shadow: "var(--gray_shadow)",
      },
      boxShadow: { xs: "0 0 13px 5px #00000029" },
      fontFamily: { firacode: "Fira Code", fingerpaint: "Finger Paint" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

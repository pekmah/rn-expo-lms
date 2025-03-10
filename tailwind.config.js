/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#3D4EB0",
        primaryDark: "#0B1957",
        primaryLight: "#E2E5F4",
        customWhite: "#F8F3EA",
        customGrey: "#6E6F79",
      },
      fontFamily: {
        poppins: ["Poppins_400Regular"],
        primary: ["Poppins_400Regular"],
        bold: ["Poppins_700Bold"],
        semibold: ["Poppins_600SemiBold"],
        medium: ["Poppins_500Medium"],
      },
    },
  },
  plugins: [],
};

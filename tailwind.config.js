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
        body: ["Poppins-Regular"], // Override default "sans"
        head: ["Poppins-Regular"], // Override default "sans"
        poppins: ["Poppins_400Regular"],

        "poppins-bold": ["Poppins_700Bold"],
        "poppins-regular": ["Poppins_400Regular"],
        "poppins-medium": ["Poppins_500Medium"],
        "poppins-semibold": ["Poppins_600SemiBold"],
        400: ["Poppins_400Regular"],
        500: ["Poppins_500Medium"],
        600: ["Poppins_600SemiBold"],
        700: ["Poppins_700Bold"],
      },
    },
  },
  plugins: [],
};

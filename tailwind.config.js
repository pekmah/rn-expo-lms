/** @type {import('tailwindcss').Config} */
import { COLORS } from "./src/constants/colors";

const {
  primary,
  primaryDark,
  primaryLight,
  customWhite,
  customGrey,
  customLightGrey,
  placeHolderColor,
} = COLORS;

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary,
        primaryDark,
        primaryLight,
        customWhite,
        customGrey,
        customLightGrey,
        placeHolderColor,
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

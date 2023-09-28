// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    primary: "#121251",
    bgColor: "#f4f6f8",
    textBlue: "#1B233D",
    textLightGray: "#ebebeb",
    textDarkGray: "#141414",
    white: "#fff",
  },
};

const fonts = {
  heading: "var(--font-sora)",
  color: "red",
};

export const customTheme = extendTheme({ colors, fonts });

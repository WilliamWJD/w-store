import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    gray: {
      700: "#333333",
      500: "#99999B",
      400: "#E9E9E9",
      300: "#F5F5F5",
      200: "#F6F6F6",
    },
    white: "#FFFFFF",
    red: {
      500: "#E02954"
    },
    green: {
      500: "#218D96"
    },
  },
  fonts: {
    heading: "Inter_700Bold",
    body: "Inter_400Regular",
  },
});

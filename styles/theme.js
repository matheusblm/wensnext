import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#5FCAD3",
    secondary: "#FFBC92",
    title: "#212121",
    text: "#80807E",
  },
  styles: {
    global: {
      body: {
        color: "#505489",
        fontFamily: "Poppins,sans-serif",
      },
      h2: {
        fontFamily: "Source Sans Pro,sans-serif",
        color: "#212121",
      },
      h3: {
        fontFamily: "Source Sans Pro,sans-serif",
        color: "#212121",
      },
      h4: {
        fontFamily: "Source Sans Pro,sans-serif",
        color: "#212121",
      },
      h5: {
        fontFamily: "Source Sans Pro,sans-serif",
        color: "#212121",
      },
    },
  },
});

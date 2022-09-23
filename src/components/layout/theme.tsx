import { extendTheme } from "@chakra-ui/react";
import React from "react";

const theme = extendTheme({
  colors: {
    brand: "#f7fafc",
    primary: "#5D5FEF",
    red: "#1a202c",
  },
  sizes: {
    body: "16px",
    title: "32px",
    subtitle: "24px",
    bigTitle: "40px",
  },
});
export default theme;

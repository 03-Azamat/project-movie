import { Box } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  const styleText = {
    bg: "primary",
    textColor: "white",
    py: "7px",
    px: "20px",
    rounded: "10px",
    fontWeight: "700",
  };

  return (
    <Box display="flex" alignItems="center">
      <Box mr="14px" {...styleText}>
        Contact
      </Box>
      <Box {...styleText}>Sign Up</Box>
    </Box>
  );
}

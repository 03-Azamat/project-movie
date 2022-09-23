import React from "react";
import { Box } from "@chakra-ui/react";

interface DropdownProps {
  activeClass?: any;
  items: any;
  onClick?: () => void;
}

export default function Dropdown(props: DropdownProps) {
  const { activeClass, items, onClick } = props;

  const linkStyle = {
    color: "white",
    cursor: "pointer",
    display: "block",
    fontSize: "1rem",
    fontWeight: "400",
    textDecoration: "none",
  };

  return <Box></Box>;
}

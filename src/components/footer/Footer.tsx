import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerList = [
    { item: "популярные", link: "/" },
    { item: "топовые", link: "/toprated" },
  ];

  return (
    <Box bg="brand" py="30px">
      <Container maxW="container.xl">
        <Text>Footer</Text>
        <Box>
          {footerList.map((items, index) => (
            <Box key={index}>
              <Text>
                <Link to={items.link}>{items.item}</Link>
              </Text>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

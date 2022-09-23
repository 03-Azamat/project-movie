import { Box, Text } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function MenuList() {
  const menuList = [
    {
      list: <Text>P</Text>,
      link: "/",
    },
    {
      list: <Text>U</Text>,
      link: "/upcoming",
    },
    {
      list: <Text>T</Text>,
      link: "/toprated",
    },
  ];

  return (
    <Box
      pos="fixed"
      maxW="90px"
      justifyContent="center"
      display="flex"
      p="75px 20px"
      rounded="20px"
      bg="#E5E5E5"
    >
      <Box
        pos="relative"
        justifyContent="center"
        display="flex"
        flexDirection="column"
      >
        {menuList.map((list, index) => (
          <Box key={index}>
            <Box
              p="9px 16px"
              my="10px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              bg="white"
              textColor="black"
              rounded="21px"
              _hover={{
                rounded: "10px",
                bg: "primary",
                boxShadow: "2px 4px 6px rgba(93, 95, 239, 0.77)",
                textColor: "white",
              }}
              transition=".3s"
            >
              <Link to={list.link}>{list.list}</Link>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

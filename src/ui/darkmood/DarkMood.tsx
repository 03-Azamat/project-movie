import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

interface DarkMoodTypes {
  setMode: any;
}

export default function DarkMood({ setMode }: DarkMoodTypes) {
  return (
    <Box
      bg="#D9D9D9"
      rounded="10px"
      maxW="117px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="2px"
    >
      <Box bg="white" px="20px" py="5px" rounded="5px">
        <SunIcon onClick={() => setMode("light")} />
      </Box>
      <Box px="20px" py="5px" rounded="5px">
        <MoonIcon onClick={() => setMode("gray")} />
      </Box>
    </Box>
  );
}

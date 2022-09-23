import { Box } from "@chakra-ui/react";

import DarkMood from "../../ui/darkmood/DarkMood";
import MoviesLogoSvg from "../svg/MoviesLogoSvg";
import Search from "../search/Search";
import Navbar from "./Navbar";
import { useState } from "react";

interface SearchTypes {
  searchValue: string;
  setSearchValue: any;
}

const Header = ({ searchValue, setSearchValue }: SearchTypes) => {
  const [mode, setMode] = useState("light");
  const width = 90;
  const height = 43;

  return (
    <Box
      bg={`${mode}`}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      pt="10px"
      pb="36px"
    >
      <Box display="flex">
        <Box pr="10px">
          <MoviesLogoSvg width={width} height={height} />
        </Box>
        <DarkMood setMode={setMode} />
      </Box>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Box display="flex">
        <Navbar />
      </Box>
    </Box>
  );
};

export default Header;

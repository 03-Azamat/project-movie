import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Popular from "./pages/popular/Popular";
import SearchResults from "./pages/searchResults/SearchResults";
import TopRated from "./pages/topRated/TopRated";
import UpComing from "./pages/upComing/UpComing";
import MenuList from "./ui/menuList/MenuList";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Container maxW="container.xl">
      <Box>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <Box display="flex" justifyContent="space-between">
          <Box maxW="100px">
            <MenuList />
          </Box>
          <Box maxW="90%">
            <Routes>
              <Route path="/" element={<Popular />} />
              <Route path="/toprated" element={<TopRated />} />
              <Route path="/upcoming" element={<UpComing />} />
              <Route
                path="/search/:search"
                element={
                  <SearchResults
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                  />
                }
              />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default App;

import { Box, Input } from "@chakra-ui/react";
import { CloseIcon, Search2Icon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Button from "../../ui/button/Button";
import { useNavigate } from "react-router-dom";
interface SearchTypes {
  searchValue: string;
  setSearchValue: any;
}

export default function Search({ searchValue, setSearchValue }: SearchTypes) {
  const navigate = useNavigate();

  const searchInput = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    if (searchValue) {
      navigate(`/search/${searchValue}`);
    }
  };

  console.log(searchValue);
  return (
    <Box w="45%" pos="relative" display="flex" alignItems="center">
      <Input
        value={searchValue}
        onChange={searchInput}
        rounded="20px"
        variant="filled"
        placeholder="Филмы, сериалы, персоны..."
      />
      <Search2Icon
        onClick={() => navigate(`/search/${searchValue}`)}
        pos="absolute"
        right="13px"
      />
      {searchValue && (
        <CloseIcon
          onClick={() => setSearchValue("")}
          pos="absolute"
          right="33px"
        />
      )}
    </Box>
  );
}

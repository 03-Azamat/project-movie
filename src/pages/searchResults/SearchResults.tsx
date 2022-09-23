import axios from "axios";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

import { IResults } from "../../redux/types";
import { resultsSerach } from "./redux/searchSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ApiKey } from "../../api/api-key/ApiKey";
import CardMovies from "../../ui/cardMovies/CardMovies";

interface SearchTypes {
  searchValue: string;
  setSearchValue: any;
}

export default function SearchResults({ searchValue }: SearchTypes) {
  const { result } = useAppSelector((state) => state.resultsSerachReducer);
  const dispatch = useAppDispatch();
  const res = async () => {
    dispatch(resultsSerach.actions.resultsFetching());
    const response = await axios.get<IResults>(
      `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${searchValue}`
    );
    dispatch(resultsSerach.actions.resultsSuccess(response.data.results));
  };

  useEffect(() => {
    res();
  }, []);

  console.log(result, "A");

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {result.map((movies, index) => (
          <Box key={index}>
            <CardMovies movies={movies} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

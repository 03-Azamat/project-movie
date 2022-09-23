import React, { useEffect } from "react";
import { Box, Container, Text } from "@chakra-ui/react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import CardMovies from "../../ui/cardMovies/CardMovies";
import { getTopRadMovies } from "./redux/actionMovie";

export default function TopRated() {
  const dispatch = useAppDispatch();
  const { topRatedMovies } = useAppSelector((state) => state.topRatedReducer);

  useEffect(() => {
    dispatch(getTopRadMovies());
  }, []);
  return (
    <Box>
      <Text>Top Rated</Text>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {topRatedMovies.map((movies, index) => (
          <Box key={index}>
            <CardMovies movies={movies} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

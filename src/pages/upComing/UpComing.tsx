import React, { useEffect } from "react";
import { Box, Container, Text } from "@chakra-ui/react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import CardMovies from "../../ui/cardMovies/CardMovies";
import { getUpComingMovies } from "./redux/actionMovie";

export default function UpComing() {
  const dispatch = useAppDispatch();
  const { upComingMovies } = useAppSelector((state) => state.upComingReducer);

  useEffect(() => {
    dispatch(getUpComingMovies());
  }, []);
  return (
    <Box>
      <Text>Up coming</Text>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {upComingMovies.map((movies, index) => (
          <Box key={index}>
            <CardMovies movies={movies} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

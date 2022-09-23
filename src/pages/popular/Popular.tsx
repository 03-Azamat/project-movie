import { Box, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Button from "../../ui/button/Button";
import CardMovies from "../../ui/cardMovies/CardMovies";
import { getMovies } from "./reducer/ActionMovies";

export default function Popular() {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.moviesReducer);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {movies.map((movies, index) => (
          <Box key={index}>
            <CardMovies movies={movies} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

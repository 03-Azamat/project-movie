import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieTypes } from "../../../redux/types";

interface MovieState {
  movies: MovieTypes[];
  isLoading: boolean;
  error: string;
}

const initialState: MovieState = {
  movies: [],
  isLoading: false,
  error: "",
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    moviesFetching(state) {
      state.isLoading = true;
    },
    moviesSuccess(state, action: PayloadAction<MovieTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.movies = action.payload;
    },
    moviesError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default moviesSlice.reducer;

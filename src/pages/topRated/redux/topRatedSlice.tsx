import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieTypes } from "../../../redux/types";

interface MovieState {
  topRatedMovies: MovieTypes[];
  isLoading: boolean;
  error: string;
}

const initialState: MovieState = {
  topRatedMovies: [],
  isLoading: false,
  error: "",
};

export const topRatedSlice = createSlice({
  name: "topRated",
  initialState,
  reducers: {
    moviesFetching(state) {
      state.isLoading = true;
    },
    moviesSuccess(state, action: PayloadAction<MovieTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.topRatedMovies = action.payload;
    },
    moviesError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default topRatedSlice.reducer;

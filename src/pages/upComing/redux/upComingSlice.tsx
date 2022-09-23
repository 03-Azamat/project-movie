import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieTypes } from "../../../redux/types";

interface MovieState {
  upComingMovies: MovieTypes[];
  isLoading: boolean;
  error: string;
}

const initialState: MovieState = {
  upComingMovies: [],
  isLoading: false,
  error: "",
};

export const upComingSlice = createSlice({
  name: "upComing",
  initialState,
  reducers: {
    moviesFetching(state) {
      state.isLoading = true;
    },
    moviesSuccess(state, action: PayloadAction<MovieTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.upComingMovies = action.payload;
    },
    moviesError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default upComingSlice.reducer;

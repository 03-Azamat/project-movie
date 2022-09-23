import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieTypes } from "../../../redux/types";

interface MovieState {
  result: MovieTypes[];
  isLoading: boolean;
  error: string;
}

const initialState: MovieState = {
  result: [],
  isLoading: false,
  error: "",
};

export const resultsSerach = createSlice({
  name: "topRated",
  initialState,
  reducers: {
    resultsFetching(state) {
      state.isLoading = true;
    },
    resultsSuccess(state, action: PayloadAction<MovieTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.result = action.payload;
    },
    resultsError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default resultsSerach.reducer;

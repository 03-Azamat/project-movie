import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { MovieTypes } from "../../../redux/types";

// interface MovieState {
//   nowPlayingMovies: MovieTypes[];
//   isLoading: boolean;
//   error: string;
// }

// const initialState: MovieState = {
//   nowPlayingMovies: [],
//   isLoading: false,
//   error: "",
// };

// export const nowPlayingSlice = createSlice({
//   name: "nowPlaying",
//   initialState,
//   reducers: {
//     moviesFetching(state) {
//       state.isLoading === true;
//     },
//     moviesSuccess(state, action: PayloadAction<MovieTypes[]>) {
//       state.isLoading === false;
//       state.error = "";
//       state.nowPlayingMovies = action.payload;
//     },
//     moviesError(state, action: PayloadAction<any>) {
//       state.isLoading === false;
//       state.error = action.payload;
//     },
//   },
// });

// export default nowPlayingSlice.reducer;

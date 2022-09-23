import axios from "axios";

// import { ApiKey } from "../../../api/api-key/ApiKey";
// import { AppDispatch } from "../../../redux/store";
// import { IResults } from "../../../redux/types";
// import { nowPlayingSlice } from "./nowPlayingSlice";

// export const getUpComingMovies = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(nowPlayingSlice.actions.moviesFetching);
//     const response = await axios.get<IResults>(
//       `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`
//     );
//     dispatch(nowPlayingSlice.actions.moviesSuccess(response.data.results));
//   } catch (e) {
//     console.log(e);
//   }
// };

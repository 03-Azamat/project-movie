import axios from "axios";

import { ApiKey } from "../../../api/api-key/ApiKey";
import { AppDispatch } from "../../../redux/store";
import { IResults } from "../../../redux/types";
import { topRatedSlice } from "./topRatedSlice";

export const getTopRadMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(topRatedSlice.actions.moviesFetching);
    const response = await axios.get<IResults>(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`
    );
    dispatch(topRatedSlice.actions.moviesSuccess(response.data.results));
  } catch (e: any) {
    dispatch(topRatedSlice.actions.moviesError(e.message));
  }
};

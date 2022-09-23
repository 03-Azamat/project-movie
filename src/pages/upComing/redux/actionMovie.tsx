import axios from "axios";

import { ApiKey } from "../../../api/api-key/ApiKey";
import { AppDispatch } from "../../../redux/store";
import { IResults } from "../../../redux/types";
import { upComingSlice } from "./upComingSlice";

export const getUpComingMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(upComingSlice.actions.moviesFetching);
    const response = await axios.get<IResults>(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}&language=en-US&page=1`
    );
    dispatch(upComingSlice.actions.moviesSuccess(response.data.results));
  } catch (e: any) {
    dispatch(upComingSlice.actions.moviesError(e.message));
  }
};

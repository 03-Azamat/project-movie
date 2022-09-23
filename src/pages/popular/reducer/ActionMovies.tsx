import axios from "axios";
import { ApiKey } from "../../../api/api-key/ApiKey";
import { AppDispatch } from "../../../redux/store";
import { IResults } from "../../../redux/types";
import { moviesSlice } from "./moviesSlice";

export const getMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(moviesSlice.actions.moviesFetching);
    const response = await axios.get<IResults>(
      `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`
    );
    dispatch(moviesSlice.actions.moviesSuccess(response.data.results));
  } catch (e: any) {
    dispatch(moviesSlice.actions.moviesError(e.message));
  }
};

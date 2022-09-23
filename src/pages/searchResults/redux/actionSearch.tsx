import axios from "axios";
import { useParams } from "react-router-dom";

import { ApiKey } from "../../../api/api-key/ApiKey";
import { AppDispatch } from "../../../redux/store";
import { IResults } from "../../../redux/types";
import { resultsSerach } from "./searchSlice";

export const getSearchResults = () => async (dispatch: AppDispatch) => {
  const { search } = useParams();
  try {
    dispatch(resultsSerach.actions.resultsFetching);
    const response = await axios.get<IResults>(
      `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${search}`
    );
    dispatch(resultsSerach.actions.resultsSuccess(response.data.results));
  } catch (e: any) {
    dispatch(resultsSerach.actions.resultsError(e.message));
  }
};

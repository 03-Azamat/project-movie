/* External dependencies */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../pages/popular/reducer/moviesSlice";
import topRatedReducer from "../pages/topRated/redux/topRatedSlice";
import upComingReducer from "../pages/upComing/redux/upComingSlice";
import resultsSerachReducer from "../pages/searchResults/redux/searchSlice";

const rootReducer = combineReducers({
  moviesReducer,
  upComingReducer,
  topRatedReducer,
  resultsSerachReducer,
});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore["dispatch"];

import axios from "axios";

export const baseApi = axios({
  baseURL: "https://api.themoviedb.org/3/movie/",
});

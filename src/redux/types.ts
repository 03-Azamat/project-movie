export interface MovieTypes {
  id: string | number;
  poster_path: string;
  overview: string;
  release_date: string;
  genre_ids: string;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  vote_average: number;
}

export interface IResults {
  [key: string]: any;
  results: MovieTypes[];
}

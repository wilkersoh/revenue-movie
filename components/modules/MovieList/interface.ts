export interface DetailsType {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: Array<number>;
  id: number;
  original_language?: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  revenue?: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default interface MovieListProps {
  category: string;
  total_pages: number;
  results: DetailsType[];
}
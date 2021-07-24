export interface DetailsType {
  id: number;
  adult: boolean;
  backdrop_path?: string;
  original_language?: string;
  original_title: string;
  overview: string;
  poster_path?: string;
  release_date: string;
  revenue?: number;
  production_companies?: { logo_path: string; name: string }[];
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

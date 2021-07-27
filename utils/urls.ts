export const BASE_URL = "https://api.themoviedb.org/3";
export const ORIGINAL_IMAGE_URL = "https://image.tmdb.org/t/p/original";
export const KEY = "3178a6cd01a89c8b2ba71e89f9de8c79";

export const imageUrl = (image) => {
  if (!image) return "/vercel.svg";
  // process.env.TMDB_MOVIE_KEY
  if (image.backdrop_path)
    return `${ORIGINAL_IMAGE_URL}${image.backdrop_path}?api_key=${KEY}`;

  if (image.poster_path)
    return `${ORIGINAL_IMAGE_URL}${image.poster_path}?api_key=${KEY}`;

  /**
   * fallback img
   */
  return "/verce.svg";
};

export const API_URL = "https://api.themoviedb.org/3/movie";
export const ORIGINAL_IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const imageUrl = (image) => {
  if (!image) return "/vercel.svg";

  if (image.backdrop_path) {
    const a = `${ORIGINAL_IMAGE_URL}${image.backdrop_path}?api_key=${process.env.TMDB_MOVIE_KEY}`;

    console.log(`a:  `, a);
    return a;
  }

  if (image.poster_path)
    return `${ORIGINAL_IMAGE_URL}${image.poster_path}?api_key=${process.env.TMDB_MOVIE_KEY}`;

  /**
   * fallback img
   */
  return "/verce.svg";
};

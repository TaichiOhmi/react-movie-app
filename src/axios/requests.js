const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const requests = {
  feachTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  feachNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  feachTopRated: `/discover/tv?api_key=${API_KEY}&languager=en-us`,
  feachActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  feachComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  feachHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  feachRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  feachDocumentMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

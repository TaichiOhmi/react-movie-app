const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const requests = {
  feachTrending: `/trending/all/week?api_key=${API_KEY}&language=ja-J&region=ja-JP`,
  feachNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=ja-JP&region=ja-JP`,
  feachTopRated: `/discover/tv?api_key=${API_KEY}&language=ja-JP&region=ja-JP`,
  feachActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28&language=ja-JP&region=ja-JP`,
  feachComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35&language=ja-JP&region=ja-JP`,
  feachHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27&language=ja-JP&region=ja-JP`,
  feachRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749&language=ja-JP&region=ja-JP`,
  feachDocumentMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99&language=ja-JP&region=ja-JP`,
};

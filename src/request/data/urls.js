const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const urls = {
  // get first page
  trendingItems: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  trendingMovies: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  trendingTV: `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`,

  // get any page
  discoverMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_watch_monetization_types=flatrate&page=`,
  discoverTV: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&page=`,
  nowPlayingMovies: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=`,
  nowPlayingTV: `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=`,
  topMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=`,
  topTV: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=`,
  popularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=`,
  popularTV: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=`,

  // get any page
  searchMovies: `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=&query=`,
  searchTV: `${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&include_adult=false&page=&query=`,

  // get any page
  discoverMoviesGenre: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=&with_genres=`,
  discoverTVGenre: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&page=&with_genres=`,

  // get first page
  genreMovies: `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  genreTV: `${BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=en-US`,
};

export default urls;

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const urls = {
  trending: {
    all: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
    movies: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
    tv: `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`,
  },
  discover: {
    movies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_watch_monetization_types=flatrate&page=`,
    tv: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&page=`,
    genre: {
      movies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=&with_genres=`,
      tv: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&page=&with_genres=`,
    },
  },
  movies: {},
  tv: {},
  nowPlaying: {
    movies: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=`,
    tv: `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=`,
  },
  top: {
    movies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=`,
    tv: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=`,
  },
  popular: {
    movies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=`,
    tv: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=`,
  },
  search: {
    movies: `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=&query=`,
    tv: `${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&include_adult=false&page=&query=`,
  },
  genre: {
    movies: `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    tv: `${BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=en-US`,
  },
};

export default urls;

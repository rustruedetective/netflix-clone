const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

// API REFERENCE:-
// 1 trending:
//     1.1 all
//     1.2 movies
//     1.3 tv
// 2 discover
//     2.1 movies
//             top
//             random
//     2.2 tv
//             top
//             random
//     2.3 genre
//         2.3.1 movies
//                 top
//                 random
//         2.3.2 tv
//                 top
//                 random
// 3 movies
//     3.1 nowPlaying
//             top
//             random
//     3.2 top
//             top
//             random
//     3.3 popular
//             top
//             random
// 4 tv
//     4.1 nowPlaying
//             top
//             random
//     4.2 top
//             top
//             random
//     4.3 popular
//             top
//             random
// 5 search
//     5.1 movies
//             top
//             random
//     5.2 tv
//             top
//             random
// 6 genre
//     6.1 movies
//     6.2 tv

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
  movies: {
    nowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=`,
    top: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=`,
    popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=`,
  },
  tv: {
    nowPlaying: `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=`,
    top: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=`,
    popular: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=`,
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

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const IMG_URL = process.env.REACT_APP_IMG_URL;

// urls we can request data from
const urls = {
  // 1. GET 1 ITEM, since they didnt discriminate between adult... i rejected them
  // latestMovie: `${BASE_URL}/movie/latest?api_key=${API_KEY}&language=en-US`,
  // latestTV: `${BASE_URL}/tv/latest?api_key=${API_KEY}&language=en-US`,

  // 2. GET 20 ITEMS
  // first page
  trendingItems: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  trendingMovies: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  trendingTV: `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`,

  // random page
  discoverMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_watch_monetization_types=flatrate&page=`,
  discoverTV: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&page=`,
  nowPlayingMovies: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=`,
  nowPlayingTV: `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=`,
  topMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=`,
  topTV: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=`,
  popularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=`,
  popularTV: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=`,

  // 3. GET N ITEMS
  searchMovies: `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=&query=`,
  searchTV: `${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&include_adult=false&page=&query=`,

  // 4. GET N ITEMS
  discoverMoviesGenre: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=&with_genres=`,
  discoverTVGenre: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&page=&with_genres=`,

  // 5. GET N GENRES
  genreMovies: `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  genreTV: `${BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=en-US`,
};

// helper functions
const requestOne = async (url, page, query, genre) => {
  // Request a page
  if (url.includes("&page=")) url = url.replace("&page=", `&page=${page}`);
  if (url.includes("&query=")) url = url.replace("&query=", `&query=${query}`);
  if (url.includes("&with_genres="))
    url = url.replace("&with_genres=", `&with_genres=${genre}`);

  const res = await fetch(url);
  let data = await res.json();
  return data;
};
const requestMany = async (url, query, genre) => {
  // Request a random page from the large number of pages available
  const data1 = await requestOne(url, 1, query, genre);

  let pages = data1.total_pages;
  pages = pages < 500 ? pages : 490; // we cannot request a page above 500 pages

  const page = Math.floor(Math.random() * (pages - 1)) + 1; // avoid the last page, as it might not have 20 results
  const data2 = await requestOne(url, page, query, genre);

  return data2;
};
// const processOne = async (data) => {
//   // Process one item from the page
//   return {
//     name: data.original_title || data.original_name,
//     // could not find these for single ones
//     // wall: `${IMG_URL}${data.backdrop_path}`,
//     // poster: `${IMG_URL}${data.poster_path}`,
//   };
// };
const processMany = async (data) => {
  // Process many items from the page
  data = data.results;
  data = data.map((el) => {
    return {
      name: el.original_title || el.original_name,
      wall: `${IMG_URL}${el.backdrop_path}`,
      poster: `${IMG_URL}${el.poster_path}`,
    };
  });
  return data;
};
const processGenres = async (data) => {
  const genres = data.genres.map((el) => {
    const name = el.name;
    return { [name]: el.id };
  });
  return genres;
};

// request function for each type of row
const requests = {
  // latestMovie: async (setState) => {
  //   let data = await requestOne(urls.latestMovie);
  //   data = await processOne(data);
  //   setState(data);
  // },
  // latestTV: async (setState) => {
  //   let data = await requestOne(urls.latestTV);
  //   data = await processOne(data);
  //   setState(data);
  // },

  trendingItems: async (setState) => {
    let data = await requestOne(urls.trendingItems);
    data = await processMany(data);
    setState(data);
  },
  trendingMovies: async (setState) => {
    let data = await requestOne(urls.trendingMovies);
    data = await processMany(data);
    setState(data);
  },
  trendingTV: async (setState) => {
    let data = await requestOne(urls.trendingTV);
    data = await processMany(data);
    setState(data);
  },
  discoverMovies: async (setState) => {
    let data = await requestMany(urls.discoverMovies);
    data = await processMany(data);
    setState(data);
  },
  discoverTV: async (setState) => {
    let data = await requestMany(urls.discoverTV);
    data = await processMany(data);
    setState(data);
  },
  nowPlayingMovies: async (setState) => {
    let data = await requestMany(urls.nowPlayingMovies);
    data = await processMany(data);
    setState(data);
  },
  nowPlayingTV: async (setState) => {
    let data = await requestMany(urls.nowPlayingTV);
    data = await processMany(data);
    setState(data);
  },
  topMovies: async (setState) => {
    let data = await requestMany(urls.topMovies);
    data = await processMany(data);
    setState(data);
  },
  topTV: async (setState) => {
    let data = await requestMany(urls.topTV);
    data = await processMany(data);
    setState(data);
  },
  popularMovies: async (setState) => {
    let data = await requestMany(urls.popularMovies);
    data = await processMany(data);
    setState(data);
  },
  popularTV: async (setState) => {
    let data = await requestMany(urls.popularTV);
    data = await processMany(data);
    setState(data);
  },

  searchMovies: async (setState, query) => {
    let data = await requestMany(urls.searchMovies, query);
    data = await processMany(data);
    setState(data);
  },
  searchTV: async (setState, query) => {
    let data = await requestMany(urls.searchTV, query);
    data = await processMany(data);
    setState(data);
  },

  discoverMoviesGenre: async (setState, genres) => {
    let data = await requestMany(urls.discoverMoviesGenre, "", genres);
    data = await processMany(data);
    setState(data);
  },
  discoverTVGenre: async (setState, genres) => {
    let data = await requestMany(urls.discoverTVGenre, "", genres);
    data = await processMany(data);
    setState(data);
  },

  genreMovies: async (setState) => {
    let data = await requestOne(urls.genreMovies);
    data = await processGenres(data);
    setState(data);
  },
  genreTV: async (setState) => {
    let data = await requestOne(urls.genreTV);
    data = await processGenres(data);
    setState(data);
  },
};

export default requests;

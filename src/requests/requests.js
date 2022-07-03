const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const IMG_URL = process.env.REACT_APP_IMG_URL;

// urls we can request data from
const urls = {
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

  // random page
  searchMovies: `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=&query=`,
  searchTV: `${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&include_adult=false&page=&query=`,

  // random page
  discoverMoviesGenre: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=&with_genres=`,
  discoverTVGenre: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&page=&with_genres=`,

  // first page
  genreMovies: `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  genreTV: `${BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=en-US`,
};

// helper functions
const requestPage = async (url, page, query, genre) => {
  // Request a page
  if (url.includes("&page=")) url = url.replace("&page=", `&page=${page}`);
  if (url.includes("&query=")) url = url.replace("&query=", `&query=${query}`);
  if (url.includes("&with_genres="))
    url = url.replace("&with_genres=", `&with_genres=${genre}`);

  const res = await fetch(url);
  let data = await res.json();
  return data;
};
const requestRandomPage = async (url, query, genre) => {
  // First get the total no. of pages available
  const data1 = await requestPage(url, 1, query, genre);

  let pages = data1.total_pages;
  pages = pages < 500 ? pages : 490; // we cannot request a page above 500 pages

  // Then request a random page among them
  const page = Math.floor(Math.random() * (pages - 1)) + 1; // avoid the last page, as it might not have 20 results
  const data2 = await requestPage(url, page, query, genre);

  return data2;
};
const processItems = async (data) => {
  // Process items from page object to a formatted array of items
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
  // Process genres from page object to a fromatted object of genres
  const genres = data.genres.map((el) => {
    const name = el.name;
    return { [name]: el.id };
  });
  return genres;
};

// request function for each type of row
const requests = {
  trendingItems: async (setState) => {
    let data = await requestPage(urls.trendingItems, 1);
    data = await processItems(data);
    setState(data);
  },
  trendingMovies: async (setState) => {
    let data = await requestPage(urls.trendingMovies, 1);
    data = await processItems(data);
    setState(data);
  },
  trendingTV: async (setState) => {
    let data = await requestPage(urls.trendingTV, 1);
    data = await processItems(data);
    setState(data);
  },

  //-----------------------------
  discoverMoviesTop: async (setState) => {
    let data = await requestPage(urls.discoverMovies, 1);
    data = await processItems(data);
    setState(data);
  },
  discoverTVTop: async (setState) => {
    let data = await requestPage(urls.discoverTV, 1);
    data = await processItems(data);
    setState(data);
  },
  nowPlayingMoviesTop: async (setState) => {
    let data = await requestPage(urls.nowPlayingMovies, 1);
    data = await processItems(data);
    setState(data);
  },
  nowPlayingTVTop: async (setState) => {
    let data = await requestPage(urls.nowPlayingTV, 1);
    data = await processItems(data);
    setState(data);
  },
  topMoviesTop: async (setState) => {
    let data = await requestPage(urls.topMovies, 1);
    data = await processItems(data);
    setState(data);
  },
  topTVTop: async (setState) => {
    let data = await requestPage(urls.topTV, 1);
    data = await processItems(data);
    setState(data);
  },
  popularMoviesTop: async (setState) => {
    let data = await requestPage(urls.popularMovies, 1);
    data = await processItems(data);
    setState(data);
  },
  popularTVTop: async (setState) => {
    let data = await requestPage(urls.popularTV, 1);
    data = await processItems(data);
    setState(data);
  },

  //-----------------------------
  discoverMovies: async (setState) => {
    let data = await requestRandomPage(urls.discoverMovies);
    data = await processItems(data);
    setState(data);
  },
  discoverTV: async (setState) => {
    let data = await requestRandomPage(urls.discoverTV);
    data = await processItems(data);
    setState(data);
  },
  nowPlayingMovies: async (setState) => {
    let data = await requestRandomPage(urls.nowPlayingMovies);
    data = await processItems(data);
    setState(data);
  },
  nowPlayingTV: async (setState) => {
    let data = await requestRandomPage(urls.nowPlayingTV);
    data = await processItems(data);
    setState(data);
  },
  topMovies: async (setState) => {
    let data = await requestRandomPage(urls.topMovies);
    data = await processItems(data);
    setState(data);
  },
  topTV: async (setState) => {
    let data = await requestRandomPage(urls.topTV);
    data = await processItems(data);
    setState(data);
  },
  popularMovies: async (setState) => {
    let data = await requestRandomPage(urls.popularMovies);
    data = await processItems(data);
    setState(data);
  },
  popularTV: async (setState) => {
    let data = await requestRandomPage(urls.popularTV);
    data = await processItems(data);
    setState(data);
  },

  //-----------------------------
  searchMovies: async (setState, query) => {
    let data = await requestRandomPage(urls.searchMovies, query);
    data = await processItems(data);
    setState(data);
  },
  searchTV: async (setState, query) => {
    let data = await requestRandomPage(urls.searchTV, query);
    data = await processItems(data);
    setState(data);
  },

  //-----------------------------
  discoverMoviesGenre: async (setState, genres) => {
    let data = await requestRandomPage(urls.discoverMoviesGenre, "", genres);
    data = await processItems(data);
    setState(data);
  },
  discoverTVGenre: async (setState, genres) => {
    let data = await requestRandomPage(urls.discoverTVGenre, "", genres);
    data = await processItems(data);
    setState(data);
  },

  genreMovies: async (setState) => {
    let data = await requestPage(urls.genreMovies);
    data = await processGenres(data);
    setState(data);
  },
  genreTV: async (setState) => {
    let data = await requestPage(urls.genreTV);
    data = await processGenres(data);
    setState(data);
  },
};

export default requests;

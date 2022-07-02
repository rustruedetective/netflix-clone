const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

// urls we can request data from
const urls = {
  // max pages 1-499
  discoverMoviesRandom: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_watch_monetization_types=flatrate&page=`,
  discoverTVRandom: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&page=`,
  trendingItems: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  trendingMovies: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  trendingTV: `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`,
  movieLatest: `${BASE_URL}/movie/latest?api_key=${API_KEY}&language=en-US`,
  TVLatest: `${BASE_URL}/tv/latest?api_key=${API_KEY}&language=en-US`,
  // max pages 1-41
  moviesNowTheaters: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=`,
  TVNowTvs: `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=`,
  // max pages 1-504
  moviesTop: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=`,
  TVTop: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=`,
  // max pages 1-34141
  moviesPopular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=`,
  TVPopular: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=`,
  searchMovies: `${BASE_URL}/search/movie?api_key=4bd18fd212011875262625ac3ce319b4&language=en-US&include_adult=false&page=&query=`,
};

// request maker helper functions
const requestHandler = async (url, page, query) => {
  if (url.includes("&page=")) url = url.replace("&page=", `&page=${page}`);
  else url = url.replace("&page=", "");

  if (url.includes("&query=")) url = url.replace("&query=", `&query=${query}`);
  else url = url.replace("&query=", "");

  const res = await fetch(url);
  const data = await res.json();
  return data;
};
const requestHandlerPages = async (url, query) => {
  const data1 = await requestHandler(url, 1, query);

  let pages = data1.total_pages;
  pages = pages < 500 ? pages : 450; // we cannot request a page above 500 pages
  
  const page = Math.floor(Math.random() * pages) + 1;
  const data2 = await requestHandler(url, page, query);

  return data2;
};

// request function for each type of row
const requests = {
  // no pages needed
  trendingItems: async (setState) => {
    const data = await requestHandler(urls.trendingItems);
    console.log(data);
  },
  trendingMovies: async (setState) => {
    const data = await requestHandler(urls.trendingMovies);
    console.log(data);
  },
  trendingTV: async (setState) => {
    const data = await requestHandler(urls.trendingTV);
    console.log(data);
  },
  movieLatest: async (setState) => {
    const data = await requestHandler(urls.movieLatest);
    console.log(data);
  },
  TVLatest: async (setState) => {
    const data = await requestHandler(urls.TVLatest);
    console.log(data);
  },

  // pages needed
  discoverMoviesRandom: async (setState) => {
    const data = await requestHandlerPages(urls.discoverMoviesRandom);
    console.log(data);
  },
  discoverTVRandom: async (setState) => {
    const data = await requestHandlerPages(urls.discoverTVRandom);
    console.log(data);
  },
  moviesNowTheaters: async (setState) => {
    const data = await requestHandler(urls.moviesNowTheaters);
    console.log(data);
  },
  TVNowTvs: async (setState) => {
    const data = await requestHandler(urls.TVNowTvs);
    console.log(data);
  },
  moviesTop: async (setState) => {
    const data = await requestHandler(urls.moviesTop);
    console.log(data);
  },
  TVTop: async (setState) => {
    const data = await requestHandler(urls.TVTop);
    console.log(data);
  },
  moviesPopular: async (setState) => {
    const data = await requestHandler(urls.moviesPopular);
    console.log(data);
  },
  TVPopular: async (setState) => {
    const data = await requestHandler(urls.TVPopular);
    console.log(data);
  },
  searchMovies: async (setState) => {
    const data = await requestHandler(urls.searchMovies);
    console.log(data);
  },
};

export default requests;

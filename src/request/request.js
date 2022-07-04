import urls from "./data/urls";
import {
  requestPage,
  requestRandomPage,
  processItems,
  processGenres,
} from "./helpers/helpers";

// request function for each type of row
const request = {
  trending: {
    items: async (setState) => {
      let data = await requestPage(urls.trendingItems, 1);
      data = await processItems(data);
      setState(data);
    },
    movies: async (setState) => {
      let data = await requestPage(urls.trendingMovies, 1);
      data = await processItems(data);
      setState(data);
    },
    tv: async (setState) => {
      let data = await requestPage(urls.trendingTV, 1);
      data = await processItems(data);
      setState(data);
    },
  },
  discover: {
    top: {
      movies: async (setState) => {
        let data = await requestPage(urls.discoverMovies, 1);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestPage(urls.discoverTV, 1);
        data = await processItems(data);
        setState(data);
      },
    },
    random: {
      movies: async (setState) => {
        let data = await requestRandomPage(urls.discoverMovies);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestRandomPage(urls.discoverTV);
        data = await processItems(data);
        setState(data);
      },
    },
  },
  nowPlaying: {
    top: {
      movies: async (setState) => {
        let data = await requestPage(urls.nowPlayingMovies, 1);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestPage(urls.nowPlayingTV, 1);
        data = await processItems(data);
        setState(data);
      },
    },
    random: {
      movies: async (setState) => {
        let data = await requestRandomPage(urls.nowPlayingMovies);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestRandomPage(urls.nowPlayingTV);
        data = await processItems(data);
        setState(data);
      },
    },
  },
  top: {
    top: {
      movies: async (setState) => {
        let data = await requestPage(urls.topMovies, 1);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestPage(urls.topTV, 1);
        data = await processItems(data);
        setState(data);
      },
    },
    random: {
      movies: async (setState) => {
        let data = await requestRandomPage(urls.topMovies);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestRandomPage(urls.topTV);
        data = await processItems(data);
        setState(data);
      },
    },
  },
  popular: {
    top: {
      movies: async (setState) => {
        let data = await requestPage(urls.popularMovies, 1);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestPage(urls.popularTV, 1);
        data = await processItems(data);
        setState(data);
      },
    },
    random: {
      movies: async (setState) => {
        let data = await requestRandomPage(urls.popularMovies);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestRandomPage(urls.popularTV);
        data = await processItems(data);
        setState(data);
      },
    },
  },
  search: {
    movies: async (setState, query) => {
      let data = await requestRandomPage(urls.searchMovies, query);
      data = await processItems(data);
      setState(data);
    },
    tv: async (setState, query) => {
      let data = await requestRandomPage(urls.searchTV, query);
      data = await processItems(data);
      setState(data);
    },
  },
  genre: {
    top: {
      movies: async (setState, genres) => {
        let data = await requestPage(urls.discoverMoviesGenre, "", "", genres);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState, genres) => {
        let data = await requestPage(urls.discoverTVGenre, "", "", genres);
        data = await processItems(data);
        setState(data);
      },
    },
    random: {
      movies: async (setState, genres) => {
        let data = await requestRandomPage(
          urls.discoverMoviesGenre,
          "",
          genres
        );
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState, genres) => {
        let data = await requestRandomPage(urls.discoverTVGenre, "", genres);
        data = await processItems(data);
        setState(data);
      },
    },
    get: {
      movies: async (setState) => {
        let data = await requestPage(urls.genreMovies);
        data = await processGenres(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestPage(urls.genreTV);
        data = await processGenres(data);
        setState(data);
      },
    },
  },

  //-----------------------------
};

export default request;

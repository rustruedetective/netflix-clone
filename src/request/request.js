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
    all: async (setState) => {
      let data = await requestPage(urls.trending.all, 1);
      data = await processItems(data);
      setState(data);
    },
    movies: async (setState) => {
      let data = await requestPage(urls.trending.movies, 1);
      data = await processItems(data);
      setState(data);
    },
    tv: async (setState) => {
      let data = await requestPage(urls.trending.tv, 1);
      data = await processItems(data);
      setState(data);
    },
  },
  discover: {
    top: {
      movies: async (setState) => {
        let data = await requestPage(urls.discover.movies, 1);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestPage(urls.discover.tv, 1);
        data = await processItems(data);
        setState(data);
      },
    },
    random: {
      movies: async (setState) => {
        let data = await requestRandomPage(urls.discover.movies);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestRandomPage(urls.discover.tv);
        data = await processItems(data);
        setState(data);
      },
    },
  },
  nowPlaying: {
    top: {
      movies: async (setState) => {
        let data = await requestPage(urls.nowPlaying.movies, 1);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestPage(urls.nowPlaying.tv, 1);
        data = await processItems(data);
        setState(data);
      },
    },
    random: {
      movies: async (setState) => {
        let data = await requestRandomPage(urls.nowPlaying.movies);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestRandomPage(urls.nowPlaying.tv);
        data = await processItems(data);
        setState(data);
      },
    },
  },
  top: {
    top: {
      movies: async (setState) => {
        let data = await requestPage(urls.top.movies, 1);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestPage(urls.top.tv, 1);
        data = await processItems(data);
        setState(data);
      },
    },
    random: {
      movies: async (setState) => {
        let data = await requestRandomPage(urls.top.movies);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestRandomPage(urls.top.movies);
        data = await processItems(data);
        setState(data);
      },
    },
  },
  popular: {
    top: {
      movies: async (setState) => {
        let data = await requestPage(urls.popular.movies, 1);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestPage(urls.popular.tv, 1);
        data = await processItems(data);
        setState(data);
      },
    },
    random: {
      movies: async (setState) => {
        let data = await requestRandomPage(urls.popular.movies);
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestRandomPage(urls.popular.tv);
        data = await processItems(data);
        setState(data);
      },
    },
  },
  search: {
    movies: async (setState, query) => {
      let data = await requestRandomPage(urls.search.movies, query);
      data = await processItems(data);
      setState(data);
    },
    tv: async (setState, query) => {
      let data = await requestRandomPage(urls.search.tv, query);
      data = await processItems(data);
      setState(data);
    },
  },
  genre: {
    top: {
      movies: async (setState, genres) => {
        let data = await requestPage(
          urls.discover.genre.movies,
          "",
          "",
          genres
        );
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState, genres) => {
        let data = await requestPage(
          urls.discover.genre.movies,
          "",
          "",
          genres
        );
        data = await processItems(data);
        setState(data);
      },
    },
    random: {
      movies: async (setState, genres) => {
        let data = await requestRandomPage(
          urls.discover.genre.movies,
          "",
          genres
        );
        data = await processItems(data);
        setState(data);
      },
      tv: async (setState, genres) => {
        let data = await requestRandomPage(
          urls.urls.discover.genre.tv,
          "",
          genres
        );
        data = await processItems(data);
        setState(data);
      },
    },
    get: {
      movies: async (setState) => {
        let data = await requestPage(urls.genre.movies);
        data = await processGenres(data);
        setState(data);
      },
      tv: async (setState) => {
        let data = await requestPage(urls.genre.tv);
        data = await processGenres(data);
        setState(data);
      },
    },
  },

  //-----------------------------
};

export default request;

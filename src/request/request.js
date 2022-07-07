import urls from "./data/urls";
import {
  requestTop,
  requestRandom,
  processItems,
  processGenres,
} from "./helpers/helpers";

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

// request function for each type of row
const request = {
  trending: {
    all: async () => {
      let data = await requestTop(urls.trending.all, 1);
      data = await processItems(data);
      return data;
    },
    movies: async () => {
      let data = await requestTop(urls.trending.movies, 1);
      data = await processItems(data);
      return data;
    },
    tv: async () => {
      let data = await requestTop(urls.trending.tv, 1);
      data = await processItems(data);
      return data;
    },
  },
  discover: {
    movies: {
      top: async () => {
        let data = await requestTop(urls.discover.movies, 1);
        data = await processItems(data);
        return data;
      },
      random: async () => {
        let data = await requestRandom(urls.discover.movies);
        data = await processItems(data);
        return data;
      },
    },
    tv: {
      top: async () => {
        let data = await requestTop(urls.discover.tv, 1);
        data = await processItems(data);
        return data;
      },
      random: async () => {
        let data = await requestRandom(urls.discover.tv);
        data = await processItems(data);
        return data;
      },
    },
    genre: {
      movies: {
        top: async (genres) => {
          let data = await requestTop(
            urls.discover.genre.movies,
            1,
            "",
            genres
          );
          data = await processItems(data);
          return data;
        },
        random: async (genres) => {
          let data = await requestRandom(
            urls.discover.genre.movies,
            "",
            genres
          );
          data = await processItems(data);
          return data;
        },
      },
      tv: {
        top: async (genres) => {
          let data = await requestTop(urls.discover.genre.tv, 1, "", genres);
          data = await processItems(data);
          return data;
        },
        random: async (genres) => {
          let data = await requestRandom(urls.discover.genre.tv, "", genres);
          data = await processItems(data);
          return data;
        },
      },
    },
  },
  movies: {
    nowPlaying: {
      top: async () => {
        let data = await requestTop(urls.movies.nowPlaying, 1);
        data = await processItems(data);
        return data;
      },
      random: async () => {
        let data = await requestRandom(urls.movies.nowPlaying);
        data = await processItems(data);
        return data;
      },
    },
    top: {
      top: async () => {
        let data = await requestTop(urls.movies.top, 1);
        data = await processItems(data);
        return data;
      },
      random: async () => {
        let data = await requestRandom(urls.movies.top);
        data = await processItems(data);
        return data;
      },
    },
    popular: {
      top: async () => {
        let data = await requestTop(urls.movies.popular, 1);
        data = await processItems(data);
        return data;
      },
      random: async () => {
        let data = await requestRandom(urls.movies.popular);
        data = await processItems(data);
        return data;
      },
    },
  },
  tv: {
    nowPlaying: {
      top: async () => {
        let data = await requestTop(urls.tv.nowPlaying, 1);
        data = await processItems(data);
        return data;
      },
      random: async () => {
        let data = await requestRandom(urls.tv.nowPlaying);
        data = await processItems(data);
        return data;
      },
    },
    top: {
      top: async () => {
        let data = await requestTop(urls.tv.top, 1);
        data = await processItems(data);
        return data;
      },

      random: async () => {
        let data = await requestRandom(urls.tv.top);
        data = await processItems(data);
        return data;
      },
    },
    popular: {
      top: async () => {
        let data = await requestTop(urls.tv.popular, 1);
        data = await processItems(data);
        return data;
      },
      random: async () => {
        let data = await requestRandom(urls.tv.popular);
        data = await processItems(data);
        return data;
      },
    },
  },
  search: {
    movies: {
      top: async (query) => {
        let data = await requestTop(urls.search.movies, 1, query);
        data = await processItems(data);
        return data;
      },
      random: async (query) => {
        let data = await requestRandom(urls.search.movies, query);
        data = await processItems(data);
        return data;
      },
    },
    tv: {
      top: async (query) => {
        let data = await requestTop(urls.search.tv, 1, query);
        data = await processItems(data);
        return data;
      },
      random: async (query) => {
        let data = await requestRandom(urls.search.tv, query);
        data = await processItems(data);
        return data;
      },
    },
  },
  genre: {
    movies: async () => {
      let data = await requestTop(urls.genre.movies);
      data = await processGenres(data);
      return data;
    },
    tv: async () => {
      let data = await requestTop(urls.genre.tv);
      data = await processGenres(data);
      return data;
    },
  },

  //-----------------------------
};

export default request;

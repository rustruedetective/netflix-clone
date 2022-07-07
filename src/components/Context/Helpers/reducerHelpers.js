import request from "../../../request/request";
import {
  genreMoviesByName,
  genreMoviesById,
  genreTVByName,
  genreTVById,
} from "../../../request/data/preloaded";
// under construction
// import {
//   becauseYouWatchedMovies,
//   becauseYouWatchedTV,
// } from "../data/preloaded";

import { randomNumber, shuffle } from "./randomizer";

const home = async (_) => {
  // under construction
  // const randomWatchedMovie =
  //   becauseYouWatchedMovies[randomNumber(becauseYouWatchedMovies)];
  // const randomWatchedTV =
  //   becauseYouWatchedTV[randomNumber(becauseYouWatchedTV)];
  const data = { highlight: {}, rowMatrix: [] };
  const highlightReq = {
    name: "Highlight",
    request: request.trending.all,
  };
  const rowMatrixReq = [
    // to search

    {
      name: "TV Now Playing",
      request: request.tv.nowPlaying.random,
    },
    {
      name: "TV Sci-Fi & Fantasy",
      request: async (_) =>
        await request.discover.genre.tv.random(
          genreTVByName["Sci-Fi & Fantasy"]
        ),
      // request("random", urls.discover.genre.tv, genreTVByName["Sci-Fi & Fantasy"]);
    },
    {
      name: "Action & Adventure Programmes",
      request: async (_) =>
        await request.discover.genre.tv.random(
          genreTVByName["Action & Adventure"]
        ),
    },
    { name: "Popular Choices", row: [], request: request.movies.popular.top },
    {
      name: "Every-winning TV Programmes",
      request: request.tv.top.top,
    },

    // easy requests
    { name: "Trending Now", row: [], request: request.trending.all },
    {
      name: "Children & Family TV",
      request: async (_) =>
        await request.discover.genre.tv.random(genreTVByName.Family),
    },
    {
      name: "War Movies",
      request: async (_) =>
        await request.discover.genre.movies.random(genreMoviesByName.War),
    },
    {
      name: "Murder & Mystery",
      request: async (_) =>
        await request.discover.genre.movies.random(genreMoviesByName.Crime),
    },
    {
      name: "Historical Movies",
      request: async (_) =>
        await request.discover.genre.movies.random(genreMoviesByName.History),
    },
    // under construction
    // {
    //   name: `Because you watched ${becauseYouWatchedTV}`,
    //   request: "",
    // },
  ];

  try {
    data.highlight.name = highlightReq.name;
    data.highlight.item = await highlightReq.request();
    data.highlight.item =
      data.highlight.item[randomNumber(data.highlight.item.length)];

    for (let el of rowMatrixReq) {
      const row = await el.request();
      data.rowMatrix.push({ name: el.name, row: row });
      data.rowMatrix = shuffle(data.rowMatrix);
    }
  } catch (Error) {
    console.log("Data Error", Error);
  }

  return data;
};

const new_and_popular = async (_) => {
  const data = { highlight: {}, rowMatrix: [] };

  return data;
};

const film = async (_) => {
  const filmData = { highlight: {}, rowMatrix: [] };

  return filmData;
};

const tv = async (_) => {
  const tvData = { highlight: {}, rowMatrix: [] };

  return tvData;
};

const category = async (_) => {
  const categoryData = { rowMatrix: [] };

  return categoryData;
};

const search = async (_) => {
  const searchData = { rows: [], searchFunction: null };

  return searchData;
};

const surprise = async (_) => {
  const surpriseData = { rows: [] };

  return surpriseData;
};

export { home, new_and_popular, film, tv, surprise, search, category };

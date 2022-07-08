import request from "../../../request/request";
import {
  genreMoviesByName,
  genreTVByName,
} from "../../../request/data/preloaded";
// under construction
// import {
//   becauseYouWatchedMovies,
//   becauseYouWatchedTV,
// } from "../data/preloaded";

import { randomNumber, shuffle, getMultipleRandom } from "./randomizer";

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
    console.log("Context Helper Error", Error);
  }

  return data;
};

const new_and_popular = async (_) => {
  const data = { highlight: {}, rowMatrix: [] };

  return data;
};

const film = async (_) => {
  const data = { highlight: {}, rowMatrix: [] };

  return data;
};

const tv = async (_) => {
  const data = { highlight: {}, rowMatrix: [] };

  return data;
};

const category = async (_) => {
  const data = { genres: [] };
  const noOfGenres = 3;
  const randomMovieGenres = getMultipleRandom(
    Object.keys(genreMoviesByName),
    noOfGenres
  );
  const randomTVGenres = getMultipleRandom(
    Object.keys(genreTVByName),
    noOfGenres
  );

  const moviesReq = async (genre_name) =>
    await request.discover.genre.movies.top(genreMoviesByName[genre_name]);
  const tvReq = async (genre_name) =>
    await request.discover.genre.tv.top(genreTVByName[genre_name]);

  try {
    for (let i = 0; i < noOfGenres; i++) {
      const rowMovie = await moviesReq(randomMovieGenres[i]);
      const rowTV = await tvReq(randomTVGenres[i]);

      data.genres.push({ name: randomMovieGenres[i], row: rowMovie });
      data.genres.push({ name: randomTVGenres[i], row: rowTV });
    }
  } catch (Error) {
    console.log("Context Helper Error", Error);
  }

  return data;
};

const search = async (_) => {
  const data = { row: [], searchFunction: null };
  data.row = await request.trending.all();

  data.searchFunction = async (query) => {
    const moviesResult = await request.search.movies.top(query);
    const tvResult = await request.search.tv.top(query);

    return [...moviesResult, ...tvResult];
  };

  return data;
};

const surprise = async (_) => {
  const data = { name: "", row: [] };
  const rowReq = {
    name: "Surprise",
    requests: [
      { request: request.trending.all },
      { request: request.trending.movies },
      { request: request.trending.tv },
      { request: request.discover.movies.top },
      { request: request.discover.tv.top },
      { request: request.movies.popular.top },
      { request: request.tv.popular.top },
    ],
  };

  const randomReq = rowReq.requests[randomNumber(rowReq.requests.length)];
  data.name = rowReq.name;

  try {
    data.row = await randomReq.request();
  } catch (Error) {
    console.log("Context Helper Error", Error);
  }
  return data;
};

export { home, new_and_popular, film, tv, surprise, search, category };

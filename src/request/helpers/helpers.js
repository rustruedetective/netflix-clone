import { combinedGenresById } from "../data/preloaded";

const IMG_URL = process.env.REACT_APP_IMG_URL;

const requestTop = async (url, page, query, genre) => {
  // Request a page
  if (url.includes("&page=")) url = url.replace("&page=", `&page=${page}`);
  if (url.includes("&query=")) url = url.replace("&query=", `&query=${query}`);
  if (url.includes("&with_genres="))
    url = url.replace("&with_genres=", `&with_genres=${genre}`);

  let data = {};
  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (Error) {
    console.log("Request Error: ", Error);
  }

  return data;
};

const requestRandom = async (url, query, genre) => {
  // First get the total no. of pages available
  const data1 = await requestTop(url, 1, query, genre);

  let data2 = {};
  try {
    let pages = data1?.total_pages;
    pages = pages < 500 ? pages : 490; // we cannot request a page above 500 pages

    // Then request a random page among them
    const page = Math.floor(Math.random() * (pages - 1)) + 1; // avoid the last page, as it might not have 20 results
    data2 = await requestTop(url, page, query, genre);
  } catch (Error) {
    console.log("Request Randomizer Error: ", Error);
  }

  return data2;
};

const processItems = async (data) => {
  // Process items from page object to a formatted array of items
  try {
    data = data.results;
    data = data.map((el) => {
      return {
        name: el.original_title || el.original_name,
        description: el.overview ? trimString(el.overview) : "",
        wall: el.backdrop_path ? `${IMG_URL}${el.backdrop_path}` : "",
        poster: el.poster_path ? `${IMG_URL}${el.poster_path}` : "",
        date: el.release_date || el.first_air_date,
        genres: el.genre_ids ? processGenreNamesById(el.genre_ids) : [],
        rating: el.vote_average || 0,
      };
    });
  } catch (Error) {
    console.log("Process Items Error: ", Error);
  }

  return data;
};

const trimString = (str) => {
  str = str.substring(0, 180);
  if (str[179] !== ".") str += "...";
  return str;
};
const processGenreNamesById = (arr) => {
  return arr.map((el) => combinedGenresById[el]);
};

const processGenres = async (data) => {
  // Process genres from page object to a fromatted object of genres
  const genresByName = {};
  const genresById = {};

  try {
    data.genres.map((el) => {
      genresByName[el.name] = el.id;
      genresById[el.id] = el.name;
      return null;
    });
  } catch (Error) {
    console.log("Process Genre Error: ", Error);
  }

  return { genresByName, genresById };
};

export { requestTop, requestRandom, processItems, processGenres };

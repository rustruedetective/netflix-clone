const IMG_URL = process.env.REACT_APP_IMG_URL;

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
      description: el.overview,
      wall: `${IMG_URL}${el.backdrop_path}`,
      poster: `${IMG_URL}${el.poster_path}`,
      date: el.release_date || el.first_air_date,
      genres: el.genre_ids,
      rating: el.vote_average,
    };
  });
  return data;
};

const processGenres = async (data) => {
  // Process genres from page object to a fromatted object of genres
  const genresByName = {};
  const genresById = {};
  data.genres.map((el) => {
    genresByName[el.name] = el.id;
    genresById[el.id] = el.name;
  });
  return { genresByName, genresById };
};

export { requestPage, requestRandomPage, processItems, processGenres };

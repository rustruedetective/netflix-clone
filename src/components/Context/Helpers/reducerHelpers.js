import request from "../../../request/request";

const homeData = async (_) => {
  const homeData = { highlight: {}, rowMatrix: [] };
  const rowMatrixRequests = [
    { name: "", row: [] },
    { name: "", row: [] },
    { name: "", row: [] },
    { name: "", row: [] },
    { name: "", row: [] },
    { name: "", row: [] },
    { name: "", row: [] },
    { name: "", row: [] },
    { name: "", row: [] },
    { name: "", row: [] },
  ];
  const trendingRow = await request.trending.all();

  try {
    homeData.highlight = trending[Math.floor(Math.random() * trending.length)];
  } catch (Error) {
    console.log("Data Error");
  }

  return homeData;
};

const newData = async (_) => {
  const newData = { highlight: {}, rowMatrix: [] };

  return newData;
};

const filmData = async (_) => {
  const filmData = { highlight: {}, rowMatrix: [] };

  return filmData;
};

const tvData = async (_) => {
  const tvData = { highlight: {}, rowMatrix: [] };

  return tvData;
};

const categoryData = async (_) => {
  const categoryData = { rowMatrix: [] };

  return categoryData;
};

const searchData = async (_) => {
  const searchData = { rows: [], searchFunction: null };

  return searchData;
};

const surpriseData = async (_) => {
  const surpriseData = { rows: [] };

  return surpriseData;
};

export {
  homeData,
  newData,
  filmData,
  tvData,
  surpriseData,
  searchData,
  categoryData,
};

import React, { createContext, useReducer } from "react";

import {
  homeData,
  newData,
  filmData,
  tvData,
  surpriseData,
  searchData,
  categoryData,
} from "./Helpers/reducerHelpers";

const context = createContext([]);

function Context({ children }) {
  const pageReducer = async (state, action) => {
    if (action.page === "home") {
      const data = await homeData();
      return data;
    }
    if (action.page === "new") return newData();
    if (action.page === "film") return filmData();
    if (action.page === "tv") return tvData();
    if (action.page === "surprise") return surpriseData();
    if (action.page === "search") return searchData();
    if (action.page === "category") return categoryData();
    return {};
  };
  const [data, dispatch] = useReducer(pageReducer, "abc");

  return (
    <context.Provider value={{ data: data, setData: dispatch }}>
      {children}
    </context.Provider>
  );
}

export { context };
export default Context;

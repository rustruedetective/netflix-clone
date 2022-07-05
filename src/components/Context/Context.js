import React, { createContext, useState } from "react";

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
  const [data, setData] = useState({});
  const setHandler = async (page) => {
    if (page === "/home") {
      const result = await homeData();
      setData(result);
    }
    if (page === "/new") {
      const result = await newData();
      setData(result);
    }
    if (page === "/film") {
      const result = await filmData();
      setData(result);
    }
    if (page === "/tv") {
      const result = await tvData();
      setData(result);
    }
    if (page === "/surprise") {
      const result = await surpriseData();
      setData(result);
    }
    if (page === "/search") {
      const result = await searchData();
      setData(result);
    }
    if (page === "/category") {
      const result = await categoryData();
      setData(result);
    }
    return {};
  };

  return (
    <context.Provider value={{ data: data, setData: setHandler }}>
      {children}
    </context.Provider>
  );
}

export { context };
export default Context;

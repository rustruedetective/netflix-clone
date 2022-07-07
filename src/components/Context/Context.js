import React, { createContext, useState } from "react";

import {
  home,
  new_and_popular,
  film,
  tv,
  surprise,
  search,
  category,
} from "./Helpers/reducerHelpers";

const context = createContext([]);

function Context({ children }) {
  const [data, setData] = useState({});
  const setHandler = async (page) => {
    if (page === "/home") {
      const result = await home();
      setData(result);
    }
    if (page === "/new") {
      const result = await new_and_popular();
      setData(result);
    }
    if (page === "/film") {
      const result = await film();
      setData(result);
    }
    if (page === "/tv") {
      const result = await tv();
      setData(result);
    }
    if (page === "/surprise") {
      const result = await surprise();
      setData(result);
    }
    if (page === "/search") {
      const result = await search();
      setData(result);
    }
    if (page === "/category") {
      const result = await category();
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

import React, { createContext } from "react";

const context = createContext([]);

function Context({ children }) {
  const rowMatrix = "this is value 123";

  return <context.Provider value={rowMatrix}>{children}</context.Provider>;
}

export { context };
export default Context;

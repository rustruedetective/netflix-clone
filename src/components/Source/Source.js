import React from "react";
import { ReactComponent as Tmdb } from "./resources/tmdb.svg";

import "./styles/styles.css";

const mainBackgroundColor = "#141414";
const redColor = "#e50914";

function Source() {
  return (
    <div className="main">
      <div className="wrapper">
        <div className="slider-thumb1"></div>
        <div className="slider-thumb2"></div>
        <Tmdb style={{ height: "80vh", width: "80vw" }} />
      </div>
    </div>
  );
}

export default Source;

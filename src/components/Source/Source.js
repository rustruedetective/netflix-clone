import { Disc } from "grommet-icons";
import React from "react";
import { ReactComponent as Tmdb } from "./resources/tmdb.svg";

import "./styles/styles.css";

const mainBackgroundColor = "#141414";
const redColor = "#e50914";

function Source() {
  return (
    <div className="main">
      <div className="slider-thumb"></div>
      <div className="logo">
        <Tmdb style={{ height: "80vh", width: "80vw" }} />
      </div>
    </div>
  );
}

export default Source;

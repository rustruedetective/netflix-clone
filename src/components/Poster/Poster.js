import React from "react";

import missing from "./resources/missing.png";

function Poster({ type, data, select, keyNumber }) {
  if (type.name === "normal")
    return (
      <img
        src={data.poster}
        style={{ ...type }}
        onError={(e) => {
          e.target.src = missing;
        }}
        onClick={(_) => select(data)}
      />
    );

  if (type.name === "numbered") {
    const widthImg = `${Number(type.width.split("px")[0]) / 2}px`;
    const heightNumber = `${Number(type.height.split("px")[0]) * 1.37}px`;

    return (
      <div
        className="numbered"
        style={{
          width: type.width,
          height: type.height,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr",
          gap: "0px 0px",
          gridTemplateAreas: ". .",
        }}
      >
        <div
          className="number"
          style={{
            height: type.height,
            overflow: "hidden",
          }}
        >
          <h1
            style={{
              position: "relative",
              left: "10%",
              lineHeight: "0.6",
              fontSize: heightNumber,
              color: "white",
              "-webkit-text-stroke": "5px black",
            }}
          >
            {keyNumber}
          </h1>
        </div>
        <img
          src={data.poster}
          style={{
            width: widthImg,
            height: type.height,
            aspectRatio: type.aspectRatio,
          }}
        />
      </div>
    );
  }

  if (type.name === "trailer")
    return <img src={data.poster} style={{ ...type }} />;

  if (type.name === "search")
    return <img src={data.poster} style={{ ...type }} />;

  return <img src={data.poster} style={{ ...type }} />;
}

export default Poster;

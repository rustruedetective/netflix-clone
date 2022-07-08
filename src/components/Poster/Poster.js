import React from "react";

import missing from "./resources/missing.png";

function Poster({ data, select, keyNumber, name, width, height, aspectRatio }) {
  if (name === "normal")
    return (
      <img
        src={data?.poster}
        style={{ width, height, aspectRatio }}
        onError={(e) => {
          e.target.src = missing;
        }}
        onClick={(_) => select(data)}
      />
    );

  // if (name === "numbered") {
  //   const widthImg = `${Number(width.split("px")[0]) / 2}px`;
  //   const heightNumber = `${Number(height.split("px")[0]) * 1.37}px`;

  //   return (
  //     <div
  //       className="numbered"
  //       style={{
  //         width: width,
  //         height: height,
  //         display: "grid",
  //         gridTemplateColumns: "1fr 1fr",
  //         gridTemplateRows: "1fr",
  //         gap: "0px 0px",
  //         gridTemplateAreas: ". .",
  //       }}
  //     >
  //       <div
  //         className="number"
  //         style={{
  //           height: height,
  //           overflow: "hidden",
  //         }}
  //       >
  //         <h1
  //           style={{
  //             position: "relative",
  //             left: "10%",
  //             lineHeight: "0.6",
  //             fontSize: heightNumber,
  //             color: "white",
  //             "-webkit-text-stroke": "5px black",
  //           }}
  //         >
  //           {keyNumber}
  //         </h1>
  //       </div>
  //       <img
  //         src={data.poster}
  //         style={{
  //           width: widthImg,
  //           height: height,
  //           aspectRatio: aspectRatio,
  //         }}
  //       />
  //     </div>
  //   );
  // }

  return (
    <img
      src={data?.poster}
      style={{ width, height, aspectRatio }}
      onError={(e) => {
        e.target.src = missing;
      }}
      onClick={(_) => select(data)}
    />
  );
}

export default Poster;

import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { SiNetflix } from "react-icons/si";

import "./styles/styles.css";

function Details({
  textAlign,
  width,
  fontSize,
  original,
  name,
  description,
  categories,
}) {
  let categoriesEl = [];
  categories?.map((el, ind) => {
    categoriesEl.push(" " + el + " ");
    categoriesEl.push(
      <GoPrimitiveDot
        style={{ verticalAlign: "middle", color: "grey" }}
        key={ind}
      />
    );
  });
  categoriesEl.pop();

  return (
    <div className="details" style={{ textAlign: textAlign, width: width }}>
      {original && (
        <div className="details-netflix-original">
          <SiNetflix className="netflix-icon" size={20} /> SERIES
        </div>
      )}
      <div className="details-title" style={{ fontSize: fontSize }}>
        <h1>{name}</h1>
      </div>
      <div className="detials-description">{description}</div>
      <div className="details-categories">{categoriesEl}</div>
    </div>
  );
}

export default Details;

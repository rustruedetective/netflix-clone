import React from "react";

import "./styles/styles.css";

function Categories({ categories }) {
  categories = ["action", "horror", "crime", "anime"];
  return (
    <div className="poster-slideshow">
      <div className="categories">
        {categories.map((el) => (
          <>
            <p className="category">{el}</p>
            <div className="selected">
              <div className="selected-marker"></div>
              <p className="selected-category">{el}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Categories;

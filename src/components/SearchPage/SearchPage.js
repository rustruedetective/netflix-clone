import React from "react";

import "./styles/styles.css";

function SearchPage({ categories }) {
  categories = ["horror", "action"];
  return (
    <div className="wrapper">
      <div className="inner-wrapper">
        <div class="container">
          <div class="search-bar">
            <div className="search-bar-inner">
              <input></input>
              {categories.map((el) => {
                return <p>{el}</p>;
              })}
            </div>
          </div>
          <div class="posters">
            <h1 className="top-searched">Top Searches</h1>
            <div className="posters-area"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;

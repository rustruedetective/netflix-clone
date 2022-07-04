import React, { useState, useRef, useEffect } from "react";

import "./styles/styles.css";

function SearchPage({ categories }) {
  const [scrolling, setScrolling] = useState(false);
  const ref = useRef(null);
  categories = ["horror", "action"];

  useEffect((_) => {
    // Here we didnt attach the listener to the component by getting its id
    // because the event listener has to be attached before or on mount
    // we cant control, so we must use useRef
    const postersArea = ref.current;

    const scrollHandler = (e) => {
      if (e.deltaY >= 100) setScrolling(true);
      else if (e.deltaY <= -100 && e.srcElement.scrollTop === 0)
        setScrolling(false);
    };

    postersArea.addEventListener("mousewheel", scrollHandler);

    return (_) => postersArea.removeEventListener("mousewheel", scrollHandler);
  }, []);

  return (
    <div className="container">
      <div className="search-bar">
        <div className="search-bar-inner">
          <input></input>
          {categories.map((el, ind) => {
            return <p key={ind}>{el}</p>;
          })}
        </div>
      </div>
      <div className={`posters ${scrolling ? "posters-active" : ""}`}>
        <h1 className="top-searched">Top Searches</h1>
        <div
          className={`posters-area ${scrolling ? "posters-area-active" : ""}`}
          ref={ref}
        ></div>
      </div>
    </div>
  );
}

export default SearchPage;

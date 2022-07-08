import React, { useState, useRef, useEffect } from "react";

import Poster from "../Poster/Poster";
import "./styles/styles.css";

function SearchPage({ data, suggested }) {
  const [scrolling, setScrolling] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const ref = useRef(null);
  suggested = [
    "spiderman",
    "the witcher",
    "friends",
    "doctor strange",
    "the godfather",
    "star wars",
    "rick and morty",
    "top gun",
  ];

  const handleSearch = async (query) => {
    const results = await data?.searchFunction?.(query);
    setResults(results);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSearch(e.target.query.value);
    e.target.query.value = "";
  };
  const handleChange = (e) => setQuery(e.target.value);

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

  useEffect(() => {
    setResults(data.row);
  }, [data]);

  return (
    <div className="container">
      <div className="search-bar">
        <div className="search-bar-inner">
          <form onSubmit={handleSubmit}>
            <input type="text" name="query" onChange={handleChange}></input>
          </form>
          {suggested.map((el, ind) => {
            return (
              <p
                className="suggested"
                key={ind}
                onClick={(e) => handleSearch(e.target.innerText)}
              >
                {el}
              </p>
            );
          })}
        </div>
      </div>
      <div className={`posters ${scrolling ? "posters-active" : ""}`}>
        <h1 className="top-searched">Top Searches</h1>
        <div
          className={`posters-area ${scrolling ? "posters-area-active" : ""}`}
          ref={ref}
        >
          {results?.map((el, ind) => (
            <div className="poster-wrapper" key={ind}>
              <Poster
                data={el}
                select={() => {}}
                keyNumber={0}
                name="normal"
                width="154.07px"
                height="231.48px"
                aspectRatio="auto 416 / 625"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;

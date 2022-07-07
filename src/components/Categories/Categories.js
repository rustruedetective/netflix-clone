import React, { useEffect, useState } from "react";

import Category from "./Category";
import Details from "../Details/Details";

import "./styles/styles.css";

function Categories({ data }) {
  const [genre, setGenre] = useState(0);
  const [item, setItem] = useState(0);
  let interval = null;

  // two helper functions to navigate the complex 2d array kind of data structure shit
  const getGenre = () => data?.genres?.[genre];
  const getItem = () => data?.genres?.[genre]?.row?.[item];

  const handleItem = (_) => {
    console.log(genre);
  };

  useEffect(() => {
    setGenre(0);
  }, [data]);

  useEffect(() => {
    interval = setInterval(handleItem, 2000);
    return () => clearInterval(interval); //note that the previous interval will clear before new is set
  }, [genre]);

  return (
    <div className="poster-slideshow">
      <div className="dark-clouds"></div>
      <div className="categories">
        <h4 className="heading">Your Top Categories</h4>
        {data?.genres?.map((el, ind) => {
          if (genre === ind)
            return (
              <Category
                name={el.name}
                active={true}
                key={ind}
                onClick={() => setGenre(ind)}
              />
            );
          else
            return (
              <Category
                name={el.name}
                active={false}
                key={ind}
                id={ind}
                onClick={() => setGenre(ind)}
              />
            );
        })}
      </div>
      <div className="category-details">
        <Details
          textAlign="right"
          width="500px"
          fontSize={"2vw"}
          original={true}
          name="Super Saiyan"
          categories={["Action", "Anime", "Super Powers"]}
        />
      </div>
    </div>
  );
}

export default Categories;

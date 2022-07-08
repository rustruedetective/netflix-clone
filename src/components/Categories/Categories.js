import React, { useEffect, useRef, useState } from "react";

import Category from "./Category";
import Details from "../Details/Details";
import SlideShow from "../SlideShow/SlideShow";

import "./styles/styles.css";

function Categories({ data }) {
  const [genre, setGenre] = useState(null);
  const [item, setItem] = useState({ index: 0 });
  const slideshowRef = useRef(null);

  const handleItemTransitions = (_) => {
    setItem(item === data?.genres?.[genre]?.row?.length - 1 ? 0 : item + 1);
  };

  useEffect(() => {
    setGenre(0);
  }, [data]);

  useEffect(() => {
    setItem(0);
  }, [genre]);

  useEffect(() => {
    const timer = setTimeout(handleItemTransitions, 5000);
    slideshowRef.current.className = `category-slideshow category-slideshow-move-${
      item % 2 === 0 ? "left" : "right"
    }`;

    return () => clearTimeout(timer); //note that the previous interval will clear before new is set
  }, [item]);

  return (
    <div className="category-poster">
      <div ref={slideshowRef}>
        <SlideShow wall={data?.genres?.[genre]?.row?.[item]?.wall} />
      </div>
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
          original={false}
          name={data?.genres?.[genre]?.row?.[item]?.name}
          categories={data?.genres?.[genre]?.row?.[item]?.genres}
        />
      </div>
    </div>
  );
}

export default Categories;

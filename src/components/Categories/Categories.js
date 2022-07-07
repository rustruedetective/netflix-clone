import React, { useEffect, useState } from "react";

import Category from "./Category";
import Details from "../Details/Details";

import "./styles/styles.css";

function Categories({ data }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [data]);

  return (
    <div className="poster-slideshow">
      <div className="dark-clouds"></div>
      <div className="categories">
        <h4 className="heading">Your Top Categories</h4>
        {data?.genres?.map((el, ind) => {
          if (active === ind)
            return <Category name={el.name} active={true} key={ind} />;
          else return <Category name={el.name} active={false} key={ind} />;
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

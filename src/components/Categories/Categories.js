import React from "react";

import Category from "./Category";
import Details from "../Details/Details";

import "./styles/styles.css";

function Categories({ data, categories }) {
  console.log(data);
  categories = [
    { name: "Action", active: false },
    { name: "Horror", active: false },
    { name: "Crime", active: true },
    { name: "Anime", active: false },
  ];

  return (
    <div className="poster-slideshow">
      <div className="dark-clouds"></div>
      <div className="categories">
        <h4 className="heading">Your Top Categories</h4>
        {categories.map((el, ind) => (
          <Category name={el.name} active={el.active} key={ind} />
        ))}
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

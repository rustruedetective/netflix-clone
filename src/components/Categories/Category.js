import React from "react";
import "./styles/CategoryStyles.css";

function Category({ name, active }) {
  return (
    <>
      {active ? (
        <div className="category">
          <div className="selected-marker"></div>
          <h2 className="selected-category">{name}</h2>
        </div>
      ) : (
        <h3 className="category">{name}</h3>
      )}
    </>
  );
}

export default Category;

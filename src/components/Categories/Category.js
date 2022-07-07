import React from "react";
import "./styles/CategoryStyles.css";

function Category({ name, active, onClick }) {
  return (
    <>
      {active ? (
        <div className="category" onClick={onClick}>
          <div className="selected-marker"></div>
          <h2 className="selected-category">{name}</h2>
        </div>
      ) : (
        <h3 className="category" onClick={onClick}>
          {name}
        </h3>
      )}
    </>
  );
}

export default Category;

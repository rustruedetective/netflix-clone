import React from "react";

function Poster({ name, posterSrc, size }) {
  return (
    <div style={{ height: `${size.y}vh`, width: `${size.x}vw` }}>{name}</div>
  );
}

export default Poster;

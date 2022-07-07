import React from "react";

import "./styles/styles.css"

function Trailer({ wall }) {
  return (
    <div
      className="wall"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0) 0%, 
            rgba(20,20,20,0.2) 25%,
            rgba(20,20,20,0.3) 35%,
            rgba(20,20,20,0.4) 45%,
            rgba(20,20,20,0.5) 55%,
            rgba(20,20,20,0.6) 65%,
            rgba(20,20,20,0.7) 75%,
            rgba(20,20,20,0.8) 80%,
            rgba(20,20,20,0.9) 85%,
            rgba(20,20,20,  1) 95%),
            url(${wall}`,
      }}
    ></div>
  );
}

export default Trailer;

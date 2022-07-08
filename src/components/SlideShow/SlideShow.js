import React from "react";

import "./styles/styles.css";

function SlideShow({ wall }) {
  return (
    <div
      className="slideshow"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0) 0%, 
            rgba(20,20,20,0.2) 15%,
            rgba(20,20,20,0.3) 20%,
            rgba(20,20,20,0.4) 30%,
            rgba(20,20,20,0.5) 40%,
            rgba(20,20,20,0.6) 50%,
            rgba(20,20,20,0.7) 60%,
            rgba(20,20,20,0.8) 65%,
            rgba(20,20,20,0.9) 70%,
            rgba(20,20,20,  1) 85%),
            url(${wall})`,
      }}
    ></div>
  );
}

export default SlideShow;

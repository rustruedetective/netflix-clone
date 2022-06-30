import React from "react";
import { useState, useEffect } from "react";

import "./styles/styles.css";

// there are two diff styles on this page
// first at the top, when we have the highlighted show
// second when we scroll down and get normal shows

function Home(props) {
  const [highlight, setHighlight] = useState("highlight");
  const [normal, setNormal] = useState(true);
  // since the styles depend if whether we are at the top or not
  // ive put them in a state instead

  window.addEventListener("mousewheel", (e) => {
    // This getElementById is still working, because this event is fired
    // when the component has already loaded, so we do dont get null error
    const el = document.getElementById("rows");

    if (e.deltaY >= 100) setHighlight("normal");
    else if (e.deltaY <= -100 && el.scrollTop === 0) setHighlight("highlight");
  });

  return (
    <div className="highlightpage">
      <div className={`description description-${highlight}`}></div>
      <div className={`trailer trailer-${highlight}`}></div>
      <div className={`rows rows-${highlight}`} id="rows"></div>
    </div>
  );
}

export default Home;

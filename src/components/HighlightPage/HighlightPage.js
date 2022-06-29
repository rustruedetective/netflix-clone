import React from "react";
import { useState, useEffect } from "react";

import "./styles/styles.css";

// there are two diff styles on this page
// first at the top, when we have the highlighted show
// second when we scroll down and get normal shows

function HighlightPage(props) {
  const [atTop, setAtTop] = useState("highlight");
  // since the styles depend if whether we are at the top or not
  // ive put them in a state instead

  window.addEventListener("scroll", (e) => {
    console.log("scrolled");
  });

  return (
    <div className="highlightpage">
      <div className={`description description-${atTop}`}></div>
      <div className={`trailer trailer-${atTop}`}></div>
      <div className={`rows rows-${atTop}`}>
        <button
          onClick={() => {
            if (atTop === "highlight") setAtTop("normal");
            else if (atTop === "normal") setAtTop("highlight");
          }}
        >
          click
        </button>
      </div>
    </div>
  );
}

export default HighlightPage;

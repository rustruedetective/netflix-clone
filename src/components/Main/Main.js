import React from "react";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

import Details from "../Details/Details";
import "./styles/styles.css";

// there are two diff styles on this page
// first at the top, when we have the highlighted show
// second when we scroll down and get normal shows

function Main({ data }) {
  console.log(data);
  const [highlight, setHighlight] = useState("highlight");
  // since the styles depend if whether we are at the top or not
  // ive put them in a state instead

  useEffect(() => {
    const scrollHandler = (e) => {
      // This getElementById is still working, because this event is fired
      // when the component has already loaded, so we do dont get null error
      const el = document.getElementById("rows");

      if (e.deltaY >= 100) setHighlight("normal");
      else if (e.deltaY <= -100 && el.scrollTop === 0)
        setHighlight("highlight");
    };

    window.addEventListener("mousewheel", scrollHandler);
    return () => window.removeEventListener("mousewheel", scrollHandler);
  }, []);

  return (
    <div className="highlightpage">
      <div className={`description description-${highlight}`}>
        <div className={`description-details description-details-${highlight}`}>
          <Details
            textAlign="left"
            width="700px"
            fontSize={"2vw"}
            original={true}
            name="Super Saiyan"
            description={
              "A story about a fight that never occured. But nerds made it happen anyway!"
            }
            categories={["Action", "Anime", "Super Powers"]}
          />
        </div>
      </div>
      <div className={`trailer trailer-${highlight}`}>
        <div className={`trailer-details trailer-details-${highlight}`}>
          {/* {data} */}

          <Details
            textAlign="left"
            width="500px"
            fontSize={"2vw"}
            original={true}
            name="Super Saiyan"
            description={
              "A story about a fight that never occured. But nerds made it happen anyway!"
            }
            categories={["Action", "Anime", "Super Powers"]}
          />
          <button className="trailer-button">
            <span>
              <FaPlay className="play-icon" />
            </span>
            Play
          </button>
          <button className="trailer-button">More Info</button>
        </div>
      </div>
      <div className={`rows rows-${highlight}`} id="rows"></div>
    </div>
  );
}

export default Main;

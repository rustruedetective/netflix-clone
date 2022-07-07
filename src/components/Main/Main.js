import React from "react";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

import Details from "../Details/Details";
import Trailer from "../Trailer/Trailer";
import Row from "../Row/Row";
import "./styles/styles.css";

// there are two diff styles on this page
// first at the top, when we have the highlighted show
// second when we scroll down and get normal shows

function Main({ data }) {
  const [highlight, setHighlight] = useState("highlight");
  const [selected, setSelected] = useState(data?.highlight?.item);
  // since the styles depend if whether we are at the top or not
  // ive put them in a state instead

  const scrollHandler = (e) => {
    // This getElementById is still working, because this event is fired
    // when the component has already loaded, so we do dont get null error
    const el = document.getElementById("rows");

    if (e.deltaY >= 100) setHighlight("normal");
    else if (e.deltaY <= -100 && el.scrollTop === 0) {
      // set highlight item when we scroll to top
      setSelected(data?.highlight?.item);
      setHighlight("highlight");
    }
  };
  const selectHandler = (data) => {
    setSelected(data);
    setHighlight("normal");
  };

  useEffect(() => {
    // set highlight item on page load
    setSelected(data?.highlight?.item);
    window.addEventListener("mousewheel", scrollHandler);
    return () => window.removeEventListener("mousewheel", scrollHandler);
  }, [data]);

  return (
    <div className="highlightpage">
      <div className={`description description-${highlight}`}>
        <div className={`description-details description-details-${highlight}`}>
          <Details
            textAlign="left"
            width="700px"
            fontSize={"2vw"}
            original={true}
            name={selected?.name}
            description={selected?.description}
            categories={selected?.genres}
          />
        </div>
      </div>

      <div className={`trailer trailer-${highlight}`}>
        <Trailer wall={selected?.wall} />
        <div className={`main-trailer-details main-trailer-details-${highlight}`}>
          <Details
            textAlign="left"
            width="500px"
            fontSize={"2vw"}
            original={true}
            name={selected?.name}
            description={selected?.description}
            categories={selected?.genres}
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

      <div className={`rows rows-${highlight}`} id="rows">
        {data?.rowMatrix?.map((el, ind) => {
          return (
            <Row
              name={el.name}
              type="normal"
              rowArray={el.row}
              key={ind}
              select={selectHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;

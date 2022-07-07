import React from "react";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

import Details from "../Details/Details";
import Row from "../Row/Row";
import "./styles/styles.css";

// there are two diff styles on this page
// first at the top, when we have the highlighted show
// second when we scroll down and get normal shows

function Main({ data }) {
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
            name={data?.highlight?.item?.name}
            description={data?.highlight?.item?.description}
            categories={data?.highlight?.item?.genres}
          />
        </div>
      </div>

      <div className={`trailer trailer-${highlight}`}>
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
            url(${data?.highlight?.item?.wall}`,
          }}
        ></div>
        <div className={`trailer-details trailer-details-${highlight}`}>
          <Details
            textAlign="left"
            width="500px"
            fontSize={"2vw"}
            original={true}
            name={data?.highlight?.item?.name}
            description={data?.highlight?.item?.description}
            categories={data?.highlight?.item?.genres}
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
            <Row name={el.name} type="normal" rowArray={el.row} key={ind} />
          );
        })}
      </div>
    </div>
  );
}

export default Main;

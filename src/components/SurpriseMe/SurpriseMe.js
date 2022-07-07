import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";

import Trailer from "../Trailer/Trailer";
import "./styles/styles.css";

function SurpriseMe({ data }) {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  console.log(data?.row?.[index]);

  const incWall = (_) => {
    if (index < data?.row?.length - 1) setIndex(index + 1);
  };
  const decWall = (_) => {
    if (index > 0) setIndex(index - 1);
  };

  useEffect((_) => {
    let transition1 = null;
    let transition2 = null;
    let transition3 = null;

    const handler = () => {};

    transition1 = setTimeout(handler, 2000);
    return (_) => clearTimeout(transition1);
  }, []);

  return (
    <div className="surprise">
      <div className="colorWrapper">
        <div className="colorBlack">
          <div
            className="colorBlack-a"
            style={{ background: index === 0 ? "transparent" : "black" }}
          ></div>
          <div
            className="colorBlack-b"
            style={{
              background:
                index === data?.row?.length - 1 ? "transparent" : "black",
            }}
          ></div>
        </div>
        <div className="surprise-trailer">
          <Trailer wall={data?.row?.[index]?.wall} />
          <div className="trailer-content">
            <div className="exit-hover-wrapper">
              <div className="exit">
                <Link to="/home">
                  <MdKeyboardArrowUp
                    className="exit-icon"
                    size={20}
                    viewBox={"2 2 20 20"}
                  />
                  <span className="exit-text">Exit</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {index === 0 ? (
          ""
        ) : (
          <div className="surprise-interactible-left">
            <span className="icon-span" onClick={decWall}>
              <BsChevronLeft className="l-icon" />
            </span>
          </div>
        )}

        {index === data?.row?.length - 1 ? (
          ""
        ) : (
          <div className="surprise-interactible-right">
            <span className="icon-span" onClick={incWall}>
              <BsChevronRight className="r-icon" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default SurpriseMe;

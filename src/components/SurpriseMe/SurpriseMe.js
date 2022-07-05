import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";

import "./styles/styles.css";

function SurpriseMe({ data }) {
  console.log(data);
  const ref = useRef(null);

  useEffect((_) => {
    let transition1 = null;
    let transition2 = null;
    let transition3 = null;

    const handler = () => {
      console.log(1);
    };

    transition1 = setTimeout(handler, 2000);

    return (_) => clearTimeout(transition1);
  }, []);

  return (
    <div className="surprise">
      <div className="colorWrapper">
        <div className="colorBlack"></div>
        <div className="surprise-trailer">
          <div className="trailer-content">
            <div className="exit-hover-wrapper">
              <div className="exit">
                <Link to="/home">
                  <MdKeyboardArrowUp
                    className="exit-icon"
                    size={20}
                    viewBox={"2 2 20 20"}
                  />{" "}
                  <span className="exit-text">Exit</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="surprise-interactible-left">
          <span className="icon-span">
            <BsChevronLeft className="l-icon" />
          </span>
          <span className="left"></span>
        </div>

        <div className="surprise-interactible-right">
          <span className="right"></span>
          <span className="icon-span">
            <BsChevronRight className="r-icon" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SurpriseMe;

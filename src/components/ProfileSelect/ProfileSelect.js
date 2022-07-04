import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiArrowShuffle } from "react-icons/ti";
import { RiPencilFill } from "react-icons/ri";

import ProfileBox from "../ProfileBox/ProfileBox";
import "./styles/styles.css";

function ProfileSelect() {
  const accNames = ["Abbas", "Muhammad", "Hussain", "Ali", "Extra"];
  const colors = [
    { top: "#0970e4", bottom: "#4f97ec" },
    { top: "#e5b209", bottom: "#ecc74e" },
    { top: "#e40914", bottom: "#ec5058" },
    { top: "#073c4d", bottom: "#4e737f" },
    { top: "#2abb75", bottom: "#65cf9b" },
  ];
  const profiles = accNames.map((el, ind) => (
    <ProfileBox name={el} {...colors[ind]} key={ind} />
  ));

  return (
    <div className="homepage">
      <div className="heading">
        <h1>Who's watching Netflix?</h1>
      </div>
      <div className="profiles">{profiles}</div>
      <div className="buttons">
        <div className="buttons-area">
          <div className="buttons-area2">
            <button>
              <Link to="/surpriseme" className="surprise-link">
                <TiArrowShuffle
                  size={25}
                  viewBox={"2 2 20 20"}
                  className="surprise-link-icon"
                />
                {/* Icon Color */}
                <svg width="0" height="0">
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="blue" />
                    <stop offset="40%" stopColor="grey" />
                    <stop offset="50%" stopColor="grey" />
                    <stop offset="60%" stopColor="grey" />
                    <stop offset="100%" stopColor="red" />
                  </linearGradient>
                </svg>
                {/* Icon Color */}
                <span>Surprise Me</span>
              </Link>
            </button>
            <div className="profile-icon-wrapper">
              <span className="profile-icon-wrapper2">
                <RiPencilFill
                  className="profile-icon"
                  size={35}
                  viewBox={"-3 -3 30 30"}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSelect;

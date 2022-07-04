import React from "react";
import { Link } from "react-router-dom";
import "./styles/styles.css";
import smiley from "./resources/smiley-transparent.png";

function ProfileBox({ name, top, bottom }) {
  return (
    <div className="profile">
      <Link to="/home">
        <div
          className="box"
          style={{
            background: `linear-gradient(to bottom, ${top}, ${bottom} 60%)`,
          }}
        >
          <img src={smiley} style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </div>
        <p className="text">{name}</p>
      </Link>
    </div>
  );
}

export default ProfileBox;

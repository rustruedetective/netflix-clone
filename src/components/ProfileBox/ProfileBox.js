import React from "react";
import { Link } from "react-router-dom";
import "./styles/styles.css";

function ProfileBox({ name }) {
  return (
    <div className="profile">
      <Link to="/home">
        <div className="box"></div>
        <p>{name}</p>
      </Link>
    </div>
  );
}

export default ProfileBox;

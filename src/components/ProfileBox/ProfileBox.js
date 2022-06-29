import React from "react";
import "./styles/styles.css";

function ProfileBox({ name }) {
  return (
    <div className="profile">
      <div className="box"></div>
      <p>{name}</p>
    </div>
  );
}

export default ProfileBox;

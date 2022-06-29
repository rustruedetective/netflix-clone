import React from "react";

import ProfileBox from "../ProfileBox/ProfileBox";
import "./styles/styles.css";

function ProfileSelect() {
  const accNames = ["Abbas", "Muhammad", "Hussain", "Ali", "Extra"];
  const profiles = accNames.map((el) => <ProfileBox name={el} />);
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
              <span></span>Surprise Me
            </button>
            <div>
              <span>icon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSelect;

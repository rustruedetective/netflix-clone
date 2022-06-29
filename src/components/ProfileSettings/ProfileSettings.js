import React from "react";

import ProfileBox from "../ProfileBox/ProfileBox";
import "./styles/styles.css";

function ProfileSettings({ profile }) {
  return (
    <div className="profilesettings">
      <div className="settings">
        <div className="settings-area">
          <div className="settings-heading">
            <h1>Edit Profile</h1>
            <p>Select what you want to change</p>
          </div>
          <div className="settings-buttons">
            <p>
              <button>Name</button>
            </p>
            <p>
              <button>Icon</button>
            </p>
            <p>
              <button>Language</button>
            </p>
          </div>
          <div className="settings-maturity">
            <p>ALL MATURITY RATINGS</p>
            <h2>Show titles of all maturity ratings for this profile.</h2>
            <p>Visit netflix.com/YourAccount to change viewing restrictions.</p>
          </div>
          <div className="settings-save">
            <p>
              <button>Done</button>
            </p>
            <p>
              <button>Delete Profile</button>
            </p>
          </div>
        </div>
      </div>

      <div className="profile">
        <ProfileBox name={profile.name} />
        <p>English</p>
      </div>
    </div>
  );
}

export default ProfileSettings;

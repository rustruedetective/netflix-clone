import React from "react";
import { Link } from "react-router-dom";

import "./styles/styles.css";

function SurpriseMe() {
  return (
    <div className="surpriseme">
      <div className="surpriseme-trailer">
        <div className="trailer-content">
          <div className="exit">
            <Link to="/home">^ exit</Link>
          </div>
        </div>
      </div>
      <div className="surpriseme-interactible-left">
        a<span className="left">Additional content</span>
      </div>
      <div className="surpriseme-interactible-right">
        <span className="right">Additional content</span>b
      </div>
    </div>
  );
}

export default SurpriseMe;

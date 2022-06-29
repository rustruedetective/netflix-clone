import React, { useState } from "react";
import { BsHouseDoorFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FaShapes } from "react-icons/fa";
import { TbArrowsShuffle2 } from "react-icons/tb";

import MenuItem from "./MenuItem";
import "./styles/styles.css";

function Menu() {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className={`menu ${menu ? "menu-active" : ""}`}
      onMouseEnter={(_) => setMenu(true)}
      onMouseLeave={(_) => setMenu(false)}
    >
      <div className="profile">
        <div className="profile-content"></div>
      </div>
      <div className="navigation">
        <ul className="navigation-list">
          <li>
            <MenuItem title="Search" href="#">
              <BiSearch className="icon" />
            </MenuItem>
          </li>
          <li>
            <MenuItem title="Home" href="#">
              <BsHouseDoorFill className="icon" />
            </MenuItem>
          </li>
          <li>
            <MenuItem title="Surprise Me" href="#">
              <TbArrowsShuffle2 className="icon" />
            </MenuItem>
          </li>
          <li>
            <MenuItem title="Categories" href="#">
              <FaShapes className="icon" />
            </MenuItem>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;

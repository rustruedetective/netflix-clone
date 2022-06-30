import React, { useState } from "react";
import { BsHouseDoorFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FaShapes } from "react-icons/fa";
import { TbArrowsShuffle2 } from "react-icons/tb";
import { BiCopyright } from "react-icons/bi";

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
            <MenuItem title="Search" href="/search">
              <BiSearch className="icon" />
            </MenuItem>
          </li>
          <li>
            <MenuItem title="Home" href="/home">
              <BsHouseDoorFill className="icon" />
            </MenuItem>
          </li>
          <li>
            <MenuItem title="Surprise Me" href="/surpriseme">
              <TbArrowsShuffle2 className="icon" />
            </MenuItem>
          </li>
          <li>
            <MenuItem title="Categories" href="/categories">
              <FaShapes className="icon" />
            </MenuItem>
          </li>
          <li>
            <MenuItem title="Source" href="/source">
              <BiCopyright className="icon" />
            </MenuItem>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;

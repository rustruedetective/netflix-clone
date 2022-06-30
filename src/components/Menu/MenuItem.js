import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/MenuItemStyles.css";

function MenuItem({ children, title, href }) {
  const [active, setActive] = useState(false);

  return (
    <Link
      to={href}
      onMouseEnter={(_) => setActive(true)}
      onMouseLeave={(_) => setActive(false)}
    >
      {children}
      <span className={`title ${active ? "title-active" : ""}`}>{title}</span>
    </Link>
  );
}

export default MenuItem;

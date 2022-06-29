import React, { useState } from "react";

import "./styles/MenuItemStyles.css";

function MenuItem({ children, title, href }) {
  const [active, setActive] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={(_) => setActive(true)}
      onMouseLeave={(_) => setActive(false)}
    >
      {children}
      <span className={`title ${active ? "title-active" : ""}`}>{title}</span>
    </a>
  );
}

export default MenuItem;

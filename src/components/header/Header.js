import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

function Header(props) {
  return (
    <header className="header">
      <h1 className="site-title">Iris</h1>
      <button className="nav-trigger">
        <span className="nav-abstract line-one"></span>
        <span className="nav-abstract line-two"></span>
        <span className="nav-abstract line-three"></span>
      </button>
    </header>
  );
}

export default Header;

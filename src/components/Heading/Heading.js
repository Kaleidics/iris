import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./heading.css";

import MobileNav from "../MobileNav/MobileNav";

function Header(props) {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className="header">
      <h1 className="site-title">Iris</h1>
      <button
        type="button"
        className="nav-trigger"
        onClick={() => setMobileNav(!mobileNav)}
      >
        <span className="nav-abstract line-one"></span>
        <span className="nav-abstract line-two"></span>
        <span className="nav-abstract line-three"></span>
      </button>
      {mobileNav && <MobileNav />}
    </header>
  );
}
export default Header;

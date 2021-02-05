import React from "react";
import { Link } from "react-router-dom";

import "./mobileNav.css";

function MobileNav() {
  return (
    <nav className="mobile-nav">
      <Link className="mobile-nav-link" to="/fashion">
        Fashion
      </Link>
      <Link className="mobile-nav-link" to="/fashion">
        Fashion
      </Link>
      <Link className="mobile-nav-link" to="/fashion">
        Fashion
      </Link>
      <Link className="mobile-nav-link" to="/fashion">
        Fashion
      </Link>
      <Link className="mobile-nav-link" to="/fashion">
        Fashion
      </Link>
      <Link className="mobile-nav-link" to="/fashion">
        Fashion
      </Link>
      <Link className="mobile-nav-link" to="/fashion">
        Fashion
      </Link>
    </nav>
  );
}

export default MobileNav;

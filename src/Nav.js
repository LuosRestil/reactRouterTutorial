import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/" className="nav-link">
        <h3 className="logo">Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/about" className="nav-link">
          <li>About</li>
        </Link>
        <Link to="/films" className="nav-link">
          <li>Films</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

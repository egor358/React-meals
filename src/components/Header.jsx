import React from "react";
import "./header.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="kitchen-header">
      <Link to="/random">Random</Link>
      <div className="content">
        <h1>Restaurant</h1>
        <div className="button">
          <button>Menu</button>
        </div>
        <div className="happy">
          <h2>HappyWorldLand </h2>
          <h3>We are tasty and cozy</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;

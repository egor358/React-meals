import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="kitchen-header">
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

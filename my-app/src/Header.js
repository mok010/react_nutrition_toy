import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="headers">
      <div className="logo-container">
        <h1 className="logo">
          <Link to="/">BloodVita</Link>
        </h1>
      </div>
      <div className="basket-container">
        <button className="basket">Basket (3)</button>
      </div>
    </div>
  );
}

export default Header;

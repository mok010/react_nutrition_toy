import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <div className="navbar">
        <Link className="navbarMenu" to="/Shop">
          Shop
        </Link>
        <Link className="navbarMenu" to="/Bloodtest">
          Blood Test
        </Link>
        <Link className="navbarMenu" to="/WhoWeAre">
          Who We Are
        </Link>
        <Link className="navbarMenu" to="/Profile">
          My Profile
        </Link>
      </div>
    </div>
  );
}

export default Nav;

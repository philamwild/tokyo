import React from "react";
import "./style/Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar">
      <div>
        <ul className="items-navbar">
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/activities">
            Activities
          </NavLink>
          <NavLink activeClassName="active" to="/eatanddrink">
            Eat&Drink
          </NavLink>
          <NavLink activeClassName="active" to="/wtf">
            WTF
          </NavLink>
        </ul>
      </div>

      <div class="image">
        <NavLink to="/">
          <img class="icon" src="Images/icon-tokyo-crop.png" alt="logo" />
        </NavLink>
      </div>

      <div class="input">
        <input type="text" placeholder="Rechercher" />
      </div>
    </nav>
  );
}

export default Navbar;

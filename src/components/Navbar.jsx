import React from "react";
import "./style/Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar">
      <div>
        <ul className="items-navbar">
          <NavLink activeClassName="active" to="/visites">
            Visites
          </NavLink>
          <NavLink activeClassName="active" to="/temples">
            Temples
          </NavLink>
          <NavLink activeClassName="active" to="/jardins">
            Jardins
          </NavLink>
          <NavLink activeClassName="active" to="/audela">
            Au delà de Tokyo
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

import React from "react";
import "./style/Footer.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="left-container">
          <h1>Tokyo Square</h1>
          <div className="link-list">
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
          </div>
        </div>
        <div className="right-container">
          <p>Contactez nous</p>
          <div className="form">
            <input type="text" placeholder="Email" name="email" />
            <textarea name="message" placeholder="Message"></textarea>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./style/Footer.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-line">
        <div className="footer-list">
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
        <div className="footer-icon">
          <img src="Images/facebook_square.svg" alt="facebook" />
          <img src="Images/insta-square.svg" alt="instagram" />
          <img src="Images/twitter_square.svg" alt="twitter" />
          <img src="Images/youtube_square.svg" alt="youtube" />
        </div>
      </div>

      <div className="separation-bar"></div>
    </footer>
  );
}

export default Footer;

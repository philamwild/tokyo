import React from "react";
import "./style/Footer.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-line">
        <div className="footer-list">
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
            Wtf
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

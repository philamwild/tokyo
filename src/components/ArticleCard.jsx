import React from "react";
import "./style/ArticleCard.scss";
import { NavLink } from "react-router-dom";

function ArticleCard({ dest, image, title, lorum }) {
  return (
    <div class="articlecard">
      <NavLink className="article-title" activeClassName="active" to={dest}>
        <div class="article-photo">
          <img src={image} alt="{tokyo}"></img>
        </div>
        <div class="article-text">
          <h3>{title}</h3>

          <p>{lorum}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default ArticleCard;

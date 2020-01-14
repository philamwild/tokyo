import React from "react";
import "./style/ArticleCard.scss";
import { NavLink } from "react-router-dom";

function ArticleCard(props) {
  return (
    <div class="articlecard">
      <NavLink
        className="article-title"
        activeClassName="active"
        to={props.dest}
      >
        <div class="article-photo">
          <img src={props.image} alt="{tokyo}"></img>
        </div>

        <div class="article-text">
          <h3>{props.title}</h3>

          <p>{props.lorum}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default ArticleCard;

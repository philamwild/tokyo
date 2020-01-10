import React from "react";
import "./style/ArticleCard.scss";

function ArticleCard(props) {
  return (
    <div class="articlecard">
      <div class="article-photo">
        <img src={props.image} alt="{tokyo}"></img>
      </div>

      <div class="article-text">
        <a class="article-title" href="#">
          {props.title}
        </a>
        <p>{props.lorum}</p>
        <button class="article-button">See more</button>
      </div>
    </div>
  );
}

export default ArticleCard;

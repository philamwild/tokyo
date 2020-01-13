import React from "react";
import ArticleCard from "./ArticleCard";
import "./style/ArticleList.scss";
import VideoBg from "./VideoBg";

function ArticleList() {
  return (
    <div className="article-list">
      <VideoBg />
      <div className="article-square">
        {article.map(item => (
          <ArticleCard
            image={item.image}
            title={item.title}
            lorum={item.lorum}
          />
        ))}
      </div>
    </div>
  );
}

const article = [
  {
    image: "./Images/visit.jpg",
    title: "VISIT",
    lorum: "Discover the best secret place only knew by Tokyoiste people "
  },
  {
    image: "./Images/activities.jpg",
    title: "ACTIVITIES",
    lorum: "Do what is only existing in Tokyo!"
  },
  {
    image: "Images/eatanddrink.jpg",
    title: "EAT&DRINK",
    lorum: "The most liked place by local people"
  },
  {
    image: "Images/wtf.jpg",
    title: "WTF",
    lorum: "Japan reserve unique and crazy experience"
  }
];

export default ArticleList;

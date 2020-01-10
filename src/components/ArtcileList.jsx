import React from "react";
import ArticleCard from "./ArticleCard";
import VideoBg from "./VideoBg";

function ArticleList() {
  return (
    <div>
      <VideoBg />
      {article.map(item => (
        <ArticleCard image={item.image} title={item.title} lorum={item.lorum} />
      ))}
    </div>
  );
}

const article = [
  {
    image: "./Images/tokyo-article-place.jpg",
    title: "VISIT",
    lorum: "Discover the best secret place only knew by Tokyoiste people "
  },
  {
    image: "./Images/tokyo-article-place.jpg",
    title: "ACTIVITIES",
    lorum: "Do what is only existing in Tokyo!"
  },
  {
    image: "Images/tokyo-article-bento.jpg",
    title: "EAT&DRINK",
    lorum: "The most liked place by local people"
  },
  {
    image: "Images/tokyo-article-game.jpg",
    title: "WTF",
    lorum: "Japan reserve unique and crazy experience"
  }
];

export default ArticleList;

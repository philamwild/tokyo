import React from "react";
import ArticleCard from "./ArticleCard";
import "./style/ArticleList.scss";
import VideoBg from "./VideoBg";

function ArticleList() {
  return (
    <div className="home-content">
      <VideoBg />
      <div className="article-square">
        {square.map(item => (
          <ArticleCard
            image={item.image}
            title={item.title}
            dest={item.route}
          />
        ))}
      </div>
    </div>
  );
}

const square = [
  {
    image: "./Images/visit.jpg",
    title: "VISIT",
    route: "/visit",
    lorum: "Discover the best secret place only knew by Tokyoiste people "
  },
  {
    image: "./Images/activities.jpg",
    title: "ACTIVITIES",
    route: "/activities",
    lorum: "Do what is only existing in Tokyo!"
  },
  {
    image: "Images/eatanddrink.jpg",
    title: "EAT&DRINK",
    route: "/eatanddrink",
    lorum: "The most liked place by local people"
  },
  {
    image: "Images/wtf.jpg",
    title: "WTF",
    route: "/wtf",
    lorum: "Japan reserve unique and crazy experience"
  }
];

export default ArticleList;

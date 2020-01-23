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
    title: "visites",
    route: "/visites",
    lorum: "Discover the best secret place only knew by Tokyoiste people "
  },
  {
    image: "./Images/activities.jpg",
    title: "activités",
    route: "/temples",
    lorum: "Do what is only existing in Tokyo!"
  },
  {
    image: "Images/eatanddrink.jpg",
    title: "jardins",
    route: "/jardins",
    lorum: "The most liked place by local people"
  },
  {
    image: "Images/wtf.jpg",
    title: "au delà",
    route: "/audela",
    lorum: "Japan reserve unique and crazy experience"
  }
];

export default ArticleList;

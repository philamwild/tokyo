import React from "react";
import ArticleCard from "../components/ArticleCard";
import "./style/Visites.scss";

const visits = [
  {
    image:
      "https://hell0tokyo.files.wordpress.com/2017/05/dp3m7764.jpg?w=605&h=485&crop=1",
    title: "Quartier de Shimokitazawa"
  },
  {
    image:
      "https://hell0tokyo.files.wordpress.com/2017/02/dp3m6867.jpg?w=605&h=485&crop=1",
    title: "Quartier de Yanaka"
  },
  {
    image:
      "https://hell0tokyo.files.wordpress.com/2017/01/20150707_221742-copie.jpg?w=605&h=485&crop=1",
    title: "La maison de Kye Asakura"
  },
  {
    image:
      "https://hell0tokyo.files.wordpress.com/2016/12/dp3m5709-copie.jpg?w=605&h=485&crop=1",
    title: "Tokyo City View"
  }
];

function Visites() {
  return (
    <div className="visites-container">
      <h2>Les incontournables de Tokyo</h2>
      <div className="article-square">
        {visits.map(item => (
          <ArticleCard
            image={item.image}
            title={item.title}
            dest="/"
            lorum="toto"
          />
        ))}
      </div>
    </div>
  );
}

export default Visites;

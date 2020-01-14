import React from "react";
import ArticleCard from "../components/ArticleCard";
import "./style/Visit.scss";

function Visit() {
  return (
    <div className="visit-container">
      <img
        src="https://hell0tokyo.files.wordpress.com/2016/12/dp3m5695.jpg?w=1200&h=635&crop=1"
        alt="tokyo landscape"
      />
      <h2>Les incontournables de Tokyo</h2>
    </div>
  );
}

export default Visit;

const visit = [
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

import React from "react";
import "./style/VideoBg.scss";

function VideoBg() {
  return (
    <div className="video-bg">
      <video autoPlay muted loop>
        <source src="Video/tokyo-crossing.mp4" />
      </video>
      <h1>TOKYO SQUARE</h1>
    </div>
  );
}

export default VideoBg;

import React from "react";
import "./style/VideoBg.scss";

function VideoBg() {
  return (
    <div className="video-bg">
      <video autoPlay muted loop>
        <source src="Video/tokyo-crossing.mp4" />
      </video>
    </div>
  );
}

export default VideoBg;

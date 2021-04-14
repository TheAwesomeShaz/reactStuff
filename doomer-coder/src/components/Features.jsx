import React from "react";
import featureimage from "../images/Frame 19.png";
function Features() {
  return (
    <div id="features">
      <div className="features-model">
        <img src={featureimage} alt="features image" />
      </div>
      <div className="features-text">
        <h2>Features</h2>
        <h3>
          Some <span>TECH</span> images from unsplash so it seems I know
          something about UI UX.
        </h3>
        <p>
          Now I will use lorem text to assert dominance Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Enim perspiciatis adipisci odit
          cupiditate rerum soluta cum neque, dignissimos iste provident repellat
          consectetur omnis illum? Recusandae sed iure nisi illo blanditiis
          laborum fugiat, modi, accusamus, earum veniam autem eaque sit vero.
        </p>
        <button>View More Features</button>
      </div>
    </div>
  );
}

export default Features;

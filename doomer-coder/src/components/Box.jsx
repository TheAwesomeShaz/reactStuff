import React from "react";

function Box(props) {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={props.image} alt={props.alte} />
      </div>
      <div className="s-b-text">
        <p>
          more lorem to emphasise that I do not have time to write stuff
          paragraphs in my life Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <a href="#" className="cv-btn">
          {props.button}
        </a>
      </div>
    </div>
  );
}

export default Box;

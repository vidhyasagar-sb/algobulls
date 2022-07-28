import React from "react";
import "./multiColorProgressBar.scss";

const MultiColorProgressBar = (props) => {
  return (
    <div className="multiColorProgressBar">
      <span
        style={{ width: props.width1 + "%" }}
        className="progressFirst"
      ></span>
      <span
        style={{ width: props.width2 + "%" }}
        className="progressSecond"
      ></span>
      <span
        style={{ width: props.width3 + "%" }}
        className="progressThird"
      ></span>
      <span style={{ width: props.width4 + "%" }} className="progressFourth">
        92%
      </span>
    </div>
  );
};

export default MultiColorProgressBar;

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { RingProgress } from "@ant-design/plots";

const DemoRingProgress = (props) => {
  const percent = parseFloat(props.percent);
  console.log("percent", percent);
  const name = props.name;
  const config = {
    height: 125,
    width: 125,
    autoFit: false,
    color: ["#B8E0DB", "#FFC2C2"],
    innerRadius: 0.85,
    percent: percent,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: "#999999",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "18px",
        },
        formatter: () => name,
      },
    },
  };
  return <RingProgress {...config} />;
};

export default DemoRingProgress;
// ReactDOM.render(<DemoRingProgress />, document.getElementById("container"));

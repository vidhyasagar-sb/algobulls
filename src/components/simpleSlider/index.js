import React from "react";

import "antd/dist/antd.css";
import { Slider } from "antd";

const SimpleSlider = () => {
  return (
    <>
      <Slider
        defaultValue={250000}
        min={0}
        max={500000}
        style={{
          width: "103px",
          marginLeft: "0px",
          marginRight: "0px",
          paddingTop: "0px",
        }}
      />
    </>
  );
};

export default SimpleSlider;

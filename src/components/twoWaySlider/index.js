import React from "react";
import "antd/dist/antd.css";
import { Slider } from "antd";

const TwoWaySlider = () => {
  return (
    <>
      <Slider
        min={200000}
        max={500000}
        range
        defaultValue={[215000, 400000]}
        style={{
          width: "206px",
        }}
      />
    </>
  );
};

export default TwoWaySlider;

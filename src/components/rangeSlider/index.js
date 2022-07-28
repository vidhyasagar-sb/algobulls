import React, { useState } from "react";
import "antd/dist/antd.css";
import { Col, InputNumber, Row, Slider } from "antd";

const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(500000);

  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <Row>
      <Col span={17}>
        <Slider
          min={1}
          max={600000}
          onChange={onChange}
          value={typeof inputValue === "number" ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={600000}
          style={{
            fontSize: "15px",
            margin: "0 16px",
            color: "3d3d3d",
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

const RangeSlider = () => (
  <div>
    <IntegerStep />
  </div>
);

export default RangeSlider;

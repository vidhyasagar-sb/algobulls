import { Select } from "antd";
import "antd/dist/antd.css";
import React from "react";
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Dropdown = (props) => (
  <>
    <Select
      defaultValue={props.defaultValue}
      style={{
        fontSize: 12,
        color: "#666666",
        width: props.width,
        height: 36,
      }}
      onChange={handleChange}
    >
      {props.option.map((value, index) => {
        return <Option key={index}>{value}</Option>;
      })}
    </Select>
  </>
);

export default Dropdown;

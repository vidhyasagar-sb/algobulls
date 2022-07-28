import React from "react";
import "./main.scss";
import "../portfolio";
import Portfolio from "../portfolio";
import Performance from "../performance";
import Calculator from "../calculator";
import Analysis from "../analysis";
import Details from "../details";

const Main = () => {
  return (
    <div className="main">
      <div className="portfolioComponent">
        <Portfolio />
      </div>
      <div className="performanceAndCalculator">
        <div className="performanceComponent">
          <Performance />
        </div>
        <div className="calculatorComponent">
          <Calculator />
        </div>
      </div>
      <div className="analysisComponent">
        <Analysis />
      </div>
      <div className="strategyDetailsComponent">
        <div className="detailsBar">Details</div>
        <Details />
      </div>
    </div>
  );
};

export default Main;

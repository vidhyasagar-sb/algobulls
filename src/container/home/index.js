import React from "react";
import "./home.scss";
import Portfolio from "../../components/portfolio";
import Performance from "../../components/performance";
import Calculator from "../../components/calculator";
import Analysis from "../../components/analysis";
import Details from "../../components/details";

const Home = () => {
  return (
    <div className="home">
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

export default Home;

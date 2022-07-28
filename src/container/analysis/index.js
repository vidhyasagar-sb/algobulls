import React from "react";
import "./analysis.scss";
import MultiColorProgressBar from "../../components/multiColorProgressBar";

import chartToggle from "../../assets/images/analysis/chartToggle.svg";
import listToggle from "../../assets/images/analysis/listToggle.svg";
import zerodha from "../../assets/images/analysis/zerodha.svg";
import angelBroking from "../../assets/images/analysis/angelBroking.svg";
import iciciSecurities from "../../assets/images/analysis/iciciSecurities.svg";
import hdfcSecurities from "../../assets/images/analysis/hdfcSecurities.svg";

const Analysis = () => {
  return (
    <div className="analysis">
      <h3 className="analysisHeadingResponsive">NET ROI Analysis</h3>
      <div className="analysisHeading">
        <h3>Net ROI Analysis</h3>
        <div className="percentageToggle">
          <p>Percentage</p>
          <p>Value</p>
        </div>
        <div className="displayToggleWrapper">
          <img src={listToggle} alt="list toggle menu" />
          <img src={chartToggle} alt="chart toggle menu" />
        </div>
      </div>
      <div className="columnHead">
        <h5 className="columnHeadBroker">Broker</h5>
        <h5 className="columnHeadBar">Graph</h5>
        <div className="columnHeadPercentage">
          <h5>Gross ROI</h5>
          <h5>Total Charges & Risk</h5>
          <h5>Net ROI</h5>
        </div>
      </div>
      <div className="brokerPercentage">
        <div className="brokerName">
          <img src={zerodha} alt="zerodha" />
        </div>
        <div className="brokerBar">
          <MultiColorProgressBar
            width1={20}
            width2={40}
            width3={20}
            width4={20}
          />
        </div>
        <div className="brokerCharges">
          <div className="brokerChargesResponsiveWrapper">
            <h5>Gross ROI</h5>
            <p>92.5%</p>
          </div>
          <div className="brokerChargesResponsiveWrapper">
            <h5>Total Charges & Risk</h5>
            <p>92.5%</p>
          </div>
          <div className="brokerChargesResponsiveWrapper">
            <h5>Net ROI</h5>
            <p>92.5%</p>
          </div>
        </div>
      </div>

      <div className="brokerPercentage">
        <div className="brokerName">
          <img src={angelBroking} alt="angel Broking" />
        </div>
        <div className="brokerBar">
          <MultiColorProgressBar
            width1={5}
            width2={10}
            width3={5}
            width4={80}
          />
        </div>
        <div className="brokerCharges">
          <div className="brokerChargesResponsiveWrapper">
            <h5>Gross ROI</h5>
            <p>92.5%</p>
          </div>
          <div className="brokerChargesResponsiveWrapper">
            <h5>Total Charges & Risk</h5>
            <p>92.5%</p>
          </div>
          <div className="brokerChargesResponsiveWrapper">
            <h5>Net ROI</h5>
            <p>92.5%</p>
          </div>
        </div>
      </div>

      <div className="brokerPercentage">
        <div className="brokerName">
          <img src={iciciSecurities} alt="icici Securities" />
        </div>
        <div className="brokerBar">
          <MultiColorProgressBar
            width1={15}
            width2={30}
            width3={15}
            width4={40}
          />
        </div>
        <div className="brokerCharges">
          <div className="brokerChargesResponsiveWrapper">
            <h5>Gross ROI</h5>
            <p>92.5%</p>
          </div>
          <div className="brokerChargesResponsiveWrapper">
            <h5>Total Charges & Risk</h5>
            <p>92.5%</p>
          </div>
          <div className="brokerChargesResponsiveWrapper">
            <h5>Net ROI</h5>
            <p>92.5%</p>
          </div>
        </div>
      </div>

      <div className="brokerPercentage">
        <div className="brokerName">
          <img src={hdfcSecurities} alt="hdfc Securities" />
        </div>
        <div className="brokerBar">
          <MultiColorProgressBar
            width1={10}
            width2={15}
            width3={10}
            width4={65}
          />
        </div>
        <div className="brokerCharges">
          <div className="brokerChargesResponsiveWrapper">
            <h5>Gross ROI</h5>
            <p>92.5%</p>
          </div>
          <div className="brokerChargesResponsiveWrapper">
            <h5>Total Charges & Risk</h5>
            <p>92.5%</p>
          </div>
          <div className="brokerChargesResponsiveWrapper">
            <h5>Net ROI</h5>
            <p>92.5%</p>
          </div>
        </div>
      </div>

      <div className="brokerPercentage">
        <div className="brokerName">
          <img src={zerodha} alt="zerodha" />
        </div>
        <div className="brokerBar">
          <MultiColorProgressBar
            width1={15}
            width2={20}
            width3={15}
            width4={50}
          />
        </div>
        <div className="brokerCharges">
          <div className="brokerChargesResponsiveWrapper">
            <h5>Gross ROI</h5>
            <p>92.5%</p>
          </div>
          <div className="brokerChargesResponsiveWrapper">
            <h5>Total Charges & Risk</h5>
            <p>92.5%</p>
          </div>
          <div className="brokerChargesResponsiveWrapper">
            <h5>Net ROI</h5>
            <p>92.5%</p>
          </div>
        </div>
      </div>

      <div className="brokerPercentage">
        <div className="brokerName">
          <img src={angelBroking} alt="angel Broking" />
        </div>
        <div className="brokerBar">
          <MultiColorProgressBar
            width1={15}
            width2={15}
            width3={15}
            width4={55}
          />
        </div>
        <div className="brokerCharges">
          <div className="brokerChargesResponsiveWrapper">
            <h5>Gross ROI</h5>
            <p>92.5%</p>
          </div>
          <div className="brokerChargesResponsiveWrapper">
            <h5>Total Charges & Risk</h5>
            <p>92.5%</p>
          </div>
          <div className="brokerChargesResponsiveWrapper">
            <h5>Net ROI</h5>
            <p>92.5%</p>
          </div>
        </div>
      </div>
      <div className="exploreMoreBar">
        <a href="#">Explore 20+ Broker</a>
        <button>Explore 20+ Broker</button>
        <div className="percentageToggle">
          <p>Percentage</p>
          <p>Value</p>
        </div>
      </div>
    </div>
  );
};

export default Analysis;

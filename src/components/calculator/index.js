import React from "react";
import "./calculator.scss";

import zerodha from "../../assets/images/calculator/zerodha.svg";
import info from "../../assets/images/calculator/info.svg";

import Dropdown from "../../components/dropdown";
import SimpleSlider from "../../components/simpleSlider";
import RangeSlider from "../../components/rangeSlider";

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="calcHeadingAndInvesmentRange">
        <div className="calculatorHeading">
          <h3>Return's Calculator</h3>
          <div className="borderedDropdown">
            <div className="brokerDropdown">
              <Dropdown
                option={[<img src={zerodha} alt="brokers" />]}
                defaultValue="Select broker"
                width={120}
              />
            </div>
            <div className="packageDropdown">
              <Dropdown
                option={["package 1", "package 2", "package 3"]}
                defaultValue="Select package"
                width={120}
              />
            </div>
          </div>
        </div>
        <div className="investmentAmount">
          <div className="investmentAmountRange">
            <p>Investment Amount</p>
            <div className="rangeSlider">
              <RangeSlider />
            </div>
            <div className="breakevenPoint">
              <img src={info} alt="info" />
              <div className="breakevenValue">Breakeven point 3,19,190</div>
            </div>
          </div>
          <div className="exposureRange">
            <p>Exposure</p>
            <div className="exposureDropdown">
              <Dropdown
                option={["1X", "2X", "3X"]}
                defaultValue="1X"
                width={58}
              />
            </div>
          </div>
          <div className="quantityResponsive">
            <h3>Quantity</h3>
            <h2>5000</h2>
          </div>
        </div>
      </div>

      <div className="calculatorData">
        <div className="profitAndLossSection">
          <div className="quantity">
            <h3>Quantity</h3>
            <h2>5000</h2>
          </div>
          <div className="pAndLPerDay">
            <div className="PAndLDetailWrapper">
              <div className="PAndLDetail">
                <h3>Max Daily loss</h3>
                <h2>₹2,11,259</h2>
              </div>
              <div className="PAndLDetail">
                <h3>Max Daily Profit</h3>
                <h2>₹2,11,259</h2>
              </div>
            </div>
            <div className="twoSlider">
              <SimpleSlider />
              <SimpleSlider />
            </div>
            <div className="averageRangeWrapper">
              <div className="averageRange">
                <p>Avg</p>
                <p>(₹ 2,11,259)</p>
              </div>
              <div className="averageRange">
                <p>Avg</p>
                <p>(₹ 2,11,259)</p>
              </div>
            </div>
          </div>
          <div className="pAndLPerTrade">
            <div className="PAndLDetailWrapper">
              <div className="PAndLDetail">
                <h3>Max loss/Trade</h3>
                <h2>₹2,11,259</h2>
              </div>
              <div className="PAndLDetail">
                <h3>Max Profit/Trade</h3>
                <h2>₹2,11,259</h2>
              </div>
            </div>
            <div className="twoSlider">
              <SimpleSlider />
              <SimpleSlider />
            </div>
            <div className="averageRangeWrapper">
              <div className="averageRange">
                <p>Avg</p>
                <p>(₹ 2,11,259)</p>
              </div>
              <div className="averageRange">
                <p>Avg</p>
                <p>(₹ 2,11,259)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="returnsSection">
          <div className="returnDetail">
            <h3>Risk</h3>
            <h2>6,14,81,919</h2>
            <p>67.46%</p>
          </div>
          <div className="returnDetail">
            <h3>Gross P&L</h3>
            <h2>6,14,81,919</h2>
            <p>67.46%</p>
          </div>
          <div className="returnDetail">
            <h3>Charges</h3>
            <h2>6,14,81,919</h2>
            <p>67.46%</p>
          </div>
          <div className="returnDetail">
            <h3>Net Approx ROI</h3>
            <h2>6,14,81,919</h2>
            <p>67.46%</p>
          </div>
        </div>
        <button>
          <p>Optimize Returns</p>
          <span>
            <img src={info} alt="info" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Calculator;

import React from "react";
import "./performance.scss";

import DemoRingProgress from "../../components/progessBar";
import LineChart from "../../components/lineChart";

const Performance = () => {
  return (
    <div className="performance">
      <p>Performance</p>
      <div className="lineChart">
        <LineChart />
      </div>
      <div className="charts">
        <div className="trades">
          <DemoRingProgress name="Trades" percent="0.8" />
          <div className="tradeCount">
            <h3>Avg Trades/Day</h3>
            <p>250</p>
            <ul>
              <li>
                <h3>Long Trades</h3>
                <p>250 (75%)</p>
              </li>
              <li>
                <h3>Short Trades</h3>
                <p>250 (25%)</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="hitRatio">
          <DemoRingProgress name="Hit ratio" percent="0.4" />
          <div className="hitCount">
            <ul>
              <li>
                <h3>Win Trades</h3>
                <p>250 (75%)</p>
              </li>
              <li>
                <h3>Loss Trades</h3>
                <p>50 (25%)</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;

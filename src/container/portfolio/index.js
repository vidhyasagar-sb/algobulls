import React from "react";
import "./portfolio.scss";

import portfolioLogo from "../../assets/images/portfolio/portfolioLogo.svg";
import favorite from "../../assets/images/portfolio/favorite.svg";
import share from "../../assets/images/portfolio/share.svg";
import redirect from "../../assets/images/portfolio/redirectArrow.svg";
import followers from "../../assets/images/portfolio/followers.svg";
import newFollower from "../../assets/images/portfolio/newFollower.svg";
import entry from "../../assets/images/portfolio/enter.svg";
import exit from "../../assets/images/portfolio/exit.svg";
import rise from "../../assets/images/portfolio/rise.svg";

import LineChart from "../../components/lineChart";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolioDesktop">
        <img src={portfolioLogo} alt="portfolio logo" />
        <div className="profileDetails">
          <div className="profile">
            <p>by</p>
            <h5>Jhunjhunwala</h5>
            <a href="">
              <img src={redirect} alt="redirect" />
            </a>
          </div>
          <div className="followers">
            <img src={followers} alt="followers" />
            <p>200</p>
            <img src={newFollower} alt="New" />
          </div>
          <div className="bollingerBands">
            <p>Bollinger Bands Directional</p>
            <a href="">
              <img src={redirect} alt="redirect" />
            </a>
          </div>
        </div>
        <div className="futures">
          <h3>BANKNIFTYJULFUT</h3>
          <p>NSE | FUT | Intraday</p>
        </div>
        <div className="capital">
          <h4>Capital Required</h4> <p>₹50K</p>
        </div>
        <div className="hitRatio">
          <h4>Hit Ratio</h4> <p>55.34%</p>
        </div>
        <div className="risk">
          <h4>Risk</h4> <p>40.21%</p>
        </div>
        <div className="roi">
          <h4>Gross ROI</h4>
          <p>
            <span>42.45% </span>in 120 Days
          </p>
        </div>
        <button>Execute</button>
        <div className="shareImgWrapper">
          <img src={share} alt="share" />
          <img src={favorite} alt="favorite" />
        </div>
      </div>

      <div className="portfolioResponsive">
        <div className="portfolioWrapper">
          <div className="portfolioHead">
            <div className="portfolioName">
              <img src={portfolioLogo} alt="portfolio logo" />
              <div>
                <div className="profile">
                  <p>by</p>
                  <h5>Jhunjhunwala</h5>
                </div>
                <div className="followers">
                  <img src={followers} alt="followers" />
                  <p>200</p>
                  <img src={newFollower} alt="New" />
                </div>
              </div>
            </div>

            <div className="shareImgWrapper">
              <img src={favorite} alt="favorite" />
              <img src={share} alt="share" />
            </div>
          </div>
          <div className="portfolioFuture">
            <div className="futures">
              <h4>BANKNIFTYJULFUT</h4>
              <p>
                NSE <span>|</span> FUT <span>|</span> Intraday
              </p>
            </div>
            <div className="roi">
              <h3>42.45%</h3>
              <p>
                ROI <span>|</span> 1 month
              </p>
            </div>
          </div>
          <div className="strategyDetail">
            <p>Bollinger Bands Directional</p>
            <a href="#">know more</a>
          </div>
          <div className="futureChart">
            <LineChart />
          </div>
          <div className="buySellData">
            <div className="entrySection">
              <h3>
                <span>B:</span> 33114.8888
              </h3>
              <div className="entryWrapper">
                <img src={entry} alt="entry" />
                <p>09:28:36</p>
              </div>
            </div>
            <div className="trendingSection">
              <div className="trendingWrapper">
                <img src={rise} alt="trending" />
                <h4>50.99%</h4>
              </div>
              <p>2021-05-24</p>
            </div>
            <div className="exitSection">
              <h3>
                <span>S:</span>33546.8888
              </h3>
              <div className="exitWrapper">
                <p>09:28:36</p>
                <img src={exit} alt="exit" />
              </div>
            </div>
          </div>
        </div>
        <div className="capitalRisks">
          <div className="capitalRiskDetailWrapper">
            <h5>Capital Required</h5>
            <p>₹50K</p>
          </div>
          <div className="capitalRiskDetailWrapper">
            <h5>Hit Ratio</h5>
            <p>55.34%</p>
          </div>
          <div className="capitalRiskDetailWrapper">
            <h5>Risk</h5>
            <p>40.21%</p>
          </div>
        </div>
        <div className="buttonContainer">
          <button>Execute</button>
        </div>
      </div>

      <div className="durationBar">
        <div className="analyticsToggle">
          <div>
            <p>Analytics</p>
          </div>
          <div>
            <p>Records</p>
          </div>
        </div>
        <ul>
          <li>
            <p>1W</p>
          </li>
          <li>
            <p>1M</p>
          </li>
          <li>
            <p>3M</p>
          </li>
          <li>
            <p>6M</p>
          </li>
          <li>
            <p>1Y</p>
          </li>
          <li>
            <p>All</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;

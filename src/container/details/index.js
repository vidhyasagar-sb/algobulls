import React from "react";
import "./details.scss";

const Details = () => {
  return (
    <div className="details">
      <div className="detailsContentAndStrategy">
        <div className="detailsContent">
          <h3>Bollinger Bands Strategy</h3>
          <p>
            Bollinger Bands are upper and lower bands around a SMA of a
            security's price. Bollinger Bands are calculated as a standard
            deviation level above and below a simple moving average of the
            price. Bollinger Bands adjust for the volatility in price movement
            and provide a range of stock which the stock is expected to trade
            in. Bollinger Bands help determine whether prices are high or low
            relative to n-period simple moving average. They are used in pairs,
            both upper and lower bands along with a moving average. Bollinger
            Bands use Period and Standard Deviations as parameters. Playing the
            bands is based on the premise that the vast majority of all closing
            prices should be between the Bollinger Bands. An instrument's price
            going outside the Bollinger Bands should occur very rarely.
          </p>
          <p>
            Combined with Level Breakout <br />
            Approximately 90% of price action occurs between the two bands. Any
            breakout above or below the bands is a major event. Breakouts
            provide clues as to the direction and extent of future price
            movement. After touching the lower or the upper bands the OHLC
            price, volume and speed is monitored to take further action in case
            of the breakout.
          </p>
          <p>
            Signal <br /> A possible Buy signal is generated when the OHLC
            touches the Lower band and the immediate next candle closes higher
            than the previous candle. A possible Sell signal is generated when
            the OHLC touches the Upper band and the immediate next candle closes
            Lower than the previous candle. MIS/INTRADAY Cover orders are pushed
            to the broker and the trader can modify parameter from &lt;TWEAK&gt;
            in the strategy card. NOTE: Trades get executed automatically at the
            close price of the respective candle
          </p>
        </div>
        <div className="strategy">
          <div className="tradeDetailsResponsive">
            <div className="strategyDetailWrapper">
              <div className="strategyDetail">
                <h4>AlgoBulls</h4>
                <p>Strategy By</p>
              </div>
              <div className="strategyDetail">
                <h4>INTRADAY</h4>
                <p>Trading Type</p>
              </div>
            </div>
            <div className="strategyDetailWrapper">
              <div className="strategyDetail">
                <h4>NSE</h4>
                <p>Segment</p>
              </div>
              <div className="strategyDetail">
                <h4>NSE</h4>
                <p>Exchange</p>
              </div>
            </div>
            <div className="strategyDetailWrapper">
              <div className="strategyDetail">
                <h4> 15:15:00</h4>
                <p>Trading Stop Time</p>
              </div>
              <div className="strategyDetail">
                <h4>5minutes</h4>
                <p>Candle Interval</p>
              </div>
            </div>
            <div className="strategyDetailWrapper">
              <div className="strategyDetail">
                <h4>09:15:00</h4>
                <p>Trading Start Time</p>
              </div>
              <div className="strategyDetail">
                <h4>Maruti</h4>
                <p>Instrument</p>
              </div>
            </div>
          </div>
          <div className="tradeDetails">
            <div className="strategyDetailWrapper">
              <div className="strategyDetail">
                <h4>AlgoBulls</h4>
                <p>Strategy By</p>
              </div>
              <div className="strategyDetail">
                <h4>Maruti</h4>
                <p>Instrument</p>
              </div>
            </div>
            <div className="verticalSeparator"></div>
            <div className="strategyDetailWrapper">
              <div className="strategyDetail">
                <h4>INTRADAY</h4>
                <p>Trading Type</p>
              </div>
              <div className="strategyDetail">
                <h4>5minutes</h4>
                <p>Candle Interval</p>
              </div>
            </div>
            <div className="verticalSeparator"></div>
            <div className="strategyDetailWrapper">
              <div className="strategyDetail">
                <h4>NSE</h4>
                <p>Segment</p>
              </div>
              <div className="strategyDetail">
                <h4>09:15:00</h4>
                <p>Trading Start Time</p>
              </div>
            </div>
            <div className="verticalSeparator"></div>
            <div className="strategyDetailWrapper">
              <div className="strategyDetail">
                <h4>NSE</h4>
                <p>Exchange</p>
              </div>
              <div className="strategyDetail">
                <h4>15:15:00</h4>
                <p>Trading Stop Time</p>
              </div>
            </div>
          </div>
          <div className="strategyDetailParameters">
            <p>Parameters</p>
            <h5>
              STANDARD_DEVIATIONS: 2, STOPLOSS_TRIGGER: .02, TIME_PERIOD: 18
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

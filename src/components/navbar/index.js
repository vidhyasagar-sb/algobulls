import React from "react";
import "./navbar.scss";
import Dropdown from "../../components/dropdown";

import logo from "../../assets/images/navbar/logo.svg";
import curveArrow from "../../assets/images/navbar/curveArrow.svg";
import help from "../../assets/images/navbar/help.svg";
import wallet from "../../assets/images/navbar/wallet.svg";
import notification from "../../assets/images/navbar/notification.svg";
import flag from "../../assets/images/navbar/indiaFlag.svg";
import toggleMenu from "../../assets/images/common/toggleMenu.svg";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logoIndiceWrapper">
          <img className="logo" src={logo} alt="logo" />
          <img className="toggleMenu" src={toggleMenu} alt="toggle" />
          <div className="indices nifty">
            <p>NIFTY 50</p>
            <p>14400</p>
            <p>0.18%</p>
          </div>
          <div className="indices">
            <p>SENSEX</p>
            <p>32500</p>
            <p>0.19%</p>
          </div>
        </div>
        <div className="quickNav">
          <img src={notification} alt="notification" />
          <img className="curveArrow" src={curveArrow} alt="curved arrow" />
          <img className="help" src={help} alt="help" />
          <div className="wallet">
            <img src={wallet} alt="wallet" />
            <p>₹ 2000</p>
          </div>
          <div className="navbarDropdown">
            <Dropdown
              option={[
                <div>
                  <img src={flag} alt="brokers" /> <span>IN</span>
                </div>,
              ]}
              defaultValue={"country"}
              width={88}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

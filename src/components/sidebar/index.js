import React from "react";
import "./sidebar.scss";

import dashboard from "../../assets/images/sidebar/dashboard.svg";
import chooseStrategy from "../../assets/images/sidebar/chooseStrategy.svg";
import buildstrategy from "../../assets/images/sidebar/buildStrategy.svg";
import portfolio from "../../assets/images/sidebar/portfolio.svg";
import mystrategies from "../../assets/images/sidebar/myStrategies.svg";
import report from "../../assets/images/sidebar/report.svg";
import brokingDetail from "../../assets/images/sidebar/brokingDetail.svg";
import wallet from "../../assets/images/sidebar/wallet.svg";
import settings from "../../assets/images/sidebar/settings.svg";
import resource from "../../assets/images/sidebar/resource.svg";
import downArrow from "../../assets/images/common/downArrow.svg";
import block from "../../assets/images/sidebar/blocks.svg";
import stats from "../../assets/images/sidebar/stats.svg";
import graph from "../../assets/images/sidebar/graph.svg";
import profilePhoto from "../../assets/images/sidebar/profilePhoto.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <div className="menuWrapper">
            <img src={dashboard} alt="Dashboard" />
            <p>Dashboard</p>
          </div>
        </li>
        <li className="menuDropdown">
          <div className="menuWrapper">
            <img src={chooseStrategy} alt="choose strategy" />
            <p>Choose Strategy</p>
          </div>
          <img src={downArrow} alt="down arrow" />
        </li>
        <li className="menuDropdown">
          <div className="menuWrapper ">
            <img src={buildstrategy} alt="build strategy" />
            <p>Build strategy</p>
          </div>
          <img src={downArrow} alt="down arrow" />
        </li>
        <li>
          <div className="menuWrapper">
            <img src={portfolio} alt="My portfolio" />
            <p>My Portfolio</p>
          </div>
        </li>
        <li>
          <div className="menuWrapper">
            <img src={mystrategies} alt="My strategies" />
            <p>My Strategies</p>
          </div>
        </li>
        <li className="menuDropdown">
          <div className="menuWrapper">
            <img src={report} alt="Live reports" />
            <p>Live Reports</p>
          </div>
          <img src={downArrow} alt="down arrow" />
        </li>
        <li>
          <div className="menuWrapper">
            <img src={brokingDetail} alt="Broking Details" />
            <p>Broking Details</p>
          </div>
        </li>
        <li>
          <div className="menuWrapper">
            <img src={wallet} alt="Plans & wallet" />
            <p>Plans & Wallet</p>
          </div>
        </li>
        <li>
          <div className="menuWrapper">
            <img src={settings} alt="settings" />
            <p>Settings</p>
          </div>
        </li>
        <li>
          <div className="menuWrapper">
            <img src={resource} alt="Resources" />
            <p>Resources</p>
          </div>
        </li>
      </ul>
      <div className="sidebarProfile">
        <div className="profileDetails">
          <img src={profilePhoto} alt="profile pic" />
          <div className="profileInfo">
            <h3>Surjith Raj</h3>
            <p>Free User</p>
          </div>
          <img src={downArrow} alt="downarrow" />
        </div>
        <div className="sidebarToggle">
          <img src={graph} alt="graph" />
          <img src={stats} alt="statistics" />
          <img src={block} alt="blocks" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

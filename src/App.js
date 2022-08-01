import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Home from "./container/home";

import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="layout">
        <div className="SidebarComponent">
          <Sidebar />
        </div>
        <div className="mainComponent">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;

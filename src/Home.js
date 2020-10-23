import React from "react";

import Menu from "./Menu";
import HomeSec1 from "./HomeSec1";

import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div id="Homepage">
        <Menu />
        <HomeSec1 />
      </div>
    );
  }
}

export default Home;

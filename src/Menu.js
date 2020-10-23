import React from "react";

import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Menu extends React.Component {
  render() {
    return (
      <div className="container-fluid" style={{ padding: "0" }}>
        <div id="Menu">
          <div className="row" style={{ height: "100%", margin: "0" }}>
            <div className="col-4 loginbutton" style={{ padding: "0" }}>
              <p className="logintext">
                <a href="#">Login</a>
              </p>
            </div>
            <div className="col-4 logo">
              <p>
                Habbo <br />
                Party
              </p>
            </div>
            <div className="col-4 registerbutton">
              <p className="registertext">
                <a href="#">
                  Registrar <FontAwesomeIcon icon={faHeart} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;

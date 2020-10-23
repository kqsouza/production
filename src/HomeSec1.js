import React from "react";

import "./Homesec1.css";

import ReactAnime from "react-animejs";
const { Anime, stagger } = ReactAnime;

class HomeSec1 extends React.Component {
  render() {
    return (
      <div id="homesec1">
        <div className="container-fluid" style={{ padding: "0" }}>
          <div className="contentwraper">
            <div className="midcontent">
              <p>Ouça, toque</p>
              <p>músicas juntos :D</p>
              <Anime
                initial={[
                  {
                    targets: "img",
                    //translateY: 10,
                    easing: "linear",
                    direction: "alternate",
                    loop: true,
                    duration: 900,
                    keyframes: [
                      {
                        rotate: 2
                      },
                      { rotate: -2 }
                    ]
                  }
                ]}
                _onMouseEnter={[
                  {
                    targets: "img",
                    rotate: 0
                  }
                ]}
                _onMouseLeave={[]}
              >
                <img src="https://i.imgur.com/C2fp8cz.png" />
              </Anime>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSec1;

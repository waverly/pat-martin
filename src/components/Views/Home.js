import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "./../../css/Views/Home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      animationDirection: "previous"
    };
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="load"
        transitionAppear={true}
        transitionEnterTimeout={700}
        transitionAppearTimeout={700}
        transitionLeaveTimeout={700}
      >
        <div className="home-wrap">
          <div className="tagline">
            <h1>
              <span className="highlight">Reinventing</span> Technology
              Companies Since 2007
            </h1>
          </div>
          <div className="bg-img">
            {/* <img src="./../assets/imgs/home.jpg" alt=""/> */}
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Home;

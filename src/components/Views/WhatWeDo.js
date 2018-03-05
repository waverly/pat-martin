import React from "react";
import BlueBox from "../Components/BlueBox";
import Header from "../Components/Header";

import "./../../css/Views/WhatWeDo.css";

class WhatWeDo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("props will be below");
    console.log(this.props);
  }

  render() {
    if (this.props.data) {
      const wwd = this.props.data.data;
      return (
        <div className="what-we-do section-wrap">
          <Header index="01" title={wwd.title["0"].text} />
          <div className="col-wrap">
            <div className="col-left">
              <h3 className="serif description">{wwd.tagline["0"].text}</h3>
              <div className="paragraph serif">
                {wwd.description.map((p, index) => (
                  <p key={index}> {p.text} </p>
                ))}
              </div>
            </div>

            <div className="col-right">
              <div className="inner-wrap">
                <img src={wwd.image.url} alt="" />
                <p className="caption serif">image caption</p>
                <div className="list-wrap">
                  <ul className="list">
                    <li className="list-title sans-serif">Industries</li>
                    {wwd.industry.map((p, index) => (
                      <li key={index}> {p["industry-type"]["0"].text} </li>
                    ))}
                  </ul>
                  <BlueBox left="10%" top="10%" width="20vw" height="20vw" />
                </div>
              </div>{" "}
              {/*  end inner wrap */}
            </div>
          </div>
        </div>
      );
    } else {
      return "Loading...";
    }
  }
}

export default WhatWeDo;

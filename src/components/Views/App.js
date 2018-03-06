import React, { Component } from "react";
import Prismic from "prismic-javascript";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import WhatWeDo from "./WhatWeDo";
import DirectLending from "./DirectLending";
import PrivateEquity from "./PrivateEquity";
import Portfolio from "./Portfolio";
import News from "./News";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

import ReactCSSTransitionReplace from "react-css-transition-replace";
import "./../../css/Views/App.css";

import { Switch, Route } from "react-router-dom";

const apiEndpoint = "https://halecapital.prismic.io/api/v2";

class App extends Component {
  constructor() {
    super();

    this.handleData = this.handleData.bind(this);

    this.state = {};
  }

  componentDidMount() {
    Prismic.api(apiEndpoint).then(api => {
      console.log("inside of prismic api");
      api.query("").then(response => {
        console.log(response);
        this.handleData(response.results);
      });
    });
    // end of api
  }
  // end of didmount

  handleData(data) {
    data.forEach(d => {
      // this sets state for each type of page and stores data in it
      const type = d.type;
      this.setState({ [type]: d });
    });
  }

  render() {
    return (
      <div className="router-ex">
        <Route
          render={({ location }) => (
            <ReactCSSTransitionReplace
              transitionName="fade"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              <div key={location.pathname}>
                <Route path="/" component={Nav} />
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={props => <Home data={this.state.home} />}
                  />
                  <Route
                    exact
                    path="/what-we-do"
                    render={props => (
                      <WhatWeDo
                        data={this.state.whatwedo}
                        // handleIndexClick={this.handleIndexClick}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/direct-lending"
                    render={props => (
                      <DirectLending data={this.state.directlending} />
                    )}
                  />
                  <Route
                    exact
                    path="/private-equity"
                    render={props => (
                      <PrivateEquity
                        data={this.state.privateequity}
                        // handleIndexClick={this.handleIndexClick}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/portfolio"
                    render={props => (
                      <Portfolio
                        data={this.state.portfolio}
                        // handleIndexClick={this.handleIndexClick}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/news"
                    render={props => (
                      <News
                      // images={this.state.images}
                      // handleIndexClick={this.handleIndexClick}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/about-us"
                    render={props => (
                      <AboutUs
                        data={this.state.about}
                        // handleIndexClick={this.handleIndexClick}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/contact-us"
                    render={props => (
                      <ContactUs
                      // images={this.state.images}
                      // handleIndexClick={this.handleIndexClick}
                      />
                    )}
                  />
                </Switch>
                <Route path="/" component={Footer} />
              </div>
            </ReactCSSTransitionReplace>
          )}
        />
      </div>
    );
  }
}

export default App;

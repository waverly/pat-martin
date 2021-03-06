import React, { Component } from "react";
import Prismic from "prismic-javascript";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import WhatWeDo from "./WhatWeDo";
import DirectLending from "./DirectLending";
import PrivateEquity from "./PrivateEquity";
import Portfolio from "./Portfolio";
import PortfolioDetail from "./PortfolioDetail";
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
    this.handleHighlight = this.handleHighlight.bind(this);
    this.renderPortfolioState = this.renderPortfolioState.bind(this);

    this.state = {};
  }

  componentDidMount() {
    Prismic.api(apiEndpoint).then(api => {
      console.log("inside of prismic api");
      api
        .query("", {
          pageSize: 100
        })
        .then(response => {
          // console.log(response);
          this.handleData(response.results);
        });
    });
    // end of api
  }
  // end of didmount

  handleHighlight(text) {
    let phrase = text.text;
    if (text.spans.length > 0) {
      let counter = 0;
      text.spans.forEach(i => {
        let arr = phrase.split("");
        let first = i.start + counter;
        let last = i.end + 1 + counter;
        arr.splice(first, 0, "<highlight>");
        arr.splice(last, 1, "</highlight> ");
        phrase = arr.join("");
        counter += 23;
      });
    }
    return { __html: phrase };
  }

  renderPortfolioState() {}

  handleData(data) {
    let news = [];
    let companies = [];
    data.forEach(d => {
      // this sets state for each type of page and stores data in it
      const type = d.type;

      if (type === "news") {
        news.push(d);
        console.log(news);
        this.setState({ news });
      } else if (type === "portfoliocompany") {
        companies.push(d);
        console.log(companies);
        this.setState({ companies });
      } else {
        this.setState({ [type]: d });
      }
    });
  }

  render() {
    if (!this.state.news) return "Loading...";

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
                        handleHighlight={text => this.handleHighlight(text)}
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
                      <PrivateEquity data={this.state.privateequity} />
                    )}
                  />
                  <Route
                    exact
                    path="/portfolio"
                    render={props => (
                      <Portfolio
                        data={this.state.portfolio}
                        companies={this.state.portfoliocompany}
                      />
                    )}
                  />
                  <Route
                    path="/portfolio/:name"
                    render={({ match }) => {
                      const portfolioSlug = match.params.name;
                      let found;
                      if (Array.isArray(this.state.portfoliocompany)) {
                        // console.log(this.state.portfoliocompany);
                        found = this.state.portfoliocompany.find(
                          p => p.uid === match.params.name
                        );
                      }
                      return <PortfolioDetail data={found} />;
                    }}
                  />
                  <Route
                    exact
                    path="/news"
                    render={props => (
                      <News
                        data={this.state.news}
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
                        handleHighlight={text => this.handleHighlight(text)}
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

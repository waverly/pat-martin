import React from "react";
import { Link } from "react-router-dom";

import "./../../css/Views/Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.clickToggle = this.clickToggle.bind(this);

    this.state = {
      active: false
    };
  }

  clickToggle() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const path = this.props.location.pathname;
    console.log(path);

    return (
      <div className="nav-wrap">
        <div className="logo">
          <div className="logomark">
            <img src="./../assets/imgs/logo.png" alt="" />
          </div>
          <Link className="textmark" to="/">
            <p className="name-p">Hale Capital Partners</p>
          </Link>
        </div>

        <div className="text-wrap">
          <Link
            to={`/what-we-do`}
            className={
              "nav-item " + (path === "/what-we-do" ? "active" : "inactive")
            }
          >
            <div className="index">01</div>
            <div className="item-title">What We Do</div>
          </Link>

          <div
            className={"nav-item " + (this.state.active ? "expanded" : "")}
            onClick={this.clickToggle}
          >
            <div className="index sans-serif">02</div>
            <div className="item-title">
              Investment Strategies <span className="down" />
              <span className="up" />
            </div>
            <div className="nav-children">
              <Link
                to={`/private-equity`}
                className={
                  "nav-item " +
                  (path === "/private-equity" ? "active" : "inactive")
                }
              >
                Private Equity
              </Link>
              <Link
                to={`/direct-lending`}
                className={
                  "nav-item " +
                  (path === "/direct-lending" ? "active" : "inactive")
                }
              >
                Direct Lending
              </Link>
            </div>
          </div>
          <Link
            to={`/portfolio`}
            className={
              "nav-item " + (path === "/portfolio" ? "active" : "inactive")
            }
          >
            <div className="index">03</div>
            <div className="item-title">Portfolio</div>
          </Link>
          <Link
            to={`/news`}
            className={"nav-item " + (path === "/news" ? "active" : "inactive")}
          >
            <div className="index">04</div>
            <div className="item-title">News</div>
          </Link>
          <Link
            to={`/about-us`}
            className={
              "nav-item " + (path === "/about-us" ? "active" : "inactive")
            }
          >
            <div className="index">05</div>
            <div className="item-title">About Us</div>
          </Link>
          <Link
            to={`/contact-us`}
            className={
              "nav-item contact " +
              (path === "/contact-us" ? "active" : "inactive")
            }
          >
            <div className="item-title sans-serif">Contact Us</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;

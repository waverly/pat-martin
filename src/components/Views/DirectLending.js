import React from "react";
import Header from "../Components/Header";
import ListItem from "../Components/ListItem";
import Arrow from "../Components/Arrow";
import BlueBox from "../Components/BlueBox";
import Transaction from "../Components/Transaction";

import "./../../css/Views/DirectLending.css";

class DirectLending extends React.Component {
  render() {
    if (this.props.data) {
      const dl = this.props.data.data;

      return (
        <div className="section-wrap direct-lending">
          <Header index="02 Investment Strategies" title="Direct Lending" />

          {/* start columns */}
          <div className="col-wrap">
            <div className="col-left">
              <div className="paragraph serif">
                {dl.description.map((p, index) => (
                  <p key={index}> {p.text} </p>
                ))}
              </div>
            </div>

            <div className="col-right">
              <div className="inner-wrap">
                <img src={dl.image.url} alt="" />
                <p className="caption serif">{dl.caption["0"].text}</p>
                <div className="view-investments">
                  <h3 className="serif">
                    View Select Investments
                    <Arrow direction="right" />
                  </h3>
                </div>
              </div>{" "}
            </div>
          </div>
          {/*  end columns */}
          {/* start list section */}
          <div className="list-wrap">
            {dl.body.map((item, index) => <ListItem key={index} item={item} />)}
            <BlueBox left="15%" top="-5%" width="60%" height="95%" />
          </div>
          <div className="transaction-wrap">
            <h3 className="section-title">Transaction Types</h3>
            {dl.transactions.map((t, index) => (
              <Transaction key={index} data={t} />
            ))}
          </div>
        </div>
      );
    } else return "Loading...";
  }
}

export default DirectLending;

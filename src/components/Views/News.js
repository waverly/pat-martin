import React from "react";
import "./../../css/Views/News.css";

class News extends React.Component {
  componentDidMount() {}

  constructor() {
    super();

    this.extractYear = this.extractYear.bind(this);
  }

  extractYear(d) {
    return parseInt(d.slice(0, 4));
  }

  render() {
    if (!this.props.data) return "Loading...";

    // parse all news entries and create an array of unique year values
    let years = [];
    let dataObject = [];
    if (this.props.data.length > 0) {
      this.props.data.map((n, index) => {
        const date = n.data.date;
        let year = this.extractYear(date);

        // see if this year is already in the array
        if (years.indexOf(year) < 0) {
          years.push(year);
          years = years.sort((a, b) => b - a);
        }
        console.log(dataObject);
      });
    }

    return (
      <div className="section-wrap news-wrap">
        {/*  news header  */}
        {/* start header */}
        <div className="news-header">
          <div className="text-left">
            <div className="index">
              <p className="index sans-serif">04</p>
            </div>
            <h1>News</h1>
          </div>
          <div className="text-right">
            {/* loop throuh data and display all dates */}
            {years.map((y, i) => (
              <h3 key={i} className="year-item">
                {y}
              </h3>
            ))}
          </div>
        </div>
        {/* start news entries */}
        <div className="entries">
          {years.map((y, i) => {
            // let markup =
            //
            // this.props.data.map((d, i)=> {
            //   if d
            // })

            return (
              <div className="year-wrap">
                <p key={i}>{y}</p>
                {this.props.data.map((n, i) => {
                  if (parseInt(n.data.date.slice(0, 4)) === y) {
                    return n.data.date;
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;

import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import Nav from './Nav';
import '../css/App.css';

const apiEndpoint = 'https://patmartinclone.prismic.io/api/v2';
const classNames = require( 'classnames' );

class App extends Component {

  constructor(){
    super();

    this.state = {
      images: {}
    };
  }

  addData(item){
    let counter = 0;
    const images = {...this.state.images};
    item.forEach( (d) => {
      let timestamp = Date.now();
      // data[`item-${timestamp}`] = d;
      if (d.type === "image"){
        images[counter] = d.data.image.url;
        counter++;
      }
      this.setState({ images });
    });
  }
  componentDidMount(){
    Prismic.api(apiEndpoint).then(api => {
      api.query("")
      .then(response => {
        console.log(response)// response is the response object, response.results holds the documents
        this.addData(response.results)
      })
    });
    // end of api

  }
  // end of didmount


  render() {
    const images = {...this.state.images};

    // on left/right arrow, increment or decrement image counter

    return (

      <div>
        <Nav/>
        <div className="slider-wrap">
          <div className="img-wrap">
            <img src={images[0]} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

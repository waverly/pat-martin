import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import logo from '../logo.svg';
import '../css/App.css';

const apiEndpoint = 'https://waverly.prismic.io/api/v2';
const classNames = require( 'classnames' );

class App extends Component {

  constructor(){
    super();
    // this.addData = this.addData.bind(this);
    // this.webEnter = this.webEnter.bind(this);
    // this.artEnter = this.artEnter.bind(this);

    this.state = {
      data: {
        art: {},
        web: {}
      },
      homeComponent: {
        art: {
          isActive: false
        },
        web:{
          isActive: true
        }
      }
    };
  }

  addData(item){
    const data = {...this.state.data};
    item.forEach( (d) => {
      let timestamp = Date.now();
      // data[`item-${timestamp}`] = d;
      if (d.type === "art"){
        data.art[`item-${timestamp}`] = d;
      }
      else if (d.type === "web"){
        data.web[`item-${timestamp}`] = d;
      }
      this.setState({ data });
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

  webEnter(){

    const homeC = {...this.state.homeComponent};
    homeC.web.isActive = true;
    homeC.art.isActive = false;
    this.setState({ homeComponent : homeC })

  }

  artEnter(){

    const homeC = {...this.state.homeComponent};
    homeC.web.isActive = false;
    homeC.art.isActive = true;
    this.setState({ homeComponent : homeC })

  }


  render() {
    const art = classNames({
      active: this.state.homeComponent.art.isActive,
      artWrap: true
    });

    const web = classNames({
      active: this.state.homeComponent.web.isActive,
      webWrap: true
    });

    return (
      <div className="home-wrap">
        <p>hi</p>
      </div>
    );
  }
}

export default App;

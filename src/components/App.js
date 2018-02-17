import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import Nav from './Nav';
import Index from './Index';
import Home from './Home';
import ColorToggle from './ColorToggle';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import '../css/App.css';

import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

const apiEndpoint = 'https://patmartinclone.prismic.io/api/v2';

class App extends Component {

  constructor(){
    super();

    this.toggleWhite = this.toggleWhite.bind(this);
    this.toggleBlack = this.toggleBlack.bind(this);

    this.state = {
      images: {},
      invert: false
    };
  }

  addData(item){
    let counter = 0;
    const images = {...this.state.images};
    item.forEach( (d) => {
      // let timestamp = Date.now();
      // data[`item-${timestamp}`] = d;
      if (d.type === "image"){
        images[counter] = d.data.image.url;
        counter++;
      }
      this.setState({ images });
    });
  }

  toggleBlack(){
    const invert = true;
    this.setState({ invert });
  }

  toggleWhite(){
    const invert = false;
    this.setState({ invert });
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

    return (

      <div className="router-ex">
        <Route render={({location}) => (
          <ReactCSSTransitionReplace
            transitionName="fade"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            <div key={location.pathname} className={this.state.invert ? 'black' : 'white'}>
              <Route path="/" component={Nav}  />
              <Route path="/" render={(props) => (
                <ColorToggle toggleWhite={this.toggleWhite} toggleBlack={this.toggleBlack}/>
              )} />
              <Switch location={location}>
                <Route exact path='/' render={(props) => (
                  <Home images={this.state.images}/>
                )} />
                <Route exact path='/index' render={(props) => (
                  <Index images={this.state.images}/>
                )} />
              </Switch>
            </div>
          </ReactCSSTransitionReplace>
            )}/>
      </div>





        // <div className={this.state.invert ? 'black' : 'white'}>
        //   <Route path="/" component={Nav}  />
        //   <Route path="/" render={(props) => (
        //     <ColorToggle toggleWhite={this.toggleWhite} toggleBlack={this.toggleBlack}/>
        //   )} />
        //   <Switch>
        //     <Route exact path='/' render={(props) => (
        //       <Home images={this.state.images}/>
        //     )} />
        //     <Route exact path='/index' render={(props) => (
        //       <Index images={this.state.images}/>
        //     )} />
        //   </Switch>
        // </div>


    );
  }
}

export default App;

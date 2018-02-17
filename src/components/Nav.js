import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Nav.css';

class Nav extends React.Component {


  constructor(){
    super();

    this.handleInfo = this.handleInfo.bind(this);

    this.state = {
      showInfo: false,
    }

  }

  handleInfo(){
    console.log('handling info');
    const showInfo = !(this.state.showInfo);
    console.log(showInfo);
    this.setState({showInfo});
  }

  componentDidMount(){
    console.log(this.props.location.pathname);
  }

  render(){
    const path = this.props.location.pathname;

    return(
      <div className="nav-wrap">
        <div className="name" onClick={this.handleInfo}>
          <p>Pat Martin</p>
          <div
            className={
              this.state.showInfo ? 'info reveal' : 'info hide'
            }
          >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
        </div>

        {
          path === '/' ?
            ( <Link to={`/index`} className="index">Index</Link> )
            : (<Link to={`/`} className="home">Home</Link>)
        }

      </div>
    )
  }
}

export default Nav;

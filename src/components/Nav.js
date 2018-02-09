import React from 'react';
import { Link } from 'react-router-dom'

import '../css/Nav.css';

class Nav extends React.Component {
  render(){
    return(
      <div className="nav-wrap">
        <p className="name">Pat Martin</p>
        <Link to={`/index`} className="index" activeClassName="active">Index</Link>
      </div>
    )
  }
}

export default Nav;

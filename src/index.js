import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Nav from './components/Nav';
import Index from './components/Index';
import NotFound from './components/NotFound';

const Root = () => {
  return (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  )
}
// not sure why I'm unable to render Root

render(<Root/>, document.querySelector('#main'));

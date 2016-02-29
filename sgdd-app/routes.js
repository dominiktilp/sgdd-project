import React from 'react';
import { Route } from 'react-router';

import App from './components/AppContainer';
import ButtonsContainer from './components/ButtonsContainer';

export default (
  <Route path="/" component={App}>
    <Route path="buttons" component={ButtonsContainer}/>    
  </Route>
);
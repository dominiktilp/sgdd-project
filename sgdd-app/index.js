import '!!file?name=index.html!./index.html';

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import { Router, hashHistory } from 'react-router';

import configureStore from './configureStore';
import routes from './routes';

//import './styles.styl';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}/>
  </Provider>, document.getElementById('sgdd-app')
);
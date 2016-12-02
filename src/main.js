'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from './components/App';
import * as reducers from './reducers';

const reducer = combineReducers( {
  ...reducers,
  routing: routerReducer
});

ReactDOM.render(<App />, document.getElementById('app'));s

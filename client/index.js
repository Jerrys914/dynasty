import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, Route, hashHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes.js';
import SeasonStats from './components/playerStatsYTD.js';
import Home from './components/home.js';
import DailyStats from './components/dailyStats.js';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
      <Route path="/" component={Home} />
      <Route path="/playerStatsYTD" component={SeasonStats} />
      <Route path="/dailyStats" component={DailyStats} />
    </Router>
  </Provider>
  , document.querySelector('.container')
);
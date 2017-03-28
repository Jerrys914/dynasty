import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, Route, hashHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes.js';
import Home from './components/home.js';
import NFLSeasonStats from './components/nfl/playerStatsYTD.js';
import NFLDailyStats from './components/nfl/dailyStats.js';
import NBASeasonStats from './components/nba/playerStatsYTD.js';
import NBADailyStats from './components/nba/dailyStats.js';
import NBA from './components/nba/index.js';
import NFL from './components/nfl/index.js';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
      <Route path="/" component={Home} />
      <Route path='/NFL' component={NFL} />
      <Route path='/NBA' component={NBA} />
      <Route path='/MLB' component={NBA} />
      <Route path="/NFL/PlayerStatsYTD" component={NFLSeasonStats} />
      <Route path="/NFL/DailyStats" component={NFLDailyStats} />
      <Route path="/NBA/PlayerStatsYTD" component={NBASeasonStats} />
      <Route path="/NBA/DailyStats" component={NBADailyStats} />
    </Router>
  </Provider>
  , document.querySelector('.container')
);
// <Route path="/MLB/PlayerStatsYTD" component={} />
// <Route path="/MLB/DailyStats" component={} />
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, Route, hashHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import routes from './routes.js';
import MyLeagues from './components/league/myLeagues.js';
import NFLSeasonStats from './components/nfl/playerStatsYTD.js';
import NFLDailyStats from './components/nfl/dailyStats.js';
import NBASeasonStats from './components/nba/playerStatsYTD.js';
import NBADailyStats from './components/nba/dailyStats.js';
import MLBSeasonStats from './components/mlb/playerStatsYTD.js';
import NBA from './components/nba/index.js';
import NFL from './components/nfl/index.js';
import MLB from './components/mlb/index.js';
import MyTeams from './components/league/myTeams.js';

// const createStoreWithMiddleware = createStore(devToolsEnhancer({
//   applyMiddleware(ReduxPromise);
// }); 

const createStoreWithMiddleware = createStore(reducers, composeWithDevTools(
  applyMiddleware(ReduxPromise),
  // other store enhancers if any
));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Router history={hashHistory}>
      <Route path="/" component={MyLeagues} />
      <Route path='/NFL' component={NFL} />
      <Route path='/NBA' component={NBA} />
      <Route path='/MLB' component={MLB} />
      <Route path="/NFL/PlayerStatsYTD" component={NFLSeasonStats} />
      <Route path="/NFL/DailyStats" component={NFLDailyStats} />
      <Route path="/NBA/PlayerStatsYTD" component={NBASeasonStats} />
      <Route path="/NBA/DailyStats" component={NBADailyStats} />
      <Route path="/MLB/PlayerStatsYTD" component={MLBSeasonStats} />
      <Route path="/myTeams" component={MyTeams} />
    </Router>
  </Provider>
  , document.querySelector('.container')
);
// <Route path="/MLB/DailyStats" component={} />
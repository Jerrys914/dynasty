import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, Route, hashHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import routes from './routes.js';
import persistState from 'redux-localstorage';
import MyLeagues from './components/league/myLeagues.js';
import NFLSeasonStats from './components/nfl/playerStatsYTD.js';
import NFLDailyStats from './components/nfl/dailyStats.js';
import NBASeasonStats from './components/nba/playerStatsYTD.js';
import NBADailyStats from './components/nba/dailyStats.js';
import MLBSeasonStats from './components/mlb/playerStatsYTD.js';
import MLBDailyStats from './components/mlb/dailyStats.js';
import NBA from './components/nba/index.js';
import NFL from './components/nfl/index.js';
import MLB from './components/mlb/index.js';
import MyTeams from './components/league/myTeams.js';
import LeagueStandings from './components/league/standings.js';
import DraftRoom from './components/league/draftRoom.js';

const createStoreWithMiddleware = createStore(reducers, composeWithDevTools(
  applyMiddleware(ReduxPromise),
  persistState()
  // other store enhancers if any
));

// [at the very end of the file]

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
      <Route path="/MLB/DailyStats" component={MLBDailyStats} />
      <Route path="/myTeams" component={MyTeams} />
      <Route path="/leagueStandings" component={LeagueStandings} />
      <Route path="/DraftRoom" component={DraftRoom} />
    </Router>
  </Provider>
  , document.querySelector('.container')
);

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import DailyStats from './components/dailyStats.js';
import SeasonStats from './components/playerStatsYTD.js';

export default (
  <Route path= "/" component={App} >
  <IndexRoute component={SeasonStats} />
  <Route path="/playerStatsYTD" component={SeasonStats} />
  <Route path="/dailyStats" component={DailyStats} />
  </Route>
);
import React, { Component } from 'react';
import MLBDailyStats from '../../containers/mlb/dailyStats.js';
import Nav from '../../containers/navigation.js';
import MLBNav from '../../containers/mlb/mlbNav.js';
import TeamNav from '../../containers/league/leagueNav.js';

export default class DailyStats extends Component {
  render() {
    return (
      <div>
        <Nav />
        <TeamNav />
        <MLBNav />
        <MLBDailyStats />
      </div>
    )
  }
};
import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import DailyStats from '../../containers/nba/dailyStats.js';
import NBANav from '../../containers/nba/nbaNav.js';
import LeagueNav from '../../containers/league/leagueNav.js';

export default class DailyPlayerStats extends Component {
  render(){
    return (
      <div>
        <Nav />
        <LeagueNav />
        <h2>Basketball</h2>
        <NBANav />
        <DailyStats />
      </div>
    )
  }
}
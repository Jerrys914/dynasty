import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import DailyStats from '../../containers/nfl/dailyStats.js';
import NFLNav from '../../containers/nfl/nflNav.js';
import TeamNav from '../../containers/league/leagueNav.js';

export default class DailyPlayerStats extends Component {
  render(){
    return (
      <div>
        <Nav />
        <TeamNav />
        <NFLNav />
        <DailyStats />
      </div>
    )
  }
}
import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import NBANav from '../../containers/nba/nbaNav.js';
import DailyStats from '../../containers/nba/dailyStats.js';
import TeamNav from '../../containers/league/leagueNav.js';
import NBATeam from '../../containers/nba/myTeam.js';

export default class NBATEAM extends Component {
  render(){
    return (
      <div>
        <Nav />
        <TeamNav />
        <NBANav />
        <NBATeam />
      </div>
    )
  }
}
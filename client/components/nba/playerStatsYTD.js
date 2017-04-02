import React, { Component } from 'react';
import SeasonStats from '../../containers/nba/playerStatsYTD.js';
import Nav from '../../containers/navigation.js';
import NBANav from '../../containers/nba/nbaNav.js';
import TeamNav from '../../containers/league/leagueNav.js';

export default class PlayerStatsYTD extends Component {
  render() {
    return (
      <div>
        <Nav />
        <TeamNav />
        <NBANav />
        <SeasonStats />
      </div>
    )
  }
};
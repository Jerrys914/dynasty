import React, { Component } from 'react';
import MLBSeasonStats from '../../containers/mlb/playerStatsYTD.js';
import Nav from '../../containers/navigation.js';
import MLBNav from '../../containers/mlb/mlbNav.js';
import LeagueNav from '../../containers/league/leagueNav.js';

export default class PlayerStatsYTD extends Component {
  render() {
    return (
      <div>
        <Nav />
        <LeagueNav />
        <h2>Baseball</h2>
        <MLBNav />
        <MLBSeasonStats />
      </div>
    )
  }
};
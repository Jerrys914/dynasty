import React, { Component } from 'react';
import SeasonStats from '../../containers/nfl/playerStatsYTD.js';
import Nav from '../../containers/navigation.js';
import NFLNav from '../../containers/nfl/nflNav.js';
import LeagueNav from '../../containers/league/leagueNav.js';

export default class PlayerStatsYTD extends Component {
  render() {
    return (
      <div>
        <Nav />
        <LeagueNav />
        <h2>Football</h2>
        <NFLNav />
        <SeasonStats />
      </div>
    )
  }
};
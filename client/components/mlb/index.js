import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import MLBNav from '../../containers/mlb/mlbNav.js';
import LeagueNav from '../../containers/league/leagueNav.js';
import MLBTeam from '../../containers/mlb/myTeam.js';

export default class MLBTEAM extends Component {
  render(){
    return (
      <div>
        <Nav />
        <LeagueNav />
        <h2>Baseball</h2>
        <MLBNav />
        <MLBTeam />
      </div>
    )
  }
}
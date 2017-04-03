import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import MLBNav from '../../containers/mlb/mlbNav.js';
import TeamNav from '../../containers/league/leagueNav.js';
// import NBATeam from '../../containers/nba/myTeam.js';

export default class NBATEAM extends Component {
  render(){
    return (
      <div>
        <Nav />
        <TeamNav />
        <MLBNav />
      </div>
    )
  }
}
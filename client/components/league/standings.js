import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import TeamNav from '../../containers/league/leagueNav.js';
import LeagueStandings from '../../containers/league/standings.js';

export default class MYLEAGUES extends Component {
  render() {
    return (
      <div>
       <Nav />
        <TeamNav />
        <LeagueStandings />
      </div>
    )
  }
};
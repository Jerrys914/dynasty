import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import MyTeams from '../../containers/league/myTeams.js';
import TeamNav from '../../containers/league/leagueNav.js';

export default class MYTEAMS extends Component {
  render() {
    return (
      <div>
        <Nav />
        <TeamNav />
        <MyTeams />
      </div>
    )
  }
};
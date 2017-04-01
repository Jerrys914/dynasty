import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import MyTeams from '../../containers/league/myTeams.js';

export default class MYTEAMS extends Component {
  render() {
    return (
      <div>
        <Nav />
        <MyTeams />
      </div>
    )
  }
};
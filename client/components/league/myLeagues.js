import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import MyLeagues from '../../containers/league/myLeagues.js';

export default class MYLEAGUES extends Component {
  render() {
    return (
      <div>
        <Nav />
        <MyLeagues />
      </div>
    )
  }
};
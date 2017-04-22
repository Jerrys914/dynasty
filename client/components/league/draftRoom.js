import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import DraftRoom from '../../containers/league/draftRoom.js';

export default class DRAFTROOM extends Component {
  render() {
    return (
      <div>
        <Nav />
        <DraftRoom />
      </div>
    )
  }
};
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class NFLTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamInfo: {

      },
      players: []
    }
  }

  render() {
    return(
      <div>My NFL Team</div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    // myTeams: state.MyTeams
  }
};

export default connect(mapStateToProps, null)(NFLTeam);
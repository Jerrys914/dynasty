import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getDailyStats from '../../actions/nba/dailyStats.js';
import PlayerUtils from '../../utils/nbaPlayerUtils.js';

class NBATeam extends Component {
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
      <div>
        My NBA Team
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    myTeams: state.MyTeams
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getDailyStats}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NBATeam);
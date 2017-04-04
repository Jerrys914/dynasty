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

  componentWillMount(props){
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NFLTeam);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getNBAPlayerStatsYTD from '../../actions/nba/playerStatsYTD.js';
import PlayerUtils from '../../utils/nbaPlayerUtils.js';

class PlayerStatsYTD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
  }

  componentWillMount(props){
  
  }

  displayStats(){
    
  }

  render(){
    return(
      <div>
       Football Stats YTD
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    NBAPlayerStatsYTD: state.nbaPlayerStatsYTD
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getNBAPlayerStatsYTD}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerStatsYTD);
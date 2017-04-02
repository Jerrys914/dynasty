import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getNFLPlayerStatsYTD from '../../actions/nfl/playerStatsYTD.js';
import PlayerUtils from '../../utils/nbaPlayerUtils.js';

class PlayerStatsYTD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
  }

  componentWillMount(props){
    this.props.getNFLPlayerStatsYTD();
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
  return bindActionCreators({getNFLPlayerStatsYTD}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerStatsYTD);
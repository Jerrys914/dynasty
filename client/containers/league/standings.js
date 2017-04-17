import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getLeagueMembers from '../../actions/league/getLeagueMembers.js';

class MyTeams extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getLeagueMembers(this.props.leagueInfo);
  }

  displayMembers(){
    return this.props.leagueMembers.map(member => {
      return (
        <div key={member.id}>
          {member.name}
        </div>
      )
    })
  }

  render(){
    return (
      <div>
      {this.displayMembers()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    leagueInfo: state.LeagueInfo,
    leagueMembers: state.LeagueMembers
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getLeagueMembers }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTeams);
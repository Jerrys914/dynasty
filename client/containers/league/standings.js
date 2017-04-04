import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getLeagueMembers from '../../actions/league/getLeagueMembers.js';

class MyTeams extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getLeagueMembers();
  }

  displayTeams(){
    console.log('MY TEAM PROPS: ', this.props)
    return this.props.myTeams.map(team => {
      return (
        <div key={team.id}>
          {team.name}
        </div>
      )
    })
  }

  render(){
    return (
      <div>
      {this.props.leagueMembers}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    leagueMembers: state.LeagueMembers
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getLeagueMembers }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTeams);
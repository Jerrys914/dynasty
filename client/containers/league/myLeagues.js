import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getLeagues from '../../actions/league/getLeagues.js';
import { Link } from 'react-router';

class MyLeagues extends Component {
  constructor(props) {
    super(props);
    // this.props.getLeagues();
  }

  componentWillMount(){
    this.props.getLeagues();
  }

  listLeagues(){
    return this.props.myLeagues.map(league => {
      if(league.name === 'No Leagues Yet') {
        return (
          <div key={league.id}>
            {league.name}
          </div>
        )
      }
      return (
        <div key={league.id}>
          <Link to='/myTeams'>{league.name}</Link>
        </div>
      )
    })
  }

  render(){
    return (
      <div>
        <h1>My Leagues</h1>
        {this.listLeagues()}
        <a href='/api/createNewLeague'>Create New League</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myLeagues: state.MyLeagues
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getLeagues },dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(MyLeagues);
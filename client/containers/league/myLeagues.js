import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import getLeagues from '../../actions/league/getLeagues.js';
import setLeague from '../../actions/league/setLeagueName.js';

class MyLeagues extends Component {
  constructor(props) {
    super(props);
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
          <Link to='/myTeams' onClick={()=>{this.props.setLeague(league.name)}}>{league.name}</Link>
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
  return bindActionCreators({ getLeagues, setLeague },dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(MyLeagues);
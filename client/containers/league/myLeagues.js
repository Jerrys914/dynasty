import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getLeagues from '../../actions/league/getLeagues.js';

class MyLeagues extends Component {
  constructor(props) {
    super(props);
    // this.props.getLeagues();
  }

  componentWillMount(){
    console.log('PROPS: ', this.props)
    this.props.getLeagues();
  }

  componentWillReceiveProps(props) {
    console.log('New Props: ', props)
    // this.forceUpdate(); 
  }

  listLeagues(){
    return this.props.myLeagues.map(league => { 
      return (
        <div key={league.id}>
          {league.name}
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
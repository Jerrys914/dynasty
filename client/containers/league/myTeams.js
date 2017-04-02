import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getTeams from '../../actions/league/getTeams.js';

class MyTeams extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getTeams();    
  }

  displayTeams(){
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
      {this.displayTeams()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    myTeams: state.MyTeams
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getTeams }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTeams);
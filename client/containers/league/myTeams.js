import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MyTeams extends Component {
  constructor(props){
    super(props);
  }

  render(){

  }
}

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dipatch => {
  return bindActionCreators({}, dispatch);
};

export default connet(mapStateToProps, mapDispatchToProps)(MyTeams);
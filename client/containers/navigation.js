import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import getUserInfo from '../actions/user/getUserInfo.js';

class Navigation extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.getUserInfo()
  }

  render(){
    if(!this.props.userInfo) {
      return(
        <div>
          <Link to='/'>My Leagues</Link><span>__</span>
        </div>
      )
    }
    return(
      <div>
        <div>
          <Link to='/'>My Leagues</Link>
        </div>
        <div style={{float: 'right'}}>
          <b>Welcome, {this.props.userInfo.username}! </b>
          <a href='/api/logout'>Logout</a>
        </div>
      </div>
    )
  }
}
const mapStatetoProps = state => {
  return {
    userInfo: state.UserInfo
  }
}
export default connect(mapStatetoProps,{ getUserInfo })(Navigation);
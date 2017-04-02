import React ,{ Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import getUserInfo from '../actions/user/getUserInfo.js';

class Navigation extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Link to='/'>My Leagues</Link><span>__</span>
        <span>welcome{this.getUserInfo().username}</span><a href='/api/logout'>Logout</a>
      </div>
    )
  }
}

export default connect(null,{ getUserInfo })(Navigation);
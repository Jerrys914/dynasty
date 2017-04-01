import React ,{ Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

export default class Navigation extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Link to='/'>My Leagues</Link><span>__</span>
        <Link to='/NFL'>Football</Link><span>__</span>
        <Link to='/NBA'>Basketball</Link><span>__</span>
        <Link to='/MLB'>Baseball</Link>
      </div>
    )
  }
}
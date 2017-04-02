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
        <Link to='/'>My Leagues</Link>
      </div>
    )
  }
}
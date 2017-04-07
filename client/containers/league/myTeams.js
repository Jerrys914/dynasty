import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Flexbox from 'flexbox-react';
import getTeams from '../../actions/league/getTeams.js';

class MyTeams extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getTeams();    
  }

  displayRoster(){
    return (  
      <tr>
        <td>
          display roster
        </td>
      </tr>
    )
  }

  displayTeams(){
    return this.props.myTeams.map(team => {
      return (
        <table key={team.id}>
          <tbody>
            <tr>
              <th>
                {team.name}
              </th>
            </tr>
            {this.displayRoster()}
          </tbody>
        </table>
      )
    })
  }

  render(){
    return (
      <Flexbox>
        {this.displayTeams()}
      </Flexbox>
    )
  }
};

const mapStateToProps = state => {
  return {
    myTeams: state.MyTeams
  }
};

export default connect(mapStateToProps, { getTeams })(MyTeams);
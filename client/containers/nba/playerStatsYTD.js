import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getNBAPlayerStatsYTD from '../../actions/nba/playerStatsYTD.js';
import PlayerUtils from '../../utils/nbaPlayerUtils.js';
import SortPlayers from '../../actions/league/sortPlayers.js';

class PlayerStatsYTD extends Component {
  constructor(props) {
    super(props);
    this.flag = true;
    this.state = {
      players: []
    };
  }

  componentWillMount(props){
    this.props.getNBAPlayerStatsYTD();
  }

  componentWillReceiveProps(props){
    console.log('NEXT PROPS: ', props)
  }

  displayStats(){
    console.log('Display Stats')
    if(this.props.NBAPlayerStatsYTD.playerstatsentry){
      this.state.players = [];
      this.props.NBAPlayerStatsYTD.playerstatsentry.map((player)=>{
        let newPlayer = PlayerUtils.getPlayerInfo(player);
        this.state.players.push(newPlayer);
        newPlayer.totalPoints = PlayerUtils.totalPointsGenerator(newPlayer) + PlayerUtils.applyBonus(newPlayer);
      });
      this.state.players = PlayerUtils.sortByPoints(this.state.players).sorted; 
      console.log('State Players Array: ',this.state.players)
    } else {
      if(this.props.NBAPlayerStatsYTD.sorted){
        this.state.players = this.props.NBAPlayerStatsYTD.sorted
      } else {
        this.state.players = this.props.NBAPlayerStatsYTD
      }

    }
    console.log('State Players Array: ',this.state.players)
    // this.state.players = this.sortByFuncs[this.sortBy](this.state.players);
    return this.state.players.map((player)=>{
      return(
        <tr key={player.fullName + Math.random()}>
          <td>{player.fullName}</td>
          <td>{player.teamAbv}</td>
          <td>{player.number}</td>
          <td>{player.position}</td>
          <td>{player['3pt']}</td>
          <td>{player.Pts}</td>
          <td>{player.Reb}</td>
          <td>{player.Ast}</td>
          <td>{player.Blk}</td>
          <td>{player.Stl}</td>
          <td>{player.Tov}</td>
          <td>{player.totalPoints}</td>            
        </tr>
      )
    })
  }

  render(){
    return(
      <div>
        <div><h1>YTD Stats</h1></div>
        <table>
        <tbody>
          <tr>
            <th onClick={() =>{this.props.SortPlayers(PlayerUtils.sortByName(this.state.players)); this.render()}}>Player Name</th>
            <th >Team</th>
            <th>Number</th>
            <th>Position</th>
            <th>3pt</th>
            <th>Pts</th>
            <th>Reb</th>
            <th>Ast</th>
            <th>Blk</th>
            <th>Stl</th>
            <th>Tov</th>
            <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortByPoints(this.state.players)); this.render()}}>TotalPoints</th>
          </tr>
            {this.displayStats()}
          </tbody>
        </table>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    NBAPlayerStatsYTD: state.nbaPlayerStatsYTD
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getNBAPlayerStatsYTD, SortPlayers }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerStatsYTD);
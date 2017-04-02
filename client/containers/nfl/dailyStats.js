import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getDailyStats from '../../actions/nfl/dailyStats.js';
import PlayerUtils from '../../utils/nbaPlayerUtils.js';

class NBADailyStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
  }

  componentWillMount(props){
    this.props.getDailyStats();
  }

  componentWillReceiveProps(nextProps){
    console.log('NextProps: ', nextProps)
  }

  displayStats(){
    // if(this.props.nbaStatsForDay.playerstatsentry){
    //   this.state.players = [];
    //   this.props.nbaStatsForDay.playerstatsentry.map((player)=>{
    //     let newPlayer = PlayerUtils.getPlayerInfo(player);
    //     this.state.players.push(newPlayer);
    //     newPlayer.totalPoints = PlayerUtils.totalPointsGenerator(newPlayer) + PlayerUtils.applyBonus(newPlayer);
    //   });
    //   this.state.players = PlayerUtils.sortByPoints(this.state.players);
    //   return this.state.players.map((player)=>{
    //     return(
    //       <tr key={player.fullName + Math.random()}>
    //         <td>{player.fullName}</td>
    //         <td>{player.teamAbv}</td>
    //         <td>{player.number}</td>
    //         <td>{player.position}</td>
    //         <td>{player['3pt']}</td>
    //         <td>{player.Pts}</td>
    //         <td>{player.Reb}</td>
    //         <td>{player.Ast}</td>
    //         <td>{player.Blk}</td>
    //         <td>{player.Stl}</td>
    //         <td>{player.Tov}</td>
    //         <td>{player.totalPoints}</td>            
    //       </tr>
    //     )
    //   })
    // } else {
    //   return(
    //     <tr>
    //       <td>No Stats Yet For Today!!</td>
    //     </tr>
    //   )
    // }
  }

  render() {
    return(
      <div>
        Football Daily Stats
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getDailyStats}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NBADailyStats);
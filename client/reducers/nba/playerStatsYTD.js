export default function(state=[], action) {
  switch(action.type) {
    case "GET_NBA_PLAYER_STATS_YTD":
      if(action.payload.data){
        return action.payload.data.cumulativeplayerstats;
      }
    case 'SORT_NBA_PLAYERS_YTD':
      if(action.payload){
        return action.payload
      }
  }
  return state;
}
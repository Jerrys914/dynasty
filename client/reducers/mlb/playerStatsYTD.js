export default function(state=[], action) {
  switch(action.type) {
    case "MLB_PLAYER_STATS_YTD":
      if(action.payload.data){
        console.log('REDUCER: ', action.payload.data)
        return action.payload.data.cumulativeplayerstats;
      }
    case 'SORT_MLB_PLAYERS_YTD':
      if(action.payload){
        return action.payload
      }
  }
  return state;
}
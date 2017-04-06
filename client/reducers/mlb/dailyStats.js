export default function(state=[], action) {
  switch(action.type) {
    case "MLB_PLAYER_STATS_DAILY":
      if(action.payload.data){
        console.log('REDUCER: ', action.payload.data)
        return action.payload.data.dailyplayerstats;
      }
    case 'SORT_MLB_PLAYERS_DAILY':
        console.log('REDUCER: ', action.payload)
      if(action.payload){
        return action.payload
      }
  }
  return state;
}
export default function(state=[], action) {
  switch(action.type) {
    case "MLB_PLAYER_STATS_DAILY":
      if(action.payload.data){
        return action.payload.data.dailyplayerstats;
      }
    case 'SORT_MLB_PLAYERS_DAILY':
      if(action.payload){
        return action.payload
      }
  }
  return state;
}
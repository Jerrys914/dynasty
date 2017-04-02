export default function(state=[], action){
  switch(action.type) {
    case "GET_NBA_DAILY_STATS":
      console.log('ACTION Daily:', action)
      if(!action.payload.data){
        return state;
      }
      return action.payload.data.dailyplayerstats;
    case 'SORT_NBA_PLAYERS_DAILY':
      if(action.payload){
        return action.payload
      }
  }
  return state;
}
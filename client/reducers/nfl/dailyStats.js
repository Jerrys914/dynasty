export default function(state=[], action){
  switch(action.type){
    case 'GET_NFL_DAILY_STATS':
      if(action.payload.data) {
        console.log('PAYLOAD: ',action.payload.data)
        return action.payload.data.dailyplayerstats
      }
    case 'SORT_NFL_PLAYERS_DAILY':
      if(action.payload){
        return action.payload
      }
  }
  return state;
}
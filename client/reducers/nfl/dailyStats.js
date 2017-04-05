export default function(state=[], action){
  switch(action.type){
    case 'GET_NFL_DAILY_STATS':
      if(action.payload.data) {
        return action.payload.data.dailyplayerstats
      }
  }
  return state;
}
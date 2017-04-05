export default function(state=[], action) {
  switch(action.type) {
    case "GET_NFL_YTD_STATS":
      if(action.payload.data){
        console.log('REDUCER: ', action.payload.data)
        return action.payload.data.cumulativeplayerstats;
      }
    case 'SORT_NFL_PLAYERS_YTD':
      if(action.payload){
        return action.payload
      }
  }
  return state;
}
export default function(state=[], action) {
  switch(action.type) {
    case "GET_NFL_YTD_STATS":
      if(action.payload.data){
        console.log('ACTION NFL YTD:', action)
        return action.payload.data.cumulativeplayerstats;
      }
    case 'SORT_NFL_PLAYERS_YTD':
      if(action.payload){
        console.log('ACTION NFL YTD SORTED:', action)
        return action.payload
      }
  }
  return state;
}
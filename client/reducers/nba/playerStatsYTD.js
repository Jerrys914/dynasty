export default function(state=[], action) {
  switch(action.type) {
    case "GET_NBA_PLAYER_STATS_YTD":
      if(action.payload.data){
        console.log('ACTION NBA YTD:', action)
        return action.payload.data.cumulativeplayerstats;
      }
  }
  return state;
}
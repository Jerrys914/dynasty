export default function(state=[], action) {
  switch(action.type) {
    case "GET_NBA_PLAYER_STATS_YTD":
    console.log('ACTION YTD:', action)
      if(!action.payload.data){
        return state;
      }
      return action.payload.data.cumulativeplayerstats;
  }
  return state;
}
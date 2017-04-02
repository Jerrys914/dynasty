export default function(state=[], action) {
  switch(action.type) {
    case "GET_NFL_YTD_STATS":
      if(action.payload.data){
        console.log('ACTION NFL YTD:', action)
        return action.payload.data.cumulativeplayerstats;
      }
  }
  return state;
}
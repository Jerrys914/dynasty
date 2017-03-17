export default function(state=[], action){
  switch(action.type) {
    case "GET_DAILY_STATS":
      console.log('ACTION Daily:', action)
      if(!action.payload.data){
        return state;
      }
      return action.payload.data.dailyplayerstats;
  }
  return state;
}
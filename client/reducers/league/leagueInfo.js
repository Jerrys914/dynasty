export default function(state = null, action) {
  switch(action.type) {
    case 'SET_LEAGUE_INFO':
      if(action.payload) {
        return action.payload;
      }
  }
  return state;
}
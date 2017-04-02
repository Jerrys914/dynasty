export default function(state = null, action) {
  switch(action.type) {
    case 'SET_LEAGUE_NAME':
      if(action.payload) {
        return action.payload;
      }
  }
  return state;
}
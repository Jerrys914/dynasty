export default function(state=[], action) {
  switch(action.type){
    case 'GET_LEAGUE_MEMBERS':
      if(action.payload.data){
        return action.payload.data;
      }
  }
  return state;
}
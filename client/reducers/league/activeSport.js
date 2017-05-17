export default function(state=null, action){
  switch(action.type) {
    case 'ACTIVE_SPORT':
      return action.payload;
  }
  return state;
}
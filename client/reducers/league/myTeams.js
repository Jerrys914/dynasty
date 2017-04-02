export default function(state = [], action) {
  switch(action.type) {
    case 'GET_TEAMS':
      if(action.payload.data) {
        return action.payload.data;
      }
  }
  return state;
}
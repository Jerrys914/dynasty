export default function(state = [], action) {
  switch(action.type) {
    case 'GET_MY_LEAGUES':
      if(action.payload.data) {
        return action.payload.data;
      }
  }
  return state;
}
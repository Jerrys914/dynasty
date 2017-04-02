export default function(state = null, action) {
  switch(action.type) {
    case 'GET_USER_INFO':
      if(action.payload.data) {
        return action.payload.data;
      }
  }
  return state;
}
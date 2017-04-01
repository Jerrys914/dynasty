export default function(state = [], action) {
  switch(action.type) {
    case 'GET_MY_LEAGUES':
    let a = action.payload
    console.log('REDUCER: ', a)
      if(action.payload.data) {
        return action.payload;
      }
  }
  return state;
}
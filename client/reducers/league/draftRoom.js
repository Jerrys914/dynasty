export default function(state = [], action) {
  switch(action.type) {
    case 'DRAFT_ROOM_MEMBERS':
      if(action.payload) {
        return action.payload;
      }
  }
  return state;
}
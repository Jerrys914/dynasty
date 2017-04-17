import axios from 'axios';

const getDraftRoomMembers = (name) => {
  // let request = axios.post('/api/createLeague', name);
  return {
    type: 'DRAFT_ROOM_MEMBERS',
    payload: request
  }
}

export default getDraftRoomMembers;
// module.exports = (io, passport) =>{
//   io.on('connection', function(socket){
//   console.log(passport.user.username,' connected');
//     socket.on('disconnect', function () {
//       console.log(passport.user.username,' disconnected');
//     });
//   });
// };
const draftRoomMembers = {};
module.exports = (io, passport) => {
  io.on('connect', (socket) => {
    console.log(`[socket.io] Client ${passport.user.username} connected.`)

    socket.on('IO_CLIENT_JOIN_ROOM', (room, sport) => {
      socket.join(room)
      if(!draftRoomMembers[room +'_'+sport]){
        draftRoomMembers[room +'_'+sport] = {sport:sport,members:[]};
      }
      if(draftRoomMembers[room +'_'+sport].members.indexOf(passport.user.username) < 0){
        draftRoomMembers[room +'_'+sport].members.push(passport.user.username);
      }
      console.log(`[socket.io] Client ${passport.user.username} joined room ${room +'_'+ sport}.`)
      console.log('ROOM MEMBERS: ', draftRoomMembers[room +'_'+sport]);
      io.to(room).emit('IO_SERVER_DRAFT_MEMBERS', draftRoomMembers[room +'_'+sport]);
    })

    socket.on('IO_CLIENT_LEAVE_ROOM', (room, sport) => {
      socket.leave(room +'_'+sport)
      draftRoomMembers[room +'_'+sport].members.splice(draftRoomMembers[room +'_'+sport].members.indexOf(passport.user.username),1);
      console.log('ROOM MEMBERS after SPLICE: ', draftRoomMembers[room +'_'+sport]);
      io.to(room).emit('IO_SERVER_DRAFT_MEMBERS', draftRoomMembers[room +'_'+sport].members);
      console.log(`[socket.io] Client ${passport.user.username} LEFT room ${room +'_'+sport}.`)
    });

    socket.on('disconnect', () => {
      console.log(`[socket.io] A client ${passport.user.username} disconnected.`)
    })
  })
}
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

    socket.on('IO_CLIENT_JOIN_ROOM', (room) => {
      console.log('ROOM TO JOIN: ', room);
      socket.join(room)
      if(!draftRoomMembers[room]){
        draftRoomMembers[room] = [];
      }
      if(draftRoomMembers[room].indexOf(passport.user.username) < 0){
        draftRoomMembers[room].push(passport.user.username);
      }
      console.log(`[socket.io] Client ${passport.user.username} joined room ${room}.`)
      console.log('ROOM MEMBERS: ', draftRoomMembers[room]);
      io.to(room).emit('IO_SERVER_DRAFT_MEMBERS', draftRoomMembers[room]);
      io.to(room).emit('IO_SERVER_HELLO', `Hello clients of room ${room}!`)
    })

    socket.on('IO_CLIENT_LEAVE_ROOM', (room) => {
      socket.leave(room)
      draftRoomMembers[room].splice(draftRoomMembers[room].indexOf(passport.user.username),1);
      console.log('ROOM MEMBERS after SPLICE: ', draftRoomMembers[room]);
      io.to(room).emit('IO_SERVER_DRAFT_MEMBERS', draftRoomMembers[room]);
      console.log(`[socket.io] Client ${passport.user.username} LEFT room ${room}.`)
    });

    socket.on('IO_CLIENT_HELLO', (clientMessage) => {
      console.log(`[socket.io] Client: ${clientMessage}`)
    })
    socket.on('IO_CLIENT_HELLO', (clientMessage) => {
      console.log(`[socket.io] Client: ${clientMessage}`)
    })

    socket.on('disconnect', () => {
      // console.log('disconnect active members b4: ', draftRoomMembers)
      // if(draftRoomMembers.indexOf(passport.user.username) >= 0){
      //   draftRoomMembers.splice(draftRoomMembers.indexOf(passport.user.username),1);
      // }
      // console.log('disconnect active members: ', draftRoomMembers)
      // io.emit('IO_SERVER_DRAFT_MEMBERS', draftRoomMembers);
      console.log(`[socket.io] A client ${passport.user.username} disconnected.`)
    })
  })
}
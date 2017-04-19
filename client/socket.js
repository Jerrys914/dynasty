import socketIOClient from 'socket.io-client'
const socket = socketIOClient(window.location.host)

const setUpSocket = () => {
  socket.on('connect', () => {
    console.log('[socket.io] Connected.')
    socket.emit('IO_CLIENT_HELLO', 'Hello!')
  })

  socket.on('disconnect', () => {
    console.log('[socket.io] Disconnected.')
  })
}

export default setUpSocket
import { io } from 'socket.io-client'

let socket = null

export const getSocket = () => {
  if (!socket) {
    socket = io()
    socket.on('connect', () =>
      console.log(`✅ Сокет работает, сокет id: ${socket.id}`)
    )
    socket.on('disconnect', () => console.log('❌ Сокет закрыт'))
  }

  return socket
}

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect()
    socket = null
  }
}

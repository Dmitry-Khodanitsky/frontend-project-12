import { getSocket } from './socket.js'

export const subscribeToEvent = (event, callback) => {
  const socket = getSocket()

  socket.on(event, callback)

  return () => {
    socket.off(event, callback)
  }
}

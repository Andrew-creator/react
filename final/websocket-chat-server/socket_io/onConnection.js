import userHandlers from './handlers/user.handlers.js'
import messageHandlers from './handlers/message.handlers.js'

export default function onConnection(io, socket, rooms) {
  const { userID, userName } = socket.handshake.query

  console.log("connect user " + userName + " (" + userID + ")")
  console.log("rooms list " + rooms)

  socket.userID = userID
  socket.roomId = -1
  socket.userName = userName

//  socket.join(roomId)

  userHandlers(io, socket, rooms)

//  messageHandlers(io, socket)

//  roomHandlers(io, socket)
}

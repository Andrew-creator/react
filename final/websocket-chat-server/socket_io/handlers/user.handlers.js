import messageHandlers from './message.handlers.js'


const users = {}

export default function userHandlers(io, socket, rooms) {
  const { userName } = socket

  socket.emit('rooms_list:update', rooms)

  const updateUserList = (roomId) => {
    if (roomId >=0) io.to(socket.roomId).emit('user_list:update', users[roomId])
  }

/*
  socket.on('user:add', async (user) => {
    socket.to(roomId).emit('log', `User ${userName} connected`)

    user.socketId = socket.id

    users[roomId].push(user)

    updateUserList()
  })
*/

  socket.on('disconnect', () => {
    console.log("disconnect user " + userName)
    const roomId = socket.roomId

    if (roomId < 0) return
    if (!users[roomId]) return

    socket.leave(roomId)

    socket.to(roomId).emit('log', `User ${userName} disconnected`)

    users[roomId] = users[roomId].filter((u) => u.socketId !== socket.id)

    updateUserList(roomId)
  })

  socket.on('rooms:getList', async (user) => {
    console.log(userName + " get room list")
    console.log(rooms)
    socket.emit('rooms_list:update', rooms)
  })

  socket.on('rooms:connect', (roomId, user) => {
    console.log("connect user " + userName + " to room " + roomId)

    socket.join(roomId)

    socket.roomId = roomId

    user.socketId = socket.id

    if (users[roomId] == null) users[roomId] = new Array()

    let u=users[roomId].filter((u) => u.socketId !== socket.id)

    if (u!=null) {
      users[roomId].push(user)

      messageHandlers(io, socket)

      updateUserList(roomId)
    }
  })
}

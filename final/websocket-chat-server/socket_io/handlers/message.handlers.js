import { removeFile } from '../../utils/file.js'
import onError from '../../utils/onError.js'

const messages = {}

export default function messageHandlers(io, socket) {
  const { roomId, userName } = socket

  const updateMessageList = () => {
    console.log("send messages list to room " + roomId + ":")
    console.log(messages[roomId])
    io.to(roomId).emit('message_list:update', messages[roomId])
  }

  socket.on('message:get', async () => {
    try {
      //const _messages = await Message.find({ roomId })
      const _messages = []

      messages[roomId] = _messages

      updateMessageList()
    } catch (e) {
      onError(e)
    }
  })

  socket.on('message:add', (message) => {
    console.log("get message '"+ JSON.stringify(message) +"' from " + userName)
    message.createdAt = Date.now()

    if (messages[roomId] == null) messages[roomId]=new Array()
    messages[roomId].push(message)

    updateMessageList()
  })

  socket.on('message:remove', (message) => {
    const { messageId, messageType, textOrPathToFile } = message
/*
    Message.deleteOne({ messageId })
      .then(() => {
        if (messageType !== 'text') {
          removeFile(textOrPathToFile)
        }
      })
      .catch(onError)
*/
    if (messages!=null) messages[roomId] = messages[roomId].filter((m) => m.messageId !== messageId)

    updateMessageList()
  })

  console.log("create messages api")
  updateMessageList()
}

import { SERVER_URI } from '../constants';
import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'
import authService from "../services/auth.service";
import roomsStore from '../stores/roomsStore';
import messagesStore from '../stores/messagesStore';
import usersStore from '../stores/usersStore';

let socket = null

function useChat() {
  const user = authService.getCurrentUser();
  const [log, setLog] = useState(null)

  const { setMessages} = messagesStore()
  const { setUsers} = usersStore()
  const { setRooms } = roomsStore()

  if (socket == null) {
    socket = io(SERVER_URI, {
      query: {
        userID: user.id,
        userName: user.name
      },
    })
  }

/*
  const refSocket = useRef(null)
  let socket = refSocket.current

  if (socket == null) {
    socket = io(SERVER_URI, {
      query: {
        userID: user.id,
        userName: user.name
      },
      'reconnection': false,
    })
    refSocket.current = socket
  }
*/
/*
  const { current: socket } = useRef(
    io(SERVER_URI, {
      query: {
        userID: user.id,
        userName: user.name
      },
      'reconnection': false,
    })
  )
*/

  useEffect(() => {
    socket.on('log', (log) => {
      setLog(log)
    })

    socket.on('user_list:update', (users) => {
      setUsers(users)
    })

    socket.on('message_list:update', (messages) => {
      setMessages(messages)
    })

    socket.on('rooms_list:update', (rooms) => {
        console.log("set rooms " + rooms)
      setRooms(rooms)
    })

    // socket.on('disconnect', reason => { socket=null })
  }, [ ])

  const sendMessage = (message) => {
    console.log("send message" + JSON.stringify(message))
    socket.emit('message:add', message)
  }

  const removeMessage = (message) => {
    socket.emit('message:remove', message)
  }

  const connectToRoom = (roomID) => {
    socket.emit('rooms:connect', roomID, user)
  }

  const connectToServer = () => {
    socket.emit('user:connect')
  }

  return { log, sendMessage, removeMessage, connectToRoom, connectToServer }
}

export default useChat
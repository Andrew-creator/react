import cors from 'cors'
import express from 'express'
import { createServer } from 'http'
import mongoose from 'mongoose'
import { Server } from 'socket.io'
import { ALLOWED_ORIGIN, MONGODB_URI } from './config.js'
import onConnection from './socket_io/onConnection.js'
import { getFilePath } from './utils/file.js'
import onError from './utils/onError.js'
import upload from './utils/upload.js'
import fs from 'fs'
import readline from 'readline'
import { loadRoomMessages } from './utils/messages.js'
import { loadRooms } from './utils/rooms.js'
import { loadUsers } from './utils/users.js'

const app = express()

app.use(
  cors({
    origin: ALLOWED_ORIGIN
  })
)
app.use(express.json())

app.use(onError)

loadRoomMessages("1", (messages) => {
  if (messages == null) console.log("messages from room 1 not loaded")
    else console.log("load " + messages.length + " messages")
})

loadRooms((rooms) => {
  if (rooms == null) console.log("rooms list not loaded")
    else {
      console.log("load " + rooms.length + " rooms")
      loadUsers((users)=> {
        if (users == null) console.log("users list not loaded")
          else {
            loadRoomsMessages(rooms)
            startServer(rooms, users)
          }
      })
    }
})

function startServer(rooms, users) {
  const server = createServer(app)

  const io = new Server(server, {
    cors: ALLOWED_ORIGIN,
    serveClient: false
  })

  io.on('connection', (socket) => {
    onConnection(io, socket, rooms)
  })

  const PORT = process.env.PORT || 4000
  server.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`)
  })
}

function loadRoomsMessages(rooms) {
  console.log("load " + rooms.length + " rooms")
  var toString = {}.toString;
  console.log("rooms is " + toString.call(rooms))
  if (Array.isArray(rooms)) {
    rooms.forEach(
      room => {
        console.log("load messages for room " + room.name + "(" + room.id + ")")
        loadRoomMessages(room.id)
      }
    );
  }
}

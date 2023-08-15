const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const bodyParser = require('body-parser')
const connectDatabase = require('./config/databaseConnection')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/v1', require('./src/routes/user.route'))
app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello' })
})

// dataBase connection function call
connectDatabase()

http.listen(8000, function (err) {
  if (err) console.log('Error while running server')
  console.log('Server listening on Port', 8000)
})

global.onlineUsers = new Map()
io.on('connection', (socket) => {
  global.chatSocket = socket
  socket.on('add-user', (userId) => {
    // eslint-disable-next-line no-undef
    onlineUsers.set(userId, socket.id)
  })

  socket.on('send-msg', (data) => {
    // eslint-disable-next-line no-undef
    const sendUserSocket = onlineUsers.get(data.to)
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit('msg-recieve', data)
    }
  })

  socket.on('unseen-msg', (data) => {
    // eslint-disable-next-line no-undef
    const sendUserSocket = onlineUsers.get(data.to)
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit('unseen-received', data)
    }
  })

  socket.on('seen-msg', (data) => {
    // eslint-disable-next-line no-undef
    const sendUserSocket = onlineUsers.get(data.to)
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit('seen-received', data)
    }
  })
})

// Someone is typing

// io.on("typing", data => {
//     socket.broadcast.emit("notifyTyping", { user: data.user, message: data.message });
// });

// io.on("stopTyping", () => { socket.broadcast.emit("notifyStopTyping"); });

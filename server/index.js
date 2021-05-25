
const app = require('express')()
const http = require('http').createServer(app)
var cors = require('cors');

app.use(cors())

const io = require('socket.io')(http, {
  cors: {
    origin: '*',
  }
});


io.on('connection', socket => {
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
  })
})

http.listen(4000, function () {
  console.log('listening on port 4000')
})
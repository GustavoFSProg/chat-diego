// import express from 'express'
// import path from 'path'
// // import http from 'http'
// // import IO from 'socket.io'
// import ejs from 'ejs'

// import path from 'path'
// import http from 'http'
// import express from 'express'
// import socketio from 'socket.io'
// import ejs from 'ejs'
// import cors from 'cors'

const path = require('path')
const http = require('http')
const express = require('express')
// const socketio = require('socket.io')
const ejs = require('ejs')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

app.use('/', (req, res) => {
  res.render('index.html')
})

const server = http.createServer(app)
// const io = socketio(3000)

const io = require('socket.io')(server)

io.on('connection', function (socket) {
  console.log(`New websocket connection: ${socket.id}`)
})

app.listen(8000, () => {
  console.log('Server is Running-aaa')
})

export default app

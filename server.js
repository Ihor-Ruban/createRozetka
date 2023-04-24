const express = require('express')
const bodyParser = require('body-parser')
const server = express()
server.set('view engine', 'ejs')
server.use(bodyParser.urlencoded({ extended: true }))

const routes = require('./routes')

server.use('/', routes)

server.listen(3000, () => {
  console.log('Server started on port 3000')
})

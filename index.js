const express = require('express')
const path = require('path')
const http = require('http')


const app = express()
let server = http.createServer(app)
const publicPath = path.resolve(__dirname, './public')
const port = process.env.PORT || 3000
app.use(express.static(publicPath))

server.listen(port, () => console.log(`Servidor corriendo en puerto ${ port }`))
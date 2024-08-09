const express = require('express')
const app = express()
const cors = require('cors')
const route = require('./routes')
const mongoose = require('mongoose')

app.use(express.json())

app.use(cors())

// app.use(cors({
//     origin: 'http://localhost:3000/',
//     credentials: true
// }))


app.use('/', route)

app.listen(500, ()=> console.log('Listening in the port: 500'))

mongoose.connect('mongodb://localhost:27017/fullstack')
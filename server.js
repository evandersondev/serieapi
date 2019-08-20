const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

//initialization the app
const app = express()
app.use(express.json())
app.use(cors())

//initialization the DB
mongoose.connect('mongodb://localhost:27017/serieapi', {
  useNewUrlParser: true
})
requireDir('./src/models')

//routes
app.use('/', require('./src/routes'))

app.listen(3001, () => {
  console.log('server is running in port: 3001')
})
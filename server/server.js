const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const NODE_ENV = process.env.NODE_ENV || 'dev'
const app = express()
const usersRouter = require('./routes/parkme-router')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api', usersRouter)

app.listen(PORT, () => {
 console.log(`server is listening on port ${PORT}`)
})
console.log(`Developing on ${NODE_ENV} enironment`)

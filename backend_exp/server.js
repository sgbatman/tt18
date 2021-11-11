if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/DBS')
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const indexRouter = require('./routes/index')
const projectRouter = require('./routes/projects')

app.use('/', indexRouter)
app.use('/projects', projectRouter)

app.listen(3000, () => console.log('Server Started'))
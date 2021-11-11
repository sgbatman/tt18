require('dotenv').config()
const express = require('express')
const jwt=require('jsonwebtoken')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/DBS')
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
app.use(express.json())
const users =[]
const bcrypt=require('bcrypt')

app.get('/users',(req,res)=>{
    res.json(users)
})

app.post('/users',async(req,res)=>{
    try{
        
        const hashedPassword=await bcrypt.hash(req.body.password,10)

        const user={name:req.body.name, password:hashedPassword}
        users.push(user)
        res.status(201).send()
    }catch{
        res.status(500).send()
    }
})

const indexRouter = require('./routes/index')
const projectRouter = require('./routes/projects')

app.use('/', indexRouter)
app.use('/projects', projectRouter)


app.listen(3000, () => console.log('Server Started'))
// require('dotenv').config()
// const express = require('express')
// const jwt=require('jsonwebtoken')
// const app = express()
// const mongoose = require('mongoose')
// mongoose.connect('mongodb+srv://admin:admin321@cluster0.aecxk.mongodb.net/expenses?retryWrites=true&w=majority', {useNewUrlParser: true})
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('Connected to Database'))
// app.use(express.json())

// const express = require('express')
// const router = express.Router()
// const bcrypt=require('bcrypt')
// const users =[]

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

app.post('/users/login',async(req,res)=>{
    const user =users.find(user=> user.name =req.body.name)
    if (user==null){
        return res.status(400).send('Cannot find user')
    }
    try{
       if(await bcrypt.compare(req.body.password,user.password)){
           res.send('Success')
       }else{
           res.send('Not Allowed')
       
       }   
    } catch{
        res.status(500).send()
    }
})

module.exports = router

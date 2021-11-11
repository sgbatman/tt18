const express = require('express')
const Project = require('../models/project')
const User = require('../models/user')
const Expense = require('../models/expense')
const Category = require('../models/category')
const router = express.Router()
const bcrypt=require('bcrypt')
const users =[]

router.get('/users',(req,res)=>{
    res.json(users)
})

router.post('/users',async(req,res)=>{
    try{
        const hashedPassword=await bcrypt.hash(req.body.password,10)

        const user={name:req.body.name, password:hashedPassword}
        User.push(user)
        res.status(201).send()
    }catch{
        res.status(500).send()
    }
})

router.post('/users/login',async(req,res)=>{
    const user = User.find(user=> user.name =req.body.name)
    if (user == null){
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

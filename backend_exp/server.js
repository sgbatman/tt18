require('dotenv').config()
const express = require('express')
const jwt=require('jsonwebtoken')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:admin321@cluster0.aecxk.mongodb.net/expenses?retryWrites=true&w=majority', {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json()) 
const posts=[
    {
     username:'Kyle',
     title:'Post 1'   
    }

    ,{
        username:'Jim',
        title:'Post 2'   
       }
]

app.get('/posts',authenticateToken,(req,res)=> {
    res.json(posts)

})

app.post('/login',(req,res)=>{
// Authenticate User

    const username=req.body.username
    const user= {name:username}
    const accessToken = jwt.sign(user,process.env.ACESS_TOKEN_SECRET )
    res.json({accessToken:accessToken})
})


function authenticateToken(req,res,next){
    const authHeader=req.headers['authorization']
    const token =authHeader && authHeader.split(' ')[1]
    if (token==null)return res.sendStatus(401)
    
    jwt.verify(token,process.env.ACESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    }
    )
}
app.listen(3000, () => console.log('Server Started'))
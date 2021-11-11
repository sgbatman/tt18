require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:admin321@cluster0.aecxk.mongodb.net/expenses?retryWrites=true&w=majority', {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


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

app.get('/posts',(req,res)=> {
    res.json(posts)

})




app.listen(3000, () => console.log('Server Started'))
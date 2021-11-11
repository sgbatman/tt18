const express = require('express')
const Project = require('../models/subscriber')
const router = express.Router()

//Getting all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find()
        res.json(projects)
    } catch (err) {
        res.status(500).json({message: err.message})
    }

})

// //Getting one
// router.get('/:id', getSubscriber, (req, res) => {
//     res.json(res.subscriber)
// })

// //Creating one
// router.post('/', async (req, res) => {
//     const subscriber = new Subscriber({
//         name: req.body.name,
//         subscribedToChannel: req.body.subscribedToChannel
//     })

//     try {
//         const newSubscriber = await subscriber.save()
//         res.status(201).json(newSubscriber)
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }
// })

// //updating one
// router.patch('/:id', getSubscriber, async (req, res) => {
//     if (req.body.name != null) {
//         res.subscriber.name = req.body.name
//     }
//     if (req.body.subscribedToChannel != null) {
//         res.subscriber.subscribedToChannel = req.body.subscribedToChannel
//     } 
//     try {
//         const updatedSubscriber = await res.subscriber.save()
//         res.json(updatedSubscriber)
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }
// })

// //deleting one
// router.delete('/:id', getSubscriber, async (req, res) => {
//     try {
//         await res.subscriber.remove()
//         res.json({ message: 'Deleted Subscriber'})
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
   
// })

module.exports = router
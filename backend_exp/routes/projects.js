const express = require('express')
const Project = require('../models/project')
const User = require('../models/user')
const Expense = require('../models/expense')
const Category = require('../models/category')
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

//Getting all expenses
router.get('/expense', async (req, res) => {
    try {
        const expenses = await Expense.find()
        res.json(expenses)
    } catch (err) {
        res.status(500).json({message: err.message})
    }

})

//Getting all category
router.get('/category', async (req, res) => {
    try {
        const categories = await Category.find()
        res.json(categories)
    } catch (err) {
        res.status(500).json({message: err.message})
    }

})

//Getting all user
router.get('/user', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({message: err.message})
    }

})

//Creating expense
router.post('/', async (req, res) => {
    const expenses = new Expense({
        id: req.body.id,
        project_id: req.body.project,
        category_id: req.body.category,
        name: req.body.name,
        description: req.body.description,
        amount: req.body.amount,
        created_at: new Date(req.body.created_at),
        created_by: req.body.created_by,
        updated_at: new Date(req.body.updated_at),
        updated_by: req.body.updated_by
    })

    try {
        const newExpense = await expenses.save()
        res.status(201).json(newExpense)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//updating one
router.put('/expense/:id', async (req, res) => {
    let expense
  
    try {
      expense = await Expense.findById(req.params.id)
      expense.name = req.body.name
      expense.description = req.body.description
      expense.amount = req.body.amount
      expense.updated_at = new Date(req.body.updated_at)
      expense.updated_by = req.body.updated_by
      await expense.save()
      res.redirect(`/expense/${expense.id}`)
    } catch {
      if (expense != null) {
        renderEditPage(res, expense, true)
      } else {
        redirect('/')
      }
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
const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: false
    },
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Project'
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    updated_at: {
        type: Date,
        required: true
    },
    updated_by: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})


module.exports = mongoose.model('expense', expenseSchema)


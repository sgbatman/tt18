const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: false
    },
    project_id: {
        type: Number,
        required: false,
    },
    category_id: {
        type: Number,
        required: false,
    },
    name: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    amount: {
        type: Number,
        required: false
    },
    created_at: {
        type: Date,
        required: false
    },
    created_by: {
        type: String,
        required: false,
    },
    updated_at: {
        type: Date,
        required: false
    },
    updated_by: {
        type: String,
        required: false,
    }
})


module.exports = mongoose.model('expense', expenseSchema)

